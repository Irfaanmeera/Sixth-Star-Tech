// components/HideShow.js
import React, { useState } from 'react';

export default function FeatureHideShow({ children, buttonText = "See More", className = "" }) {
  const [showSection, setShowSection] = useState(false);

  const feathandleClick = () => {
    setShowSection(!showSection);
  };

  return (
    <div>
      <div id="fetsechide" className={`${className} ${showSection ? 'fetsecshow' : ''}`}>
        {children}
      </div>
      <button className="featshbt justification-center" onClick={feathandleClick}>
      {showSection ? 'View Less' : 'View More'}
      </button>
    </div>
  );
}
