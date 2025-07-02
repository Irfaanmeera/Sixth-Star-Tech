import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedHeading from '../../components/AnimatedHeading'
import ScrollTimeline from "../../components/ScrollTimeline";
import AnimatedSec from '../../components/AnimatedSec'
import MetaTags from '../../components/MetaTags';
import { serverSetupSchema } from '../../lib/data/schema';

export default function ServerSetupService() {

  return (
    <div>
      <MetaTags />
      <Head>
      <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(serverSetupSchema) }}
                />
        </Head>

      {/* banner sec starts */}

      <section className="mail-support-banner-sec">
            <div className="container">
            <div className="row ">
            <div className="col-12">
                <h1>Server Setup Service in chennai</h1>
            </div>

            </div>
            </div>
            </section>
        {/* banner sec ends */}

        {/* Mail Server sec1 starts */}

        <section className="mailserver1-sec">
        <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>Top-Class Server Setup Service</AnimatedHeading>
    <div className="row mailserver1">

    <div className="col-1">
        <ul>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>Looking for secure, reliable, and high-performance server setup services in India? We make server configuration simple and stress-free!</p>
            </li>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>A well-configured server is the backbone of your business, ensuring smooth performance and protecting your data from breaches. Whether you’re setting up a new server or upgrading an existing one, our expert team delivers tailored solutions to meet your needs.</p>
            </li>
            
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <ol>
              <li>Web servers for hosting websites</li>
              <li>Database servers for fast and efficient data management</li>
              <li>FTP services for easy file transfers</li>
            </ol>

            </li>
            
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>Looking to scale your business? We configure container technologies like Docker to support your growth effortlessly. For ongoing maintenance and optimization, opt for our monthly server management service.</p>

            </li>
            <li><i className="fa-solid fa-angle-right"></i><p>Choose our server setup services in India to build a secure, scalable, and high-performance foundation for your business today!</p></li>
        </ul>
    </div>

    <div className="col-2">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1728367555/step-sever-img1_jfspa8.webp" alt="mail-server" loading='lazy' width={390} height={355} />
    </div>
  </div>
    </div>

  </div>
</div>
        </section>

        {/* features section starts */}

        <section className="server-setup-feat-sec">

        <div className='container'>
        <ScrollTimeline />
        </div>
</section>

        {/* features section ends */}

    {/* why choose sec starts */}

    <section className="server-setup-why-sec">

    <div className="container">

    <div className="row ">

<div className="col-12">
<AnimatedHeading className='server heading text-white'>Why sixthstar</AnimatedHeading>
<p className="text-center" style={{color: '#fff'}} >Choose our server setup services in India to ensure your server is always secure, optimized, and performing at its best!</p>
</div>

</div>
  <div className="row server-setup-why">
    <div className="col-lg-4 col-md-12">
      <div className="row">
        <div className="col-2">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1728459466/data-recovery_w6rdkj.png" width={50} height={50} alt="feature 2" loading='lazy'/> 
        </div>
        <div className="col-10">
        <h3>Stay Protected with Reliable Backups</h3>
        <p>Never worry about losing important data again! Our server setup services in India include configuring secure backups, ensuring your information is always recoverable and protected.</p>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6">
    <div className="row">
        <div className="col-2">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1728459477/download_yufu0v.png" width={50} height={50} alt="feature 2" loading='lazy'/> 
        </div>
        <div className="col-10">
        <h3>Comprehensive Installation</h3>
        <p>From installation to configuration, we handle all types of server setups to ensure everything runs smoothly. Whether it’s a new server or an upgrade, we’re here to set it up for success.</p>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6">
    <div className="row">
        <div className="col-2">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1728459477/server_ihic0y.png" width={50} height={50} alt="feature 2" loading='lazy'/> 
        </div>
        <div className="col-10">
        <h3>Expert Server Auditing</h3>
        <p>Protect your server from every angle with our expert server auditing services. We ensure 100% security against DoS, DDoS, malware, and other vulnerabilities through comprehensive auditing and patching.
        </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row server-setup-why">
    <div className="col-lg-4 col-md-12">
    <div className="row">
        <div className="col-2">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1728459477/updating_yhuyza.png" width={50} height={50} alt="feature 2" loading='lazy'/> 
        </div>
        <div className="col-10">
        <h3>Stay Updated, Stay Secure</h3>
        <p>Keep your server secure with our server update services. We handle kernel updates and critical package upgrades, ensuring your server remains stable, secure, and optimized for performance.</p>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6">
    <div className="row">
        <div className="col-2">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1728459466/database-security_bsrsmj.png" width={50} height={50} alt="feature 2" loading='lazy'/> 
        </div>
        <div className="col-10">
        <h3>Maximize Your Server's Potential</h3>
        <p>Unlock the full potential of your server with our optimization services. We fine-tune your web and database servers to handle more traffic, ensuring fast, seamless experiences for your customers.</p>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6">
    <div className="row">
        <div className="col-2">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1728459466/shield_q1g5g2.png" width={50} height={50} alt="feature 2" loading='lazy'/> 
        </div>
        <div className="col-10">
        <h3>Keep Your Server Spam-Free</h3>
        <p>Say goodbye to spam with our spam-fighting services. We not only fix spam issues but also conduct thorough investigations to identify and resolve the root cause, keeping your server clean and secure.</p>
        </div>
      </div>
    </div>
  </div>
  
