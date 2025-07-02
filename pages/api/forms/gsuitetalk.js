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
  if (req.method === 'POST') {
    const data = req.body; 


    try {
      // Step 1: Insert form submission data into the database
      const connection = await pool.getConnection();
      try {
        await connection.query(
          `INSERT INTO gsuitetalk_form_submissions (name, email, phone) 
          VALUES (?, ?, ? )`,
          [
            data.name,
            data.email,
            data.phone,
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
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Contact form',
        text: data.message,
        html: `
          <h1>Gsuite Talk Form</h1>
          <p>Name: ${data.name}</p>
          <p>Email: ${data.email}</p>
          <p>Phone: ${data.phone}</p>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}