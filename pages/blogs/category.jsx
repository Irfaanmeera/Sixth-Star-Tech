// pages/category/index.js

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CategoryPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/posts/categories')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch categories');
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        <h2>Error loading categories</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {Object.entries(data).map(([key, category]) => {
          if (!category.posts || category.posts.length === 0) return null;

          return (
            <div key={key} className="p-4 my-3 rounded inset-shadow-sm inset-shadow-blue-200/50">
              <h4 className="text-xl font-bold py-3 text-center blog-catgory-head">
                {category.category_name}
              </h4>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 blog-card">
                {category.posts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden p-3">
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

                    <div className="p-3 blog-card">
                      <h2 className="text-xl font-bold mb-2 text-wrap2">{post.title}</h2>
                      <h3 className='d mb-2 blog-card-cat'>{post.category}</h3>
                      <div className="text-gray-600 mb-2">{formatDate(post.created_at)}</div>
                      <p className="text-gray-600 mb-4 text-wrap3 truncate-text">{post.excerpt}</p>
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
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
