import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import Pagination from '../../components/Pagination';
import CategoryPage from './category';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

function BlogIndex({ initialData }) {
  const [posts, setPosts] = useState(initialData?.posts || []);
  const [pagination, setPagination] = useState(initialData?.pagination || {
    currentPage: 1,
    totalPages: 0,
    totalPosts: 0,
    hasMore: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchPosts = async (page = 1, search = '') => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/posts?page=${page}&search=${encodeURIComponent(search)}`
      );
      if (!response.ok) throw new Error("Failed to fetch posts");

      const data = await response.json();
      setPosts(data.posts || []);
      setPagination(data.pagination || {
        currentPage: page,
        totalPages: 0,
        totalPosts: 0,
        hasMore: false
      });
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err.message);
      setPosts([]);
      setPagination({
        currentPage: 1,
        totalPages: 0,
        totalPosts: 0,
        hasMore: false
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchPosts(1, term);
  };

  const handlePageChange = (page) => {
    fetchPosts(page, searchTerm);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderPostCard = (post, index, large = false) => (
    <div key={post.id} className={`${large ? 'md:col-span-1' : ''} bg-white rounded-lg shadow-md overflow-hidden p-3`}>
      {post.featured_image ? (
      // Image component inside renderPostCard
<Image
  src={post.featured_image}
  alt={post.title}
  className={`${large ? 'h-74' : 'h-58'} w-full object-cover hover:scale-103 transition-transform duration-300`}
  width={800}  // Set appropriate width
  height={400}  // Set appropriate height
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizing
  priority={true} // Preload important images to improve LCP
/>



      ) : (
        <div className={`${large ? 'h-74' : 'h-58'} w-full bg-gray-200 flex items-center justify-center`}>
          <span className="text-black-500">No image available</span>
        </div>
      )}
      <div className="p-3 blog-card">
        <h2 className="text-[18px] font-bold mb-2 text-wrap2">{post.title}</h2>
        <h3 className='d mb-2 blog-card-cat'>{post.category}</h3>
        <div className="text-gray-600 mb-2">{formatDate(post.created_at)}</div>
        <p className="text-gray-600 mb-4 truncate-text">{post.excerpt}</p>
        <Link 
  href={`/blogs/${post.slug}`} 
  className="text-blue-500 hover:underline" 
  aria-label={`Read more about ${post.title}`}
  title={`Read more about ${post.title}`}
>
  Read More
</Link>
      </div>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Blogs | servers | hosting | email | spam filter - Sixthstar tech</title>
        <meta name="description" content='get to know about the latest trend , news and knowldge about the the servers , data centers, hostings, business mails and much more. read now.' />
        <meta property="og:title" content='Discover the Latest Tech Trends on Sixth Star Tech Blogs' />
        <link rel="canonical" href='https://sixthstartech.com/blogs' />
        <meta name="author" content='sixthstartech'></meta>
        <meta property="og:description" content='get to know about the latest trend , news and knowldge about the the servers , data centers, hostings, business mails and much more. read now.' />
        <meta property="og:image" content='https://res.cloudinary.com/dwyn5jgh3/image/upload/v1742195135/blogs-banner_iu5org.webp' />
        <meta property="og:url" content='https://sixthstartech.com/blogs' />
      </Head>

      {error && (
        <div>
          <h1>Error loading data</h1>
          <p>{error}</p>
        </div>
      )}

      <section className='blogs-banner-sec'>
        <div className="container align-content-center">
          <div className="row justify-content-start">
            <div className="row ">

<div className="col-md-6">
<h1 className='banner-title'>Blogs</h1>
</div>

<div className="col-md-6">
<Image
src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1742195135/blogs-banner_iu5org.webp"
alt="Blog Banner"
width={300} // Set appropriate dimensions
height={300}
loading="eager" // Prevent lazy loading
priority={true} 
/>
</div>

</div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 post-card rounded inset-shadow-sm inset-shadow-blue-200/50">
        <div className="max-w-2xl mx-auto mb-8">
          
          <SearchBar onSearch={handleSearch} />
        </div>

        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <>
            {/* First row - 2 posts */}
            <div className="grid gap-8 md:grid-cols-2 mb-8">
              {posts.slice(0, 2).map((post, index) => renderPostCard(post, index, true))}
            </div>

            {/* Second row - 3 posts */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.slice(2, 5).map((post, index) => renderPostCard(post, index))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No posts found.
              </div>
            )}

            {pagination.totalPages > 1 && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
        
      </div>
        <CategoryPage />

     
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/posts`);

    if (!response.ok) throw new Error('Failed to fetch');

    const data = await response.json();

    return {
      props: {
        initialData: data
      }
    };
  } catch (error) {
    console.error('Error fetching initial data:', error);
    return {
      props: {
        initialData: {
          posts: [],
          pagination: {
            currentPage: 1,
            totalPages: 0,
            totalPosts: 0,
            hasMore: false
          }
        }
      }
    };
  }
}

export default BlogIndex;
