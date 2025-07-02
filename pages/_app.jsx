import './styles/style.css';
import './styles/responsive.css';
import Header from './section/Header';
import Footer from './section/Footer';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "@fortawesome/fontawesome-free/css/all.min.css"; 

// Lazy load TawkMessenger to improve initial load time
const TawkMessenger = dynamic(() => import('../components/TawkMessenger'), { ssr: false });

// Import Google Fonts
import { Roboto, Noto_Sans_Hebrew, Urbanist, Montserrat } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'], // Load only necessary weights
  subsets: ['latin'],
});

const notoSansHebrew = Noto_Sans_Hebrew({
  weight: ['400', '700'], // Minimize weights
  subsets: ['hebrew'],
});

const urbanist = Urbanist({
  weight: ['400', '500', '700'], // Minimize weights
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['400', '500', '700'], // Minimize weights
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Load Bootstrap JS for interactive components
    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch(error =>
      console.error('Failed to load Bootstrap:', error)
    );

    // Function to load Google Tag Manager (GTM) dynamically
    const loadGTM = () => {
      try {
        import('react-gtm-module').then(({ default: TagManager }) => {
          TagManager.initialize({ gtmId: 'GTM-MXP99G7D' });
        });
      } catch (error) {
        console.error('Failed to initialize GTM:', error);
      }
    };

    if (typeof window !== 'undefined') {
      setTimeout(loadGTM, 3000); // Delay GTM initialization by 3 seconds

      // Load blog-specific styles dynamically
      if (router.pathname.startsWith('/blogs')) {
        import('./blogs/style/blogresponsive.css');
        import('./blogs/style/blogstyle.css');
        import('./blogs/style/style.css');
      }
    }
  }, [router.pathname]);

  return (
    <div
      className={`${roboto.className} ${notoSansHebrew.className} ${urbanist.className} ${montserrat.className} app-main`}
    >
      <Head>
        {/* Favicon */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1723874112/sixthstar-favicon_cvxvuj.ico"
        />
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <TawkMessenger />
      <Footer />
    </div>
  );
}