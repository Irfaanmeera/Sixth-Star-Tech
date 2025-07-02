import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function AppFeatSlider() {
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
            <div className="slider-container appfeat-slider">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div className="pb-2 appfeat-slides">
                        <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231106/overview_ujuzag.webp" alt="Enhance Visibility" loading="lazy" width={50} height={50}  />
                        <h3>Enhance Visibility​</h3>
                        <p>Improve your business's visibility: Increase your online presence and differentiate yourself from the competition.</p>
                        </div>
                    </div>
                    <div className="pb-2  appfeat-slides ">
                             <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231223/to-do_zmq41j.svg" alt="Collect Data" loading="lazy" width={50} height={50} />
                        <h3>Collect Data</h3>
                        <p>Collecting feedback and preferences can help you better understand your customers.</p>
                        </div>
                    </div>
                    <div className="pb-2  appfeat-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231106/overview_ujuzag.webp" alt="User Friendliness" loading="lazy" width={50} height={50} />
                        <h3>User Friendliness</h3>
                        <p>Create a pleasant environment for your clients by providing user-friendly interfaces.</p>
                        </div>
                    </div>
                    <div className="pb-2  appfeat-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231106/ranking-star_cr651w.webp" alt="Best Approach" loading="lazy" width={50} height={50} />
                        <h3>Best Approach</h3>
                        <p>Stand out with our creative solutions and outstanding strategies.</p>
                        </div>
                    </div>
                    <div className="pb-2 appfeat-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231107/target_iqcoms.webp" alt="Direct Marketing" loading="lazy" width={50} height={50} />
                        <h3>Direct Marketing </h3>
                        <p>Our marketing solutions allow you to reach your target audience directly and efficiently.</p>
                        </div>
                    </div>
                    <div className="pb-2 appfeat-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231104/megaphone_qwvbrx.webp" alt="Grab Attention" loading="lazy" width={50} height={50} />
                        <h3>Grab Attention</h3>
                        <p>Capture the attention of potential customers with appealing content and design.</p>
                        </div>
                    </div>
                    <div className="pb-2 appfeat-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231103/feedback-review_fembet.webp" alt="Earns loyalty" loading="lazy" width={50} height={50} />
                        <h3>Earns loyalty</h3>
                        <p>By providing great service and support, you can earn your consumers' confidence and loyalty.</p>
                        </div>
                    </div>
                    <div className="pb-2 appfeat-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231103/brand-image_upkcrz.webp" alt="Brand Recognition" loading="lazy" width={50} height={50} />
                        <h3>Brand Recognition</h3>
                        <p>Establish and strengthen your brand identity to increase recognition and credibility.</p>
                        </div>
                    </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                </div>
            </div>
        </div>
    );
}
