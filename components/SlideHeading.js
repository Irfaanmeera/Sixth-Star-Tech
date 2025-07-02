// components/AnimatedHeading.js
import React, { useRef, useEffect } from 'react';

export default function SlideHeading({ children, className }) {
  const headingslideRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('animate', entry.isIntersecting);
      });
    });

    if (headingslideRef.current) {
      observer.observe(headingslideRef.current);
    }

    return () => {
      if (headingslideRef.current) {
        observer.unobserve(headingslideRef.current);
      }
    };
  }, []);

  return (
    <div>
    <h1 ref={headingslideRef} className={className}>
      {children}
    </h1>
    </div>
  );
}
