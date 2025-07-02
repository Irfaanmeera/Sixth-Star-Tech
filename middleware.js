import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

async function verifyToken(token) {
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (error) {
        return null;
    }
}

export async function middleware(request) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get('auth_token')?.value;
    const isLoginPage = path === '/admin/login';
    const user = token ? await verifyToken(token) : null;

    // Role-specific default pages
    const roleDefaultPages = {
        admin: '/admin/dashboard',
        editor: '/admin/posts',
        sales: '/admin/forms'
    };

    // Skip non-admin routes
    if (!path.startsWith('/admin')) {
        return NextResponse.next();
    }

    // Redirect authenticated users away from login page
    if (user && isLoginPage) {
        const defaultPage = roleDefaultPages[user.role] || '/admin/dashboard';
        return NextResponse.redirect(new URL(defaultPage, request.url));
    }

    // Redirect unauthenticated users to login
    if (!user && !isLoginPage) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Role-based access control
    if (user && !isLoginPage) {
        const allowedRoutes = {
            admin: ['/admin/dashboard', '/admin/posts', '/admin/forms', '/admin/categories','/admin/metadata'],
            editor: ['/admin/posts'], // Editors only need posts access
            sales: ['/admin/forms'] // Sales only need forms access
        };

        // Allow access to role's default page and any explicitly allowed routes
        const defaultPage = roleDefaultPages[user.role];
        const allAllowedRoutes = [defaultPage, ...(allowedRoutes[user.role] || [])];

        const isAllowed = allAllowedRoutes.some(allowedPath => 
            path.startsWith(allowedPath)
        );

        if (!isAllowed) {
            const defaultPage = roleDefaultPages[user.role] || '/admin/dashboard';
            return NextResponse.redirect(new URL(defaultPage, request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};