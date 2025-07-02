import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../components/AnimatedHeading'
import AnimatedSec from '../components/AnimatedSec'
import Image from 'next/image'
import MetaTags from '../components/MetaTags';
import {mailServerSchema} from '../lib/data/schema'
export default function MailSsupportInChennai() {

  return (

    <div>
         <MetaTags />

         <Head>
         <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(mailServerSchema) }}
                />
         </Head>

      <div className='main'>

        {/* banner sec starts */}

            <section className="mail-support-banner-sec">
            <div className="container">
            <div className="row ">

            <div className="col-12">
                <h1>MAIL SERVER SUPPORT</h1>
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
    <AnimatedHeading className='server heading'>Mail Server Providers and Server Support in Chennai</AnimatedHeading>
    <div className="row mailserver1">

    <div className="col-1">
        <ul>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>Sixthstar Technologies, mail server provider and support in chennai and IT Solutions helps organisations to utilize their existing IT resources in setting up their email servers.</p>
            </li>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>We believe that modern mail server products should cater to the specific messaging needs of small businesses, service providers, and corporations, while remaining cost-effective and offering high profitability in terms of total cost of ownership (TCO).</p>
            </li>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>We also provide support and maintenance services for clients to help manage and maintain their email servers installed at their office locations Our top priority is to deliver quality technical support to all our customers. Therefore, we have developed various support levels to meet</p>
            </li>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>specific needs: from free basic support available to all customers to advanced support for companies operating in mission-critical environments.</p>
            </li>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>The responsiveness and efficiency of our support team have always been highly valued and are consistently monitored at every level.</p>
            </li>
        </ul>
    </div>

    <div className="col-2">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082695/mail-server-img_bpyfmy.webp" alt="mail-server" loading='lazy' width={390} height={355} />
    </div>

  </div>
    </div>

  </div>
</div>

        </section>

        {/* Mail Server sec1 ends */}

        {/* mail server why choose sec starts */}
        <section className="mailserver-whychoose-sec">
        <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>Why Choose Sixthstar Mail Server Support</AnimatedHeading>
    <div className="row mailserver-whychoose">

    <div className="col-md-6">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082703/mail-server-why-choose_bkjmau.gif" alt="mail-server-why-choose" loading='lazy' width={520} height={447} />
    </div>

    <div className="col-md-6">
    <div className="accordion mailserver-tab" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading1">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
      <h3><i className="fa-regular fa-pen-to-square"></i> Expertise and Experience</h3>
      </button>
    </h2>
    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>With extensive experience in managing and maintaining mail servers, we provide top-notch support tailored to your specific needs.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
       <h3><i className="fa-regular fa-pen-to-square"></i> Comprehensive Services:</h3>
      </button>
    </h2>
    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>From installation to maintenance, we offer a full range of services to ensure your email servers operate smoothly.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
        <h3><i className="fa-regular fa-pen-to-square"></i> Localized Support</h3>
      </button>
    </h2>
    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Being based in Tamil Nadu, we understand the local business environment and can provide prompt, on-site support when needed</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading4">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
        <h3><i className="fa-regular fa-pen-to-square"></i> Proactive Monitoring:</h3>
      </button>
    </h2>
    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading47" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Our team continuously monitors your email servers to prevent issues before they impact your business.</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading5">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
        <h3><i className="fa-regular fa-pen-to-square"></i> Customer Satisfaction</h3>
      </button>
    </h2>
    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Our commitment to quality and customer satisfaction ensures that you receive reliable and responsive support at all times.</p>
      </div>
    </div>
  </div>
</div>
    </div>

  </div>
    </div>

  </div>
</div>
        </section>

        {/* mail server why choose sec starts */}

        {/* mail server sec2 sec starts */}
        <section className="mailserver2-sec">
        <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>Email and Server Services to Our Clients</AnimatedHeading>
    
    
    <div className="row mailserver2">
    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082735/windows_ovnnam.webp" alt="windows" loading='lazy' width={90} height={90} />
      <h3>WINDOWS MAIL SERVER</h3>
    </div>

    <div className="col-md-6">
    <p>A user-friendly mail server compatible with Windows 2019, 2020, and windows 2016. The Windows Mail Server is advanced, secure, and delivers high performance.</p>
   <Link href='/contact-us'>Contact Us</Link>
    </div>
  </div>

  <div className="row mailserver2">
    <div className="col-md-6">
    <p>Our Linux mail server has undergone testing for high-volume transactions per day on basic hardware and is compatible with Fedora, Redhat, CentOS, Alma Os and Ubuntu operating systems.</p>
    <Link href='/contact-us'>Contact Us</Link>
    </div>
    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082771/linux_wb8qrw.webp" alt="linux" loading='lazy' width={90} height={90} />
      <h3>LINUX MAIL SERVER</h3>
    </div>
  </div>

  <div className="row mailserver-cta">

<div className="col-12">
<AnimatedSec className=' heading'><div className="row">

<div className="col-md-6">
<h3 className='text-black'>Looking for mail server provider and support in chennai</h3>
<br/>
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
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082716/tools_ax1vyb.webp" alt="tools" width={90} height={90} />
      <h3>ANNUAL SERVER MAINTENANCE</h3>
    </div>

    <div className="col-md-6">
    <p>When cloud servers or cloud storage devices fail, the impact can be significant, affecting a large number of users, employees, and customers. That’s where we come in.</p>
    <Link href='/contact-us'>Contact Us</Link>
    </div>
  </div>

  <div className="row mailserver2">
    <div className="col-md-6">
    <p>When cloud servers or cloud storage devices fail, the impact can be significant, affecting a large number of users, employees, and customers. That’s where we come in.</p>
    <Link href='/contact-us'>Contact Us</Link>
    </div>
    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082778/mail_d4qaub.webp" alt="mail" width={90} height={90} />
      <h3>PROFESSIONAL EMAIL PROVIDERS</h3>
    </div>
  </div>

    </div>
  </div>
</div>

        </section>

        {/* mail server sec2 sec starts */}


      </div>
    </div>
  )
}
