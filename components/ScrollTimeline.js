import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';      // Import AOS library
import AnimatedHeading from '../components/AnimatedHeading'; 

export default function ScrollTimeline() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS for scroll animation
  }, []);

  return (
    <div>
      <div className="timeline timeline-pc">
        <div className="timeline-year">
          <AnimatedHeading className='server heading'>Your Server Journey Starts Here</AnimatedHeading>
        </div>

        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-content left">
            <div className="card-left">
              <p>configure your server with precision, utilizing customized Apache or Nginx to ensure optimal speed, security, and reliability</p>
            </div>
          </div>
          <div className="timeline-icon left">
            <i className="fa fa-flag"></i>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-left">
          <div className="timeline-content right">
            <div className="card-right">
              <p>We fine-tune Apache, Nginx, and MySQL to ensure your applications run at peak performance. With every detail carefully configured, you can expect faster load times and enhanced reliability.</p>
            </div>
          </div>
          <div className="timeline-icon right">
            <i className="fa fa-plane"></i>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-content left">
            <div className="card-left">
              <p>We set up popular control panels like cPanel, Plesk, ZPanel, and Kloxo, making server management as easy as a few clicks Whether you're a beginner or an expert, we’ve got the tools and expertise to simplify your server management experience.</p>
            </div>
          </div>
          <div className="timeline-icon left">
            <i className="fa fa-flag"></i>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-left">
          <div className="timeline-content right">
            <div className="card-right">
              <p>We’re here to assist! From WordPress to Strapi and beyond, we help you launch your website seamlessly on a robust server foundation.</p>
            </div>
          </div>
          <div className="timeline-icon right">
            <i className="fa fa-plane"></i>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="timeline timeline-mobile">
        {/* You can reuse the same timeline items here for mobile */}
        <div className="timeline-year">
          <AnimatedHeading className='server heading'>Features</AnimatedHeading>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-icon">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <div className="card-right">
              <p>Configure your server with precision using customized Apache or Nginx for optimal speed, security, and reliability. Our server setup services in India ensure your system is perfectly tailored to your needs.</p>
            </div>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-icon">
            <i className="fa fa-plane"></i>
          </div>
          <div className="timeline-content">
            <div className="card-right">
              <p>We fine-tune Apache, Nginx, and MySQL to guarantee your applications run at peak performance. Expect faster load times and improved reliability with every detail carefully optimized.</p>
            </div>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-icon">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <div className="card-right">
              <p>Simplify server management with popular control panels like cPanel, Plesk, WHM, and CWPPro. Whether you’re a beginner or an expert, our expertise makes managing your server as easy as a few clicks.</p>
            </div>
          </div>
        </div>

        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-icon">
            <i className="fa fa-plane"></i>
          </div>
          <div className="timeline-content">
            <div className="card-right">
              <p>Launch your website seamlessly! From WordPress to Strapi and beyond, we’ll help you set up a robust server foundation for your online presence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
