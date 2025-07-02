import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import EntpSlider from './section/EntpSlider'
import Image from 'next/image'
import MetaTags from '../components/MetaTags';
import {enterpricesemailSchema} from '../lib/data/schema'
export default function EnterpriseEmail() {
  return (
    <div>
        <MetaTags />
<Head>
<script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(enterpricesemailSchema) }}
                />
</Head>
      <div className='main'>

        {/* banner sec starts */}
        <section className="enterp-banner-sec">
        <div className="container">
  <div className="row ">

    <div className="col-md-6">
        <h1>Enterprise Email</h1>
        <p>Powerful Email & Cloud Productivity Suite for Businesses</p>
        <div className="row list">

         <div className="col-md-6">
            <ul>
                <li><i className="fa-solid fa-cloud"></i> 30GB mailbox storage per account </li> 
                <li><i className="fa-solid fa-user-plus"></i> Ideal for Team Collaboration </li> 
                <li><i className="fa-solid fa-clock-rotate-left"></i> 99.99% Service Uptime </li> 
            </ul>
        </div>

        <div className="col-md-6">
        <ul>
                <li><i className="fa-solid fa-server"></i> Additional Storage Available </li> 
                <li><i className="fa-solid fa-shield"></i> Robust Spam Protection </li> 
            </ul>
        </div>

  </div>

  <div className='entp-btn'>
    <button className='btn1'><Link href='/contact-us'>Buy Now</Link></button>
    <button className='btn2'><Link href='/request-a-quote' className='text-white'>Get Demo</Link></button>
  </div>
    </div>

    <div className="col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722491503/carbonio-email-management_m2bmia.gif" alt="" width={530} height={300} />
    </div>

  </div>
</div>
        </section>

        {/* banner sec ends */}

        {/* entp tab sec starts */}
        <section className="entp-tab-sec">
        <div className="container">
  <div className="row ">
    <div className="col-12 entp-tab">
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="fa-regular fa-envelope"></i> Email</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fa-solid fa-calendar-days"></i> Calender</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> <i className="fa-regular fa-address-book"></i> Contacts</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
  <div className="container">
  <div className="row ">

    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722491503/carbonio-email-management_m2bmia.gif" alt="Email" width={480} height={270} />
    </div>

    <div className="col-md-6">
      <h5>Access and manage all your email accounts across Gmail, Hotmail, Yahoo and others, from one unified interface.</h5>
      <ul>
        <li><i className="fa-regular fa-circle-check"></i> Clear and intuitive communications</li>
        <li><i className="fa-regular fa-circle-check"></i> Unified inbox for social and business accounts</li>
        <li><i className="fa-regular fa-circle-check"></i> Attachment Drag & Drop and preview</li>
        <li><i className="fa-regular fa-circle-check"></i> Sorting, searching and flagging</li>
        <li><i className="fa-regular fa-circle-check"></i> Filtering rules & auto-responders</li>
        <li><i className="fa-regular fa-circle-check"></i> Smartphone app for iOS and Android</li>
        <li><i className="fa-regular fa-circle-check"></i> Compatible with MS Outlook, Apple Mail, Thunderbird & other clients</li>
      </ul>
    </div>

  </div>
</div>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  <div className="container">
  <div className="row ">

    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722491503/carbonio-calendaring_sj74ww.gif" alt="Email" width={480} height={270} />
    </div>

    <div className="col-md-6">
      <h5>Organize your professional and personal life the quick and easy way. Do more everyday and better manage your time!</h5>
      <ul>
        <li><i className="fa-regular fa-circle-check"></i> Personal, shared and public calendars</li>
        <li><i className="fa-regular fa-circle-check"></i> Easy group scheduling with free/busy views</li>
        <li><i className="fa-regular fa-circle-check"></i> Manage external participants & appointments</li>
        <li><i className="fa-regular fa-circle-check"></i> Quick setup and fast access to Reminders</li>
        <li><i className="fa-regular fa-circle-check"></i> Time zone integration and visualization</li>
        <li><i className="fa-regular fa-circle-check"></i> Seamless import & export options</li>
      </ul>
    </div>

  </div>
</div>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
  <div className="container">
  <div className="row ">

    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722491498/carbonio-collaborative-editing_zauwpk.gif" alt="Email" width={480} height={270} />
    </div>

    <div className="col-md-6">
      <h5>All your contacts in one place! Never forget or lose a number or a name again!</h5>
      <ul>
        <li><i className="fa-regular fa-circle-check"></i> Centralized contact management</li>
        <li><i className="fa-regular fa-circle-check"></i> Shared and public address books</li>
        <li><i className="fa-regular fa-circle-check"></i> Auto contact gathering</li>
        <li><i className="fa-regular fa-circle-check"></i> Sorting, searching and flagging</li>
        <li><i className="fa-regular fa-circle-check"></i> Time zone integration and visualization</li>
        <li><i className="fa-regular fa-circle-check"></i> Directly create shared and private mailing lists and appointments</li>
      </ul>
    </div>

  </div>
</div>
  </div>
  </div>
    </div>

  </div>
