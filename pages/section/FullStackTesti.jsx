import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect } from 'react';

const FullStackTesti = ({ testimonials = [] }) => {
  useEffect(() => {
    const prevButton = document.querySelector('.custom-prev');
    const nextButton = document.querySelector('.custom-next');

    if (prevButton && nextButton) {
      prevButton.classList.add('swiper-button-prev');
      nextButton.classList.add('swiper-button-next');
    }
  }, []);

  return (
    <div className="py-3">
      <div className="relative testislider w-6xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="px-6"
        >
          {testimonials.map((client) => (
            <SwiperSlide key={client.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-24 h-24 rounded-xl object-cover mb-4 md:mb-0"
                  width={'50%'}
                />
                <div className="md:ml-6 text-center md:text-left">
                  <h3 className="text-lg font-bold text-left">{client.name}</h3>
                  <p className="text-gray-500 mb-1">{client.designation}</p>
                  <p className="text-gray-700 mt-2 h-[90px]">{client.testimonial}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center mt-4 space-x-6 but">
          <button className="custom-prev text-black px-4 py-2 rounded-full"></button>
          <button className="custom-next text-black px-4 py-2 rounded-full"></button>
        </div>
      </div>
    </div>
  );
};

export default FullStackTesti;