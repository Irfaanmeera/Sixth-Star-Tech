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
  <h1>SSL Enquiry Form</h1>
          <p>Company Name: ${data.companyname}</p>
          <p>Company URL: ${data.companyurl}</p>
          <p>Domain Name: ${data.domainname}</p>
          <p>Designation: ${data.desg}</p>
          <p>Other Designation: ${data.otherDesg}</p>
          <p>Current SSL: ${data.currentssl}</p>
          <p>Other Current SSL: ${data.othercurrentssl}</p>
          <p>Purpose of SSL: ${data.sslopt}</p>
          <p>Other Purpose of SSL: ${data.othersslopt}</p>
          <p>Preferred Contact Method: ${data.preferredContact}</p>
          <p>Page URL: ${data.pageUrl}</p>
    `;

    await transporter.sendMail({
      ...mailOptions,
      subject: 'SSL Enquiry Form',
      html: messageHtml,
    });

    // Insert data into the database
    const query = `
      INSERT INTO ssl_form_submissions (companyname, companyurl, domainname, desg, otherDesg, currentssl, othercurrentssl, sslopt, othersslopt, preferredContact, pageUrl, checkbox, consent, submission_date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
  data.companyname,
  data.companyurl,
  data.domainname,
  data.desg,
  data.otherDesg,
  data.currentssl,
  data.othercurrentssl,
  data.sslopt,
  data.othersslopt,
  data.preferredContact,
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