</div>
        </section>

        {/* entp tab sec ends */}

        {/* entp feature sec starts */}

        <section className="entp-feat-sec">
        <div className="container">
        <div className="row ">

        <div className="col-12">
        <h3 className='p-3 text-center'>Features and Specifications</h3>
        <div className="row entp-feat">

      <div className="col-lg-4 col-md-12">
    <i className="fa-solid fa-list"></i>
    <h4>Distribution Lists</h4>
    <p>Effortlessly send messages to a group of friends, family or colleagues</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-address-book"></i>
    <h4>Global Addressbook</h4>
    <p>Shared contact list for all accounts in one place</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-minimize"></i>
    <h4>Effortless Collaboration</h4>
    <p>Sync your calendar and contacts across multiple devices</p>
    </div>

    </div>

    <div className="row entp-feat">

      <div className="col-lg-4 col-md-12">
      <i className="fa-solid fa-layer-group"></i>
    <h4>Multi-Platform</h4>
    <p>Access your data on any device quickly and seamlessly</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-brands fa-expeditedssl"></i>
    <h4>SSL Certificate Support</h4>
    <p>Install any certificate to secure your webmail and data</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-shield"></i>
    <h4>High-Level Protection</h4>
    <p>Anti-spam, anti-virus, anti-malware protection on incoming and outgoing emails</p>
    </div>

    </div>

        </div>

      </div>
      </div>
        </section>

        {/* entp feature sec ends */}

{/* enpt contact sec starts */}
      <section className="entp-cont-sec">
      <div className="container">
  <div className="row ">

    <div className="col-12 entp-cont">
      <div className='cont'>
      <i className="fa-solid fa-headset"></i>
        <h3><Link href='tel:9176637399'>Support</Link></h3>
      </div>
      <div className='cont align-content-center'>
      <i className="fa-solid fa-message"></i>
      <div className='cont1 align-content-center'>
        <h4 className='m-0'>Live Chat </h4>
        <p><Link href='tel:9176627399' className='text-white pl-2 m-0'>Any time</Link></p>
      </div>
      </div>
      <div className='cont'>
      <i className="fa-solid fa-phone"></i>
      <div className='cont1 align-content-center'>
        <h4 className='m-0'>Call US </h4>
        <p> <Link href='tel:9176637399'  className='text-white pl-2 m-0'>7am - 9pm</Link></p>
      </div>
      </div>
      <div className='cont align-content-center'>
      <i className="fa-solid fa-phone"></i>
      <div className='cont1'>
        <h4 className='m-0'>Sales Team </h4>
        <p><Link href='tel:9383996666'  className='text-white pl-2 m-0'> +91 9383996666</Link></p>
      </div>
      </div>
    </div>

  </div>
</div>
      </section>

{/* enpt contact sec ends */}

{/* webdev process page start */}

<section className="entp-adv-sec">
<h3 className='p-3 text-center'>Advanced Features of Enterprise Email Service for Business</h3>
<div className="container">
  <div className="row ">

    <div className="col-12">
    <EntpSlider />
    </div>

  </div>
</div>

</section>

{/* webdev process page ends */}

  {/* gsuite faq sec starts */}

  <section className="entp-faq-sec">
        <h3>FAQ</h3>
        <div className="container">
        <div className="row ">

            <div className="col-12">

            <div className= 'accordion entp-faq' id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading1">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
      How will purchasing Enterprise Email benefit me?
      </button>
    </h2>
    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p>By purchasing an Enterprise Email package you take advantage of our advanced email technology, to give you the least latency and industry best uptime, scalability and reliability. An email service being served out of the cloud also means no IT hardware, software, bandwidth or people costs, and a simple pay-as-you-grow model.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
      What typical features does an Enterprise Email provide over Business Email?
      </button>
    </h2>
    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Enterprise Email supports a number of features that aren’t available in Business email. Shared calendaring, global contacts and push synchronization for mobile devices, MS Outlook & Mac OSX.</p>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
      Which Email Clients and protocols are supported?
      </button>
    </h2>
    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p>You can send and receive emails using any desktop-based email client such as Microsoft Outlook, Outlook Express, Mozilla Thunderbird, Eudora, Entourage, Windows Mail, etc. We also have a guide on how you can configure different email clients to send/receive emails. The enterprise email product supports the POP and IMAP protocols.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading4">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
      How do I use my Webmail Interface?
      </button>
    </h2>
    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>To access your Webmail Interface, you can use the white-labelled URL: http://webmail.yourdomainname.com. Once on the login page, you will need to login with your email address and the corresponding password.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading5">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
      Which mobile phones can I access my mail from?
      </button>
    </h2>
    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Your email can be accessed using any Smartphone or Tablet. Our responsive webmail, is compatible on all major Operating systems such as iOS, Android, Windows Mobile, Symbian and Blackberry.</p>
     </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading6">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
      What is the space provided per Email Account?
      </button>
    </h2>
    <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Each email account comes with 25 GB space dedicated to your emails.</p>
     </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading7">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
      What ports do I need to use for Email Hosting?
      </button>
    </h2>
    <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Usually, the port used for the Outgoing Mail Server/SMTP Service is 25. However, there might be a situation where your ISP might be blocking the use of port 25 for SMTP service. To circumvent this, you can use an alternate port 587 for sending mails.</p>
     </div>
    </div>
  </div>

</div>            </div>

        </div>
        </div>
        </section>

        {/* gsuite faq sec ends */}


      </div>
    </div>
  )
}
