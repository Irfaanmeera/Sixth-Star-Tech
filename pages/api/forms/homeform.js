import { transporter, mailOptions } from '../../../config/nodemailer';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, pageUrl, service, consent } = req.body;

    if (!name || !email || !consent) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    try {
      const connection = await pool.getConnection();
      try {
        await connection.query(
          `INSERT INTO home_form_submissions 
          (name, email, phone, pageUrl, service, consent) 
          VALUES (?, ?, ?, ?, ?, ?)`,
          [name, email, phone, pageUrl, service, consent ? 1 : 0]
        );
      } finally {
        connection.release();
      }

      const emailHtml = `
        <h1>New Home Page Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Page URL:</strong> ${pageUrl}</p>
        <p><strong>Consent Given:</strong> ${consent ? 'Yes' : 'No'}</p>
        <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
      `;

      await transporter.sendMail({
        ...mailOptions,
        subject: 'New Home Page Form Submission',
        text: 'Please view this email in HTML format',
        html: emailHtml
      });

      return res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Database or email error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}