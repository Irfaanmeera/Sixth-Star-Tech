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
      // Insert data into the database
      const connection = await pool.getConnection();
      try {
        await connection.query(
          `INSERT INTO fleet_form_submissions 
          (name, phone, companyname, companyurl, companyemail, desg, otherdesg, size, type, typeother, features, otherfeatures, currentfleet, pageUrl, checkbox, consent, submission_date) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            data.name,
            data.phone,
            data.companyname,
            data.companyurl,
            data.companyemail,
            data.desg,
            data.otherdesg,
            data.size,
            data.type,
            data.othertype,
            data.features,
            data.otherfeatures,
            data.currentfleet,
            data.pageUrl,
            data.checkbox,
            data.consent === 'on' ? 1 : 0, // Convert checkbox value to boolean
            new Date()
          ]
        );
      } finally {
        connection.release();
      }
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Failed to save form data to the database' });
    }

    try {
      // Send email
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Fleet Management Software Enquiry Form',
        text: data.message,
        html: `
          <h1>Fleet Management Software Enquiry Form</h1>
          <p>Name: ${data.name}</p>
          <p>Phone: ${data.phone}</p>
          <p>Company Name: ${data.companyname}</p>
          <p>Company URL: ${data.companyurl}</p>
          <p>Company Email: ${data.companyemail}</p>
          <p>Designation: ${data.desg}</p>
          <p>Other Designation: ${data.otherdesg}</p>
          <p>Size of Fleet: ${data.size}</p>
          <p>Type of Fleet: ${data.type}</p>
          <p>Other Type of Fleet: ${data.othertype}</p>
          <p>Features Needed: ${data.features}</p>
          <p>Other Features Needed: ${data.otherfeatures}</p>
          <p>Current Fleet: ${data.currentfleet}</p>
          <p>Page URL: ${data.pageUrl}</p>
        `,
      });

      console.log('Email sent successfully.');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}