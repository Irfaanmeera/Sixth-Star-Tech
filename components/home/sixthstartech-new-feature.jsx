import React, { useState } from "react";
import {
  FaHeadset,
  FaBuilding,
  FaCogs,
  FaUsers,
  FaTachometerAlt,
  FaExpandArrowsAlt,
  FaTags,
  FaShieldAlt,
  FaPuzzlePiece,
  FaCloud,
  FaExchangeAlt,
  FaChartLine,
  FaCode,
  FaUserShield,
  FaSearch,
  FaBars,
  FaPenSquare,
  FaServer,
  FaDatabase,
  FaEnvelope,
  FaStarOfLife,
  FaDigitalTachograph,
  FaDesktop,
  FaHandPointUp
} from "react-icons/fa";

const allFeatures = [
  { id: 1, title: "Domain Registrations", icon: <FaBars /> },
  { id: 2, title: "Powerful Servers", icon: <FaServer /> },
  { id: 3, title: "Customized Control Panels", icon: <FaPenSquare /> },
  { id: 4, title: "Premium SSL certificate", icon: <FaShieldAlt /> },
  { id: 5, title: "Hasel Free Website Migration", icon: <FaDesktop/> },
  { id: 6, title: "99.99% Uptime Guaranteed", icon: <FaHandPointUp /> },
  { id: 7, title: "Protected Email Account", icon: <FaEnvelope /> },
  { id: 8, title: "Backup and Restore", icon: <FaDatabase /> },
  { id: 9, title: "Hyper-Scale Data Centers", icon: <FaDigitalTachograph /> },
  { id: 10, title: "High Availability", icon: <FaStarOfLife /> },                                            
  { id: 11, title: "Built-in Page Caching", icon: <FaExchangeAlt /> },
  { id: 12, title: "Wordpress Builder", icon: <FaChartLine /> },
  { id: 13, title: "One Click account setup", icon: <FaCode /> },
  { id: 14, title: "Malware scan and Removal", icon: <FaUserShield /> },
  { id: 15, title: "One click installer", icon: <FaSearch /> },
];

export default function FeaturesBentoGrid() {
  const [showModal, setShowModal] = useState(false);

  const initialFeatures = allFeatures.slice(0, 9);
  const extraFeatures = allFeatures.slice(9);

  const featureBoxClasses =
    "group bg-white border-t-4 border-blue-500 rounded-xl p-6 shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center font-sans text-center";

  const closeModal = () => setShowModal(false);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold font-sans text-center mb-16 text-navy">
         Our Key Features
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {initialFeatures.map(({ id, title, icon }) => (
            <div key={id} className={featureBoxClasses}>
              <div className="text-blue-600 text-4xl mb-4 group-hover:text-purple-600 transition">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition">
                {title}
              </h3>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-transform hover:scale-105"
          >
            View More
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
          >
            <div className="bg-white rounded-xl max-w-5xl w-full mt-8 max-h-[85vh] overflow-y-auto p-8 relative shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {extraFeatures.map(({ id, title, icon }) => (
                  <div
                    key={id}
                    className="group bg-white border-t-4 border-purple-500 rounded-xl p-5 shadow-sm hover:shadow-lg hover:bg-purple-50 transition-all flex flex-col items-center text-center ring-1 ring-gray-200"
                  >
                    <div className="text-purple-600 text-3xl mb-3 group-hover:text-blue-600 transition">
                      {icon}
                    </div>
                    <p className="font-semibold text-gray-700 group-hover:text-blue-700 transition text-center">
                      {title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-2 rounded-full transition-transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 bg-blue-100 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Left column: Heading */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Get your next Web Hosting from Sixthstar Technologies
            </h3>
          </div>

          {/* Right column: Rotating image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 min-w-[8rem] min-h-[8rem]">
              <div className="absolute inset-0 border-2 border-dashed border-purple rounded-full animate-spin-slow"></div>
              <img
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747284993/section_y0mmkl.gif"
                alt="Connect"
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full z-10"
              />
            </div>
          </div>
          
          {/* Center column: Button */}
          <div className="w-full md:w-1/3 text-center">
            <a
              href="https://sixthstartech.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-base sm:text-lg font-semibold hover:bg-blue-700 transition duration-300 w-full sm:w-auto">
                Connect with our Technical Experts
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}