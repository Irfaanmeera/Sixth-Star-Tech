
// Home page Schema
export const HomeLocalSchema =[
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Winlicense",
    "image": "https://res.cloudinary.com/daggx9p24/image/upload/v1738142631/logo_ps1rd0.png",
    "url": "https://winlicense.in",
    "telephone": "+91 9962107399, +91 9383996666",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, Siri Towers, 3 & 4, Fourrts Ave, Annani Indira Nagar, Muttukkaranchavadi, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.929736569845844",
      "longitude": "80.23359138184487"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/SixthstarTechnologies",
      "https://twitter.com/SixthstarTech",
      "https://www.linkedin.com/company/sixthstar-technologies",
      "https://www.instagram.com/SixthstarTech"
    ]
  }];

  export const homeorgSchema = [{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sixthstar Technologies",
    "url": "https://www.sixthstar.com", 
    "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",   "description": "Sixthstar Technologies provides domain registration, business email solutions, and web hosting services with 24/7 support and 99.99% uptime.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, Siri Towers, 3 & 4, Fourrts Ave, Annani Indira Nagar, Muttukkaranchavadi, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"   },
    "telephone": "+919176637399, +919383996666, +917825868652",   "sameAs": [
      "https://www.facebook.com/SixthstarTechnologies",    "https://twitter.com/SixthstarTech",
      "https://www.linkedin.com/company/sixthstar-technologies",
      "https://www.instagram.com/SixthstarTech"
    ]
  }];

  // Domain page Schema
  export const DomainSchema =[{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://sixthstartech.com/domain",
        "name": "Buy Domains Online – Cheap Domain Registration & Hosting",
        "description": "Register domains online instantly with free SSL, 24/7 support, and easy DNS management. Secure your perfect web address today!",
        "url": "https://sixthstartech.com/domain",
        "image": "https://sixthstartech.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwyn5jgh3%2Fimage%2Fupload%2Fv1722254431%2Fwww.yourdomain.com_giyola.gif&w=1080&q=75",
        "publisher": {
          "@type": "Organization",
          "name": "SixthStar Tech",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sixthstartech.com/logo.png"
          }
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://sixthstartech.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Domain Services",
              "item": "https://sixthstartech.com/domains"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Domain Registration",
              "item": "https://sixthstartech.com/domain"
            }
          ]
        },
        "mainEntity": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I register a domain name?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Search for your desired domain on our website, add it to your cart, and complete checkout. Your domain will be registered instantly!"
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer free SSL with domains?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! All registered domains come with a free SSL certificate to secure your website."
              }
            }
          ]
        }
      },
      {
        "@type": "AggregateRating",
        "@id": "https://sixthstartech.com/domain#reviews",
        "itemReviewed": {
          "@type": "WebPage",
          "name": "Domain Registration Services"
        },
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1428",
        "reviewCount": "1428"
      },
      {
        "@type": "Review",
        "@id": "https://sixthstartech.com/domain#review1",
        "itemReviewed": {
          "@type": "WebPage",
          "name": "Domain Registration Services"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "datePublished": "2024-05-15",
        "name": "Excellent Domain Service",
        "reviewBody": "Registered my business domain in minutes. The free SSL and 24/7 support made it perfect for my e-commerce site!"
      }
    ]
  }
  ];

  // dedicated chennai page Schema

  export const dedicatedChennaiSchema = [{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://sixthstartech.com/dedicated-server-hosting-chennai",
        "name": "Best Dedicated Server Hosting in Chennai | Enterprise Solutions",
        "description": "Dedicated servers and hosting in Chennai with 24/7 Tamil-speaking support, 99.9% uptime SLA, RAID storage & instant setup. Trusted by 500+ Indian businesses!",
        "url": "https://sixthstartech.com/dedicated-server-hosting-chennai",
        "image": "https://sixthstartech.com/_next/image?url=%2Fimages%2Fchennai-dedicated-server.jpg&w=1200&q=75",
        "publisher": {
          "@type": "Organization",
          "name": "SixthStar Tech",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sixthstartech.com/logo.png"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tech Park",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600001",
            "addressCountry": "IN"
          }
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://sixthstartech.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Hosting Services",
              "item": "https://sixthstartech.com/hosting"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Dedicated Servers Chennai",
              "item": "https://sixthstartech.com/dedicated-server-hosting-chennai"
            }
          ]
        },
        "mainEntity": {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is dedicated server hosting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dedicated server hosting provides exclusive use of a physical server for your business, offering full control, high performance, and enhanced security compared to shared hosting. Ideal for high-traffic websites, applications, and enterprises in Chennai needing reliable infrastructure."
              }
            },
            {
              "@type": "Question",
              "name": "Why choose dedicated servers in Chennai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Chennai data center offers low-latency connectivity across South India, local Tamil-speaking technical support, and compliance with Indian data laws—critical for businesses targeting regional customers."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer managed dedicated servers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! We provide fully managed dedicated servers including 24/7 monitoring, OS updates, security patches, and application support—so you can focus on your business."
              }
            },
            {
              "@type": "Question",
              "name": "What uptime guarantee do you provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We guarantee 99.9% uptime with redundant power, network backups, and enterprise-grade hardware in our Chennai facility."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can I get a dedicated server in Chennai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Instant provisioning! Most servers are deployed within 2-4 hours after payment confirmation."
              }
            },
            {
              "@type": "Question",
              "name": "Is DDoS protection included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. All plans include free DDoS mitigation with real-time threat detection to keep your Chennai server secure."
              }
            },
            {
              "@type": "Question",
              "name": "Can I upgrade my server resources later?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, seamless upgrades for CPU, RAM, and storage are available with zero downtime."
              }
            },
            {
              "@type": "Question",
              "name": "Do you support custom server configurations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer tailor-made solutions with GPU servers, NVMe storage, or high-frequency CPUs for specialized workloads."
              }
            },
            {
              "@type": "Question",
              "name": "How does Chennai’s location benefit my business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hosting in Chennai ensures <40ms latency across Tamil Nadu, faster data transfers to SEA markets, and local disaster recovery options."
              }
            },
            {
              "@type": "Question",
              "name": "What payment methods do you accept?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We accept UPI, NetBanking, Credit/Debit Cards, and PayPal with GST invoices for Indian businesses."
              }
            }
          ]
        }
      },
      {
        "@type": "Service",
        "serviceType": "Dedicated Server Hosting",
        "provider": {
          "@type": "Organization",
          "name": "SixthStar Tech"
        },
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          }
        }
      },
      {
        "@type": "AggregateRating",
        "@id": "https://sixthstartech.com/dedicated-server-hosting-chennai#reviews",
        "itemReviewed": {
          "@type": "Service",
          "name": "Dedicated Server Hosting in Chennai"
        },
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "876",
        "reviewCount": "876"
      },
      {
        "@type": "Review",
        "@id": "https://sixthstartech.com/dedicated-server-hosting-chennai#review1",
        "itemReviewed": {
          "@type": "Service",
          "name": "Dedicated Server Hosting"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Priya M."
        },
        "datePublished": "2024-06-10",
        "name": "Perfect for our e-commerce platform",
        "reviewBody": "As a Chennai-based business, the local support and low latency have been game-changers. Server uptime has been flawless for 11 months straight."
      }
    ]
  }];

  // vps server hosting schema

  export const vpsHostingSchema = [{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Alternatives to Zimbra for Email and Collaboration",
    "description": "Explore the top alternatives to Zimbra for email hosting and collaboration tools. Find secure, scalable, and cost-effective solutions tailored to your business needs.",
    "author": {
      "@type": "Organization",
      "name": "Sixthstar Technologies"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg"
      }
    },
    "datePublished": "2023-10-01",
    "dateModified": "2023-10-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://sixthstartech.com/alternative-for-zimbra"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
      "width": 1200,
      "height": 630
    }
  }];

  // cpanel hosting schema

  export const cpanelHostingSchema = [{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sixthstar Technologies",
    "url": "https://sixthstartech.com",
    "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
    "description": "Sixthstar Technologies provides reliable cPanel hosting in Chennai with secure email solutions and 99.99% uptime.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"
    },
    "telephone": "+919383996666",
    "sameAs": [
      "https://www.facebook.com/SixthstarTechnologies",
      "https://twitter.com/SixthstarTech",
      "https://www.linkedin.com/company/sixthstar-technologies",
      "https://www.instagram.com/SixthstarTech"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "cPanel Hosting Services",
    "provider": {
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com"
    },
    "areaServed": "IN",
    "description": "Reliable cPanel hosting in Chennai with secure email solutions, 99.99% uptime, and 24/7 support.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "X",
      "url": "https://sixthstartech.com/mail-services/cpanel-hosting-in-chennai"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sixthstartech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Mail Services",
        "item": "https://sixthstartech.com/mail-services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "cPanel Hosting in Chennai",
        "item": "https://sixthstartech.com/mail-services/cpanel-hosting-in-chennai"
      }
    ]
  }];

  // carbonio mail schema

  export const carbonioSchema = [{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sixthstar Technologies",
    "url": "https://sixthstartech.com",
    "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
    "description": "Sixthstar Technologies provides secure and scalable Carbonio Mail services for modern businesses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"
    },
    "telephone": "+919383996666",
    "sameAs": [
      "https://www.facebook.com/SixthstarTechnologies",
      "https://twitter.com/SixthstarTech",
      "https://www.linkedin.com/company/sixthstar-technologies",
      "https://www.instagram.com/SixthstarTech"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Carbonio Mail Services",
    "provider": {
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com"
    },
    "areaServed": "IN",
    "description": "Secure, scalable, and feature-rich Carbonio Mail services tailored for modern businesses.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "X",
      "url": "https://sixthstartech.com/mail-services/carbonio-mail"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sixthstartech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Mail Services",
        "item": "https://sixthstartech.com/mail-services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Carbonio Mail",
        "item": "https://sixthstartech.com/mail-services/carbonio-mail"
      }
    ]
  }
  ];

  // mail server support schema

  export const mailServerSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com",
      "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
      "description": "Sixthstar Technologies provides reliable mail server support in Chennai with 24/7 assistance to ensure seamless email communication for businesses.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600097",
        "addressCountry": "IN"
      },
      "telephone": "+919383996666",
      "sameAs": [
        "https://www.facebook.com/SixthstarTechnologies",
        "https://twitter.com/SixthstarTech",
        "https://www.linkedin.com/company/sixthstar-technologies",
        "https://www.instagram.com/SixthstarTech"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Sixthstar Technologies",
      "image": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
      "url": "https://sixthstartech.com/mail-server-support-in-chennai-india/",
      "telephone": "+919383996666",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600097",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "12.929736569845844",
        "longitude": "80.23359138184487"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sixthstartech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://sixthstartech.com"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mail Server Support in Chennai",
          "item": "https://sixthstartech.com/mail-server-support-in-chennai-india/"
        }
      ]
    }
    ];

    // google workspace Schema

    export const googleWorkspaceSchema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com",
        "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
        "description": "Sixthstar Technologies provides secure and cost-effective alternatives to Google Workspace, tailored for businesses of all sizes.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600097",
          "addressCountry": "IN"
        },
        "telephone": "+919383996666",
        "sameAs": [
          "https://www.facebook.com/SixthstarTechnologies",
          "https://twitter.com/SixthstarTech",
          "https://www.linkedin.com/company/sixthstar-technologies",
          "https://www.instagram.com/SixthstarTech"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sixthstartech.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://sixthstartech.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Google Workspace Alternative",
            "item": "https://sixthstartech.com/google-workspace-alternative/"
          }
        ]
      }
      ];

     export const enterpricesemailSchema = [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sixthstar Technologies",
          "url": "https://sixthstartech.com",
          "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
          "description": "Sixthstar Technologies provides enterprise-grade email hosting services with advanced security, scalability, and 24/7 support.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600097",
            "addressCountry": "IN"
          },
          "telephone": "+919383996666",
          "sameAs": [
            "https://www.facebook.com/SixthstarTechnologies",
            "https://twitter.com/SixthstarTech",
            "https://www.linkedin.com/company/sixthstar-technologies",
            "https://www.instagram.com/SixthstarTech"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://sixthstartech.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://sixthstartech.com/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Enterprise Email Service",
              "item": "https://sixthstartech.com/enterprise-email-service-for-business/"
            }
          ]
        }];
        // business mail hosting schema

        export const businessMailHostingSchema = [
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sixthstar Technologies",
            "url": "https://sixthstartech.com",
            "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
            "description": "Sixthstar Technologies provides secure, reliable, and scalable business email hosting with 24/7 support and 99.99% uptime.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600097",
              "addressCountry": "IN"
            },
            "telephone": "+919383996666",
            "sameAs": [
              "https://www.facebook.com/SixthstarTechnologies",
              "https://twitter.com/SixthstarTech",
              "https://www.linkedin.com/company/sixthstar-technologies",
              "https://www.instagram.com/SixthstarTech"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://sixthstartech.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://sixthstartech.com/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Business Email Hosting",
                "item": "https://sixthstartech.com/business-mail-hosting"
              }
            ]
          }];
    
    // sftp schema

    export const sftpSchema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com",
        "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
        "description": "Sixthstar Technologies provides robust FTP and SFTP server solutions for secure file transfer, ensuring data integrity, compliance, and seamless integration with your workflows.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600097",
          "addressCountry": "IN"
        },
        "telephone": "+919383996666",
        "sameAs": [
          "https://www.facebook.com/SixthstarTechnologies",
          "https://twitter.com/SixthstarTech",
          "https://www.linkedin.com/company/sixthstar-technologies",
          "https://www.instagram.com/SixthstarTech"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "FTP and SFTP Server Solutions",
        "description": "Robust FTP and SFTP server solutions for secure file transfer, ensuring data integrity, compliance, and seamless integration with your workflows.",
        "brand": {
          "@type": "Brand",
          "name": "Sixthstar Technologies"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "price": "X",
          "url": "https://sixthstartech.com/products/ftp-and-sftp-server"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sixthstartech.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://sixthstartech.com/products"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "FTP and SFTP Server",
            "item": "https://sixthstartech.com/products/ftp-and-sftp-server"
          }
        ]
      }
      ];

    // end of sftp schema

    // payroll software schema

    export const payrollSoftwareSchema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com",
        "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
        "description": "Sixthstar Technologies provides advanced payroll software solutions in Chennai to streamline payroll processes, ensure compliance, and boost productivity.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600097",
          "addressCountry": "IN"
        },
        "telephone": "+919383996666",
        "sameAs": [
          "https://www.facebook.com/SixthstarTechnologies",
          "https://twitter.com/SixthstarTech",
          "https://www.linkedin.com/company/sixthstar-technologies",
          "https://www.instagram.com/SixthstarTech"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Payroll Software Solutions",
        "description": "Advanced payroll software solutions to streamline payroll processes, ensure compliance, and boost productivity.",
        "brand": {
          "@type": "Brand",
          "name": "Sixthstar Technologies"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "price": "X",
          "url": "https://sixthstartech.com/products/payroll-software-provider-in-chennai"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "50"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sixthstartech.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://sixthstartech.com/products"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Payroll Software Provider in Chennai",
            "item": "https://sixthstartech.com/products/payroll-software-provider-in-chennai"
          }
        ]
      }
      ];

    // end of payroll software schema

