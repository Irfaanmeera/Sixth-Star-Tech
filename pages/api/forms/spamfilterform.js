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
  <h1>Spam Filter Enquiry Form</h1>
          <p>Name: ${data.name}</p>
          <p>Phone: ${data.phone}</p>
          <p>Email: ${data.email}</p>
          <p>Company: ${data.company}</p>
          <p>URL: ${data.url}</p>
          <p>Current Email: ${data.currentEmail}</p>
          <p>Other Current Email: ${data.othercurrentEmail}</p>
          <p>Spam Filter: ${data.spamfilter}</p>
         <p>Page URL: ${data.pageUrl}</p>
    `;

    await transporter.sendMail({
      ...mailOptions,
      subject: 'Spam Filter Enquiry Form',
      html: messageHtml,
    });

    // Insert data into the database
    const query = `
      INSERT INTO spamfilter_form_submissions ( name, phone, email, company, url, currentEmail, othercurrentEmail, spamfilter, pageUrl, checkbox, consent, submission_date)
      VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
    `;
    const values = [
  data.name,
  data.phone, 
  data.email,
  data.company,
  data.url,
  data.currentEmail,
  data.othercurrentEmail,
  data.spamfilter,
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