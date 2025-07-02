import { transporter, mailOptions } from '../../../config/nodemailer';
import mysql from 'mysql2/promise';

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
          `INSERT INTO crm_form_submissions 
          (name, phone, companyname, companyurl, companyemail, users, type, typeother, requirement, currentsystem, deployment, pageUrl, checkbox, consent) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            data.name,
            data.phone,
            data.companyname,
            data.companyurl,
            data.companyemail,
            data.users,
            data.type,
            data.typeother || null,
            data.requirement,
            data.currentsystem,
            data.deployment,
            data.pageUrl,
            data.checkbox,
            data.checkbox ? 1 : 0
          ]
        );
      } finally {
        connection.release();
      }

      // Build email content dynamically
      const emailFields = [
        { label: 'Name', value: data.name },
        { label: 'Phone', value: data.phone },
        { label: 'Company Name', value: data.companyname },
        { label: 'Company URL', value: data.companyurl },
        { label: 'Company Email', value: data.companyemail },
        { label: 'Number of Users', value: data.users },
        { label: 'Industry Type', value: data.type },
        ...(data.type === 'Other' && data.typeother ? [{ label: 'Other Industry Type', value: data.typeother }] : []),
        { label: 'CRM Requirements', value: data.requirement },
        { label: 'Preferred Deployment', value: data.deployment },
        { label: 'Current System', value: data.currentsystem },
        { label: 'Consent Given', value: data.checkbox ? 'Yes' : 'No' },
        { label: 'Page URL', value: data.pageUrl }
      ];

      const emailHtml = `
        <h1>CRM Enquiry Form</h1>
        ${emailFields.map(field => `
          <p><strong>${field.label}:</strong> ${field.value}</p>
        `).join('')}
      `;

      await transporter.sendMail({
        ...mailOptions,
        subject: 'CRM Enquiry Form',
        text: 'Please view this email in HTML format',
        html: emailHtml
      });

      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}