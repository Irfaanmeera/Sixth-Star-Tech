import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../../components/AnimatedHeading'
import FeatureHideShow from '../../components/FeatureHideShow'
import HideShow from '../../components/HideShow'
import FleetForm from '../forms/FleetForm'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import MetaTags from '../../components/MetaTags';
import {fleetSchema} from '../../lib/data/schema'

export default function FleetManagement() {

  return (
    <div>
      <MetaTags />
<Head>
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(fleetSchema) }}
                />
</Head>
      <div className='main'>

            {/* banner sec start */}
            <section className='fleet-banner'>
        <div className="container ">
  <div className="row p-2">

    <div className="ban-left-1 col-md-6">
        <h1 className='server-1 '> 
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Take Control of Your Fleet',
        1000, 
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block',color:'#11009E' }}
      repeat={Infinity}
    />
    </h1>
        <div >
        <div className="row fleet-banner-fet p-2">
            <ul className="list1 col-md-12" >
                <li> <i className="fa-regular fa-square-check"></i>Increase Efficiency</li>
                <li> <i className="fa-regular fa-square-check"></i>Boost Productivity</li>
                <li> <i className="fa-regular fa-square-check"></i>Improve Safety</li>
            </ul>
        </div>
        <br/>
            <Link href="#fleetcontact">Get Started</Link>
        </div>
    </div>

    <div className="col-md-6">

    </div>

  </div>
</div>
            </section>

            {/* banner sec ends */}

            {/* why choose sec starts */}

            <section className="fleet-whychoose p-3">
            <div className="container">
          <div className="row ">

          <div className="col-12">
          <AnimatedHeading className='server heading p-3'>Why Choose Fleet?​</AnimatedHeading>
          <div className="row ">

          <div className="col-md-6 align-content-center fleet-why-img">
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239517/why-choose-fleet_l0yzpz.webp" alt="why choose fleet" loading='lazy' width={400} height={360}/>
          </div>

          <div className="col-md-6 fleet-why">
            <ul>
              <li >
                <div className="col1">
                <i className="fa-solid fa-rocket" style={{backgroundColor:'#6A65FF'}}></i>
                </div>
                <div className="col2">
                  <h3>Increase efficiency</h3>
                  <p>fleet management software provides Fuel efficiency, fuel management, optimal routing, and allocations for resources.</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-regular fa-flag" style={{backgroundColor:'#966CE6'}}></i>
                </div>
                <div className="col2">
                  <h3>Boost productivity</h3>
                  <p>Monitor, driver’s activity, point out weak spots, give actual comments, etc</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-solid fa-sack-dollar" style={{backgroundColor:'#6A65FF'}}></i>
                </div>
                <div className="col2">
                  <h3>Reduce costs</h3>
                  <p>Preventive maintenance will help reduce costs incurred to purchase fuel, Fleet Maintenance, and the vehicle insurance.</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-solid fa-user-shield" style={{backgroundColor:'#966CE6'}}></i>
                </div>
                <div className="col2">
                  <h3>Improve safety</h3>
                  <p>To monitor inappropriate or dangerous driving conducts among drivers, to promote safe driving techniques.</p>
                </div>
              </li>
            </ul>
          </div>

          </div>
          </div>

          </div>
          </div>
            </section>

{/* why choose sec ends */}

{/* fleet Manage sec starts */}

<section className="fleet-mange-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Fleet Mangement sofware​</AnimatedHeading>
    <div className="row ">

    <div className="col-md-6 align-content-center">
      <p>Each aspect of your fleet’s operations, including fuel management, driver performance monitoring, and vehicle tracking, can possibly match with our all-inclusive fleet management software provider. You’ll have complete visibility and control over your fleet thanks to our state-of-the-art technology and user-friendly platform, enabling you to make wise decisions and maximize resource usage.</p>
      <p>The Fleet Management Software provides the tools and data to increase your efficiency and gain a competitive advantage.</p>
      <p>The Fleet Software is a flexible, user-friendly, Cloud-based Software. The other thing about our software is that it’s affordable and even offers a degree of scaling suitability for companies irrespective of their size.</p>
    </div>

    <div className="col-md-6 text-center">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239580/fleet-management-removebg-preview_lsbynl.webp" alt="Fleet Mangement sofware" loading='lazy' width={400} height={400} />
    </div>

    </div>
    </div>
  </div>
</div>
</section>

{/* fleet Manage sec ends */}

{/* contact section ends*/}
<section className='fleet-call-t0-sec'>

<div className="container">
  <div className="row justify-content-center fleet-c2a container ">

    <div className="col-md-8 align-content-center text-center">
    <h3>One place to manage and maintain your fleet</h3>
    </div>

    <div className="col-md-4 align-content-center text-center">
    <Link href="#fleetcontact">Contact us</Link>
    </div>

  </div>
