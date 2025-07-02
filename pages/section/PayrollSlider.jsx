import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function PayrollSlider() {
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
            <div className="slider-container payroll-slider">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div className="pb-2 payroll-slides">
                        <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246184/salary_1_gmz0id.webp" alt="Automated Payroll Processing"  />
                        <h3>Automated Payroll Processing</h3>
                        <p>Our advanced software uses automation to make your payroll activities more seamless. Wave goodbye to lengthy, error-prone, manual calculations. Payrolling on this system is easy, quick, and correct. Our software automatically handles payroll calculations, saving your precious time and avoiding expensive errors.</p>
                        </div>
                    </div>
                    <div className="pb-3  payroll-slides ">
                             <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246215/taxes_z6gyb9.webp" alt="Compliance and Tax" />
                        <h3>Compliance and Tax</h3>
                        <p>Your business must always be up to date with tax regulations, as they change frequently. We treat our software as your comrade in regulation, keeping up to date with tax laws. We guarantee that our payroll stays up-to-date by adhering to the latest standards, calculating accurate tax amounts, and making flawless submissions regarding filing.</p>
                        </div>
                    </div>
                    <div className="pb-3  payroll-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246188/self-service_pqikxm.webp" alt="Employee Self-Service" />
                        <h3>Employee Self-Service</h3>
                        <p>Our user-friendly self-service interface will empower your workforce. Our software will enable your staff’s 24/7 access to pay slips, tax records, and personal information. This gives easy detail management for employees and access relevant documents, besides keeping them informed, which alleviates pressure on the human resources department.</p>
                        </div>
                    </div>
                    <div className="pb-3  payroll-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246182/hand_pad62z.webp" alt="Customization" />
                        <h3>Customization</h3>
                        <p>Appreciate the importance of data-driven decision-making. We provide personalized reporting capabilities that are designed according to your organization’s needs. Develop thorough and analytical reports that enable you to examine payroll costs, employees’ performance, trends, and other aspects. They are a major source of information.</p>
                        </div>
                    </div>
                    <div className="pb-3 payroll-slides ">
                    <div className="slide">
                        <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722246203/shield_1161388_edsv6m.webp" alt="Security" />
                        <h3>Security and Data Protection</h3>
                        <p>We do our best for your data’s security. Therefore, we use the latest security mechanism to ensure your earnings records’ safety. Our measures include data encryption protocols and routine security audits meant to ensure sensitive information is not stolen by any means. Put your trust in us to manage your payroll information safely.</p>
                        </div>
                    </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                </div>
            </div>
        </div>
    );
}
