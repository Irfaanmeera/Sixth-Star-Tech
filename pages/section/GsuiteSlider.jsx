import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const GsuiteSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    };

    const logos = [
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078716/chat-1-1_vok9nu.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078722/cloud_hg1o05.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078727/currents_u9v5m7.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078731/docs_rfw10h.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078743/google-apps-script_d3xgj7.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078747/google-calendar_xm1b89.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078752/google-drive_fiv83x.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078757/google-forms_lunw9r.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078763/google_sh2npg.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078768/keeps_amsytk.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078773/meet_xophyc.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078778/new_ji2yei.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078782/sheets_y1kgzz.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078788/slides_ml79nz.webp',
        // Add more logos here
    ];

    return (
        <div className='pt-3 pb-3'>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="container">
                        <Image src={logo} alt='Gsuite-logo' width={100} height={100} loading='lazy'/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default GsuiteSlider;
