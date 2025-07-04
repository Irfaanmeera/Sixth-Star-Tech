import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PostAdmin({ children }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        localStorage.removeItem('authToken'); // Clear auth token
        router.push('/admin/login'); // Redirect to login
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#0d1c4e] border-b text-white p-4 flex flex-col justify-between">
        <div className='admin-sec'>
          <h1 className="font-bold mb-8">Blog Admin</h1>
          <nav className="space-y-2">
          <Link href="/admin/dashboard" className="block py-2 px-4 text-white rounded hover:bg-gray-700">
              Dashboard
            </Link>
            <Link href="/admin/posts" className="block py-2 px-4 rounded text-white hover:bg-gray-700">
              All Posts
            </Link>
            <Link href="/admin/posts/new" className="block py-2 px-4 rounded text-white hover:bg-gray-700">
              Create New Post
            </Link>
            <Link href="/admin/posts/metadata" className="block py-2 px-4 rounded text-white hover:bg-gray-700">
              Meta Data
            </Link>
          </nav>
        </div>

        {/* Logout Button */}
        <button 
          onClick={handleLogout} 
          className="mt-8 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}
