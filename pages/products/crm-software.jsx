import React from 'react'
import Head from 'next/head'
import AnimatedHeading from '../../components/AnimatedHeading'
import FeatureHideShow from '../../components/FeatureHideShow'
import Link from 'next/link'
import Image from 'next/image'
import CrmForm from '../forms/CrmForm'
import MetaTags from '../../components/MetaTags';
import {crmSchema} from '../../lib/data/schema'

export default function CrmSoftware() {

  return (
    <div>
       <MetaTags />
       <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722232699/CRM_wyww1n.webp" type="image/webp" />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crmSchema) }} />
</Head>

      <div className='main'>
       {/* banner */}
        <section className='crm-banner'>
        <div className="container ">
  <div className="row">

    <div className="ban-left-1 col-md-6">
    <h1 className="server-1 box-text-flip">
    Customer Relationship Management
    </h1>
        <p>CRM Build a cozy and everlasting relationship with your customers with our CRM software.</p>
        <div >
        <div className="row crm-banner-fet">
            <ul className="list1 col-md-6" >
                <li> <i className="fa-solid fa-square-check"></i>Handles clientele</li>
                <li> <i className="fa-solid fa-square-check"></i>Automate Sales Tasks</li>
                <li> <i className="fa-solid fa-square-check"></i>Manages business info</li>
            </ul>
            <ul className="list2 col-md-6" >
                <li> <i className="fa-solid fa-square-check"></i>Combines the whole team</li>
                <li> <i className="fa-solid fa-square-check"></i>Analytical reporting</li>
                <li> <i className="fa-solid fa-square-check"></i>customer support</li>
            </ul>
            </div>
        </div>
    </div>

    <div className="col-md-6 ban-right-1">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722232699/CRM_wyww1n.webp" alt="crm software" priority width={400} height={380} />
    </div>

  </div>
</div>
        </section>
{/* banner ends */}

{/* crm provider sec starts */}

<section className="crm-provider-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>CRM Software Service Provider in Chennai​</AnimatedHeading>
    <div className="row ">

    <div className="col-md-6 text-center">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722232791/crm2_jeq2bv.webp" alt="CRM Software Service Provider" loading='lazy' width={400} height={350} />
    </div>

    <div className="col-md-6 align-content-center">
      <p>Each aspect of your fleet’s operations, including fuel management, driver performance monitoring, and vehicle tracking, can possibly match with our all-inclusive fleet management software provider. You’ll have complete visibility and control over your fleet thanks to our state-of-the-art technology and user-friendly platform, enabling you to make wise decisions and maximize resource usage.</p>
      <p>The Fleet Management Software provides the tools and data to increase your efficiency and gain a competitive advantage.</p>
      <p>The Fleet Software is a flexible, user-friendly, Cloud-based Software. The other thing about our software is that it’s affordable and even offers a degree of scaling suitability for companies irrespective of their size.</p>
    </div>



    </div>
    </div>
  </div>
</div>
</section>

{/* crm provider sec ends */}

{/* crm-feat-sec starts */}

<section className="crm-feat-sec">
<div className="container">
  <div className="row text-center">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Our CRM Software Features​</AnimatedHeading>
    <p className='p-3'>There are different features indulged in the CRM developed by Sixth Star Technologies that allow you to manage task easily, customizes your business growth, schedules your task, and take immediate action for customer complaints and feedback management.</p>
  
      </div>
<div className='fleet-feat-1' >
    <div className="row ">
<div className="col-lg-4 col-md-12 flip-card">
  
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722236240/automated-process_dslduy.webp" alt="Contact Center Management" width={100} height={100}  loading='lazy' />
    <h3>Contact Center Management</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Sixth Star technologies provide INTACT CRM software on the cloud that helps salesforce automation, maintains customer information.</p>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722236264/onboarding_avqpee.webp" alt="Automation Software" width={100} height={100}  loading='lazy' />
    <h3>Sales Force Automation Software</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>It verifies potential client tracking through various stages, setting for marketing executives, getting inquiries from customers.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722236266/team-lead_vgnney.webp" alt="Lead Management" width={100} height={100} loading='lazy' />
    <h3>Lead Management</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>We ensure to drive your sale with effective lead management by converting a lead into a potential buyer that mainly depends upon effective communication.</p>
    </div>
  </div>
</div>

</div>

<div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722236239/advertising_m8jv6w.webp" alt="" width={100} height={100} loading='lazy' />
    <h3>Campaign Management</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>We have the capability of creating campaigns for your business to improve sales, marketing activities, or other updates that are provided to customers.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722236260/digital-asset-management_gr1hkc.webp" alt="" width={100} height={100} loading='lazy' />
    <h3>Asset Management</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Our CRM software not only focuses on customers but also their products, use, and development.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722236259/headphone_yuw0qk.webp" alt="Support Management" width={100} height={100} loading='lazy' />
    <h3>Service-Support Management</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>It helps to manage spares and consumables for effective sales which is most important for organizations.</p>
    </div>
  </div>
</div>

  </div>
  </div>

  <FeatureHideShow buttonText="Learn More" className="about-class container"> 
  <div className='fleet-feat-2 crm-feat-2' >
    <div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722236263/maintenance_u6wyzu.webp" alt="AMC Management" width={100} height={100} loading='lazy' />
    <h3>AMC Management</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Our AMC management module assists you in reading the pre-sales behavior which improves the company for getting customers</p>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722236715/review_qdweio.webp" alt="Loyalty Program" width={100} height={100} loading='lazy' />
    <h3>Loyalty Program</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>This program has extensive features that can be developed and managed for your company and existing customers that manage redeem points and EDM activities</p>
    </div>
  </div>
</div>


</div>

  </div>
  </FeatureHideShow>

  </div>
</div>
</section>

{/*crm-feat-sec ends */}

{/* crm whatdo sec starts */}

<section className="crm-whatdo-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>CRM Software Service Provider in Chennai​</AnimatedHeading>
    <div className="row ">

    <div className="col-md-6 align-content-center"> 
     <p>Customer Relationship Management (CRM) is a technology and strategy for managing and organising interactions with current and prospective customers.</p>
      <h3>Here are some of the most common things CRMs do:</h3>
      <ul className='p-3'>
        <li>Save client contact information such as name, email address, phone number, and so on.</li>
        <li>Keep track of all contact with customers, including phone calls, emails, and meetings.</li>
        <li>Automate tasks such as emailing and booking appointments.</li>
        <li>Track leads, proposals, quotes, and other sales possibilities</li>
        <li>Reports and analytics should be provided: Track key performance indicators (KPIs) and learn about customer behaviour.</li>
        <li>Improve customer service by resolving concerns in a timely and effective manner.</li>
      </ul>
      </div>

    <div className="col-md-6 text-center">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722237026/crm12_w6ilyo.webp" alt="CRM Software Service"  loading='lazy' width={400} height={350}/>
    </div>

    </div>
    </div>
  </div>
</div>
</section>

{/* crm whatdo sec ends */}

{/* fleet-why-us stars */}
<section className="crm-why-us-sec">
<div className="container">
  <div className="row text-center">

    <div className="col-12">
    </div>
    <div className="row fleet-why-us">

    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722237100/crm19_ftrwxe.webp" alt="crm why choose" loading='lazy' width={480} height={400} />
    </div>

    <div className="col-md-6">
    <ul>
              <li>
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722237065/medical_ckdj15_vsghlv.webp" alt="why choose" width={63} height={63}  loading='lazy' />
                </div>
                <div className="col2 align-content-center">
                  <h4>Medical</h4>
                </div>
              </li>

              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722237046/manufacture_clb11g_fafw5d.webp" alt="why choose" width={63} height={63} loading='lazy' />
                </div>
                <div className="col2 align-content-center">
                  <h4>Industrial Automation</h4>
                </div>
              </li>

              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722237067/service_oplhtx_s1cclj.webp" alt="why choose" width={63} height={63} loading='lazy' />
                </div>
                <div className="col2 align-content-center">
                  <h4>Service</h4>
                </div>
              </li>

              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722237029/Hospitality_epzqjq_f7ejpz.webp" alt="why choose" width={63} height={63} loading='lazy' />
                </div>
                <div className="col2 align-content-center">
                  <h4>Hospitality</h4>
                </div>
              </li>
              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722237031/Industrial_qgmve2_bnujkb.webp" alt="why choose" width={63} height={63} loading='lazy' />
                </div>
                <div className="col2 align-content-center">
                  <h4>Manufacturing industry</h4>
                </div>
              </li>
              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722237027/Entertainment_csppcm_sb5cj8.webp" alt="why choose" width={63} height={63} loading='lazy' />
                </div>
                <div className="col2 align-content-center">
                  <h4>Entertainment</h4>
                </div>
              </li>
            </ul>
            <br/>
            <Link href='/contact-us' className='mt-6'>connect with us</Link>
    </div>

    </div>

    </div>
    </div>
</section>

{/* fleet-why-us ends */}

<section className="contact-sec">
  <div className="container">
  <CrmForm />
  </div>
  
</section>

      </div>
    </div>
  )
}
