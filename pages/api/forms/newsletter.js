import { transporter, mailOptions } from '../../../config/nodemailer';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const data = req.body;

  try {
    // Step 1: Check if the email already exists in the database
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query(
        `SELECT COUNT(*) AS count FROM newsletter_form_submissions WHERE email = ?`,
        [data.email]
      );

      if (rows[0].count > 0) {
        return res.status(400).json({ message: 'Already Subscribed' }); // Consistent JSON response
      }
    } finally {
      connection.release();
    }

    // Step 2: Send email notification
    const messageHtml = `
      <h1>Newsletter Form</h1>
      <p><strong>Email:</strong> ${data.email}</p>
    `;
    await transporter.sendMail({
      ...mailOptions,
      subject: 'News Letter Subscription',
      html: messageHtml,
    });

    // Step 3: Insert data into the database
    const query = `
      INSERT INTO newsletter_form_submissions (email, submission_date)
      VALUES (?, ?)
    `;
    const values = [
      data.email,
      new Date(),
    ];
    await pool.query(query, values);

    res.status(200).json({ message: 'Subscription successful' });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Failed to send message and save data' });
  }
}