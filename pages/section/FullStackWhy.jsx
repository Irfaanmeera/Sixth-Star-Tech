"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaPlay } from "react-icons/fa";

const FullStackWhy = ({WhyChooseData = []}) => {
  
  return (
    <div className="spotlight-section full-stack-why-slider py-2">
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
        {WhyChooseData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <img src={item.image} alt={item.title} className="object-cover " style={{ width: "65px" }} />
              <div className="">
                <h3 className="text-6xl font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FullStackWhy;