// hms schema

export const hmsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sixthstar Technologies",
    "url": "https://sixthstartech.com",
    "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
    "description": "Sixthstar Technologies provides advanced HMS (Hospital Management System) software solutions to streamline hospital operations, improve patient care, and enhance efficiency.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"
    },
    "telephone": "+919383996666",
    "sameAs": [
      "https://www.facebook.com/SixthstarTechnologies",
      "https://twitter.com/SixthstarTech",
      "https://www.linkedin.com/company/sixthstar-technologies",
      "https://www.instagram.com/SixthstarTech"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "HMS Software Solutions",
    "description": "Advanced HMS (Hospital Management System) software solutions to streamline hospital operations, improve patient care, and enhance efficiency.",
    "brand": {
      "@type": "Brand",
      "name": "Sixthstar Technologies"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "X",
      "url": "https://sixthstartech.com/products/hms-software-provider"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sixthstartech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://sixthstartech.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "HMS Software Provider",
        "item": "https://sixthstartech.com/products/hms-software-provider"
      }
    ]
  }
  ];

// end of hms schema

// fleet schema

export const fleetSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sixthstar Technologies",
    "url": "https://sixthstartech.com",
    "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
    "description": "Sixthstar Technologies provides advanced fleet management software solutions to optimize fleet operations, reduce costs, and improve efficiency.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"
    },
    "telephone": "+919383996666",
    "sameAs": [
      "https://www.facebook.com/SixthstarTechnologies",
      "https://twitter.com/SixthstarTech",
      "https://www.linkedin.com/company/sixthstar-technologies",
      "https://www.instagram.com/SixthstarTech"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Fleet Management Software Solutions",
    "description": "Advanced fleet management software solutions to optimize fleet operations, reduce costs, and improve efficiency.",
    "brand": {
      "@type": "Brand",
      "name": "Sixthstar Technologies"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "X",
      "url": "https://sixthstartech.com/products/fleet-management-software-providers"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sixthstartech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://sixthstartech.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Fleet Management Software Providers",
        "item": "https://sixthstartech.com/products/fleet-management-software-providers"
      }
    ]
  }
  ];

