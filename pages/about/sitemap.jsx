import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MetaTags from '../../components/MetaTags';

const pages = [ {title: "home", url: "/"},
  {title: "Blog", url: "/blogs"},
{title: "G Suite", url: "/mail-services/g-suite-providers"},
{title: "Cpanel Hosting ", url: "/cpanel-hosting-in-chennai"},
{title: "SFTP Server", url: "/produtcs/sftp-server"},
{title: "Web Hosting", url: "/servers/web-hosting"},
{title: "Office 365 Provider", url: "/mail-services/office-365-providers"},
{title: "Dedicated Server", url: "/servers/dedicated-server"},
{title: "Payroll Software ", url: "/produtcs/payroll-software-provider-in-chennai"},
{title: "SSL Certificate", url: "/ssl-certificate"},
{title: "Carbonio Mail ", url: "/mail-services/carbonio-mail"},
{title: "HMS Software ", url: "/produtcs/hms-software-provider"},
{title: "Web Development Services", url: "/web-development-services"},
{title: "Spam Filter Services", url: "/spam-filter"},
{title: "Enterprise Email Service for Business", url: "/enterprise-email-service-for-business"},
{title: "High Availability", url: "/high-availability"},
{title: "SEO services", url: "/seo-services"},
{title: "Fleet Management Software", url: "/produtcs/fleet-management-software-providers"},
{title: "Mobile App Development", url: "/mobile-app-development-in-chennai"},
{title: "Cloud Hosting", url: "/servers/cloud-hosting-services"},
{title: "Vps Server Hosting", url: "/servers/vps-server-hosting"},
{title: "CRM Software", url: "/produtcs/crm-software"},
{title: "Zimbra Mail", url: "/mail-services/zimbra"},
{title: "Mail Server Support", url: "/mail-server-support-in-chennai-india"},
{title: "Domain", url: "/domain"},
{title: "Dedicated Server Hosting in Bangalore", url: "/servers/dedicated-server-hosting-in-bangalore"},
{title: "Dedicated Server Hosting in Chennai", url: "/servers/dedicated-server-hosting-in-chennai"},
{title: "Dedicated Server Hosting in Delhi", url: "/servers/dedicated-server-hosting-in-delhi"},
{title: "Dedicated Server Hosting in Hyderabad", url: "/servers/dedicated-server-hosting-in-hyderabad"},
{title: "Dedicated Server Hosting in kolkata", url: "/servers/dedicated-server-hosting-in-kolkata"},
{title: "Dedicated Server Hosting in Mumbai", url: "/servers/dedicated-server-hosting-in-mumbai"},
{title: "Dedicated Server Hosting in Pune", url: "/servers/dedicated-server-hosting-in-pune"},
{title: "Reseller Hosting", url: "/reseller-hosting-services"},
{title: "Business Mail Hosting", url: "/business-mail-hosting"},
{title: "Google Workspace Alternative", url: "/google-workspace-alternative/"},
{title: "Rain mail Alternative", url: "/rain-mail/"},
{title: "Alternative For Zimbra", url: "/alternative-for-zimbra/"},
{title: "Alternative For Outlook", url: "/alternative-for-outlook/"},
{title: "Knowledgebase", url: "https://knowledgebase.sixthstartech.com/"},

]

export default function sitemap() {
  return (
    <div>
      <MetaTags />
      
        <section className='sitemap-container-banner'>
          <div className='sitemap-container-banner-content'>
            <h1 className='sitemap-container-banner-content-heading'>
            Sitemap
            </h1>
           

          </div>
        </section>{/* banner-ends */}   

        <section className="sitemap-sec p-5">
    <div className="container">
      <div className="row">
        {pages.map((page, index) => (
          <div className="col-md-6" key={index}>
            <Link href={page.url} ><i className="fa-solid fa-angles-right"></i> {page.title}</Link>
          </div>
        ))}
      </div>
    </div>
  </section>

    </div>
  )
}
