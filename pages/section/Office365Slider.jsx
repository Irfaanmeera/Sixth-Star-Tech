import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Office365Slider = () => {
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
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080398/excel_mcq96n.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080403/onedrive_cetjul.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080408/onenote_jrmuhx.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080412/outlook-1_jwyfqx.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080417/powerpoint_bgbgag.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080422/sharepoint_rtvydq.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080427/skype_f57fmg.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080433/teams_zg7rr7.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080439/word_j2ccrg.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080444/yammer_dbxd9t.webp',
        // Add more logos here
    ];


    return (
        <div className='pt-3 pb-3'>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="container">
                        <Image src={logo} alt='office-365 logo' width={100} height={100} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Office365Slider;
