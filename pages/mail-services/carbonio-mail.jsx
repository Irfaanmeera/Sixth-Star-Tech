import React from 'react'
import Head from 'next/head';
import AnimatedHeading from '../../components/AnimatedHeading'
import CarbonioTab1 from '../section/CarbonioTab1';
import HideShow from '../../components/HideShow';
import MailServicesForm from '../forms/MailServicesForm'
import Link from 'next/link';
import MetaTags from '../../components/MetaTags';
import Image from 'next/image';
import {carbonioSchema} from '../../lib/data/schema'

export default function CarbonioMail() {
  return (
    
    <div>
      <MetaTags />
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722067000/barboniobg1-1-1_pc9trc.webp" type="image/webp" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(carbonioSchema) }}
                />
</Head>

      <div className='main'>
        {/* banner */}
        <section className='zimbra-bg-slider'>
        <div className="container w-90 text-center">
  <div className="row">
    <div className="col-12 align-content-center">
    <div id="carouselExampleDark" className="carousel carousel-dark slide text-center" data-bs-ride="carousel">
  <div className="carousel-inner">
    
    <div className="carousel-item active" data-bs-interval="4000">
    <div className="zimbra-slide">
              <div className="row">
                <div className="col-md-6 align-content-center">
                  <h3 >SIXTHSTAR TECH</h3>
                  <h1>ZEXTRAS CARBONIO EMAIL</h1>
                  <p>
                  Empower your enterprise with the data and tools to conquer new markets. Engage with customers, analyze company performance, and automate your unique business processes, all from within the most value-proven Carbonio mail on the market.
                  </p>
                  <button><Link href='#carboniocontact'>Contact Us</Link></button>
                </div>
                <div className="col-md-6">
                  <Image
                    src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722067000/barboniobg1-1-1_pc9trc.webp"
                    alt="carbonio-banner1"
                    priority
                    width={518}
                    height={481}

                  />
                </div>
              </div>
            </div>
    </div>
    
    <div className="carousel-item" data-bs-interval="3000">
    <div className="zimbra-slide">
              <div className="row">
                <div className="col-md-6 align-content-center">
                  <h3>SIXTHSTAR TECH</h3>
                  <h1 >ZEXTRAS CARBONIO EMAIL</h1>
                  <p>
                  Our Carbonio mail platform is built with advanced technology and innovative features to elevate the email experience to the next level.
                  </p>
                  <button><Link href='#carboniocontact'>Contact Us</Link></button>
                </div>
                <div className="col-md-6">
                  <Image
                    src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722067003/barboniobg2_d6zu24.webp"
                    alt="carbonio-banner-2"
                    loading='lazy'
                    width={518}
                    height={481}
                  />
                </div>
              </div>
            </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" aria-label="Previous slide" data-bs-slide="prev">
  <i className="fa-solid fa-chevron-left"></i>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  aria-label="Next slide" data-bs-slide="next">
  <i className="fa-solid fa-chevron-right"></i>
  </button>
</div>
    </div>
  </div>
</div>

        </section>

        {/* banner ends */}

        {/* zimbra clients starts */}
        <section className='zimbra-client-sec'>
        <div className="container w-100">
          <div className="row ">

            <div className="col-12 text-center">
              <p className='text-center'><strong>90%</strong> of Fortune<strong> 500</strong> companies use Zimbra technology</p>
            </div>

          </div>
          <div className="row ">

            <div className="col-12 text-center">
              <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063672/sai_rizcmx.webp" alt="sai" width={246} height={120} loading='lazy'/>
              <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063666/panimalar_kub7nr.webp" alt="panimalar" width={246} height={120} loading='lazy' />
              <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063674/spl_jzsk4x.webp" alt="spl" width={246} height={120} loading='lazy' />
              <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063668/radiance_lv7gb7.webp" alt="radiance" width={246} height={120} loading='lazy' />

            </div>

          </div>
          </div>

        </section>

        {/* zimbra clients ends */}

        {/* zimbra clients mobile starts */}
        <section className='zimbra-client-sec-mob'>
        <div className="container w-100">
          <div className="row ">

            <div className="col-12 text-center">
              <p className='text-center'><strong>90%</strong> of Fortune<strong> 500</strong> companies use Zimbra technology</p>
            </div>

          </div>
          <div className="row ">

            <div className="col-12 text-center">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063672/sai_rizcmx.webp" alt="sai" width={246} height={120} loading='lazy' />
    </div>
    <div className="carousel-item">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063666/panimalar_kub7nr.webp" alt="panimalar" width={246} height={120} loading='lazy'/>
    </div>
    <div className="carousel-item">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063674/spl_jzsk4x.webp" alt="spl" width={246} height={120} loading='lazy'/>
    </div>
    <div className="carousel-item">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063668/radiance_lv7gb7.webp" alt="radiance" width={246} height={120} loading='lazy'/>
    </div>
  </div>
</div>

            </div>

          </div>
          </div>

        </section>

        {/* zimbra clients mobile ends */}

        {/* ZimbraTab1 starts */}

        <section className="zimbra-slide-tab-sec">
          <h3 className='text-center zimbra-slide-tab-title'>Carbonio Enterprise Solutions</h3>
          <CarbonioTab1 />
        </section>
       
        {/* ZimbraTab1 ends */}

{/* zimbra clients starts */}
<section className='zimbra-guide-sec'>
        <div className="container">
          <div className="row ">
            <div className="col-md-6 text-start align-content-center">
              <h2 className=' text-start'>Download the Guide to Carbonio for  Enterprise </h2>
              <p className=' text-left'>Carbonio mail service is a powerful and scalable email platform that offers a range of advanced features</p>
              <button className='text-start'> <Link href='https://drive.google.com/file/d/1acFced5S43X4KvbTLvbN1M3GhtVkewPD/view?usp=sharing'>Download</Link></button>

             </div>
            <div className="col-md-6 text-center">
              <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722067259/carbonio_ce_z2zcre.webp" alt="carbonio ce" className='slideInUp' width={350} height={240} loading='lazy' />

            </div>

          </div>
          </div>

        </section>

        {/* zimbra clients ends */}

    </div>

{/* zimbra reach section start */}
    
    <section className="zimbra-reach-sec">
    <div className="container">
  <div className="row ">

    <div className="col-12">
    <h2 className='text-center'>Carbonio Reach</h2>
    </div>

  </div>
  <div className="row ">

    <div className="col-12">
    <div className="row zimbra-reach">

<div className="col-lg-2 col-md-12 text-center slideInUp">
    <h3 style={{color:'#F8C16B'}}>25</h3>
    <h4>YEARS</h4>
</div>

<div className="col-lg-2 col-md-6 text-center slideInUp">
<h3 style={{color:'#FD925E'}}>100+</h3>
    <h4>USERS</h4>
</div>

<div className="col-lg-2 col-md-6 text-center slideInUp">
<h3 style={{color:'#59CDDD'}}>150+</h3>
    <h4>COUNTRIES</h4>
</div>

<div className="col-lg-2 col-md-6 text-center slideInUp">
<h3 style={{color:'#6BF8C3'}}>15K</h3>
    <h4>EMPLOYEES</h4>
</div>

<div className="col-lg-2 col-md-6 text-center slideInUp">
<h3 style={{color:'#896BF8'}}>55</h3>
    <h4>APPS</h4>
</div>

</div>

    </div>

  </div>
</div>
    </section>

{/* zimbra reach section ends */}

{/* Zimbra email partners starts */}
<section className="carbonio-partner-sec">

<div className="container">
  <div className="row ">

    <div className="col-12">
        <h2 className='text-center pt-3'>Official Partners Of Zextras</h2>
        <p className='text-center p-3'>We are excited to announce our recent partnership with Zextras Carbonio, making SixthStar Technologies one of the official partners of Carbonio in India</p>
    </div>

  </div>

  <div className="row ">

    <div className="col-12 text-center">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722067357/certified_partner-removebg-preview_ov97n3.webp" alt="zextras" className='inline-block' width={250} height={250} loading='lazy' />
    </div>

  </div>

  <div className="row ">

    <div className="col-12 ">
      <div className="row justify-content-space-around pb-5 carbonio-partner">
    <div className="col-lg-2 col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055889/rqc_vqtye4.webp" alt="rqc" width={160} height={160} loading='lazy' />
    </div>

    <div className="col-lg-2 col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055890/ukasl_ae4pum.webp" alt="ukasl" width={160} height={160} loading='lazy' />
    </div>

    <div className="col-lg-2 col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055889/iso-27001_nenayk.webp" alt="iso-27001" width={160} height={160} loading='lazy' />
    </div>

    <div className="col-lg-2 col-md-6"> 
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055888/iso-20000_obiguc.webp" alt="iso-20000" width={160} height={160} loading='lazy' />
    </div>

    <div className="col-lg-2 col-md-6"> 
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055888/gdpr_qhmwv2.webp" alt="gdpr" width={160} height={160} loading='lazy' />
    </div>

    </div>
    </div>

  </div>

</div>

</section>
    
{/* Zimbra email partners ends */}

{/* Experience sec starts */}

<section className='carbonio-exp-sec'>

<div className="container">
  <div className="row ">

    <div className="col-md-6 align-content-center">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722068115/ribbon_iyxpzs.webp" alt="ribbon icon" width={64} height={64} className='m-3' />
    <p className='m-3'>Experience the perfect blend of innovation and collaboration with Zextras Carbonio!</p>
    <button className='m-3'><Link  href="/contact-us">Get Stared</Link></button>
    </div>

    <div className="col-md-6">  
      <ul className='text-center'>
        <li>Cutting-edge Tools</li>
        <li>Flawless Integration</li>
        <li>Streamlined User Interface</li>
        <li>Robust encryption</li>
        <li>Enhanced Security</li>
      </ul>
    </div>

  </div>
</div>

</section>


{/* Experience sec starts */}

{/* faq starts */}
<section className='server-faq '>
<AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-12 text-center align-items-center">
    
    <div className="accordion dedicated-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What makes Carbonio Mail different from other email providers?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Carbonio Mail stands out from other email providers and focuses on privacy and security. With on-premises and private cloud deployment options ensuring user data, along with robust spam and malware protection, Carbonio Mail prioritises safeguarding user information. These features combined make Carbonio Mail a reliable choice for email communication.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How much does Carbonio cost?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Carbonio Mail offers a free plan with generous storage and features. Paid plans start at just $X per month and offer even more benefits, such as custom domains and priority support. which is a lot affordable than the most of business mails now a days. Carbonio mail server is much affordable than zoho works space an d more ecured than zoho business suites.
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Is Carbonio secure?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Carbonio Mail takes your security seriously. It uses the latest encryption technology to protect your data and offers a number of security features, such as two-factor authentication.
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      How easy is it to switch to Carbonio mail?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Switching to Carbonio is easy. We offer a simple import tool that helps you migrate your emails, contacts, and calendars from your old provider.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      What devices can I use Carbonio on?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Carbonio Mail is available on all major devices, including computers, smartphones, and tablets. You can also access your email through our web interface.
        </div>
    </div>
  </div>
</div>


<HideShow buttonText="Learn More" className="about-class justification-center">
        <div>
        <div>
<div className= 'accordion dedicated-faq' id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
      How can I learn more about Carbonio?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Visit our website or contact our support team for more information. We’re happy to answer any questions you have.
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      Is Carbonio a good choice for businesses?
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, Carbonio is a great choice for businesses. We offer a number of features that are specifically designed for businesses, such as custom domains, team accounts, and priority support.
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      Does Carbonio Mail offer customer support?
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, Sixthstar offers carbonio mail support to help customers with any inquiries or problems they might have with the service. There are phone, chat, and email support options.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      How can I make a difference by using Carbonio?
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>Data Privacy, Security and controlling your data:</strong>

      Your emails and files are stored on your own servers, not on servers owned by a large corporation. This can be a big deal for organisations that prioritise data privacy, security, and compliance with regulations.  
      </div>
    </div>
  </div>

</div>
</div>
          </div>
      </HideShow>

    </div>

  </div>
</div>

</section>


{/* faq ends */}

{/* contact form starts */}
<section className="carbonio-contact-sec">
<AnimatedHeading className='server heading'>Connect with our Experts</AnimatedHeading>

<div className="container-1">
  <div className="row ">

    <div className="col-md-6 p-5 align-content-center">

    </div>

    
    <div className="col-md-6 " id='carboniocontact'>
    <MailServicesForm />
    </div>

  </div>
</div>

</section>


{/* contact form ends */}

    </div>
  )
}
