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
        `INSERT INTO officealt_form_submissions (name, email, phone, country, company, message, submission_date ) 
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          data.name,
          data.email,
          data.phone,
          data.country,
          data.company,
          data.message,
          new Date(),
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
      subject: 'Office Alt Form Submission',
      text: data.message,
      html: `
        <h1>office Alternative Form</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (emailError) {
    console.error('Error sending email:', emailError);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}