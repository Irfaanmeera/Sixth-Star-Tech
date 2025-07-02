import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <div className="not-found">
      <Head>
        <title>Page Not Found | Sixth Star Technologies</title>
        <meta name="description" content="The page you're looking for was not found." />
      </Head>
      <div className="container text-center" >
        <div className="error-content text-center">
        <Image
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1727675007/page-found-concept-illustration_lfkwxl.png"
            alt="404 - Not Found"
            width={400}
            height={300}
            priority={true}
          />
          <h1 className="error-title">404 - Page Not Found</h1>
          <p className="error-message">Oops! The page you're looking for doesn't exist or has been moved.</p>
          <button className='home-button'>
          <Link href="/" style={{color:'white'}} >
            Go back to Home
          </Link>
          </button>
        </div>
      </div>

      <style jsx>{`
        .not-found {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          // background-color: #f7fbff;
        }
        .error-title {
          font-size: 3rem;
          margin: 1.5rem 0;
          color: #ff6100;
        }
        .error-message {
          margin-bottom: 2rem;
          font-size: 1.2rem;
          text-align:center;
        }
          
        .home-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #246efd;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
        }
        .home-button:hover {
          background-color: #e55900;

        }
      `}</style>
    </div>
  );
};

export default Custom404;
