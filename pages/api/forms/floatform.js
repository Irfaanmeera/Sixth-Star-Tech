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
    const { recaptchaToken, ...data } = req.body;

    // Step 1: Verify reCAPTCHA
    try {
      const recaptchaResponse = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=6LeF84YqAAAAAAwzEUVKQogoRzUD3O3w457gHxtU&response=${recaptchaToken}`,
        }
      );

      const recaptchaResult = await recaptchaResponse.json();

      if (!recaptchaResult.success) {
        console.error('reCAPTCHA Error:', recaptchaResult['error-codes']);
        return res.status(400).json({ message: 'reCAPTCHA verification failed' });
      }
    } catch (recaptchaError) {
      console.error('Error verifying reCAPTCHA:', recaptchaError);
      return res.status(500).json({ message: 'Failed to verify reCAPTCHA' });
    }

    // Step 2: Insert or Update Database Record
    try {
      const connection = await pool.getConnection();
      try {
        // Assuming you're updating a record based on a unique email
        const query = `
          INSERT INTO float_form_submissions (name, phone, req, others)
          VALUES (?, ?, ?, ? )
          ON DUPLICATE KEY UPDATE
          name = VALUES(name),
          phone = VALUES(phone),
          req = VALUES(req),
          others = VALUES(others);
        `;
        await connection.query(query, [
          data.name,
          data.phone,
          data.req,
          data.others,
        ]);
      } finally {
        connection.release();
      }
    } catch (dbError) {
      console.error('Database Error:', dbError);
      return res.status(500).json({ message: 'Failed to update database record' });
    }

    // Step 3: Send Email
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Floating Contact Form',
        text: data.message,
        html: `
          <h1>Contact Form Submission</h1>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Requirement:</strong> ${data.req}</p>
          <p><strong>Other Requirements:</strong> ${data.others}</p>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully and database updated' });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      return res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}