import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SeoSlider() {
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
            <div className="slider-container seo-slider">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div className="pb-2 seo-slides">
                        <div className="slide">
                        <h3>Improved Visibility​</h3>
                        <p>Our SEO team enable their in-depth market targets by enhancing the visibility to fulfill the business requirements.</p>
                        </div>
                    </div>
                    <div className="pb-2  seo-slides ">
                             <div className="slide">
                        <h3>Professional Team</h3>
                        <p>If you have any queries regarding SEO then our experienced SEO professionals who concentrate on your business will help you to reach your targets.</p>
                        </div>
                    </div>
                    <div className="pb-2  seo-slides ">
                    <div className="slide">
                        <h3>Ethical SEO</h3>
                        <p>Our highly skilled team acquires only the right method to launch your website to the top of search engine result page.</p>
                        </div>
                    </div>
                    <div className="pb-2  seo-slides ">
                    <div className="slide">
                        <h3>Brand Identity</h3>
                        <p>We deliver suitable content which is reachable to your customers easily, helps you to gain good public exposure and improves your brand recognition.</p>
                        </div>
                    </div>
                    <div className="pb-2 seo-slides ">
                    <div className="slide">
                        <h3>Link Building </h3>
                        <p>Our specialist use different techniques for writing articles, submission, social media during the campaign time. We schedule our submission to develop link over time.</p>
                        </div>
                    </div>
                    <div className="pb-2 seo-slides ">
                    <div className="slide">
                        <h3>Inquiry at Anytime</h3>
                        <p>Our SEO team is available to take call or else you can access your dashboard to take a look what has been done and how your site is performing.</p>
                        </div>
                    </div>
                    <div className="pb-2 seo-slides ">
                    <div className="slide">
                        <h3>Target Result</h3>
                        <p>Our expert will do an entire website analysis and give best results to the clients. We provide the best marketing strategies to improve traffic.</p>
                        </div>
                    </div>
                    <div className="pb-2 seo-slides ">
                    <div className="slide">
                        <h3>Performance Tracking</h3>
                        <p>You can track your performance via online where our experts will serve you with essential reports that helps you to increase the efficiency of your business.</p>
                        </div>
                    </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                </div>
            </div>
        </div>
    );
}
