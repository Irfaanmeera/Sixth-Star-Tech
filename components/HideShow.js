import React, { useState } from 'react';

export default function HideShow({ children, className = "" }) {
  const [showSection, setShowSection] = useState(false);

  const handleClick = () => {
    setShowSection(!showSection);
  };

  return (
    <div>
      <div id="sechide" className={`${className} ${showSection ? 'secshow' : ''}`}>
        {children}
      </div>
      <button className="shbt justification-center" onClick={handleClick}>
        {showSection ? 'View Less' : 'View More'}
      </button>
    </div>
  );
}
