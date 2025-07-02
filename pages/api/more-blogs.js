// pages/api/categories.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
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

    const [rows] = await connection.execute(`
      SELECT 
      c.id,
      c.name,
      c.slug,
      c.img,
      COUNT(p.id) AS posts_count
    FROM blog_categories c
    LEFT JOIN blog_posts p ON p.category_id = c.id
    GROUP BY c.id, c.name, c.slug , c.img
    ORDER BY c.name ASC;
    `);

    // Add default image or assign your own logic
    const withImages = rows.map((row) => ({
      ...row,
    }));

    res.status(200).json(withImages);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Error fetching categories' });
  } finally {
    if (connection) await connection.end();
  }
}