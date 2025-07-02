import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import FormAdmin from '../../../components/FormAdmin';
import Link from 'next/link';

export default function FormsDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formStats, setFormStats] = useState({
    mobileSubmissions: 0,
    contactSubmissions: 0,
    careerSubmissions: 0,
    CRMSubmissions: 0,
    FleetSubmissions: 0,
    FloatSubmissions: 0,
    GsuitetalkSubmissions: 0,
    GsuiteAltkSubmissions: 0,
    HASubmissions: 0,
    MailServicesSubmissions: 0,
    HmsSubmissions: 0,
    NewsletterSubmissions: 0,
    OfficeTalkSubmissions: 0,
    OfficeAltSubmissions: 0,
    payrollSubmissions: 0,
    blogPopupSubmissions: 0,
    rainmailSubmissions: 0,
    requestSubmissions: 0,
    seoSubmissions: 0,
    serverSubmissions: 0,
    sftpSubmissions: 0,
    spamFilterSubmissions: 0,
    sslSubmissions: 0,
    webdevSubmissions: 0,
    zimbraAltSubmissions: 0,
    homesubmissions: 0,
    lastUpdated: null
  });
  const [isFetchingStats, setIsFetchingStats] = useState(false);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch('/api/auth/check');
      const data = await res.json();
      if (!res.ok) throw new Error('Not authenticated');
      setUser(data.user);
    } catch (error) {
      console.error('Auth check failed:', error);
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  }, [router]);

  const fetchSubmissionCount = async (endpoint) => {
    try {
      const res = await fetch(`${endpoint}?limit=1`);
      const data = await res.json();
      return data.success ? data.pagination.total : 0;
    } catch (error) {
      console.error(`Error fetching count from ${endpoint}:`, error);
      return 0;
    }
  };

  const fetchFormStats = useCallback(async () => {
    setIsFetchingStats(true);
    try {
      const [mobileCount, contactCount, careerCount, crmCount , fleetCount, floatCount, gsuitetalkCount, gsuitealtCount, haCount, mailCounnt, hmsCount, 
        newsletterCount, officetalkCount, officealtCount, payrollCount, blogpopupCount, rainmailCount, requsetCount, seoCount, serverCount, sftpCount,
        spamfilterCount, sslCount, webdevCount, zimbraaltCount, homesubmissionsCount
       ] = await Promise.all([
        fetchSubmissionCount('/api/admin/forms/mobile-submissions'),
        fetchSubmissionCount('/api/admin/forms/contact-submissions'),
        fetchSubmissionCount('/api/admin/forms/career-submissions'),
        fetchSubmissionCount('/api/admin/forms/crm-submissions'),
        fetchSubmissionCount('/api/admin/forms/fleetform-submissions'),
        fetchSubmissionCount('/api/admin/forms/floatform-submissions'),
        fetchSubmissionCount('/api/admin/forms/gsuitetalk-submissions'),
        fetchSubmissionCount('/api/admin/forms/gsuitealt-submissions'),
        fetchSubmissionCount('/api/admin/forms/haform-submissions'),
        fetchSubmissionCount('/api/admin/forms/mailservicesform-submissions'),
        fetchSubmissionCount('/api/admin/forms/hmsform-submissions'),
        fetchSubmissionCount('/api/admin/forms/newsletter-submissions'),
        fetchSubmissionCount('/api/admin/forms/officetalk-submissions'),
        fetchSubmissionCount('/api/admin/forms/officealt-submissions'),
        fetchSubmissionCount('/api/admin/forms/payrollform-submissions'),
        fetchSubmissionCount('/api/admin/forms/popup-submissions'),
        fetchSubmissionCount('/api/admin/forms/rainmail-submissions'),
        fetchSubmissionCount('/api/admin/forms/requestform-submissions'),
        fetchSubmissionCount('/api/admin/forms/seoform-submissions'),
        fetchSubmissionCount('/api/admin/forms/serversform-submissions'),
        fetchSubmissionCount('/api/admin/forms/sftpform-submissions'),
        fetchSubmissionCount('/api/admin/forms/spamfilterform-submissions'),
        fetchSubmissionCount('/api/admin/forms/sslform-submissions'),
        fetchSubmissionCount('/api/admin/forms/webdevform-submissions'),
        fetchSubmissionCount('/api/admin/forms/zimbraalt-submissions'),
        fetchSubmissionCount('/api/admin/forms/home-submission')
      ]);

      setFormStats({
        homesubmissions: homesubmissionsCount,
        mobileSubmissions: mobileCount,
        contactSubmissions: contactCount,
        careerSubmissions: careerCount, // Fixed typo here (was 'carrerCount')
        CRMSubmissions: crmCount,
        FleetSubmissions: fleetCount,
        FloatSubmissions: floatCount,
        GsuitetalkSubmissions: gsuitetalkCount,
        GsuiteAltkSubmissions: gsuitealtCount,
        HASubmissions: haCount,
        MailServicesSubmissions: mailCounnt,
        HmsSubmissions:hmsCount,
        NewsletterSubmissions:newsletterCount,
        OfficeTalkSubmissions: officetalkCount,
        OfficeAltSubmissions: officealtCount,
        payrollSubmissions: payrollCount,
        blogPopupSubmissions:blogpopupCount,
        rainmailSubmissions: rainmailCount,
        requestSubmissions:requsetCount,
        seoSubmissions:seoCount,
        serverSubmissions: serverCount, 
        sftpSubmissions:sftpCount,
        spamFilterSubmissions:spamfilterCount,
        sslSubmissions: sslCount,
        webdevSubmissions:webdevCount,
        zimbraAltSubmissions:zimbraaltCount,
        lastUpdated: new Date().toLocaleString()
      });
    } catch (error) {
      console.error('Error fetching form stats:', error);
    } finally {
      setIsFetchingStats(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (user) {
      fetchFormStats();
    }
  }, [user, fetchFormStats]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const forms = [
    {
      id: 'home',
      title: 'Home Forms',
      description: 'View submissions from Home inquiries',
      link: '/admin/forms/home-form',
      count: formStats.homesubmissions,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'mobile',
      title: 'Mobile App Forms',
      description: 'View submissions from mobile app inquiries',
      link: '/admin/forms/app-form',
      count: formStats.mobileSubmissions,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'contact',
      title: 'Contact Forms',
      description: 'View general contact form submissions',
      link: '/admin/forms/contact-form',
      count: formStats.contactSubmissions,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'career',
      title: 'Career Forms', 
      description: 'View general career form submissions',
      link: '/admin/forms/career-form',
      count: formStats.careerSubmissions,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'CRM',
      title: 'CRM Forms', 
      description: 'View general CRM form submissions',
      link: '/admin/forms/crm-form',
      count: formStats.CRMSubmissions,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
        id: 'Fleet',
        title: 'Fleet Forms', 
        description: 'View general Fleet form submissions',
        link: '/admin/forms/fleet-form',
        count: formStats.FleetSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Float Forms',
        title: 'Float Forms', 
        description: 'View Float form submissions',
        link: '/admin/forms/float-form',
        count: formStats.FloatSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Gsuite Talk Form',
        title: 'Gsuite Talk Form', 
        description: 'View Gsuite Talk Form submissions',
        link: '/admin/forms/gsuite-talk-form',
        count: formStats.GsuitetalkSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Gsuite Alternative Form',
        title: 'Gsuite Alternative Form',
        description: 'View Gsuite Alternative Form submissions',
        link: '/admin/forms/gsuitealt-form',
        count: formStats.GsuiteAltkSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'HA Alternative Form',
        title: 'HA Alternative Form', 
        description: 'View HA Form submissions',
        link: '/admin/forms/ha-form',
        count: formStats.HASubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Mail Services Form',
        title: 'Mail Services Form', 
        description: 'View Mail Services Form submissions',
        link: '/admin/forms/mail-services-form',
        count: formStats.MailServicesSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'HMS Form',
        title: 'HMS Form', 
        description: 'View HMS Form submissions',
        link: '/admin/forms/hms-form',
        count: formStats.HmsSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Newsletter Form',
        title: 'Newsletter Form', 
        description: 'View Newsletter Form submissions',
        link: '/admin/forms/newsletter-form',
        count: formStats.NewsletterSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Office Talk Form',
        title: 'Office Talk Form', 
        description: 'View Office Talk Form submissions',
        link: '/admin/forms/office-talk-form',
        count: formStats.OfficeTalkSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Office alt Form',
        title: 'Office alt Form', 
        description: 'View Office alt  Form submissions',
        link: '/admin/forms/officealt-form',
        count: formStats.OfficeAltSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Payroll Form',
        title: 'Payroll Form', 
        description: 'View Payroll Form submissions',
        link: '/admin/forms/payroll-form',
        count: formStats.payrollSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Blog Popup Form',
        title: 'Blog Popup Form', 
        description: 'View Blog Popup Form submissions',
        link: '/admin/forms/popup-form',
        count: formStats.blogPopupSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Rain mail Form',
        title: 'Rain mail Form', 
        description: 'View Rain mail Form submissions',
        link: '/admin/forms/rainmail-form',
        count: formStats.rainmailSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Request Quote Form',
        title: 'Request Quote Form', 
        description: 'View Request Quote Form submissions',
        link: '/admin/forms/request-form',
        count: formStats.requestSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'SEO Form',
        title: 'SEO Form', 
        description: 'View SEO Form submissions',
        link: '/admin/forms/seo-form',
        count: formStats.seoSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Servers Form',
        title: 'Servers Form', 
        description: 'View Servers Form submissions',
        link: '/admin/forms/servers-forms',
        count: formStats.serverSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'SFTP Form',
        title: 'SFTP Form', 
        description: 'View SFTP Form submissions',
        link: '/admin/forms/sftp-form',
        count: formStats.sftpSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Spam Filter Form',
        title: 'Spam Filter Form', 
        description: 'View Spam Filter Form submissions',
        link: '/admin/forms/spam-filter-form',
        count: formStats.spamFilterSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'SSL Form',
        title: 'SSL Form', 
        description: 'View SSL Form submissions',
        link: '/admin/forms/ssl-form',
        count: formStats.sslSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'Web Development Form',
        title: 'Web Development Form', 
        description: 'View Web Development Form submissions',
        link: '/admin/forms/web-dev-form',
        count: formStats.webdevSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        id: 'ZimbraAlt Form',
        title: 'ZimbraAlt Form', 
        description: 'View ZimbraAlt Form submissions',
        link: '/admin/forms/zimbraalt-form',
        count: formStats.zimbraAltSubmissions,
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      }
  ];
 

  return (
    <div className='bg-[#f6f9fff7]'>
      <FormAdmin>
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Forms Management</h2>
            <div className="text-sm text-gray-500">
              Last updated: {formStats.lastUpdated || 'Never'}
            </div>
          </div>

          {isFetchingStats && (
            <div className="mb-4 p-3 bg-blue-50 text-blue-700 rounded">
              Loading form statistics...
            </div>
          )}
            
            <div className='max-h-[calc(100vh-200px)] overflow-y-auto pr-2'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((form) => (
              <Link key={form.id} href={form.link} passHref>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-blue-500">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      {form.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-semibold mb-1 text-left truncate">{form.title}</h5>
                      <span className="text-gray-600 mb-3 text-left truncate-text1 ">{form.description}</span>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {form.count.toLocaleString()} submissions
                        </span>
                        <span className="text-blue-500 hover:text-blue-700 font-medium">
                          View →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => router.push('/admin/forms/app-form')}
                className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
              >
                <div className="font-medium">Go to Career Forms</div>
                <div className="text-sm text-gray-500">View all mobile app inquiries</div>
              </button>
              <button 
                onClick={() => router.push('/admin/forms/career-form')}
                className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
              >
                <div className="font-medium">Go to Contact Forms</div>
                <div className="text-sm text-gray-500">View all contact submissions</div>
              </button>
            </div>
          </div>
        </div>
      </FormAdmin>
    </div>
  );
}