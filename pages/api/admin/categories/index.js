import mysql from 'mysql2/promise';
import slugify from 'slugify';

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'PUT' && req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true',
    });

    if (req.method === 'POST') {
      const { name, slug, img } = req.body;
      const generatedSlug = slug || slugify(name, { lower: true });

      const [result] = await connection.execute(
        'INSERT INTO blog_categories (name, slug, img) VALUES (?, ?, ?)',
        [name, generatedSlug, img || 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1742211712/check-domain-authority_gjmojs.png']
      );

      await connection.end();
      return res.status(201).json({ id: result.insertId, name, slug: generatedSlug, img });
    }

    if (req.method === 'PUT') {
      const { id, name, slug, img } = req.body;
      const generatedSlug = slug || slugify(name, { lower: true });

      const [result] = await connection.execute(
        'UPDATE blog_categories SET name = ?, slug = ?, img = ? WHERE id = ?',
        [name, generatedSlug, img, id]
      );

      await connection.end();
      return res.status(200).json({ id, name, slug: generatedSlug, img });
    }

    if (req.method === 'DELETE') {
      const { id } = req.body;

      // Check if the category is being referenced by any posts
      const [posts] = await connection.execute(
        'SELECT id FROM blog_posts WHERE category_id = ?',
        [id]
      );

      if (posts.length > 0) {
        return res.status(400).json({ message: 'Cannot delete category: it is being used by one or more posts.' });
      }

      await connection.execute('DELETE FROM blog_categories WHERE id = ?', [id]);

      await connection.end();
      return res.status(200).json({ message: 'Category deleted successfully' });
    }
  } catch (error) {
    console.error('Error handling category:', error);
    return res.status(500).json({ message: 'Internal server error' });
  } finally {
    if (connection) await connection.end();
  }
}