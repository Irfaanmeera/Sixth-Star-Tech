import React from 'react'
import Head from 'next/head'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import Image from 'next/image';
import MetaTags from '../components/MetaTags';
import {businessMailHostingSchema} from '../lib/data/schema'

export default function BusinessMailHosting() {
  return (
    <div>
       <MetaTags />
       <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1723543275/email-hosting-ban-bg_1_i6v9nb.webp" type="image/webp" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(businessMailHostingSchema) }}
                />
</Head>
      <div className='main'>
        {/* banner section starts */}

        <section className="Business-mail-banner-sec">

<div className="container">
    <div className="row Business-mail-banner">

    <div className="col-md-6 align-content-center ">
        <h1 className='mb-4'>Business Email Hosting</h1>
        <p className='mb-4'>Give your business a professional makeover with</p>
        <div className='business-mail-type'>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'email@yourbrand.com',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '22px', display: 'inline-block', backgroundColor:'#00038F', color:'white', fontWeight:"600"  }}
      repeat={Infinity}
    />
    </div>
    <button className=''> <Link href='#'>Buy Now</Link></button>
    </div>

    <div className="col-md-6 align-content-center">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1723543275/email-hosting-ban-bg_1_i6v9nb.webp" priority alt="business mail hosting" width={460}  height={400}/>
    </div>

     </div>
    </div>

</section>

{/* review */}
<section className="review-sec">
        <div className="container review-sec-pc">
          <div className="row justify-content-center">
            <div className="col review-sec-items">
              <div className="review">
                <div className="review-img">
                  <div>
                    <Image
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059768/google-logo_qnfy19.svg"
                      width={120}
                      height={30}
                      alt="Google"
                    />
                  </div>
                  <div>
                    <Image
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
                    <Image
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059774/trustpilot-logo_s1dbp4.svg"
                      width={120}
                      height={30}
                      alt="Trustpilot"
                    />
                  </div>
                  <div>
                    <Image
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
                    <Image
                      src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059767/capterra_abfpvj.svg"
                      width={120}
                      height={30}
                      alt="Capterra"
                    />
                  </div>
                  <div>
                    <Image
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
                        <Image
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059768/google-logo_qnfy19.svg"
                          width={120}
                          height={30}
                          alt="Google"
                        />
                      </div>
                      <div>
                        <Image
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059772/star-yellow_b1c6tc.svg"
                          width={120}
                          height={30}
                          alt="Rating"
                        />
                      </div>
                    </div>
                    <div className="rating">
                      <h4>4.4/5</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col review-sec-items">
                  <div className="review">
                    <div className="review-img">
                      <div>
                        <Image
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059774/trustpilot-logo_s1dbp4.svg"
                          width={120}
                          height={30}
                          alt="Trustpilot"
                        />
                      </div>
                      <div>
                        <Image
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059770/star-5_fvrvnc.svg"
                          width={120}
                          height={30}
                          alt="Rating"
                        />
                      </div>
                    </div>
                    <div className="rating">
                      <h4>4.4/5</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col review-sec-items">
                  <div className="review">
                    <div className="review-img">
                      <div>
                        <Image
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059767/capterra_abfpvj.svg"
                          width={120}
                          height={30}
                          alt="Capterra"
                        />
                      </div>
                      <div>
                        <Image
                          src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059772/star-yellow_b1c6tc.svg"
                          width={120}
                          height={30}
                          alt="Rating"
                        />
                      </div>
                    </div>
                    <div className="rating">
                      <h4>4.4/5</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* review section ends */}

        {/* Business email brand sec starts */}

        <section className="business-email-brand-sec">
        <div className="container">
            <div className="row ">

                <div className="col-12">
                <div className='business-email-brand-type text-center'>
                  <h2>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Increase Brand Awareness',
        1000,
        ' with Our Efficient EmailHosting',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '45px', display: 'inline-block', color:'#11009e', fontWeight:"700"  }}
      repeat={Infinity}
    />
    </h2>
                </div>
                <div className="row business-email-brand">

                <div className="col-md-6 pb-3">
                    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1723543275/email-hosting_mx3cjo.webp" alt="gsuite files" loading='lazy' width={480} height={325} />
                </div>

                <div className="col-md-6 align-content-center">
                <h3 className=''>Bild trust with a professional business email</h3>
                <p>Distinct business email addresses help you build stronger relationships and trust. Set up custom email addresses now to give your company the credibility and visibility it deserves.</p>
                </div>

                </div>
                </div>

            </div>
        </div>
        </section>

        {/* business email brand sec ends */}

      {/* business email features stats */}

        <section className="business-email-feat-sec">
        <div className="container">
  <div className="row business-email-feat">

    <div className="col-lg-3 col-md-6">
    <i className="fa-regular fa-hard-drive"></i>
    <h4>Customized Storage + Backup</h4>
    <p>Get 5 GB mail storage with additional storage option available on purchase. Your business emails are backed up in our state-of-the-art infrastructure.</p>
    </div>

    <div className="col-lg-3 col-md-6">
    <i className="fa-regular fa-window-restore"></i>
    <h4>Responsive Design</h4>
    <p>Professionally designed and delivered with the power of OpenXchange. You can also access your business email on your smartphone or tablet easily.</p>
    
    </div>

    <div className="col-lg-3 col-md-6">
    <i className="fa-solid fa-shield-virus"></i>
    <h4>Inbuilt Virus Protection</h4>
    <p>Our advanced anti-virus technology secures your inbox and ensures that all your important emails are protected against malware and viruses.</p>
    
    </div>

    <div className="col-lg-3 col-md-6">
    <i className="fa-regular fa-clock"></i>
    <h4>100% Uptime and Security</h4>
    <p>Our industry-grade mail storage guarantees zero data loss and redundancy, along with 100% network uptime.</p>
    
    </div>

  </div>
