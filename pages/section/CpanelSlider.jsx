import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CpanelSlider = () => {
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
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722081355/centos_ygipze.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722081360/plesk_l1y7dy.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722081365/ubuntu_xerhus.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722081343/intel_qa8xhv.webp',
        // Add more logos here
    ];


    return (
        <div className='pt-3 pb-3'>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="container">
                        <img src={logo} alt='cpanel logo' width={100} height={100} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CpanelSlider;
