export default async function handler(req, res) {
  const mysql = require('mysql2/promise');
  let connection;
  

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT || 3306,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : undefined,
    });

    const { id } = req.query;

    if (req.method === 'PUT') {
      const { title, excerpt, content, category_id, published, tags } = req.body;

      // Update post
      const [result] = await connection.execute(
        'UPDATE blog_posts SET title = ?, excerpt = ?, content = ?, category_id = ?, published = ? WHERE id = ?',
        [title, excerpt, content, category_id, published, id] // Added `excerpt` and removed `category`
      );

      // Update tags if provided
      if (tags && tags.length > 0) {
        // Clear old tags
        await connection.execute('DELETE FROM blog_post_tags WHERE post_id = ?', [id]);

        // Insert new tags
        const tagValues = tags.map((tagId) => [id, tagId]);
        await connection.query('INSERT INTO blog_post_tags (post_id, tag_id) VALUES ?', [tagValues]);
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Post not found or no changes made' });
      }

      return res.status(200).json({ message: 'Post updated successfully' });
    }

    if (req.method === 'DELETE') {
      // Delete associated tags first
      await connection.execute('DELETE FROM blog_post_tags WHERE post_id = ?', [id]);

      // Delete the post
      const [result] = await connection.execute('DELETE FROM blog_posts WHERE id = ?', [id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).json({ message: 'Post deleted successfully' });
    }

    // If method is not allowed
    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  } finally {
    if (connection) await connection.end(); // Ensure connection is always closed
  }
}