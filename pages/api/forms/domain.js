import { transporter, mailOptions } from '../../../config/nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { recaptchaToken, ...data } = req.body;

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;

    try {
      const response = await fetch(verificationUrl, { method: 'POST' });
      const captchaValidation = await response.json();

      if (!captchaValidation.success) {
        return res.status(400).json({ message: 'reCAPTCHA validation failed' });
      }

      await transporter.sendMail({
        ...mailOptions,
        subject: 'Contact form',
        text: data.message,
        html: `
          <h1>Domain Contact Form</h1>
          <p>Name: ${data.name}</p>
          <p>Email: ${data.email}</p>
          <p>Phone: ${data.phone}</p>
          <p>Country: ${data.country}</p>
          <p>Company: ${data.company}</p>
          <p>Message: ${data.message}</p>
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
