module.exports = {
  reactStrictMode: true,  // Enable React strict mode for development warnings
  poweredByHeader: false, // Remove "X-Powered-By" header for security reasons
  compress: true,         // Enable gzip compression for production

  // Image optimization for Cloudinary images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Allow images from Cloudinary
      },
      {
        protocol: 'https',
        hostname: 'next.sixthstartech.com', // Allow images from next.sixthstartech.com
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/api/metadata/:path*',
        destination: '/api/metadata/:path*'
      }
    ]
  },


  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)', // Applies to all routes
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade', // Add Referrer-Policy
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), payment=()', // Add Permissions-Policy
          },
          // {
          //   key: 'Content-Security-Policy',
          //   value: "default-src 'self'; img-src 'self' res.cloudinary.com; script-src 'self' 'unsafe-inline';",
          // },
          // {
          //   key: 'Strict-Transport-Security',
          //   value: 'max-age=31536000; includeSubDomains; preload',
          // }
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
        // Redirect from HTTP to HTTPS
        {
         source: '/(.*)',
         has: [
          {
             type: 'header',
             key: 'x-forwarded-proto',
             value: 'http',
          },
         ],
         destination: 'https://sixthstartech.com/:path*',
         permanent: true,
      },
      {
        source: '/:path*',
        has: [
         {
            type: 'host',
            value: 'www.sixthstartech.com',
         },
        ],
        destination: 'https://sixthstartech.com/:path*',
        permanent: true,
     },

     // Specific redirects

     {
       source: '/servers/zimbra-email-server',
       destination: '/mail-services/zimbra',
       permanent: true,
     },
     {
       source: '/services/ssl-certificate',
       destination: '/ssl-certificate',
       permanent: true,
     },
     {
       source: '/produtcs/hms-software-provider',
       destination: '/products/hms-software-provider',
       permanent: true,
     },
     {
       source: '/sixthstartech-career',
       destination: '/about/career',
       permanent: true,
     },
     {
       source: '/sixthstratech-clients',
       destination: '/about/clients',
       permanent: true,
     },
     {
       source: '/business-models',
       destination: '/about/businessmodels',
       permanent: true,
     },
     {
       source: '/cpanel-hosting-in-chennai',
       destination: '/mail-services/cpanel-hosting-in-chennai',
       permanent: true,
     },
     {
       source: '/about-sixthstar-technologies/sixthstartech-methodology',
       destination: '/about/methodology',
       permanent: true,
     },
     {
       source: '/testimonials',
       destination: '/about/testimonials',
       permanent: true,
     },
     {
       source: '/produtcs/sftp-server',
       destination: '/products/sftp-server',
       permanent: true,
     },
     {
       source: '/produtcs/payroll-software-provider-in-chennai',
       destination: '/products/payroll-software-provider-in-chennai',
       permanent: true,
     },
     {
       source: '/privacy-policy-sixthstartech',
       destination: '/about/privacypolicy',
       permanent: true,
     },
     {
       source: '/why-sixthstar-tech',
       destination: '/about/whysixthstar',
       permanent: true,
     },
     {
       source: '/about-sixthstar-technologies',
       destination: '/about',
       permanent: true,
     },
     {
       source: '/acceptable-use-policy',
       destination: '/about/acceptable-use-policy',
       permanent: true,
     },
     {
       source: '/produtcs/fleet-management-software-providers',
       destination: '/products/fleet-management-software-providers',
       permanent: true,
     },
     {
       source: '/mission-vision',
       destination: '/about/missionvision',
       permanent: true,
     },
     {
       source: '/produtcs/crm-software',
       destination: '/products/crm-software',
       permanent: true,
     },
     {
       source: '/sitemap',
       destination: '/about/sitemap',
       permanent: true,
     },
     {
       source: '/reseller-hosting-services',
       destination: '/servers/reseller-hosting-services',
       permanent: true,
     },
     {
       source: '/data-center',
       destination: '/blogs/data-center',
       permanent: true,
     },
{
       source: '/what-is-an-ssl-certificate',
       destination: '/blogs/what-is-an-ssl-certificate',
       permanent: true,
     },
{
       source: '/payroll-software',
       destination: '/blogs/payroll-software',
       permanent: true,
     },
{
       source: '/what-is-a-data-center',
       destination: '/blogs/what-is-a-data-center',
       permanent: true,
     },
{
       source: '/sixthstartech-services',
       destination: '/blogs/sixthstartech-services',
       permanent: true,
     },
{
       source: '/importance-of-ssl-certificates',
       destination: '/blogs/importance-of-ssl-certificates',
       permanent: true,
     },
{
       source: '/types-of-web-hosting',
       destination: '/blogs/types-of-web-hosting',
       permanent: true,
     },
{
       source: '/why-are-data-centers-is-important',
       destination: '/blogs/why-are-data-centers-is-important',
       permanent: true,
     },
{
       source: '/what-is-a-cloud-and-how-its-work',
       destination: '/blogs/what-is-a-cloud-and-how-its-work',
       permanent: true,
     },
{
       source: '/how-are-data-centers-managed',
       destination: '/blogs/how-are-data-centers-managed',
       permanent: true,
     },
{
       source: '/types-of-data-centers',
       destination: '/blogs/types-of-data-centers',
       permanent: true,
     },
{
       source: '/payroll-management-with-payroll-software-in-chennai',
       destination: '/blogs/payroll-management-with-payroll-software-in-chennai',
       permanent: true,
     },
{
       source: '/strengthening-online-security-with-ssl-certificates-a-guide-by-sixthstar-tech',
       destination: '/blogs/strengthening-online-security-with-ssl-certificates-a-guide-by-sixthstar-tech',
       permanent: true,
     },
{
       source: '/essential-tips-for-effective-fleet-management',
       destination: '/blogs/essential-tips-for-effective-fleet-management',
       permanent: true,
     },
{
       source: '/the-impact-of-payroll-processing-software',
       destination: '/blogs/the-impact-of-payroll-processing-software',
       permanent: true,
     },
{
       source: '/data-centers-decoded-the-heart-of-digital-innovation-revealed',
       destination: '/blogs/data-centers-decoded-the-heart-of-digital-innovation-revealed',
       permanent: true,
     },
{
       source: '/achieving-high-availability',
       destination: '/blogs/achieving-high-availability',
       permanent: true,
     },
{
       source: '/advantages-of-high-availability-in-business-operations',
       destination: '/blogs/advantages-of-high-availability-in-business-operations',
       permanent: true,
     },
{
       source: '/customer-relationship-management-technology',
       destination: '/blogs/customer-relationship-management-technology',
       permanent: true,
     },
{
       source: '/what-is-the-purpose-of-a-payroll',
       destination: '/blogs/what-is-the-purpose-of-a-payroll',
       permanent: true,
     },
{
       source: '/understanding-payroll-software',
       destination: '/blogs/understanding-payroll-software',
       permanent: true,
     },
{
       source: '/wexploring-the-role-of-data-centers-in-the-modern-world',
       destination: '/blogs/wexploring-the-role-of-data-centers-in-the-modern-world',
       permanent: true,
     },
{
       source: '/exploring-the-exciting-features-of-online-payroll-software',
       destination: '/blogs/exploring-the-exciting-features-of-online-payroll-software',
       permanent: true,
     },
{
       source: '/workings-of-data-centers',
       destination: '/blogs/workings-of-data-centers',
       permanent: true,
     },
{
       source: '/choosing-the-right-high-availability-solutions-for-your-web-hosting-needs',
       destination: '/blogs/choosing-the-right-high-availability-solutions-for-your-web-hosting-needs',
       permanent: true,
     },
{
       source: '/what-is-high-availbility',
       destination: '/blogs/what-is-high-availbility',
       permanent: true,
     },
{
       source: '/payroll-management',
       destination: '/blogs/payroll-management',
       permanent: true,
     },
{
       source: '/what-is-web-development',
       destination: '/blogs/what-is-web-development',
       permanent: true,
     },
{
       source: '/why-to-choose-web-development-agency',
       destination: '/blogs/why-to-choose-web-development-agency',
       permanent: true,
     },
{
       source: '/what-is-wordpress',
       destination: '/blogs/what-is-wordpress',
       permanent: true,
     },
{
       source: '/how-gpu-servers-can-benefit-your-business',
       destination: '/blogs/how-gpu-servers-can-benefit-your-business',
       permanent: true,
     },
{
       source: '/email-filtering-software',
       destination: '/blogs/email-filtering-software',
       permanent: true,
     },
{
       source: '/email-filters-for-business-organization',
       destination: '/blogs/email-filters-for-business-organization',
       permanent: true,
     },
{
       source: '/what-is-cloud-based-spam-filtering',
       destination: '/blogs/what-is-cloud-based-spam-filtering',
       permanent: true,
     },
{
       source: '/advantages-of-linux-hosting',
       destination: '/blogs/advantages-of-linux-hosting',
       permanent: true,
     },
{
       source: '/how-to-choose-the-linux-server-hosting',
       destination: '/blogs/how-to-choose-the-linux-server-hosting',
       permanent: true,
     },
{
       source: '/advantages-of-linux',
       destination: '/blogs/advantages-of-linux',
       permanent: true,
     },
{
       source: '/importance-of-backing-up-data-on-your-dedicated-server',
       destination: '/blogs/importance-of-backing-up-data-on-your-dedicated-server',
       permanent: true,
     },
{
       source: '/benefits-of-outsourcing-server-management',
       destination: '/blogs/benefits-of-outsourcing-server-management',
       permanent: true,
     },
{
       source: '/benefits-of-fully-managed-dedicated-server',
       destination: '/blogs/benefits-of-fully-managed-dedicated-server',
       permanent: true,
     },
{
       source: '/unlocking-business-growth-with-crm-software-providers',
       destination: '/blogs/unlocking-business-growth-with-crm-software-providers',
       permanent: true,
     },
{
       source: '/enhancing-performance-with-cloud-hosting-in-india',
       destination: '/blogs/enhancing-performance-with-cloud-hosting-in-india',
       permanent: true,
     },
{
       source: '/exploring-vps-hosting-options',
       destination: '/blogs/exploring-vps-hosting-options',
       permanent: true,
     },
{
       source: '/what-is-dedicated-server-hosting-technology-a-comprehensive-insight',
       destination: '/blogs/what-is-dedicated-server-hosting-technology-a-comprehensive-insight',
       permanent: true,
     },
{
       source: '/choosing-the-right-web-hosting',
       destination: '/blogs/choosing-the-right-web-hosting',
       permanent: true,
     },
{
       source: '/outgoing-email-servers-smtp',
       destination: '/blogs/outgoing-email-servers-smtp',
       permanent: true,
     },
{
       source: '/enhancing-email-security',
       destination: '/blogs/enhancing-email-security',
       permanent: true,
     },
{
       source: '/trusted-cloud-hosting-company-in-chennai',
       destination: '/blogs/trusted-cloud-hosting-company-in-chennai',
       permanent: true,
     },
{
       source: '/unleashing-the-power-of-vps-hosting-in-chennai',
       destination: '/blogs/unleashing-the-power-of-vps-hosting-in-chennai',
       permanent: true,
     },
{
       source: '/empowering-businesses-with-dedicated-server-hosting',
       destination: '/blogs/empowering-businesses-with-dedicated-server-hosting',
       permanent: true,
     },
{
       source: '/understanding-the-benefits-of-vps-hosting',
       destination: '/blogs/understanding-the-benefits-of-vps-hosting',
       permanent: true,
     },
{
       source: '/how-to-choose-the-right-type-of-email-spam-filter-for-your-inbox',
       destination: '/blogs/how-to-choose-the-right-type-of-email-spam-filter-for-your-inbox',
       permanent: true,
     },
{
       source: '/hybrid-cloud-data-centers',
       destination: '/blogs/hybrid-cloud-data-centers',
       permanent: true,
     },
{
       source: '/reseller-hosting-an-affordable-option-for-setting-up-your-own-hosting-service',
       destination: '/blogs/reseller-hosting-an-affordable-option-for-setting-up-your-own-hosting-service',
       permanent: true,
     },
{
       source: '/differences-between-web-servers-and-mail-servers',
       destination: '/blogs/differences-between-web-servers-and-mail-servers',
       permanent: true,
     },
{
       source: '/advantages-of-reseller-hosting',
       destination: '/blogs/advantages-of-reseller-hosting',
       permanent: true,
     },
{
       source: '/reseller-and-vps-hosting',
       destination: '/blogs/reseller-and-vps-hosting',
       permanent: true,
     },
{
       source: '/zimbra-mail-server-features',
       destination: '/blogs/zimbra-mail-server-features',
       permanent: true,
     },
{
       source: '/difference-between-cloud-and-dedicated-hosting',
       destination: '/blogs/difference-between-cloud-and-dedicated-hosting',
       permanent: true,
     },
{
       source: '/benefits-of-a-dedicated-server',
       destination: '/blogs/benefits-of-a-dedicated-server',
       permanent: true,
     },
{
       source: '/why-do-you-need-a-dedicated-server',
       destination: '/blogs/why-do-you-need-a-dedicated-server',
       permanent: true,
     },
{
       source: '/what-is-an-email-server',
       destination: '/blogs/what-is-an-email-server',
       permanent: true,
     },
{
       source: '/how-does-dedicated-server-hosting-work',
       destination: '/blogs/how-does-dedicated-server-hosting-work',
       permanent: true,
     },
{
       source: '/advantages-of-cloud-servers',
       destination: '/blogs/advantages-of-cloud-servers',
       permanent: true,
     },
{
       source: '/importance-factors-in-hosting-websites',
       destination: '/blogs/importance-factors-in-hosting-websites',
       permanent: true,
     },
{
       source: '/advantages-of-zimbra',
       destination: '/blogs/advantages-of-zimbra',
       permanent: true,
     },
{
       source: '/what-does-it-mean-to-reseller-hosting',
       destination: '/blogs/what-does-it-mean-to-reseller-hosting',
       permanent: true,
     },
{
       source: '/what-is-spam-filtering',
       destination: '/blogs/what-is-spam-filtering',
       permanent: true,
     },
{
       source: '/what-is-a-dedicated-server',
       destination: '/blogs/what-is-a-dedicated-server',
       permanent: true,
     },
     
    ];
  },
  experimental: {
    allowMiddlewareResponseBody: true,
  }
};
