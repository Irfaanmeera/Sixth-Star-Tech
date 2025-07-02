import { transporter, mailOptions } from '../../../config/nodemailer';
import mysql from 'mysql2/promise';

// Create a database connection pool
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
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const data = req.body;

  try {
    // Step 1: Insert form submission data into the database
    const connection = await pool.getConnection();
    try {
      await connection.query(
        `INSERT INTO quote_form_submissions (name, email, phone, processer, memory, storage, os, sla, units, website, message, submission_date ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`,
        [
         data.name,
         data.email,
         data.phone,
         data.processer,
         data.memory,
         data.storage,
         data.os,
         data.sla,
         data.units,
         data.website,
         data.message,
         new Date()
        ]
      );
    } finally {
      connection.release();
    }
  } catch (dbError) {
    console.error('Database error:', dbError);
    return res.status(500).json({ message: 'Failed to store form data' });
  }

  try {
    // Step 2: Send email notification
    await transporter.sendMail({
      ...mailOptions,
      subject: 'Request Quote Form Submission',
      text: data.message,
      html: `
                <h1>Request Quote Form</h1>
          <p>Name: ${data.name || 'N/A'}</p>
          <p>Email: ${data.email || 'N/A'}</p>
          <p>Phone: ${data.phone || 'N/A'}</p>
          <p>Processor: ${data.processer || 'N/A'}</p>
          <p>Memory: ${data.memory || 'N/A'}</p>
          <p>Storage: ${data.storage || 'N/A'}</p>
          <p>Operating System: ${data.os || 'N/A'}</p>
          <p>Service Level Agreement: ${data.sla || 'N/A'}</p>
          <p>Unit of Server: ${data.units || 'N/A'}</p>
          <p>Website/URL: ${data.website || 'N/A'}</p>
          <p>Message: ${data.message || 'N/A'}</p>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (emailError) {
    console.error('Error sending email:', emailError);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}