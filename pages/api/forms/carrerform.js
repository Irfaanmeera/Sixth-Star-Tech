import multer from 'multer';
import fs from 'fs';
import { transporter, mailOptions } from '../../../config/carrernodemailer';
import mysql from 'mysql2/promise';

// Configure multer for temporary storage
const upload = multer({ dest: 'tmp/' });

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parser
  },
};

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
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  upload.single('cv')(req, res, async (err) => {
    if (err) {
      console.error('File upload error:', err);
      return res.status(500).json({ message: 'File upload error', error: err.message });
    }

    const { name, phone, position, email, message } = req.body;
    const cvFile = req.file;

    if (!cvFile) {
      return res.status(400).json({ message: 'No CV file uploaded' });
    }

    try {
      // Check if application with same email and position already exists
      const connection = await pool.getConnection();
      try {
        const [existingApps] = await connection.query(
          `SELECT * FROM career_form_submissions 
          WHERE email = ? AND position = ?`,
          [email, position]
        );

        if (existingApps.length > 0) {
          // Clean up the temporary file if it exists
          if (cvFile) {
            fs.unlinkSync(cvFile.path);
          }
          return res.status(400).json({ 
            message: 'You have already applied for this position with this email address' 
          });
        }

        // If not exists, proceed with insertion
        const fileContent = fs.readFileSync(cvFile.path);

        await connection.query(
          `INSERT INTO career_form_submissions (name, email, phone, position, message, submitted_at)
          VALUES (?, ?, ?, ?, ?, ?)`,
          [name, email, phone, position, message, new Date()]
        );

        // Step 2: Send Email Notification
        const mailOpts = {
          ...mailOptions,
          subject: 'Career Form Submission',
          text: message,
          html: `
            <h1>Career Form</h1>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Position: ${position}</p>
            <p>Message: ${message}</p>
          `,
          attachments: [
            {
              filename: cvFile.originalname,
              content: fileContent,
              contentType: cvFile.mimetype,
            },
          ],
        };

        await transporter.sendMail(mailOpts);

        // Clean up the temporary file
        fs.unlinkSync(cvFile.path);

        res.status(200).json({ message: 'Application submitted successfully' });
      } finally {
        connection.release();
      }
    } catch (error) {
      console.error('Error processing request:', error);
      // Clean up the temporary file if it exists
      if (cvFile) {
        fs.unlinkSync(cvFile.path);
      }
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });
}