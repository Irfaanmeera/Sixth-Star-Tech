import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function DomainSlider() {
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
        slidesToShow: 3,
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
            <div className="slider-container domain-feat-slider">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div className="pb-2 pt-2 ">
                        <h3>Anti Phishing Protection</h3>
                        <p>Protect against fraudulent and fake sites</p>
                        <p>from stealing data of yours.</p>
                    </div>
                    <div className="pb-3 pt-3 ">
                        <h3>Legal Compliance</h3>
                        <p>Compelled to government</p>
                        <p>norms and Regulations</p>
                    </div>
                    <div className="pb-3 pt-3 ">
                        <h3>Improves Search Ranking</h3>
                        <p>Ensuring a secure and</p>
                        <p>consistent online presence.</p>
                    </div>
                    <div className="pb-3 pt-3 ">
                        <h3>Secured</h3>
                        <p>Protects from phishing and spams.</p>
                        <p>Secured with top SSL certificates.</p>
                    </div>
                    <div className="pb-3 pt-3 ">
                        <h3>Brand Integrity</h3>
                        <p>Keeping your brand's domain from</p>
                        <p>being misused or imitated.</p>
                    </div>
                    <div className="pb-3 pt-3 ">
                        <h3>Reducing Cybersquatting</h3>
                        <p>Preventing unapproved domain</p>
                        <p>registrations for financial gain.</p>
                    </div>
                    <div className="pb-3 pt-3 ">
                        <h3>Phishing Defense</h3>
                        <p>Keeping user data safe from being</p>
                        <p>stolen by fraudulent websites.</p>
                    </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                </div>
            </div>
        </div>
    );
}
