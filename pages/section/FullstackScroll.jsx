import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import AnimatedHeading from '../../components/AnimatedHeading';

const timelineData = [
  {
    icon: 'fa-flag',
    content: 'Configure your server with precision using customized Apache or Nginx for optimal speed, security, and reliability.',
    direction: 'left',
  },
  {
    icon: 'fa-plane',
    content: 'We fine-tune Apache, Nginx, and MySQL to guarantee your applications run at peak performance. Expect faster load times and improved reliability with every detail carefully optimized.',
    direction: 'right',
  },
  {
    icon: 'fa-flag',
    content: 'Simplify server management with popular control panels like cPanel, Plesk, WHM, and CWPPro. Whether you’re a beginner or an expert, our expertise makes managing your server as easy as a few clicks.',
    direction: 'left',
  },
  {
    icon: 'fa-plane',
    content: 'Launch your website seamlessly! From WordPress to Strapi and beyond, we’ll help you set up a robust server foundation for your online presence.',
    direction: 'right',
  }
];

export default function ScrollTimeline() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* PC View */}
      <div className="timeline timeline-pc">
        <div className="timeline-year">
          <AnimatedHeading className="server heading">Your Server Journey Starts Here</AnimatedHeading>
        </div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item`}
            data-aos={item.direction === 'left' ? 'fade-right' : 'fade-left'}
          >
            <div className={`timeline-content ${item.direction}`}>
              <div className={`card-${item.direction}`}>
                <p>{item.content}</p>
              </div>
            </div>
            <div className={`timeline-icon ${item.direction}`}>
              <i className={`fa ${item.icon}`}></i>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="timeline timeline-mobile">
        <div className="timeline-year">
          <AnimatedHeading className="server heading">Features</AnimatedHeading>
        </div>

        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index} data-aos="fade-up">
            <div className="timeline-icon">
              <i className={`fa ${item.icon}`}></i>
            </div>
            <div className="timeline-content">
              <div className="card-right">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
