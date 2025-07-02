import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
 {
    name: "Manikandan/Chrysalis Homeneeds Pvt. Ltd.,",
    photo: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747310481/Untitled_design_16_c7mbjt.png",
    rating: 4.5,
    title: "Dedicated Hosting",
    content:
      "“Professional guidance with unlimited resource availability. They allow you to easily scale the service at any time”",
  },
 {
    name: "Richard/Shankara Building Products Ltd. Ltd.,",
    photo: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747310481/Untitled_design_16_c7mbjt.png",
    rating: 4.5,
    title: "Cloud Hosting",
    content:
      "“Lower or increase your cloud storage based on your requirement since their service is redundant and flexible payment is available”",
  },
 {
    name: "Sethu Murugan/Hinduja Leyland",
    photo: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747310481/Untitled_design_16_c7mbjt.png",
    rating: 4.5,
    title: "SSL",
    content:
      "“Our e-commerce site had a growth only after installing SSL certification.They give you complete guidance right from installation to changing the site into HTTPS.”",
  },
  {
    name: "Ganapathy/Billroth Hospitals",
    photo: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747310481/Untitled_design_16_c7mbjt.png",
    rating: 4.5,
    title: "Spam Filter",
    content:
      "“Mail servers are a prodigy in Sixth Star. They have excellent features like blacklisting and abuse management where you won’t find any spams.”",
  },
];

const Rating = ({ rating }) => (
  <div className="flex gap-0.5 mt-1">
    {[...Array(5)].map((_, i) => {
      const index = i + 1;
      if (index <= Math.floor(rating)) {
        return (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="text-yellow-500 text-sm"
          />
        );
      } else if (rating > i && rating < index + 1) {
        return (
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            className="text-yellow-500 text-sm"
          />
        );
      } else {
        return (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="text-yellow-200 text-sm"
          />
        );
      }
    })}
  </div>
);

const Testimonial21 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white dark:bg-[#0b1727] py-8 px-4 text-zinc-900 dark:text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
       
      </div>

      <div className="relative py-2">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
  <div
    className="bg-white dark:bg-slate-800 shadow-xl rounded-xl px-20 py-20 pt-4 pb-4 h-full transition duration-300 hover:-translate-y-1"
   
  >
    <div className="flex items-center mb-6">
      <img
        src={t.photo}
        alt={t.name}
        className="rounded-full w-12 h-12 border mr-4"
      />
      <div>
        <h5 className="text-xl font-medium">{t.name}</h5>
        <Rating rating={t.rating} />
      </div>
    </div>
    <h6 className="text-lg font-semibold mb-2 text-blue-600">{t.title}</h6>
    <p className="text-base opacity-80">{t.content}</p>
  </div>
</SwiperSlide>


          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
       
      </div>
    </section>
  );
};

export default Testimonial21;