</div>

    </section>

    {/* why choose sec ends */}


    {/* mail server sec2 sec starts */}
    <section className="mailserver2-sec">
        <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>Email Server Setup</AnimatedHeading>
    
    
    <div className="row mailserver2">
    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082735/windows_ovnnam.webp" alt="windows" loading='lazy' width={90} height={90} />
      <h3>WINDOWS SERVER</h3>
    </div>

    <div className="col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082771/linux_wb8qrw.webp" alt="windows" loading='lazy' width={90} height={90} />
    <h3>LINUX SERVER</h3>
    </div>
  </div>

  <div className="row mailserver-cta">

<div className="col-12">
<AnimatedSec className=' heading'><div className="row">

<div className="col-md-6">
<h4>Looking for server provider and support for your Business</h4>
<Link href='/contact-us'>Contact Us</Link>
</div>

<div className="col-md-6">
<Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082708/mail-support-contact_sjmm8x.webp" alt="mail support contact" loading='lazy' width={319} height={230} />
</div>

</div></AnimatedSec>

</div>

</div>

<div className="row mailserver2">
    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1728461936/pngegg_zemr4u.png" alt="tools" width={90} height={90} />
      <h3>C PANEL</h3>
    </div>

    <div className="col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1728462614/cwp_logo_oszsad.png" alt="tools" width={90} height={90} style={{backgroundColor:'white'}} />
      <h3>CWP PANEL</h3>
    </div>
  </div>

    </div>
  </div>
</div>

        </section>

        {/* mail server sec2 sec starts */}

      {/* faq section starts */}
      <section className="faq-sec pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
          <AnimatedHeading className='server heading'>Frequently Asked Questions</AnimatedHeading>
          </div>
        </div>

        <div className="row server-setup-faq">
          <div className="col-12">
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Can your team assist with our current hosting provider and solutions?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Absolutely! We can help with your existing hosting accounts and providers. Simply let us know the issues you're facing or any improvements you'd like to make. If your requirements have changed or if updates or migrations to newer servers are needed, we're here to assist. Feel free to reach out, and we can discuss the details further.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What’s the first step to get assistance with hosting and servers?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>The first step is to contact us and share your situation. To assist you effectively, we’ll need some details about your requirements. Once we have that information, we can provide guidance and proceed if you agree. In many cases, we may require access to assess the necessary work and offer the best solution.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What hosting companies do you work with and what hosting solutions do you offer?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>We work with a variety of hosting vendors and offer a range of hosting solutions. Reach out to us to see if we can assist with your current hosting provider and services. If you need a recommendation, we’d be happy to provide one tailored to your needs.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Can you assist with Virtual Private Servers?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>Yes, our technical team has extensive experience with VPS solutions. Virtual Private Servers often require updates, migrations, and regular maintenance. We help clients manage their VPS solutions and provide the necessary services to keep everything running smoothly.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Does your team work with dedicated hosting solutions?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>Yes, we support clients with their dedicated servers. Our team helps manage dedicated hosting solutions with various hosting providers. Contact a consultant to discuss your dedicated server needs and discover how we can assist you.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      What are the costs for assistance with hosting and servers?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>The cost depends on the work required and the condition of your server and hosting account. The more work needed, the higher the cost. Reach out to us to discuss your requirements and get detailed pricing information.</p>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
      </section>
      {/* faq section ends */}


    </div>
  )
}
