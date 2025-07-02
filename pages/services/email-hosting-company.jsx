import React from 'react'
import AnimatedHeading from '../../components/AnimatedHeading'
import Link from 'next/link'
import HideShow from '../../components/HideShow';
import Head from 'next/head';
import MetaTags from '../../components/MetaTags';
import { emailHostingCompanySchema } from '../../lib/data/schema';
export default function EmailHostingCompany() {

  return (
    <div>
      <MetaTags />
      <Head>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emailHostingCompanySchema) }} />
        </Head>
{/* hosting company banner starts */}

<section className="email-host-company-banner-sec">
<div className="container">
  <div className="row email-host-company-banner">

    <div className="col-12">
      <h1>Business Email Hosting Company in India</h1>
      <p>A Simplified Email Hosting Solution for your Business</p>
    </div>

  </div>
</div>
</section>

{/* hosting company banner ends */}

{/* why choose sec starts */}
<section className="email-host-company-why-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading text-left'>Features That Make Our Business Email Hosting Perfect for You</AnimatedHeading>
    <div className="row email-host-company-why">

    <div className="col-lg-3 col-md-6">
    <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730448630/5_GB_Storage_gp5voj.gif" alt="" width={85} height={85} />
    <h3>Flexible plans</h3>
    <p>Enjoy a spacious inbox tailored to meet your business needs.</p>
</div>

<div className="col-lg-3 col-md-6">
<img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730448616/Get_Additional_Storage_zlrxn2.gif" alt="" width={85} height={85} />
    <h3>Unlimited Storage Options</h3>
    <p>Never worry about running out of storage—expand as you grow.</p>
    
</div>

<div className="col-lg-3 col-md-6">
<img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730448596/360o_synchronisation_avwkiu.gif" alt="" width={85} height={85} />
    <h3>Seamless Sync Across Devices</h3>
    <p>Connect your email effortlessly with POP3/IMAP for 360° synchronization.</p>
</div>

<div className="col-lg-3 col-md-6">
<img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730448617/Private-labeled_kxjzk8.gif" alt="" width={85} height={85} />
    <h3>Personalized Branding</h3>
    <p>Use your domain name for professional, private-labeled email addresses.</p>
</div>

  </div>
  <div className="row email-host-company-why">

<div className="col-lg-3 col-md-6">
<img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730448637/Calendars_blrpek.gif" alt="" width={85} height={85} />
<h3>Smart Calendars</h3>
<p>Schedule meetings anytime, anywhere with built-in calendar tools.</p>
</div>

<div className="col-lg-3 col-md-6">
<img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730448614/Auto-Responder_n41v9n.gif" alt="" width={85} height={85} />
<h3>Automated Replies</h3>
<p>Save time with pre-set auto-responders to manage email efficiently.</p>
</div>

<div className="col-lg-3 col-md-6">
<img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730448628/Anti-virus_Protection_vflrkq.gif" alt="" width={85} height={85} />
<h3>Advanced Security</h3>
<p>Protect your inbox with robust anti-virus and online threat detection.</p>
</div>

<div className="col-lg-3 col-md-6">
<img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730448593/Branded_SSL_tj65kf.gif" alt="" width={85} height={85} />
<h3>Secure SSL Certificates</h3>
<p>Ensure your emails stay private with branded digital certificates.</p>
</div>

</div>
<div className="row email-host-company-why">

<div className="col-lg-3 col-md-6">
<img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730448614/99.99_Uptime_ml5i1x.gif" alt="" width={85} height={85} />
<h3>Reliable Uptime</h3>
<p>Experience 99.99% email availability for uninterrupted communication.</p>
</div>

<div className="col-lg-3 col-md-6">
<img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730448608/World-Class_Support_jbxjmt.gif" alt="" width={85} height={85} />
<h3>Expert Support Anytime</h3>
<p>Get world-class, 24x7 assistance to keep your business running smoothly.</p>
</div>

<div className="col-lg-3 col-md-6">

</div>

<div className="col-lg-3 col-md-6">

</div>

</div>

    </div>

  </div>
</div>
</section>


{/* why choose sec ends */}

