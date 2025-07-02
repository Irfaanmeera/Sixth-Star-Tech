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
  if (req.method === 'POST') {
    const data = req.body;

    try {
      const connection = await pool.getConnection();
      try {
        await connection.query(
          `INSERT INTO app_form_submissions (
    name,
    phone,
    companyname,
    companyurl,
    desg,
    otherdesg,
    type,
    othertype,
    preferredplatform,
    currentapp,
    checkbox,
    pageUrl,
    consent
)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
`,
          [
            data.name,
            data.phone,
            data.companyname,
            data.companyurl,
            data.desg,
            data.otherdesg || null,,
            data.type,
            data.othertype || null,,
            data.preferredplatform,
            data.currentapp,
            data.checkbox,
            data.pageUrl,
            data.consent === 'on' ? 1 : 0 // Convert checkbox value to boolean
          ]
        );
      } finally {
        connection.release();
      }
  const emailFields = [
        { label: 'Name', value: data.name },
        { label: 'Phone', value: data.phone },
        { label: 'Company Name', value: data.companyname },
        { label: 'Company URL', value: data.companyurl },
        { label: 'Designation', value: data.desg },
        ...(data.desg === 'Other' && data.otherdesg ? [{ label: 'Other Designation', value: data.otherdesg }] : []),
        { label: 'Type of Mobile App Needed', value: data.type },
        ...(data.type === 'Other' && data.othertype ? [{ label: 'Other Type', value: data.othertype }] : []),
        { label: 'Preferred Platform', value: data.preferredplatform },
        { label: 'Current App Status', value: data.currentapp },
        { label: 'Consent Given', value: data.checkbox ? 'Yes' : 'No' },
        { label: 'Page URL', value: data.pageUrl }
      ];

      const emailHtml = `
        <h1>APP Development Enquiry Form</h1>
        ${emailFields.map(field => `
          <p><strong>${field.label}:</strong> ${field.value}</p>
        `).join('')}
      `;
      // Send email first
      await transporter.sendMail({
        ...mailOptions,
        subject: 'APP Development Enquiry Form',
        text: data.message,
        html: emailHtml,
      });
      console.log('Email sent successfully.');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      if (error.code === 'EAUTH') {
        res.status(500).json({ message: 'Email authentication failed' });
      } else {
        res.status(500).json({ message: 'Internal Server Error' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
