// pages/api/posts/categories.js

import mysql from 'mysql2/promise';

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

export default async function handler(req, res) {
  try {
    // Step 1: Fetch all categories
    const [categories] = await pool.execute(
      `SELECT id, name FROM blog_categories`
    );

    const categorizedPosts = {};

    // Step 2: Fetch 5 latest posts per category using category_id
    for (const category of categories) {
      const [posts] = await pool.execute(
        `SELECT id, title, slug, excerpt, featured_image, created_at , category
         FROM blog_posts 
         WHERE category_id = ?
         ORDER BY created_at DESC 
         LIMIT 5`,
        [category.id]
      );

      // Convert category name to lowercase slug-style key
      categorizedPosts[category.name.toLowerCase().replace(/\s+/g, '-')] = {
        category_id: category.id,
        category_name: category.name,
        posts,
      };
    }

    res.status(200).json(categorizedPosts);
  } catch (error) {
    console.error('Error fetching categorized posts:', error.message);
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}
