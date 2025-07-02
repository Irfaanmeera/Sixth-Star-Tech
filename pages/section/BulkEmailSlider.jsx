import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function BulkEmailSlider() {
    let sliderRef = useRef(null);

    const play = () => {
        sliderRef.slickPlay();
    };

    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
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
            <div className="slider-container bulk-email-slider">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div className="pb-2 pt-2 bulk-email-slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722337884/zimbra-logo_qqngje.webp" alt="" width={50} height={50} />
                        <h4>Zimbra</h4>
                    </div>
                    <div className="pb-3 pt-3 bulk-email-slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315643/carbonio-logo_gbz7oz.webp" alt="" width={50} height={50} />
                        <h4>Carbonio</h4>
                    </div>
                    <div className="pb-3 pt-3 bulk-email-slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1729226815/pngwing.com_ytnxly.png" alt="" width={50} height={50} />
                        <h4>Cpanel</h4>
                       
                    </div>
                    <div className="pb-3 pt-3 bulk-email-slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722327574/gsuite-logo_xmg9nn.webp" alt="" width={50} height={50} />
                        <h4>Gmail</h4>
                       
                    </div>
                    <div className="pb-3 pt-3 bulk-email-slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722399511/office_lrvhro.webp" alt="" width={50} height={50} />
                        <h4>office 365</h4>
                    </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                </div>
            </div>
        </div>
    );
}
