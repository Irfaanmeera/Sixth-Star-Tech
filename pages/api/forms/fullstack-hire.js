// api/forms/fullstack-hire.js
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
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, phone, email, projectDescription } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Name, email, and phone are required' });
    }

    const connection = await pool.getConnection();
    
    try {
      // Insert into database
      const [result] = await connection.query(
        `INSERT INTO fullstack_hire_requests 
        (name, phone, email, project_description, submitted_at) 
        VALUES (?, ?, ?, ?, ?)`,
        [name, phone, email, projectDescription, new Date()]
      );

      // Send email notification
      const mailOpts = {
        ...mailOptions,
        subject: 'New Full Stack Developer Hire Request',
        html: `
          <h1>New Full Stack Developer Hire Request</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Project Description:</strong></p>
          <p>${projectDescription || 'Not provided'}</p>
          <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
        `
      };

      await transporter.sendMail(mailOpts);

      return res.status(200).json({ 
        message: 'Request submitted successfully',
        id: result.insertId 
      });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error('Error processing fullstack hire request:', error);
    return res.status(500).json({ 
      message: 'Internal Server Error', 
      error: error.message 
    });
  }
}