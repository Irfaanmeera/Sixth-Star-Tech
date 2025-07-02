"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaPlay } from "react-icons/fa";

const FullStackspot = ({spotlightData = []}) => {
  
  return (
    <div className="spotlight-section py-2">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="spotlight-slider"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {spotlightData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <button className="play-button flex items-center mt-4 text-red-500">
                  <FaPlay className="mr-2" /> Play Video
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FullStackspot;