</div>
</section>
{/* contact section ends*/}

{/* fleet-feat-sec starts */}

<section className="fleet-feat-sec">
<div className="container">
  <div className="row text-center">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Features of Fleet Management Software​</AnimatedHeading>
    </div>
<div className='fleet-feat-1' >
    <div className="row ">
<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239868/Route-Optimization-1_sehzdd.webp" alt="Real-time GPS Tracking" width={100} height={100} loading='lazy' />
    <h3>Real-time GPS Tracking</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Monitor movement as well as performance of Vehicle Tracking in real-time.</p>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239868/Route-Optimization-1_sehzdd.webp" alt="Route Optimization" width={100} height={100} loading='lazy' />
    <h3>Route Optimization</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Devise efficient routes and reduce fuel usage and travel time</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239839/Maintenance-Management_adup5n.webp" alt="Maintenance Management" width={100} height={100} loading='lazy'/>
    <h3>Maintenance Management</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Schedule preventive maintenance and repairs to avoid costly breakdowns.</p>
    </div>
  </div>
</div>

</div>

<div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239830/Fuel-Management_ovlgpw.webp" alt="Fuel Management" width={100} height={100} loading='lazy' />
    <h3>Fuel Management</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Track fuel use, find ways to improve efficiency, and combat fuel theft.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239826/Driver-Management_tdhxla.webp" alt="Driver Management" width={100} height={100} loading='lazy' />
    <h3>Driver Management</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Safety monitoring of drivers for better performance by fleet tracking.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239875/web-design_wbjt5j.webp" alt="Customizable Dashboards" width={100} height={100} loading='lazy' />
    <h3>Customizable Dashboards</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Build your own tailored dashboards with what’s important for you.</p>
    </div>
  </div>
</div>

  </div>
  </div>

  <FeatureHideShow buttonText="Learn More" className="about-class container"> 
  <div className='fleet-feat-2' >
    <div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239848/Reporting-and-Analytics_ec87e1.webp" alt="Reporting and Analytics" width={100} height={100} loading='lazy' />
    <h3>Reporting and Analytics</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Prepare extensive reports and data mining for trends interpretation and decision-making.</p>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239832/Geo-fencing_czpklm.webp" alt="Geo-fencing" width={100} height={100} loading='lazy' />
    <h3>Geo-fencing</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Specify certain areas and send an alert message every time a vehicle enters or exits those boundaries</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239828/Fuel-Level-Monitoring_qbspdr.webp" alt="Fuel Level Monitoring" width={100} height={100} loading='lazy' />
    <h3>Fuel Level Monitoring</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Detect current fuel level, alerting the manager when it drops beyond the set limit.</p>
    </div>
  </div>
</div>

</div>


<div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239841/Mobile-App_ifvvap.webp" alt="Mobile App" width={100} height={100} loading='lazy' />
    <h3>Mobile App</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Manage your fleet by accessing fleet data using a smartphone or a tablet</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239837/Increase-Efficiency_ts6iac.webp" alt="Increase Efficiency" width={100} height={100} loading='lazy' />
    <h3>Increase Efficiency</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Improve efficiency in resource utilization, reduce fuel costs, and enhance time performance on delivery services.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239824/Boost-Productivity_chsz4o.webp" alt="Boost Productivity" width={100} height={100} loading='lazy' />
    <h3>Boost Productivity</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Enhance your drivers’ capability and simplify operations.</p>
    </div>
  </div>
</div>

  </div>

  <div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239846/Reduce-Costs_xpdsav.webp" alt="Reduce Costs" width={100} height={100} loading='lazy' />
    <h3>Reduce Costs</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Pay less for fuel, service, and insurance</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239835/Improve-Safety_bywsk5.webp" alt="Improve Safety" width={100} height={100} loading='lazy' />
    <h3>Improve Safety</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Ensure early detection of dangerous driving practices and habits among drivers.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722239871/web-design_1_l5l06l.webp" alt="Gain Insights" width={100} height={100} loading='lazy' />
    <h3>Gain Insights</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Use data to make decisions and enhance fleet performance.</p>
    </div>
  </div>
</div>

  </div>

  </div>
  </FeatureHideShow>

  </div>
</div>
</section>

{/* fleet-feat-sec ends */}


