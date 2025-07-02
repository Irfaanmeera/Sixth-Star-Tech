import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const { page = 1, limit = 12 } = req.query;
  const offset = (page - 1) * limit;

  try {
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

    const connection = await pool.getConnection();

    const [posts] = await connection.execute(`
      SELECT id, title, slug, content, category_id, created_at , featured_image , excerpt
      FROM blog_posts
      WHERE category_id = 11
      LIMIT ? OFFSET ?;
    `, [parseInt(limit), parseInt(offset)]);

    const [totalPosts] = await connection.execute(`
      SELECT COUNT(*) as total
      FROM blog_posts
      WHERE category_id = 11;
    `);

    connection.release();

    res.status(200).json({
      posts,
      totalPosts: totalPosts[0].total,
      totalPages: Math.ceil(totalPosts[0].total / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}