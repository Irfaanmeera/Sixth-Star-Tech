import Head from 'next/head';
import useMetadata from '../lib/hooks/useMetadata';
import { useRouter } from 'next/router';

export default function MetaTags() {
  const { metadata, loading, error } = useMetadata();
  const router = useRouter();

  // Determine default metadata based on the current path from router
  const getDefaultMetadata = () => {
    // Clean the path by removing query strings and hashes
    const path = router.asPath.split(/[?#]/)[0];

    // If the path includes a numeric segment, extract the base path to determine defaults
    if (path.match(/\/\d+(\/|$)/)) {
      const basePath = path.replace(/\/\d+(\/.*)?$/, '') || '/';
      return getSectionDefaults(basePath);
    }

    return getSectionDefaults(path);
  };

  // Returns default metadata for specific sections of the website.
  const getSectionDefaults = (path) => {
    if (path.startsWith('/mail-services') || path === '/mail-services') {
      return {
        title: 'Mail Services - Sixth Star Technologies',
        description: 'Professional email and collaboration solutions',
        canonical_url: `https://sixthstartech.com${path}`,
        og_title: 'Mail Services Solutions',
        og_description: 'Enterprise-grade email and collaboration services',
        og_image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.webp',
        structured_data: null // using the consistent key
      };
    }

    if (path.startsWith('/products') || path === '/products') {
      return {
        title: 'Product Solutions - Sixth Star Technologies',
        description: 'Explore our comprehensive product offerings',
        canonical_url: `https://sixthstartech.com${path}`,
        og_title: 'Product Solutions',
        og_description: 'Discover our range of technology products',
        og_image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.webp',
        structured_data: null
      };
    }

    return {
      title: 'Sixth Star Technologies - IT Solutions Provider',
      description: 'WinLicense offers authentic Microsoft software licenses at competitive prices. Shop for Windows 10/11, Office 365, SQL Server, Microsoft Teams, Exchange Online, and more.',
      canonical_url: 'https://sixthstartech.com',
      og_title: 'Sixth Star Technologies',
      og_description: 'Your trusted technology solutions partner',
      og_image: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.webp',
      structured_data: null
    };
  };

  // Use metadata fetched from the hook, or default values if metadata is not set
  const meta = metadata || getDefaultMetadata();

  // Parse structured_data if available, ensuring that it's in JSON format.
  let structuredDataJSON = null;
  if (meta.structured_data) {
    try {
      structuredDataJSON =
        typeof meta.structured_data === 'string'
          ? JSON.parse(meta.structured_data)
          : meta.structured_data;
    } catch (e) {
      console.error('Error parsing structured data:', e);
    }
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical_url} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.og_title} />
      <meta property="og:description" content={meta.og_description} />
      <meta property="og:url" content={meta.canonical_url} />
      <meta property="og:site_name" content="Sixth Star Technologies" />
      <meta property="og:image" content={meta.og_image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.og_title} />
      <meta name="twitter:description" content={meta.og_description} />
      <meta name="twitter:image" content={meta.og_image} />
      <meta name="twitter:image" content={meta.og_image} />
      <meta name="author" content="Sixthstar Technologies" />
    </Head>
  );
}