// end of fleet schema

// crm schema

export const crmSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sixthstar Technologies",
    "url": "https://sixthstartech.com",
    "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
    "description": "Sixthstar Technologies provides advanced CRM software solutions to streamline business processes, improve customer relationships, and boost productivity.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"
    },
    "telephone": "+919383996666",
    "sameAs": [
      "https://www.facebook.com/SixthstarTechnologies",
      "https://twitter.com/SixthstarTech",
      "https://www.linkedin.com/company/sixthstar-technologies",
      "https://www.instagram.com/SixthstarTech"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CRM Software Solutions",
    "description": "Advanced CRM software solutions to streamline business processes, improve customer relationships, and boost productivity.",
    "brand": {
      "@type": "Brand",
      "name": "Sixthstar Technologies"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "X",
      "url": "https://sixthstartech.com/products/crm-software"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sixthstartech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://sixthstartech.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "CRM Software",
        "item": "https://sixthstartech.com/products/crm-software"
      }
    ]
  }
  ];

  // app dev schema

  export const appDevSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com",
      "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
      "description": "Sixthstar Technologies provides custom mobile app development services in Chennai, offering scalable and secure solutions for businesses.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600097",
        "addressCountry": "IN"
      },
      "telephone": "+919383996666",
      "sameAs": [
        "https://www.facebook.com/SixthstarTechnologies",
        "https://twitter.com/SixthstarTech",
        "https://www.linkedin.com/company/sixthstar-technologies",
        "https://www.instagram.com/SixthstarTech"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Mobile App Development Services",
      "provider": {
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com"
      },
      "areaServed": "IN",
      "description": "Sixthstar Technologies offers custom mobile app development services in Chennai, providing scalable, secure, and feature-rich solutions for businesses.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "price": "X",
        "url": "https://sixthstartech.com/mobile-app-development-in-chennai/"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sixthstartech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://sixthstartech.com/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mobile App Development in Chennai",
          "item": "https://sixthstartech.com/mobile-app-development-in-chennai/"
        }
      ]
    }
    ];

  // zimbra schema

  export const zimbraSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com",
      "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
      "description": "Sixthstar Technologies provides Zimbra mail services with secure, scalable, and feature-rich email hosting solutions for businesses.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600097",
        "addressCountry": "IN"
      },
      "telephone": "+919383996666",
      "sameAs": [
        "https://www.facebook.com/SixthstarTechnologies",
        "https://twitter.com/SixthstarTech",
        "https://www.linkedin.com/company/sixthstar-technologies",
        "https://www.instagram.com/SixthstarTech"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Zimbra Mail Services",
      "provider": {
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com"
      },
      "areaServed": "IN",
      "description": "Sixthstar Technologies offers Zimbra mail services with secure, scalable, and feature-rich email hosting solutions tailored for businesses of all sizes.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "price": "X",
        "url": "https://sixthstartech.com/mail-services/zimbra"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sixthstartech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Mail Services",
          "item": "https://sixthstartech.com/mail-services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Zimbra Mail Services",
          "item": "https://sixthstartech.com/mail-services/zimbra"
        }
      ]
    }
    ];

