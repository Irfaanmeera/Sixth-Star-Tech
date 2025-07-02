// components/FullStackResources.jsx
'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Autoplay } from 'swiper/modules';

const HomeResources = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts?limit=5');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    Autoplay: true,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (loading) return <div className="text-center py-8">Loading resources...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <section className="fullstack-resource-sec py-12 bg-gray-50">
      <div className="container mx-auto px-2">
        <div className="row mb-3 fullstack-resource">
          <div className="col-12">
            <h3 className="text-2xl text-center font-bold text-gray-800">Resources</h3>
          </div>
        </div>

        <div className="row fullstack-resource">
          {posts.length > 0 ? (
            <Slider {...sliderSettings} className="">
              {posts.map((post) => (
                <div key={post.id} className="px-2 " >
                  <div className="box bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-102 transition-transform duration-300">
                    <div className="con p-6 shadow-xl md:shadow-2xl hover:shadow-3xl ">
                      {post.featured_image && (
                        <img 
                          src={post.featured_image} 
                          alt={post.title} 
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      )}
                      <h4 className="text-xl font-semibold mt-4 mb-2 text-gray-800 h-[57px] text-wrap2">{post.title}</h4>
                      <p className="text-gray-600 mb-4 line-clamp-3 text-wrap3">{post.excerpt || post.content.substring(0, 150)}...</p>
                      <button className="fullstackbtn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
                        <Link href={`/blogs/${post.slug}`}>Read more</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="col-12 text-center py-8">
              <p>No resources available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeResources;