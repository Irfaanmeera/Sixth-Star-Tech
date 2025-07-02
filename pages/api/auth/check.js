import { parse } from 'cookie';
import { jwtVerify } from 'jose';

// Create secret key once (best practice)
const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed',
      allowedMethods: ['GET']
    });
  }

  try {
    // Parse cookies securely
    const cookies = parse(req.headers.cookie || '');
    const token = cookies.auth_token;

    if (!token) {
      return res.status(401).json({ 
        success: false,
        message: 'Authentication required',
        authenticated: false
      });
    }

    // Verify token with proper error handling
    let payload;
    try {
      const result = await jwtVerify(token, secretKey);
      payload = result.payload;
    } catch (error) {
      console.error('Token verification failed:', error.name);
      
      // Different error messages based on verification failure type
      let message = 'Invalid token';
      if (error.name === 'JWTExpired') {
        message = 'Session expired. Please login again.';
      }

      return res.status(401).json({ 
        success: false,
        message,
        authenticated: false
      });
    }

    // Validate payload structure
    if (!payload.userId || !payload.username || !payload.role) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token payload',
        authenticated: false
      });
    }

    // Successful authentication
    return res.status(200).json({
      success: true,
      authenticated: true,
      user: {
        id: payload.userId,
        username: payload.username,
        role: payload.role,
        // Add any other non-sensitive user data needed by the frontend
      },
      // Include token expiration info if needed
      expiresAt: payload.exp ? new Date(payload.exp * 1000).toISOString() : null
    });

  } catch (error) {
    console.error('Auth check error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error during authentication check',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

export const config = {
  runtime: 'nodejs',
};