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
             <h1>Mail Services Enquiry Form</h1>
          <p>Name: ${data.name}</p>
          <p>Phone: ${data.phone}</p>
          <p>Email: ${data.email}</p>
          <p>Company: ${data.company}</p>
          <p>URL: ${data.url}</p>
          <p>Designation: ${data.desg}</p>
          <p>Other Designation: ${data.otherDesg}</p>
          <p>Current Email: ${data.currentEmail}</p>
          <p>Other Current Email: ${data.othercurrentEmail}</p>
          <p>Email Services gonna opt: ${data.emailopt}</p>
          <p>Preferred Contact Method: ${data.preferredContact}</p>
          <p>Company Size: ${data.companySize}</p>
          <p>Ram: ${data.ram}</p>
          <p>Os: ${data.os}</p>
          <p>Storage: ${data.storage}</p>
          <p>Page URL: ${data.pageUrl}</p>
    `;

    await transporter.sendMail({
      ...mailOptions,
      subject: 'Mail Services Form Submission',
      html: messageHtml,
    });

    // Insert data into the database
    const query = `
      INSERT INTO mailservices_form_submissions ( name, phone, email, company, url, desg, otherdesg, currentemail, othercurrentemail, emailopt, preferredcontact, companysize, ram, os, storage, checkbox, pageUrl, consent, submission_date)
      VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      data.name,
      data.phone,
      data.email,
      data.company,
      data.url,
      data.desg,
      data.otherDesg,
      data.currentEmail,
      data.othercurrentEmail,
      data.emailopt,
      data.preferredContact,
      data.companySize,
      data.ram,
      data.os,
      data.storage,
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