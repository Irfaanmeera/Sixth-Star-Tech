import { useState } from 'react';

const FullstackTabsec = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(1);

  // Ensure activeTab is within bounds
  const activeTabData = tabs[activeTab - 1];

  return (
    <div className="w-full flex flex-col items-center mt-10">
      {/* Tab Buttons */}
      <div className="flex bg-gray-200 p-2 rounded-full space-x-4 fullstack-hiring-tab">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-2 text-gray-600 font-medium transition-all duration-300 ${
              activeTab === index + 1
                ? 'bg-white shadow text-black font-semibold'
                : 'hover:text-black'
            }`}
            onClick={() => setActiveTab(index + 1)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTabData && (
        <div className="mt-6 w-full max-w-7xl fullstack-hiring-con row">
          {activeTabData.content.map((box, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6 mb-4 box col-lg-4 col-md-12">
              <div className="head">
                <h4 className="font-bold text-center">{box.title}</h4>
              </div>
              <ul className="mt-2 text-gray-600">
                {box.description.map((point, i) => (
                  <li key={i} className="mb-1">
                    <i className="fa-regular fa-circle-check"></i>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FullstackTabsec;