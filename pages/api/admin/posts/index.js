import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DATABASE_SSL === 'true',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  try {
    const connection = await pool.getConnection();

    // GET: Fetch all posts (with pagination and search)
    if (req.method === 'GET') {
      const { page = 1, limit = 10, search = '' } = req.query;
      const offset = (page - 1) * limit;

      let whereClause = 'WHERE published = 1';
      let params = [];

      if (search) {
        whereClause += ' AND (title LIKE ? OR content LIKE ?)';
        params.push(`%${search}%`, `%${search}%`);
      }

      // Get total count
      const [countResult] = await connection.execute(
        `SELECT COUNT(*) as total FROM blog_posts ${whereClause}`,
        params
      );

      // Get paginated results
      const [posts] = await connection.execute(
        `SELECT * FROM blog_posts ${whereClause} 
         ORDER BY created_at DESC LIMIT ? OFFSET ?`,
        [...params, parseInt(limit), parseInt(offset)]
      );

      await connection.release();

      const totalPosts = countResult[0].total;
      const totalPages = Math.ceil(totalPosts / limit);

      return res.status(200).json({
        posts,
        pagination: {
          currentPage: parseInt(page),
          totalPages,
          totalPosts,
          hasMore: page < totalPages,
        },
      });
    }

    // POST: Create a new post
    if (req.method === 'POST') {
      const {
        title,
        slug,
        content,
        excerpt,
        category_id,
        category,
        author,
        author_bio,
        featured_image,
        published,
        scheduled_for, // ISO 8601 format
        status,
      } = req.body;

      // Convert ISO 8601 datetime to MySQL datetime format
      const formattedScheduledFor = scheduled_for
        ? new Date(scheduled_for).toISOString().slice(0, 19).replace('T', ' ')
        : null;

      // Insert the post into the database
      const [result] = await connection.execute(
        `INSERT INTO blog_posts 
         (title, slug, content, excerpt, category_id, category, author, author_bio, featured_image, published, scheduled_for, status) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ? , ?)`,
        [
          title,
          slug,
          content,
          excerpt,
          category_id,
          category,
          author,
          author_bio,
          featured_image,
          published,
          formattedScheduledFor,
          status,
        ]
      );

      await connection.release();

      return res.status(201).json({ id: result.insertId });
    }

    // PUT: Update an existing post
    if (req.method === 'PUT') {
      const {
        id,
        title,
        slug,
        content,
        excerpt,
        category_id,
        author,
        featured_image,
        published,
        scheduled_for, // ISO 8601 format
        status,
      } = req.body;

      // Convert ISO 8601 datetime to MySQL datetime format
      const formattedScheduledFor = scheduled_for
        ? new Date(scheduled_for).toISOString().slice(0, 19).replace('T', ' ')
        : null;

      // Update the post in the database
      await connection.execute(
        `UPDATE blog_posts 
         SET title = ?, slug = ?, content = ?, excerpt = ?, category_id = ?, author = ?, featured_image = ?, published = ?, scheduled_for = ?, status = ?
         WHERE id = ?`,
        [
          title,
          slug,
          content,
          excerpt,
          category_id,
          author,
          featured_image,
          published,
          formattedScheduledFor,
          status,
          id,
        ]
      );

      await connection.release();

      return res.status(200).json({ message: 'Post updated successfully' });
    }

    // DELETE: Delete a post
    if (req.method === 'DELETE') {
      const { id } = req.body;

      await connection.execute('DELETE FROM blog_posts WHERE id = ?', [id]);

      await connection.release();

      return res.status(200).json({ message: 'Post deleted successfully' });
    }

    // Handle unsupported methods
    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Database Error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  } finally {
    await pool.end();
  }
}