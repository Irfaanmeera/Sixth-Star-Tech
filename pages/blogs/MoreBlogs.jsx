'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow right-arrow" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow left-arrow" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const MoreBlogs = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/more-blogs');
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  const bgColors = ['#FFC107', '#7B61FF', '#F5564E']; // Change or extend as needed

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-3 more-blogs-slider relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-center">More Topics</h3>
        <Link href="/blogs/category" className="text-sky-500 font-semibold">All Topics</Link>
      </div>

      {categories.length > 0 ? (
        <Slider {...sliderSettings}>
          {categories.map((category, index) => (
            <div key={category.id} className="p-2 slider-item">
              <Link href={`/blogs/category/${category.slug}`} legacyBehavior>
                <a
                  className="block rounded-lg shadow-lg text-white text-left relative overflow-hidden"
                  style={{
                    backgroundColor: bgColors[index % bgColors.length],
                    minHeight: '330px',
                    padding: '20px',
                  }}
                >
                  <p className="text-sm font-bold mb-2">
                    {category.posts_count} RESOURCES
                  </p>
                  <h4 className="text-xl font-semibold mb-4 leading-tight">
                    {category.name}
                  </h4>
                  <div className="bottom-4 right-4 ">
                    <Image
                      src={category.img}
                      alt={category.name}
                      width={200}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default MoreBlogs;
