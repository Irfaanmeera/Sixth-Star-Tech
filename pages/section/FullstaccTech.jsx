"use client";
import { useState } from "react";

const FullstaccTech = ({ Techtabs = [] }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg">
      {/* Left Sidebar - Scrollable Tabs */}
      <div className="md:h-64 overflow-y-auto border-b md:border-b-0 md:border-r border-gray-300 pr-4 scroll-container">
        <div className="flex flex-col space-y-3">
          {Techtabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 p-3 text-left text-lg font-medium rounded-md transition-all ${
                activeTab === tab.id
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">✦</span>
              <span>{tab.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Content Section */}
      <div className="flex-1 p-4">
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-6">
          {Techtabs.find((tab) => tab.id === activeTab)?.img.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullstaccTech;
