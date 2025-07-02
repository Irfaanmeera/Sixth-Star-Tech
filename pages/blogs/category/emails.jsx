import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Pagination from 'react-bootstrap/Pagination';
import Link from 'next/link';
import Head from 'next/head';

const Email = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/posts/categories/email?page=${currentPage}&limit=12`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`/blog?page=${page}`, undefined, { shallow: true });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
       <Head>
        <title>Boost Your Business with Expert Email Tips from SixthStarTech</title>
        <meta name="description" content='Looking to improve your email game? Explore our blog category for insights on list building, automation, and more!' />
        <meta property="og:title" content='Boost Your Business with Expert Email Tips from SixthStarTech' />
        <link rel="canonical" href='https://sixthstartech.com/blogs/category/emails' />
        <meta name="author" content='sixthstar tech'></meta>
        <meta property="og:description" content='Looking to improve your email game? Explore our blog category for insights on list building, automation, and more!' />
        <meta property="og:image" content='https://res.cloudinary.com/dwyn5jgh3/image/upload/v1742211711/mail_raevhv.png' />
        <meta property="og:url" content='https://sixthstartech.com/blogs/category/emails' />
      </Head>
      <section className='blogs-banner-sec'>
        <div className="container align-content-center">
          <div className="row justify-content-start">
            <div className="col-12">
              <Link href="/blogs">
                <h1 className='banner-title text-center'>Emails</h1>
              </Link>
              <p className='banner-dec'></p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden p-3">
                {post.featured_image ? (
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="h-58 w-full object-cover hover:scale-103 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x400';
                    }}
                  />
                ) : (
                  <div className="h-58 w-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}
                <div className="p-3">

                  <h4 className="text-lg font-bold mb-2">{post.title}</h4>
                  <div className="text-gray-600  mb-2">{formatDate(post.created_at)}</div>
                  <p className="text-gray-600 mb-4 truncate-text">{post.excerpt}</p>
                  <Link href={`/blogs/${post.slug}`} className="text-blue-500 hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center my-4">
          <Pagination>
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Email;