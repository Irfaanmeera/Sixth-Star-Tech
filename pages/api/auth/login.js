import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';
import { SignJWT } from 'jose';

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username = '', password = '' } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    const [users] = await pool.execute(
      'SELECT id, username, password, role FROM admin_users WHERE username = ?',
      [username.trim()]
    );

    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = await new SignJWT({ 
      userId: user.id, 
      username: user.username, 
      role: user.role 
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('8h')
      .sign(secretKey);

    res.setHeader(
      'Set-Cookie',
      serialize('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 8 * 60 * 60,
      })
    );

    // Role-specific redirects
    const roleRedirectMap = {
      admin: '/admin/dashboard',
      editor: '/admin/posts',
      sales: '/admin/forms'
    };

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const redirectUrl = roleRedirectMap[user.role] || '/admin/dashboard';

    return res.status(200).json({
      success: true,
      redirectUrl: `${baseUrl}${redirectUrl}`,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export const config = {
  runtime: 'nodejs',
};