</div>
        </section>
      {/* business email features ends */}

      {/* business email demo sec starts */}

      <section className="business-email-demo-sec">
      <div className="container">
  <div className="row business-email-demo">

    <div className="col-md-6">
      <h3>Try our demo!</h3>
      <p>Get a sneak peek of what you can get with our business email plans when you try our free demo today.</p>

      <button><Link href='/contact-us'>START NOW FOR FREE</Link></button>
    </div>

    <div className="col-md-6 text-center">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1723543274/carbonio_telco_operators_jq1pxc.webp" alt="" width={380} height={290} />
    </div>

  </div>
</div>
      </section>

      {/* business email demo sec ends */}

{/* enpt contact sec starts */}
<section className="entp-cont-sec">
      <div className="container">
  <div className="row ">

    <div className="col-12 entp-cont">
      <div className='cont'>
      <i className="fa-solid fa-headset"></i>
        <h3><Link href='tel:9176637399'>Support</Link></h3>
      </div>
      <div className='cont'>
      <i className="fa-solid fa-message"></i>
      <div className='cont1'>
        <h4>Live Chat </h4>
        <p><Link href='tel:9176627399'>Any time</Link></p>
      </div>
      </div>
      <div className='cont'>
      <i className="fa-solid fa-phone"></i>
      <div className='cont1'>
        <h4>Call US </h4>
        <p> <Link href='tel:9176637399'>7am - 9pm</Link></p>
      </div>
      </div>
      <div className='cont'>
      <i className="fa-solid fa-phone"></i>
      <div className='cont1'>
        <h4>Sales Team </h4>
        <p><Link href='tel:9383996666'> +91 9383996666</Link></p>
      </div>
      </div>
    </div>

  </div>
</div>
      </section>

{/* enpt contact sec ends */}

{/* faq sec starts */}

<section className="entp-faq-sec">
        <h3>Email Hosting - Frequently Asked Questions</h3>
        <div className="container">
        <div className="row ">

            <div className="col-12">

            <div className= 'accordion business-email' id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading1">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
      How do I set up my business email Hosting?
      </button>
    </h2>
    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p>Every email service provider has its own process for setting up business email hosting. At Sixth Star Technologies, we streamline this process as follows:</p>
     <p><strong>A. Change Your Domain Name’s Name Servers</strong></p>
     <ol>
      <li>Log in to your Control Panel.</li>
      <li>Search for the domain associated with your Business Email Order and navigate to the Order Information view.</li>
      <li>Click the Name Server Details link to find the Name Servers you need to set for your domain.</li>
      <p>If you prefer to retain your current domain name’s name servers instead of using Sixth Star’s name servers, you’ll need to add the DNS Records listed on this page to your existing name servers.</p>
     </ol>
     <p><strong>B. Create Email Accounts</strong></p>
     <p>Once the service is activated, you can create email accounts to send and receive emails. From your Email Administration Interface, you can also set up aliases, email forwards, mailing lists, and more.</p>
     <p><strong>C. Send and Receive Emails Using the Business Email Accounts</strong></p>
     <p>Sixth Star Technologies offers the following options for receiving and sending emails with your new accounts:</p>
     <ol>
      <li>Configure a desktop email client to download and send emails.</li>
      <li>Log in to the web-based interface to access your emails online.</li>
      <p>You can now easily send and receive emails using your business email account through either the Webmail interface or a desktop client.</p>
     </ol>


       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
      How does Business Email protect my business?
      </button>
    </h2>
    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>With top-notch Email Hosting and providing virus protection externally, Sixth Star Technologies keeps your business email safe. Our advanced technology protects your inbox from viruses and malware. We use comprehensive security measures to ensure your emails are secure at all times.</p>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
      What are the benefits of having a domain-based business email address?
      </button>
    </h2>
    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p>Using a domain-based business email address instead of a generic one provides several advantages:</p>
     <p><strong>Trustworthiness:</strong> An email address that matches your business or domain name enhances your credibility. It demonstrates to customers that you are serious about your business by opting for a professional email address rather than a generic Gmail or Yahoo address.</p>
     <p><strong>Marketing:</strong> A custom business email acts as a form of word-of-mouth advertising for your company and website. Every email you send promotes your business name to potential clients and customers.</p>
     <p><strong>Security:</strong> Professional email services, like our Business Email, offer built-in virus protection to safeguard your inbox from viruses and malware.</p>
        </div>
    </div>
  </div>

</div>            </div>

        </div>
        </div>
        </section>


{/* faq sec ends */}


        </div>
    </div>
  )
}