{/* features sec starts */}
<section className="email-host-company-feature-sec">
  <div className="container">
    <div className="row ">
      <div className="col-12 email-host-company-feat">
        <h2>Personalized Business Email Hosting</h2>

        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="one-tab" data-bs-toggle="tab" data-bs-target="#one" type="button" role="tab" aria-controls="one" aria-selected="true">Personalized Email</button>
            <button className="nav-link" id="two-tab" data-bs-toggle="tab" data-bs-target="#two" type="button" role="tab" aria-controls="two" aria-selected="false">Mobile-Friendly Business Email</button>
            <button className="nav-link" id="three-tab" data-bs-toggle="tab" data-bs-target="#three" type="button" role="tab" aria-controls="three" aria-selected="false">More Security and Privacy</button>
            <button className="nav-link" id="four-tab" data-bs-toggle="tab" data-bs-target="#four" type="button" role="tab" aria-controls="four" aria-selected="false">Powerful Yet simple Control Panel</button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="one" role="tabpanel" aria-labelledby="nav-one">
            <div className="tab-con">
            <div className="icon">
              <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730454233/message_imsxad.png" alt="" width={150} height={150} />
            </div>
            <div className="con">
              <h3>Personalized Business Email Hosting</h3>
              <p>Stop using free email IDs for your business—go professional!
Create an email address with your domain name to look more trustworthy and stand out.
Make your brand easy to recognize and impress your clients with every email you send.</p>
            </div>
            </div>
            
          </div>

          <div className="tab-pane fade" id="two" role="tabpanel" aria-labelledby="two-tab">
            <div className="tab-con">
            <div className="icon">
              <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730454234/email_f9ncek.png" alt="" width={150} height={150} />
            </div>
            <div className="con">
              <h3>Stay connected on the go!</h3>
              <p>With IMAP, you can access your business email on iPhone, Android, or Windows devices using your favorite email app.
              Manage and respond to emails anytime, anywhere, with ease.</p>
            </div>
            </div>
            
          </div>

          <div className="tab-pane fade" id="three" role="tabpanel" aria-labelledby="three-tab">
            <div className="tab-con">
            <div className="icon">
            <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1730454232/database_1_kbqloy.png" alt="" width={150} height={150} />
            </div>
            <div className="con">
              <h3>More Security and Privacy</h3>
              <p>We keep your business emails safe with top-tier security and 99.9% reliable uptime.
              Enjoy encrypted email hosting that protects your data, both at rest and in transit, with advanced S/MIME message encryption.</p>
            </div>
            </div>
            
          </div>

          <div className="tab-pane fade" id="four" role="tabpanel" aria-labelledby="four-tab">
            <div className="tab-con">
            <div className="icon">
              <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1735563004/admin-panel_u6zrlh.png" alt="" width={150} height={150} />
            </div>
            <div className="con">
              <h3>Take full control of your business email!</h3>
              <p>Our user-friendly control panel lets you add users, manage group aliases, set policies, and customize settings effortlessly.
              Everything you need to manage your emails is just a click away.</p>
            </div>
            </div>
            
          </div>

        
        </div>
      </div>
    </div>
  </div>
</section>

{/* features sec ends */}

{/* faq section starts */}

<section className="email-host-company-feature-sec">
  <div className="container">
    <div className="row ">
      <div className="col-12 email-host-company-feat text-center">
        <h2>Product FAQs</h2>

        <div className="accordion dedicated-faq" id="accordionExample">
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is business email hosting?
      </button>
    </h3>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Business email hosting allows you to create professional email addresses using your own domain (e.g., yourname@yourcompany.com), offering enhanced security, custom branding, and advanced features that free email services can't provide.</p> </div>
    </div>
  </div>
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How does business email hosting differ from free email services?
      </button>
    </h3>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>Business email hosting provides a custom domain, better security, more storage, and additional tools to manage your business emails effectively—something free email services lack.</p>
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Can I access my business email on mobile devices?
      </button>
    </h3>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p>Yes! With IMAP support, you can easily access your business email on iPhone, Android, and Windows devices, ensuring you can manage emails anytime, anywhere.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Is my business email secure?
      </button>
    </h3>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p>Our business email hosting offers robust security, including encryption for emails at rest and in transit, anti-virus protection, and S/MIME message encryption, ensuring your emails are safe and private.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Can I add multiple users to my business email hosting account?
      </button>
    </h3>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes! You can easily add and manage multiple email accounts, group aliases, and customize settings through the powerful control panel to meet your business needs.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingsix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
      What kind of support is available with business email hosting?
      </button>
    </h3>
    <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>We offer 24/7 expert support to ensure you get prompt assistance whenever needed, keeping your business email running smoothly at all times.</p>
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
