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
  queueLimit: 0
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const data = req.body;

  try {
    const messageHtml = `
 <h1>Web Development Enquiry Form</h1>
          <p>Name: ${data.name}</p> 
          <p>Phone: ${data.phone}</p>
          <p>Company Name: ${data.companyname}</p>
          <p>Company URL: ${data.companyurl}</p>
          <p>Type of Website Needed: ${data.type}</p>
          <p>Technology Preference: ${data.tech}</p>
          <p>Current Website: ${data.currentwebsite}</p>
          <p>Page URL: ${data.pageUrl}</p>
    `;

    await transporter.sendMail({
      ...mailOptions,
      subject: 'Web Development Enquiry Form',
      html: messageHtml,
    });

    // Insert data into the database
    const query = `
      INSERT INTO Webdev_form_submissions ( name, phone, companyname, companyurl, type, tech, currentwebsite, checkbox, pageUrl, consent, submission_date)
      VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
    `;
    const values = [
  data.name,
  data.phone,
  data.companyname,
  data.companyurl,
  data.type,
  data.tech,
  data.currentwebsite,
  data.checkbox,   // Converts "on" to 1, otherwise 0
  data.pageUrl,
  data.consent === "on" ? 1 : 0,    // Converts "on" to 1, otherwise 0
  new Date()
    ];

    await pool.query(query, values);

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Failed to send message and save data' });
  }
}