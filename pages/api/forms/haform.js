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
      <h2>High Availability Enquiry Form</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Company Name:</strong> ${data.companyname}</p>
      <p><strong>Company URL:</strong> ${data.companyurl}</p>
      <p><strong>Company Email:</strong> ${data.companyemail}</p>
      <p><strong>Users:</strong> ${data.users}</p>
      <p><strong>Designation:</strong> ${data.desg} ${data.otherdesg ? `(${data.otherdesg})` : ''}</p>
      <p><strong>Service:</strong> ${data.service} ${data.otherservice ? `(${data.otherservice})` : ''}</p>
      <p><strong>Environment:</strong> ${data.envr} ${data.otherenvr ? `(${data.otherenvr})` : ''}</p>
      <p><strong>Page URL:</strong> ${data.pageUrl}</p>
    `;

    await transporter.sendMail({
      ...mailOptions,
      subject: 'HA Enquiry Form Submission',
      html: messageHtml,
    });

    // Insert data into the database
    const query = `
      INSERT INTO ha_form_submissions (name, phone, companyname, companyurl, companyemail, users, desg, otherdesg, service, otherservice, envr, otherenvr, checkbox, pageUrl, consent, submission_date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?, ?, ?)
    `;
    const values = [
  data.name,
  data.phone,
  data.companyname,
  data.companyurl,
  data.companyemail,
  data.users,
  data.desg,
  data.otherdesg,
  data.service,
  data.otherservice,
  data.envr,
  data.otherenvr,
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