import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Sftpslider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <Slider {...settings}>
          <div className="sftp-transfer-mob">
          <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247394/SFTP_ofblcd.webp" alt=""  />
          <h4>SFTP or FTPS?​</h4>
          </div>

          <div className="sftp-transfer-mob">
          <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247383/Features_wqckea.webp" alt="" />
          <h4>Features​​</h4>
          </div>
          
          <div className="sftp-transfer-mob">
          <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247380/Automation_byx36a.webp" alt="" />
          <h4>Automation​</h4>
          </div>

          <div className="sftp-transfer-mob">
           <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247387/Forum_abbei2.webp" alt="" />
    <h4>Forum​</h4>
          </div>

          <div className="sftp-transfer-mob">
            <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247390/Secured_uoonyi.webp" alt="" />
    <h4>Secured​</h4>
          </div>

        </Slider>
      );
    }
    
    