// office 365 schema

export const office365Schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sixthstar Technologies",
    "url": "https://sixthstartech.com",
    "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
    "description": "Sixthstar Technologies is a trusted Microsoft Office 365 for Business license provider in India, offering secure, scalable email solutions with 99.99% uptime.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"
    },
    "telephone": "+919383996666",
    "sameAs": [
      "https://www.facebook.com/SixthstarTechnologies",
      "https://twitter.com/SixthstarTech",
      "https://www.linkedin.com/company/sixthstar-technologies",
      "https://www.instagram.com/SixthstarTech"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Microsoft Office 365 for Business License Provider",
    "provider": {
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com"
    },
    "areaServed": "IN",
    "description": "Sixthstar Technologies provides secure and scalable Microsoft Office 365 for Business licenses in India with advanced features, 99.99% uptime, and 24/7 support.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "X",
      "url": "https://sixthstartech.com/mail-services/office-365-providers"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sixthstartech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Mail Services",
        "item": "https://sixthstartech.com/mail-services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Microsoft Office 365 for Business License Provider",
        "item": "https://sixthstartech.com/mail-services/office-365-providers"
      }
    ]
  }
  ];

  // cloud hosting schema

export const cloudHostingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sixthstar Technologies",
    "url": "https://sixthstartech.com",
    "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
    "description": "Sixthstar Technologies provides reliable cloud hosting services with scalable infrastructure, high performance, and 99.99% uptime to meet your business needs.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"
    },
    "telephone": "+919383996666",
    "sameAs": [
      "https://www.facebook.com/SixthstarTechnologies",
      "https://twitter.com/SixthstarTech",
      "https://www.linkedin.com/company/sixthstar-technologies",
      "https://www.instagram.com/SixthstarTech"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cloud Hosting Services",
    "provider": {
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com"
    },
    "areaServed": "IN",
    "description": "Sixthstar Technologies offers reliable cloud hosting services with scalable infrastructure, high performance, and 99.99% uptime to meet your business needs.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "X",
      "url": "https://sixthstartech.com/servers/cloud-hosting-services"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sixthstartech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servers",
        "item": "https://sixthstartech.com/servers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cloud Hosting Services",
        "item": "https://sixthstartech.com/servers/cloud-hosting-services"
      }
    ]
  }
  ];

