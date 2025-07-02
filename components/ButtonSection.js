import React, { useState } from 'react';
import styles from './ButtonSection.module.css';

const ButtonSection = () => {
  const [isSectionVisible, setSectionVisible] = useState(false);

  const toggleSection = () => {
    setSectionVisible(!isSectionVisible);
  };

  return (
    <div>
      <button className={styles.shbt} onClick={toggleSection}>
        {isSectionVisible ? 'View Less' : 'View More'}
      </button>
      <div className={isSectionVisible ? styles.secshow : styles.sechide}>
        {/* Your content to show/hide goes here */}
      </div>
    </div>
  );
};

export default ButtonSection;
