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
           <h1>Servers Enquiry Form</h1>
          <p>Name: ${data.name}</p>
          <p>Phone: ${data.phone}</p>
          <p>Email: ${data.email}</p>
          <p>Company: ${data.company}</p>
          <p>Company Size: ${data.companySize}</p>
          <p>Ram: ${data.ram}</p>
          <p>Os: ${data.os}</p>
          <p>Storage: ${data.storage}</p>
          <p>Core: ${data.core}</p>
          <p>SLA: ${data.sla}</p>
          <p>Control Panel: ${data.controlpanel}</p>
          <p>Page URL: ${data.pageUrl}</p>
    `;

    await transporter.sendMail({
      ...mailOptions,
      subject: 'Servers Enquiry Form Submission',
      html: messageHtml,
    });

    // Insert data into the database
    const query = `
      INSERT INTO server_form_submissions (name, phone, email, company, companySize, ram, os, storage, core, sla, controlpanel, checkbox, pageUrl, consent, submission_date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
  data.name,
  data.phone,
  data.email,
  data.company,
  data.companySize,
  data.ram,
  data.os,
  data.storage,
  data.core,
  data.sla,
  data.controlpanel,
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