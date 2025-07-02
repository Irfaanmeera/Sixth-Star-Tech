import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Appslider = () => {
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
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231530/git_lyke9t.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231528/atom_cvxju9.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231528/apple-1_qpnuqg.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231528/android-1_x2ecga.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231532/icons8-flutter-512_vbg9k4.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231533/icons8-xcode-512_ksmgpu.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231531/icons8-android-studio-512_ij0j2l.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231533/xd_qlvmm9.webp',
        'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231529/figma_rqdhye.webp',
        // Add more logos here
    ];

    return (
        <div className='pt-3 pb-3'>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="container">
                        <img src={logo} alt='mobile app logo' width={100} height={100} loading='lazy' />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Appslider;
