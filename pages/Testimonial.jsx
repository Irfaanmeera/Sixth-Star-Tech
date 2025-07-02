import React from 'react';


export default function Testimonial() {
  return (
    <div>
      {/* review */}
     <section className="review-sec">
        <div className="container review-sec-pc">
          <div className="row justify-content-center">
            <div className="col review-sec-items">
              <div className="review">
                <div className="review-img inline-block">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059768/google-logo_qnfy19.svg"
                      width={120}
                      height={30}
                      alt="Google"
                    />
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059772/star-yellow_b1c6tc.svg"
                      width={120}
                      height={30}
                      alt="Rating"
                    />
                  </div>
                </div>
                <div className="rating">
                  <span>4.4/5</span>
                </div>
              </div>
            </div>
            <div className="col review-sec-items">
              <div className="review">
                <div className="review-img">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059774/trustpilot-logo_s1dbp4.svg"
                      width={120}
                      height={30}
                      alt="Trustpilot"
                    />
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059770/star-5_fvrvnc.svg"
                      width={120}
                      height={30}
                      alt="Rating"
                    />
                  </div>
                </div>
                <div className="rating">
                  <span>4.4/5</span>
                </div>
              </div>
            </div>
            <div className="col review-sec-items">
              <div className="review">
                <div className="review-img">
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059767/capterra_abfpvj.svg"
                      width={120}
                      height={30}
                      alt="Capterra"
                    />
                  </div>
                  <div>
                    <img
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059772/star-yellow_b1c6tc.svg"
                      width={120}
                      height={30}
                      alt="Rating"
                    />
                  </div>
                </div>
                <div className="rating">
                  <span>4.4/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-sec-mob">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="col review-sec-items">
                  <div className="review">
                    <div className="review-img">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059768/google-logo_qnfy19.svg"
                          width={120}
                          height={30}
                          alt="Google"
                        />
                      </div>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059772/star-yellow_b1c6tc.svg"
                          width={120}
                          height={30}
                          alt="Rating"
                        />
                      </div>
                    </div>
                    <div className="rating">
                      <span>4.4/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col review-sec-items">
                  <div className="review">
                    <div className="review-img">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059774/trustpilot-logo_s1dbp4.svg"
                          width={120}
                          height={30}
                          alt="Trustpilot"
                        />
                      </div>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059770/star-5_fvrvnc.svg"
                          width={120}
                          height={30}
                          alt="Rating"
                        />
                      </div>
                    </div>
                    <div className="rating">
                      <span>4.4/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col review-sec-items">
                  <div className="review">
                    <div className="review-img">
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059767/capterra_abfpvj.svg"
                          width={120}
                          height={30}
                          alt="Capterra"
                        />
                      </div>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059772/star-yellow_b1c6tc.svg"
                          width={120}
                          height={30}
                          alt="Rating"
                        />
                      </div>
                    </div>
                    <div className="rating">
                      <span>4.4/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* testimonials */}
      <section className="testimonial">
        <div className="container">
          <h3 className="server heading">Hear what our customers say</h3>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item testimo active" data-bs-interval="10000">
                      <h4 className="text-center">Dedicated Hosting</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        Professional guidance with unlimited resource availability. They allow you to easily scale the service at any time.
                      </p>
                      <h4 className="text-center testimo-name">Manikandan</h4>
                      <h5 className="text-center">Chrysalis Homeneeds Pvt. Ltd.</h5>
                    </div>
                    <div className="carousel-item testimo" data-bs-interval="2000">
                      <h4 className="text-center">Cloud Hosting</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        Lower or increase your cloud storage based on your requirement since their service is redundant and flexible payment is available.
                      </p>
                      <h4 className="text-center testimo-name">Richard</h4>
                      <h5 className="text-center">Shankara Building Products Ltd.</h5>
                    </div>
                    <div className="carousel-item testimo">
                      <h4 className="text-center">SSL</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        Our e-commerce site had growth only after installing SSL certification. They give you complete guidance right from installation to changing the site into HTTPS.
                      </p>
                      <h4 className="text-center testimo-name">Sethu Murugan</h4>
                      <h5 className="text-center">Hinduja Leyland</h5>
                    </div>
                    <div className="carousel-item testimo">
                      <h4 className="text-center">Shared Hosting</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        Though we opted for shared hosting, the services didn’t change. They are versatile and provided us with the support system at its best.
                      </p>
                      <h4 className="text-center testimo-name">Anitha</h4>
                      <h5 className="text-center">Bhoomi and Buildings Pvt Ltd</h5>
                    </div>
                    <div className="carousel-item testimo">
                      <h4 className="text-center">Spam Filter</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        Mail servers are a prodigy in Sixth Star. They have excellent features like blacklisting and abuse management where you won’t find any spams.
                      </p>
                      <h4 className="text-center testimo-name">Ganapathy</h4>
                      <h5 className="text-center">Billroth Hospitals</h5>
                    </div>
                    <div className="carousel-item testimo">
                      <h4 className="text-center">Dedicated Hosting</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        A distinct and cost-effective solution can be acquired here. It is sure that your dedicated server will be power-packed with resources that have outperforming features.
                      </p>
                      <h4 className="text-center testimo-name">Chalapathirao Sajjarao</h4>
                      <h5 className="text-center">ROCKWORTH</h5>
                    </div>
                    <div className="carousel-item testimo">
                      <h4 className="text-center">VPS Hosting</h4>
                      <div className="text-center">
                        <img
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722061110/5star-img_urv4bd.webp"
                          className="text-center"
                          alt="Rating"
                          width={120}
                          height={20}
                        />
                      </div>
                      <p className="text-center p-3">
                        We received our VPS hosting at a reasonable cost on the requested date. They consistently deliver the services on schedule.
                      </p>
                      <h4 className="text-center testimo-name">Balu</h4>
                      <h5 className="text-center">Makkal TV</h5>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials ends */}
    </div>
  );
}
