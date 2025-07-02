import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function FormAdmin({ children }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        localStorage.removeItem('authToken');
        router.push('/admin/login');
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
      <div className="w-64 bg-[#0d1c4e] text-white flex flex-col h-screen sticky top-0">
        {/* Fixed header */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="font-bold text-xl">Form Admin</h3>
        </div>

        {/* Scrollable forms section */}
        <div className="flex-grow overflow-y-auto p-2 blog-admin-left">
          <nav className="space-y-2">
          <Link href="/admin/dashboard" className="block py-2 px-4 text-white rounded hover:bg-gray-700">
              Dashboard
            </Link>
            <div className="space-y-1">
              <Link href="/admin/forms" className="block py-2 px-4 text-white rounded hover:bg-gray-700 transition-colors">
                Forms
              </Link>
              
              <div className="ml-4 space-y-1">
                {/* Mobile App Forms */}
                <Link href="/admin/forms/app-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Mobile App Forms
                </Link>

                {/* Career Forms */}
                <Link href="/admin/forms/career-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Career Forms
                </Link>

                  <Link href="/admin/forms/contact-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Contact Forms
                  </Link>

                {/* CRM Forms */}
                <Link href="/admin/forms/crm-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  CRM Forms
                </Link>

                {/* Fleet Form */}
                <Link href="/admin/forms/fleet-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Fleet Form
                </Link>

                {/* Float Form */}
                <Link href="/admin/forms/float-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Float Form
                </Link>

                {/* G-Suite Forms */}
                <Link href="/admin/forms/gsuite-talk-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  G-Suite Talk Form
                </Link>
                <Link href="/admin/forms/gsuitealt-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  G-Suite Alt Form
                </Link>

                {/* HA Form */}
                <Link href="/admin/forms/ha-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  HA Form
                </Link>

                {/* HMS Form */}
                <Link href="/admin/forms/hms-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  HMS Form
                </Link>

                {/* Mail Services Form */}
                <Link href="/admin/forms/mail-services-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Mail Services Form
                </Link>

                {/* Newsletter Form */}
                <Link href="/admin/forms/newsletter-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Newsletter Form
                </Link>

                {/* Office Forms */}
                <Link href="/admin/forms/office-talk-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Office Talk Form
                </Link>
                <Link href="/admin/forms/officealt-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Office Alt Form
                </Link>

                {/* Payroll Form */}
                <Link href="/admin/forms/payroll-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Payroll Form
                </Link>

                {/* Blog Popup Form */}
                <Link href="/admin/forms/popup-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Blog Popup Form
                </Link>

                {/* Rainmail Form */}
                <Link href="/admin/forms/rainmail-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Rainmail Form
                </Link>

                {/* Request Quote Form */}
                <Link href="/admin/forms/request-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Request Quote Form
                </Link>

                {/* SEO Form */}
                <Link href="/admin/forms/seo-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  SEO Form
                </Link>

                {/* Servers Forms */}
                <Link href="/admin/forms/servers-forms" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Servers Forms
                </Link>

                {/* SFTP Form */}
                <Link href="/admin/forms/sftp-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  SFTP Form
                </Link>

                {/* Spam Filter Form */}
                <Link href="/admin/forms/spam-filter-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Spam Filter Form
                </Link>

                {/* SSL Form */}
                <Link href="/admin/forms/ssl-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  SSL Form
                </Link>

                {/* Web Dev Form */}
                <Link href="/admin/forms/web-dev-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Web Dev Form
                </Link>

                {/* Zimbra Alt Form */}
                <Link href="/admin/forms/zimbraalt-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Zimbra Alt Form
                </Link>
                {/* Full stack Form */}
                <Link href="/admin/forms/fullstack-form" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Full Stack Form
                </Link>
                {/* Full stack Hire Form */}
                <Link href="/admin/forms/fullstack-hire" className="block py-2 px-4 text-white rounded hover:bg-gray-700 text-sm transition-colors">
                  Full Stack Hire Form
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Fixed logout button */}
        <div className="p-4 border-t border-gray-700">
          <button 
            onClick={handleLogout} 
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {children}
      </div>
    </div>
  );
}