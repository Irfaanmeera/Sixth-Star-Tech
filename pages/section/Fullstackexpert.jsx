import React, { useState } from 'react';

const Fullstackexpert = ({ services = [] }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto px-4 py-3">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white fullstack-expertise-con shadow-lg rounded-lg p-2 flex flex-col items-center transition-all duration-500 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="font-semibold mb-2 wrap2 p-3">{service.title}</h3>
            <div className="relative h-55 flex items-start justify-center" style={{ width: '90%' }}>
              <p
                className={`absolute text-gray-600 transition-all  duration-500 px-3 p-3 leading-relaxed ${
                  hoveredIndex === index ? '-translate-y-6 opacity-0' : 'opacity-100'
                }`}
              >
                {service.content}
              </p>
              <div
                className={`absolute transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <img src={service.img} alt={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fullstackexpert;