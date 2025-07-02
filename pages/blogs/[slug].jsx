import React, { useState, useEffect } from 'react';
import mysql from 'mysql2/promise';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import PopupForm from "./PopupForm";
import MoreBlogs from './MoreBlogs'
import Newsletter from '../forms/Newsletter'

function BlogPost({ post, relatedPosts }) {
  const [isClient, setIsClient] = useState(false);
  const [headings, setHeadings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Show popup after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsClient(true);

    // Extract H2 headings from post content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = post.content;
    const h2Elements = tempDiv.querySelectorAll("h2");
    const extractedHeadings = Array.from(h2Elements).map(h2 => h2.innerText);
    setHeadings(extractedHeadings);

    // Simulate loading delay for related posts
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust delay as needed
  }, [post.content]);

  if (!post) return <div>Post not found</div>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <link rel="canonical" href={`/blogs/${post.slug}`} />
        <meta name="author" content={post.author}></meta>
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featured_image} />
        <meta property="og:url" content={`/blogs/${post.slug}`} />
      </Head>

      <section className="post-banner-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4>
                <Link href="/">Home</Link> <i className="fa-solid fa-angles-right"></i> <Link href="/blogs">Blogs</Link> <i className="fa-solid fa-angles-right"></i>
              </h4>
              <h1>{post.title}</h1>
            </div>
            <div className="col-md-6">
              <Image
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1742197459/baremetal-bg_vw9dvu_uedr5b.webp"
                alt="Blog Page Banner"
                width={280}
                height={280}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-1">
        <aside className="md:col-span-1 hidden md:block p-4 post-toc">
          <div className='post-toc-con inset-shadow-sm inset-shadow-blue-600'>
            <h3 className="font-semibold mb-1">Table of Contents</h3>
            <ul className="list-disc pl-1 text-sm">
              {headings.length > 0 ? (
                headings.map((heading, index) => (
                  <li key={index}>
                    <a href={`#heading-${index}`} className="text-blue-600 hover:underline">{heading}</a>
                  </li>
                ))
              ) : (
                <li>No headings available</li>
              )}
            </ul>
            <div className="mt-4 p-4 bg-white rounded-lg post-share inset-shadow-sm inset-shadow-blue-600">
              <h4 className="font-semibold mb-2">Share this post:</h4>
              <div className="flex space-x-4 icon">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"><i className="fa-brands fa-facebook"></i></a>
                <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><i className="fa-brands fa-x-twitter"></i></a>
                <a href={`https://www.linkedin.com/shareArticle?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline"><i className="fa-brands fa-linkedin"></i></a>
                <a href={`https://api.whatsapp.com/send?text=${post.title} - ${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </aside>

        <article className="md:col-span-2 px-[20px] py-[20px]">
          <div className="text-gray-600 mb-2">{formatDate(post.created_at)}</div>
          <div className="prose post-content max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="container mx-auto px-4 py-8 shadow-lg rounded-lg mt-3 border-x border-[#014c6c]">
            <h3 className="text-2xl font-bold mb-4">About the Author</h3>
            <p className="text-gray-700">Written by {post.author || 'Guest Author'}.</p>
            <p>{post.author_bio}</p>
          </div>
            
          <div className="container mx-auto p-4 text-center shadow-2xl rounded-lg mt-3 bg-linear-to-r from-cyan-600 to-blue-500">
          <div className="row ">

<div className="col-md-6 text-left">
<h3 className="text-2xl font-bold text-white text-left">Elevate Your Digital Presence</h3>
            <p className="text-white">Have a question or feedback? Reach out to us.</p>
            <button onClick={() => setShowPopup(true)} className="mt-4 px-6 py-2 rounded bg-blue-600 text-left text-white rounded-md">Contact Us</button>
          
</div>

<div className="col-md-6">
<Image 
src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1742204569/hand-drawn-illustration-people-with-smartphone-marketing_lqtopy.webp"
alt="Blog Banner"
width={300} // Set appropriate dimensions
height={300}
loading="eager" // Prevent lazy loading
priority={true}
/>
</div>

</div>
            </div>
        </article>

        <aside className="md:col-span-1">
          <div className='post-art-con '>
            <div className='inset-shadow-sm p-4 rounded inset-shadow-blue-600'>
            <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
            <ul>
              {isLoading ? (
                <li className="">Loading related articles...</li>
              ) : relatedPosts.length > 0 ? (
                relatedPosts.map((related) => (
                  <li key={related.id} className="mb-2 list-decimal ">
                    <img src={related.featured_image} alt="" />
                    <Link href={`/blogs/${related.slug}`} className=" hover:underline" aria-label={`Read more about ${related.title}`}>
                      {related.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="">No related articles</li>
              )}
            </ul>
            </div>
            <div className="container mx-auto px-4  py-[30px] text-center shadow-2xl rounded-lg mt-3 bg-linear-to-r/hsl from-indigo-500 to-teal-400">
          
          <h4 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h4>
          <p className="text-white text-center">Get the latest updates about {post.category}</p>
          {/* <input type="email" placeholder="Enter your email" className="px-4 py-2 border rounded-md" style={{color:'white'}} />
          <button className="ml-2 px-6 py-2 bg-blue-600 text-white rounded-md m-3" >Subscribe</button> */}
          <Newsletter />
        </div>
          </div>
         
        </aside>
      </div>

      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

        {/* more blog sec starts */}

        <MoreBlogs />

        {/* more blog sec ends */}
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    const connection = await pool.getConnection();

    // Fetch current post
    const [posts] = await connection.execute('SELECT * FROM blog_posts WHERE slug = ? AND published = 1', [params.slug]);

    if (posts.length === 0) {
      return { notFound: true };
    }

    const post = posts[0];

    // Fetch related articles (same category, excluding the current post, sorted by latest)
    const [relatedPosts] = await connection.execute(
      'SELECT * FROM blog_posts WHERE category_id = ? AND slug != ? AND published = 1 ORDER BY created_at DESC LIMIT 5',
      [post.category_id, post.slug]
    );

    await connection.release();

    return {
      props: {
        post: JSON.parse(JSON.stringify(post)),
        relatedPosts: JSON.parse(JSON.stringify(relatedPosts)),
      },
    };
  } catch (error) {
    console.error('Database error:', error.message);
    return { notFound: true };
  }
}

export default BlogPost;