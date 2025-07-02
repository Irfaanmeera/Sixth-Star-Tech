import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function EntpSlider() {
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
            <div className="slider-container entp-slider">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div className="pb-2 entp-slides">
                        <div className="slide">
                        <h4>Enhanced Webmail​</h4>
                        <p>The upgraded Enterprise mail client offers a personal web calendar, customizable filters, global contacts, Public Folders, quota usage display, contact import from Outlook/Outlook Express,   support, HTML email creation and viewing, and many more features.</p>
                        </div>
                    </div>
                    <div className="pb-2  entp-slides ">
                             <div className="slide">
                         <h4>Exchange ActiveSync</h4>
                        <p>ActiveSync delivers top-tier integration for the latest iOS and Android devices, providing seamless access to emails, contacts, and calendars.
ActiveSync utilizes "Push" technology, ensuring that changes made on mobile devices are instantly synchronized with the MailEnable server (and vice versa) without the need for polling.
This efficient protocol minimizes data usage over mobile networks.</p>
                        </div>
                    </div>
                    <div className="pb-2  entp-slides ">
                    <div className="slide">
                          <h4>Share & Collaborate</h4>
                        <p>Easily collaborate with other users by sharing contacts, calendars, and folders. Optimized Services Services in the Enterprise Edition have been optimized for performance and scalability. Folder indexing significantly enhances system response times.</p>
                        </div>
                    </div>
                    <div className="pb-2  entp-slides ">
                    <div className="slide">
                           <h4>Remote Administration</h4>
                        <p>For ease of access, the administration program can manage server groups and be run on remote workstations to handle enterprise clusters.</p>
                        </div>
                    </div>
                    <div className="pb-2 entp-slides ">
                    <div className="slide">
                        <h4>Clustering </h4>
                        <p>Enhance system reliability and uptime by configuring your mail servers redundantly. The cluster  management tools in the Enterprise Edition allow you to couple servers and manage them as cluster nodes</p>
                        </div>
                    </div>
                    <div className="pb-2 entp-slides ">
                    <div className="slide">
                        <h4>Content Filtering</h4>
                        <p>Control and organize mail with global content filtering. Define rules for messages such as forwarding emails, executing applications, deleting messages with specific content, marking spam messages, or quarantining messages containing attachments.</p>
                        </div>
                    </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                </div>
            </div>
        </div>
    );
}
