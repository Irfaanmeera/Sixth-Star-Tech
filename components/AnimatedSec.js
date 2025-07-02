// components/AnimatedHeading.js
import React, { useRef, useEffect } from 'react';

export default function AnimatedSec({ children, className }) {
  const animatesecRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('animate', entry.isIntersecting);
      });
    });

    if (animatesecRef.current) {
      observer.observe(animatesecRef.current);
    }

    return () => {
      if (animatesecRef.current) {
        observer.unobserve(animatesecRef.current);
      }
    };
  }, []);

  return (
    <div ref={animatesecRef} className={className}>
      {children}
    </div>
  );
}
