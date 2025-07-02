import React from 'react'
import Head from 'next/head'
import MetaTags from '../../components/MetaTags';

export default function Index() {
    return (

        <div>
            <MetaTags />
            <div className='Aboutmain'>
                {/* banner */}
                <section className='About-container-banner'>
                    <div className='About-container-banner-content container'>
                        <h1 className='About-container-banner-content-heading'>
                            About us
                        </h1>
                        <p className='About-container-banner-content-para'>
                            Look how we conquered the hearts of customers around the globe
                        </p>
                    </div>

                </section>
                {/* bannerends */}
                <section className='Aboutmain-section2 container'>
                    <h2 className='Aboutmain-section2-mainheading'>
                        Who We Are?
                    </h2>
                </section>
                <section>
                    <div className=" container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="col-sm who-we-are-container-column1" >
                                    <h3 className='who-we-are-subheading'>Experience & Global Reach:</h3>
                                    <p className='who-we-are-subcontent'>With over 16+  years of expertise, Sixth Star Technology stands as a premier IT solution provider in India. Our global footprint extends from our headquarters in Chennai to branches in Germany and Malaysia, showcasing our international prowess.
                                    </p>
                                </div>
                                <div className="col-sm">
                                    <h3 className='who-we-are-subheading'>Proven Track Record:</h3>
                                    <p className='who-we-are-subcontent'>Our Company portfolio boasts over 1200 successful projects across various platforms, serving a diverse range of clients worldwide. We pride ourselves on adhering to project quality, meeting deadlines, and providing exceptional technical support.</p>

                                </div>
                            </div>
                            <div className="col-sm who-we-are-image">
                            </div>



                        </div>
                        <div className="row our-services-container">
                            <div className="col-sm">
                                <h3>
                                    Our Services:
                                </h3>
                                <p>
                                    We specialize in offering comprehensive hosting services tailored for businesses of all sizes. Whether it’s a small startup or a large enterprise, our solutions are designed to cater to your specific needs.
                                </p>
                            </div>
                            <div className="col-sm">
                                <h3>
                                    Customer Value & Support:
                                </h3>
                                <p>
                                    Our commitment is towards delivering a substantial return on investment and unparalleled value through our hosting packages and products.
                                    Our dedicated support team is available 24/7, ready to assist with any technical issues via live chat, phone, or email.            </p>

                            </div>
                            <div className='map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d550.2036943634366!2d80.23329773228345!3d12.929640790356846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1105717f8fe239c9%3A0x45c0f6cf503fc3ea!2sSixth%20Star%20Technologies%20-%20Web%20Hosting%20company%20in%20Chennai!5e1!3m2!1sen!2sin!4v1721815875753!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                    </div>

                </section>

            </div>

        </div>
    )
}