{/* fleet-why-us stars */}
<section className="fleet-why-us-sec">
<div className="container">
  <div className="row text-center">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Why Choose Us​</AnimatedHeading>
    </div>
    <div className="row fleet-why-us">

    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240264/why-choose-fleet_yxqosr.webp" alt="Why Choose Us" loading='lazy' width={480} height={400} />
    </div>

    <div className="col-md-6">
    <ul>
              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240257/best-customer-experience_cn9uxf.webp" alt="Experienced" width={63} height={63} loading='lazy' />
                </div>
                <div className="col2">
                  <h3>Experienced and Trusted</h3>
                  <p>More than 10 years of providing IT solutions business.</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240260/customer-service_jzwmjm.webp" alt="Dedicated Support" width={63} height={63} loading='lazy' />
                </div>
                <div className="col2">
                  <h3>Dedicated Support</h3>
                  <p>A dedicated support team for solving any queries at any time of the day.</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240261/profits_tacz7g.webp" alt="Cost-Effective" width={63} height={63} loading='lazy' />
                </div>
                <div className="col2">
                  <h3>Cost-Effective</h3>
                  <p>A variety of competitive pricing schemes to meet your needs</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240255/scalable_sdkhdb.webp" alt="Scalable and Flexible" width={63} height={63} loading='lazy' />
                </div>
                <div className="col2">
                  <h3>Scalable and Flexible</h3>
                  <p>The adjustments fit the evolution processes in growing enterprises</p>
                </div>
              </li>
            </ul>
            <br/>
            <Link href='/contact-us'>connect with us</Link>
    </div>

    </div>

    </div>
    </div>
</section>

{/* fleet-why-us ends */}

{/* faq sec starts */}
<section className='fleet-faq'>
<AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-12 text-center">
    
    <div className="accordion fleet-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Can fleet management software integrate with existing systems and hardware?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes,  it provides the various integration capabilities to seamlessly connect with existing systems such as ERP (Enterprise Resource Planning) software, telematics devices, fuel cards, and maintenance systems, allowing for data synchronization and streamlined operations.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How secure is the data stored in fleet management software?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Fleet management software providers prioritize data security and employ measures such as encryption, access controls, and regular backups to protect sensitive information. Additionally, they comply with industry standards and regulations to ensure data privacy and confidentiality.</p>
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What level of customer support is provided by fleet management software providers in Chennai?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>customer is the top most priority when it coms to our services. we off exception 99.99% of the customer service support to our clients.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      How can I evaluate the ROI (Return on Investment) of implementing fleet management software?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The ROI can be measured by factors such as reduced fuel consumption, decreased maintenance costs, improved vehicle utilization, increased productivity, and enhanced customer satisfaction. Fleet management software providers often offer ROI calculators and case studies to help businesses assess the potential benefits.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Where can I find the best fleet management providers in Chennai?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You can start by researching online directories, business listing websites, and industry-specific forums to identify reputable fleet management service providers in Chennai. Additionally, asking for recommendations from industry peers or consulting with local business associations can also help you find reliable service providers. one such reputable industry  standard ” fleet management service provider is Sixth Star Technologies
        </div>
    </div>
  </div>
</div>


<HideShow buttonText="Learn More" className="about-class justification-center">
        <div>
        <div>
<div className= 'accordion fleet-faq' id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
      What is fleet management software?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Fleet management software is a technology solution designed to help businesses manage and optimize their fleet operations, including vehicle tracking, maintenance scheduling, fuel management, and driver performance monitoring.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      What are the benefits of using fleet management software?
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>provides this software  numerous benefits, including improved efficiency, reduced operating costs, enhanced vehicle safety, optimized routing and scheduling, better asset utilization, and increased productivity.</p>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      How can fleet management software help my business in Chennai?
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>It can help businesses in Chennai by providing real-time visibility into their fleet operations, enabling better decision-making, optimizing routes to navigate the city’s traffic, monitoring driver behavior for safety, and ensuring compliance with local regulations.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      Is fleet management software suitable for businesses of all sizes?
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, this is designed to cater to the needs of businesses of all sizes, from small companies with a few vehicles to large enterprises with extensive fleets. The features and functionalities can be customized to meet the specific requirements of each business.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      What features should I look for in fleet management software?
      </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Key features to consider which includes GPS tracking, route optimization, maintenance management, fuel tracking, driver behavior monitoring, real-time alerts and notifications, reporting and analytics, and integration capabilities with other business systems.</p>
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

{/* faq section ends */}

 {/* contact form starts */}
 <section className="fleet-contact-sec">
<div className="container1">
  <div className="row">
    <div className="col pb-4">
    <AnimatedHeading className='server heading'>Connect with our Expert Team </AnimatedHeading>
    </div>
  </div>
  <div className="row ">

    <div className="col-md-6  align-content-center">
    </div>

    
    <div className="col-md-6 " id='fleetcontact'>
    <FleetForm />
    </div>

  </div>
</div>

</section>


{/* contact form ends */}

      </div>
    </div>
  )
}