// seo schema

export const seoSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sixthstar Technologies",
    "url": "https://sixthstartech.com",
    "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
    "description": "Sixthstar Technologies is a leading SEO agency in Chennai, specializing in search engine optimization services to boost website rankings, drive organic traffic, and grow businesses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"
    },
    "telephone": "+919383996666",
    "sameAs": [
      "https://www.facebook.com/SixthstarTechnologies",
      "https://twitter.com/SixthstarTech",
      "https://www.linkedin.com/company/sixthstar-technologies",
      "https://www.instagram.com/SixthstarTech"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Search Engine Optimization (SEO)",
    "provider": {
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com"
    },
    "areaServed": "IN",
    "description": "Sixthstar Technologies offers professional SEO services in Chennai to improve website rankings, increase organic traffic, and deliver measurable results for businesses of all sizes.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "X",
      "url": "https://sixthstartech.com/seo-services/"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sixthstartech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://sixthstartech.com/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SEO Services",
        "item": "https://sixthstartech.com/seo-services/"
      }
    ]
  }
  ];
// end of seo schema

// rain mail schema

export const rainMailSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sixthstar Technologies",
    "url": "https://sixthstartech.com",
    "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
    "description": "Sixthstar Technologies provides trusted business email solutions as an alternative to RainMail, with advanced security, scalability, and 99.99% uptime.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"
    },
    "telephone": "+919383996666",
    "sameAs": [
      "https://www.facebook.com/SixthstarTechnologies",
      "https://twitter.com/SixthstarTech",
      "https://www.linkedin.com/company/sixthstar-technologies",
      "https://www.instagram.com/SixthstarTech"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trusted Business Email Solutions (Alternative to RainMail)",
    "provider": {
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com"
    },
    "areaServed": "IN",
    "description": "Sixthstar Technologies offers a reliable and scalable email hosting solution as an alternative to RainMail, designed for businesses of all sizes with advanced security features and 99.99% uptime.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "price": "X",
      "url": "https://sixthstartech.com/alternative-to-rain-mail/"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sixthstartech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Mail Services",
        "item": "https://sixthstartech.com/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Alternative to RainMail",
        "item": "https://sixthstartech.com/alternative-to-rain-mail/"
      }
    ]
  }
  ];

  // reseller hosting

  export const resellerHostingSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com",
      "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
      "description": "Sixthstar Technologies provides reliable reseller hosting services with white-label solutions, scalable infrastructure, and 99.99% uptime to help you start your hosting business.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600097",
        "addressCountry": "IN"
      },
      "telephone": "+919383996666",
      "sameAs": [
        "https://www.facebook.com/SixthstarTechnologies",
        "https://twitter.com/SixthstarTech",
        "https://www.linkedin.com/company/sixthstar-technologies",
        "https://www.instagram.com/SixthstarTech"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Reseller Hosting Services",
      "provider": {
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com"
      },
      "areaServed": "IN",
      "description": "Sixthstar Technologies offers reliable reseller hosting services with white-label solutions, scalable infrastructure, and 99.99% uptime to help you start your hosting business.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "price": "X",
        "url": "https://sixthstartech.com/servers/reseller-hosting-services"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sixthstartech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Servers",
          "item": "https://sixthstartech.com/servers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Reseller Hosting Services",
          "item": "https://sixthstartech.com/servers/reseller-hosting-services"
        }
      ]
    }
    ];

    // web dev

    export const webDevSchema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com",
        "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
        "description": "Sixthstar Technologies is a leading web development agency in Chennai, Tamil Nadu, offering custom website design, development, and maintenance services to grow your business online.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600097",
          "addressCountry": "IN"
        },
        "telephone": "+919383996666",
        "sameAs": [
          "https://www.facebook.com/SixthstarTechnologies",
          "https://twitter.com/SixthstarTech",
          "https://www.linkedin.com/company/sixthstar-technologies",
          "https://www.instagram.com/SixthstarTech"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Development Services",
        "provider": {
          "@type": "Organization",
          "name": "Sixthstar Technologies",
          "url": "https://sixthstartech.com"
        },
        "areaServed": "IN",
        "description": "Sixthstar Technologies is a leading web development agency in Chennai, Tamil Nadu, offering custom website design, development, and maintenance services to grow your business online.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "price": "X",
          "url": "https://sixthstartech.com/web-development-services/"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sixthstartech.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Web Development Services",
            "item": "https://sixthstartech.com/web-development-services/"
          }
        ]
      }
      ];
  
    // ssl schema

    export const sslSchema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com",
        "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
        "description": "Sixthstar Technologies provides trusted SSL certificates in Chennai, Tamil Nadu, ensuring secure website connections, data encryption, and improved SEO rankings.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600097",
          "addressCountry": "IN"
        },
        "telephone": "+919383996666",
        "sameAs": [
          "https://www.facebook.com/SixthstarTechnologies",
          "https://twitter.com/SixthstarTech",
          "https://www.linkedin.com/company/sixthstar-technologies",
          "https://www.instagram.com/SixthstarTech"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "SSL Certificate Services",
        "provider": {
          "@type": "Organization",
          "name": "Sixthstar Technologies",
          "url": "https://sixthstartech.com"
        },
        "areaServed": "IN",
        "description": "Sixthstar Technologies provides trusted SSL certificates in Chennai, Tamil Nadu, ensuring secure website connections, data encryption, and improved SEO rankings.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "price": "X",
          "url": "https://sixthstartech.com/ssl-certificate/"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sixthstartech.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "SSL Certificate",
            "item": "https://sixthstartech.com/ssl-certificate/"
          }
        ]
      }
      ];

  // spam filter

  export const spamFilterSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com",
      "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
      "description": "Sixthstar Technologies offers advanced spam filter solutions to protect your emails from phishing, malware, and unwanted spam with 99.9% accuracy.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600097",
        "addressCountry": "IN"
      },
      "telephone": "+919383996666",
      "sameAs": [
        "https://www.facebook.com/SixthstarTechnologies",
        "https://twitter.com/SixthstarTech",
        "https://www.linkedin.com/company/sixthstar-technologies",
        "https://www.instagram.com/SixthstarTech"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Spam Filter Solutions",
      "provider": {
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com"
      },
      "areaServed": "IN",
      "description": "Sixthstar Technologies offers advanced spam filter solutions to protect your emails from phishing, malware, and unwanted spam with 99.9% accuracy.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "price": "X",
        "url": "https://sixthstartech.com/spam-filter/"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sixthstartech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Spam Filter",
          "item": "https://sixthstartech.com/spam-filter/"
        }
      ]
    }
    ];

  // email server provider

  export const emailServerProviderSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com",
      "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
      "description": "Sixthstar Technologies is a trusted email server provider in India, offering secure, scalable, and reliable email hosting solutions with advanced features and 99.99% uptime.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600097",
        "addressCountry": "IN"
      },
      "telephone": "+919383996666",
      "sameAs": [
        "https://www.facebook.com/SixthstarTechnologies",
        "https://twitter.com/SixthstarTech",
        "https://www.linkedin.com/company/sixthstar-technologies",
        "https://www.instagram.com/SixthstarTech"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Email Server Hosting",
      "provider": {
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com"
      },
      "areaServed": "IN",
      "description": "Sixthstar Technologies is a trusted email server provider in India, offering secure, scalable, and reliable email hosting solutions with advanced features and 99.99% uptime.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "price": "X",
        "url": "https://sixthstartech.com/services/email-server-provider-in-India"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sixthstartech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://sixthstartech.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Email Server Provider in India",
          "item": "https://sixthstartech.com/services/email-server-provider-in-India"
        }
      ]
    }
    ];

    // email hosting company

    export const emailHostingCompanySchema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com",
        "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
        "description": "Sixthstar Technologies is a leading email hosting company in India, offering secure and scalable business email solutions with advanced features and 99.99% uptime.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600097",
          "addressCountry": "IN"
        },
        "telephone": "+919383996666",
        "sameAs": [
          "https://www.facebook.com/SixthstarTechnologies",
          "https://twitter.com/SixthstarTech",
          "https://www.linkedin.com/company/sixthstar-technologies",
          "https://www.instagram.com/SixthstarTech"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Secure Business Email Hosting",
        "provider": {
          "@type": "Organization",
          "name": "Sixthstar Technologies",
          "url": "https://sixthstartech.com"
        },
        "areaServed": "IN",
        "description": "Sixthstar Technologies is a leading email hosting company in India, offering secure and scalable business email solutions with advanced features and 99.99% uptime.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "price": "X",
          "url": "https://sixthstartech.com/services/email-hosting-company"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sixthstartech.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://sixthstartech.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Email Hosting Company",
            "item": "https://sixthstartech.com/services/email-hosting-company"
          }
        ]
      }
      ];

  // web hosting

  export const webHostingSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "url": "https://sixthstartech.com",
      "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
      "description": "Sixthstar Technologies is the #1 web hosting provider in Tamil Nadu, offering reliable shared hosting services with high performance, scalability, and 99.99% uptime to meet your business needs.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600097",
        "addressCountry": "IN"
      },
      "telephone": "+919383996666",
      "sameAs": [
        "https://www.facebook.com/SixthstarTechnologies",
        "https://twitter.com/SixthstarTech",
        "https://www.linkedin.com/company/sixthstar-technologies",
        "https://www.instagram.com/SixthstarTech"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Hosting and Shared Hosting Services",
      "provider": {
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com"
      },
      "areaServed": "IN",
      "description": "Sixthstar Technologies is the #1 web hosting provider in Tamil Nadu, offering reliable shared hosting services with high performance, scalability, and 99.99% uptime to meet your business needs.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "price": "X",
        "url": "https://sixthstartech.com/servers/web-hosting"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sixthstartech.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Servers",
          "item": "https://sixthstartech.com/servers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Web Hosting",
          "item": "https://sixthstartech.com/servers/web-hosting"
        }
      ]
    }
    ];

    // server setup

    export const serverSetupSchema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sixthstar Technologies",
        "url": "https://sixthstartech.com",
        "logo": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
        "description": "Sixthstar Technologies provides professional server setup and maintenance services in Chennai, including configuration, deployment, and optimization, to ensure your infrastructure runs smoothly and efficiently.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600097",
          "addressCountry": "IN"
        },
        "telephone": "+919383996666",
        "sameAs": [
          "https://www.facebook.com/SixthstarTechnologies",
          "https://twitter.com/SixthstarTech",
          "https://www.linkedin.com/company/sixthstar-technologies",
          "https://www.instagram.com/SixthstarTech"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Server Setup and Maintenance Services",
        "provider": {
          "@type": "Organization",
          "name": "Sixthstar Technologies",
          "url": "https://sixthstartech.com"
        },
        "areaServed": "IN",
        "description": "Sixthstar Technologies offers professional server setup and maintenance services in Chennai, including configuration, deployment, and optimization, to ensure your infrastructure runs smoothly and efficiently.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "price": "X",
          "url": "https://sixthstartech.com/servers/server-setup-service"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sixthstartech.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Servers",
            "item": "https://sixthstartech.com/servers"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Server Setup Service in Chennai",
            "item": "https://sixthstartech.com/servers/server-setup-service"
          }
        ]
      }
      ];

  // zimbra alternative

  export const zimbraAltSchema = [{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Alternatives to Zimbra for Email and Collaboration",
    "description": "Explore the top alternatives to Zimbra for email hosting and collaboration tools. Find secure, scalable, and cost-effective solutions tailored to your business needs.",
    "author": {
      "@type": "Organization",
      "name": "Sixthstar Technologies"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sixthstar Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg"
      }
    },
    "datePublished": "2023-10-01", 
    "dateModified": "2023-10-01", 
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://sixthstartech.com/alternative-for-zimbra"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.jpg",
      "width": 1200,
      "height": 630
    }
  }];