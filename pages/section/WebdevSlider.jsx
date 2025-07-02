import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function WebdevSlider() {
    let sliderRef = useRef(null);

    const play = () => {
        sliderRef.slickPlay();
    };

    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    centerMode: true 
                }
            },
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 2,
                    centerMode: true 
                }
            },
        ]
    };

    return (
        <div>
            <div className="slider-container webdev-slider">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div className="pb-2 payroll-slides">
                        <div className="slide">
                        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722083939/marketplace_vkt81v.svg" width={68} height={68} alt="ecom"  />
                        <h3>E-Commerce Development​</h3>
                        <p>Our developers help companies to build excellent e-commerce website created in way that customer should not look for second chance in purchasing, so it helps to retain customers.</p>
                        </div>
                    </div>
                    <div className="pb-2  webdev-slides ">
                             <div className="slide">
                        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722083974/website-hosting-icon_xbz6su.svg" width={68} height={68} alt="cms" />
                        <h3>CMS Web Development</h3>
                        <p>Content Management System based website is actually built according to your specifications. Our user friendly solutions help our clients to modify website based on their needs, without looking for a technical expert.</p>
                        </div>
                    </div>
                    <div className="pb-2  webdev-slides ">
                    <div className="slide">
                        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722083927/erp-2_haruox.svg" width={68} height={68} alt="erp logo" />
                        <h3>ERP Web Development</h3>
                        <p>Our ERP development exceeds beyond basic functionalities as it is one of the business development software looks after finance, production and planning, inventory, human resource and payroll.</p>
                        </div>
                    </div>
                    <div className="pb-2  webdev-slides ">
                    <div className="slide">
                        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722083934/hotel_tsp83y.svg" width={68} height={68} alt="hotel" />
                        <h3>Hotel Management</h3>
                        <p>Our team will create powerful website for hotel so that you can make your presence in hotel industry, we offer feature-rich solutions for hotel management site for mid, large hotel business with cost-efficient.</p>
                        </div>
                    </div>
                    <div className="pb-2 webdev-slides ">
                    <div className="slide">
                        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722083914/addon-extension-icon_he8neg.svg"  width={68} height={68}alt="web application" />
                        <h3>Web Application </h3>
                        <p>We aim for efficiency in web applications by subjecting them to obtain design standards and testing. In this manner, we deliver web applications to our client's within the given deadline with exotic features.</p>
                        </div>
                    </div>
                    <div className="pb-2 webdev-slides ">
                    <div className="slide">
                        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722083920/crm-browser-icon_qu21xa.svg" width={68} height={68} alt="crm" />
                        <h3>CRM Web Development</h3>
                        <p>Our CRM web development is relevant for all company sizes which is simple and flexible. In CRM website one can track sales, serve clients in the best way by offering them customer support systems.</p>
                        </div>
                    </div>
                    <div className="pb-2 webdev-slides ">
                    <div className="slide">
                        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722083960/mobile-app-icon_jy2umw.svg" width={68} height={68} alt="mobile app" />
                        <h3>Mobile Application</h3>
                        <p>Our developer team is well expertise in the field of mobile application development for supporting the daily activities of an organization to enhance business development at an advanced level.</p>
                        </div>
                    </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                </div>
            </div>
        </div>
    );
}
