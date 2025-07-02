import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const FullStackStories = ({ stories = [] }) => {
  const storiesRef = useRef(null);

  useEffect(() => {
    const storiesContainer = storiesRef.current;

    let isDragging = false;
    let startX;
    let scrollLeft;

    const startDrag = (e) => {
      isDragging = true;
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = storiesContainer.scrollLeft;
    };

    const stopDrag = () => {
      isDragging = false;
    };

    const doDrag = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1; // Adjust scroll speed
      storiesContainer.scrollLeft = scrollLeft - walk;
    };

    // Mouse events
    storiesContainer.addEventListener('mousedown', startDrag);
    storiesContainer.addEventListener('mouseup', stopDrag);
    storiesContainer.addEventListener('mouseleave', stopDrag);
    storiesContainer.addEventListener('mousemove', doDrag);

    // Touch events
    storiesContainer.addEventListener('touchstart', startDrag);
    storiesContainer.addEventListener('touchend', stopDrag);
    storiesContainer.addEventListener('touchmove', doDrag);

    // Cleanup
    return () => {
      storiesContainer.removeEventListener('mousedown', startDrag);
      storiesContainer.removeEventListener('mouseup', stopDrag);
      storiesContainer.removeEventListener('mouseleave', stopDrag);
      storiesContainer.removeEventListener('mousemove', doDrag);

      storiesContainer.removeEventListener('touchstart', startDrag);
      storiesContainer.removeEventListener('touchend', stopDrag);
      storiesContainer.removeEventListener('touchmove', doDrag);
    };
  }, []);

  return (
    <div className="fullstack-success-sec">
      <div className="success-stories container" ref={storiesRef}>
        {stories?.map((story) => (
          <div
            key={story.id}
            className="con"
            style={{ backgroundImage: `url(${story.backgroundImage})` }}
          >
            <img src={story.logo} alt={story.title} />
            {/* <h3 className="w-50">{story.title}</h3>
            <ul>
              {story.features.map((feature, index) => (
                <li key={index}>
                  <i className="fa-solid fa-forward"></i> {feature}
                </li>
              ))}
            </ul>
            <button className='fullstackbtn'>
              <Link href={story.caseStudyLink}>Case Study</Link>
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FullStackStories;
