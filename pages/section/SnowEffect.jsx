"use client";
import { useEffect } from "react";
import styles from '../styles/SnowEffect.module.css';

const SnowEffect = () => {
  useEffect(() => {
    const numberOfFlakes = 200;
    const container = document.getElementById("snow-container");

    if (container) {
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < numberOfFlakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = styles.snowflake;

        // Random initial position
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.top = `${Math.random() * 100}%`;

        // Varied sizes for depth effect
        const size = [3, 4, 5, 6][Math.floor(Math.random() * 4)];
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Base duration for falling (smaller flakes fall slower)
        const duration = size <= 3 ? Math.random() * 20 + 20 : Math.random() * 10 + 10;
        snowflake.style.setProperty("--duration", `${duration}s`);

        // Sway animation properties
        const swayDuration = Math.random() * 6 + 4;
        const swayAmount = Math.random() * 15 + 5;
        snowflake.style.setProperty("--sway-duration", `${swayDuration}s`);
        snowflake.style.setProperty("--sway-left", `-${swayAmount}px`);
        snowflake.style.setProperty("--sway-right", `${swayAmount}px`);

        // Random wind effect (reduced for more natural look)
        const windShift = (Math.random() - 0.8) * 100;
        snowflake.style.setProperty("--wind-shift", `${windShift}px`);

        // Random opacity for depth effect
        snowflake.style.opacity = Math.random() * 0.5 + 0.3;

        fragment.appendChild(snowflake);
      }

      container.innerHTML = "";
      container.appendChild(fragment);
    }
  }, []);

  return (
    <div id="snow-container" className={styles.snowContainer}></div>
  );
};

export default SnowEffect;