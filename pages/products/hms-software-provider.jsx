import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../../components/AnimatedHeading'
import FeatureHideShow from '../../components/FeatureHideShow'
import HmsForm from '../forms/HmsForm'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import MetaTags from '../../components/MetaTags';
import {hmsSchema} from '../../lib/data/schema'

export default function HmsSoftwareProvider() {

  return (
    <div>
      <MetaTags />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hmsSchema) }}
        />
      </Head>
      <div className='main'>

        {/* banner sec start */}
        <section className='hms-banner'>
        <div className="container ">
  <div className="row p-2">

    <div className="ban-left-1 col-md-6">
        <h1 className='server-1 '>
        <TypeAnimation
      sequence={[
        '',
        1000, 
        'Streamline Your Hospital Operations',
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
            <Link href="#hmscontact">Get Started</Link>
        </div>
    </div>

    <div className="col-md-6">

    </div>

  </div>
</div>
            </section>

            {/* banner sec ends */}

            {/* hmsfeat1 sec starts */}
        <section className="hmsfeat1-sec">
        <div className="container">
  <div className="row">
    <div className="col-lg-4 col-md-12">
        <h2>Patient Management</h2>
        <p>This hms software is useful for Making appointments, taking notes of patients’ history, insurance records, and so on.</p>

    </div>

    <div className="col-lg-4 col-md-6">
        <h2>Clinical Workflow</h2>
        <p>Clinical process streamlining through e-prescriptions, EHRs, and lab integration.</p>
    </div>

    <div className="col-lg-4 col-md-6">
        <h2>Financial Management</h2>
        <p>Smooth-till billing, revenue tracking, costing and reporting.</p>
    </div>
  </div>
</div>
        </section>

        {/* hmsfeat1 sec ends */}

        {/* why choose sec starts */}

        <section className="hms-whychoose p-3">
            <div className="container">
          <div className="row ">

          <div className="col-12">
          <AnimatedHeading className='server heading p-3'>Why Choose HMS​</AnimatedHeading>
          <div className="row ">

          <div className="col-md-6 fleet-why">
            <ul>
              <li >
                <div className="col1">
                <i className="fa-solid fa-hospital-user" style={{backgroundColor:'#6A65FF'}}></i>
                </div>
                <div className="col2">
                  <h3>Improve patient care</h3>
                  <p>Improving care delivery by providing care coordination and communication.</p>
                </div>
              </li>
              <li >
                <div className="col1">
                <i className="fa-solid fa-sack-dollar" style={{backgroundColor:'#966CE6'}}></i>
                </div>
                <div className="col2">
                  <h3>Reduce costs</h3>
                  <p>Through increased operational efficiency and smoothing production workflow.</p>
                </div>
              </li>
              <li >
                <div className="col1">
                <i className="fa-solid fa-coins" style={{backgroundColor:'#6A65FF'}}></i>
                </div>
                <div className="col2">
                  <h3>Increase revenue</h3>
                  <p>In the end, this will be translated in terms of enhancing customer satisfaction and drawing in new customers.</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-solid fa-chart-line" style={{backgroundColor:'#966CE6'}}></i>
                </div>
                <div className="col2">
                  <h3>Gain insights</h3>
                  <p>Making use of data to improve your hospital’s output.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-6 align-content-center hms-why-img">
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240789/hms-why-choose_unjwfr.webp" alt="Why Choose Fleet" loading='lazy' width={540} height={360}/>
          </div>

          </div>
          </div>


          </div>
          </div>
            </section>

{/* why choose sec ends */}

{/* contact section ends*/}
<section className='fleet-call-t0-sec'>

<div className="container">
  <div className="row justify-content-center fleet-c2a container ">

    <div className="col-md-8 align-content-center text-center">
    <h3>Our customer care experts are always available to assist</h3>
    </div>

    <div className="col-md-4 align-content-center text-center">
    <Link href="#hmscontact">Contact us</Link>
    </div>

  </div>
</div>
</section>
{/* contact section ends*/}

{/* fleet-feat-sec starts */}

<section className="hms-feat-sec">
<div className="container">
  <div className="row text-center">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Features of HMS Software​</AnimatedHeading>
    </div>
<div className='fleet-feat-1' >
    <div className="row ">
<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240980/medical-checkup_qbbvsr.webp" alt="Patient Management" width={100} height={100} />
    <h3>Patient Management</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>This Medical Software is useful for Making appointments, taking notes of patients’ history, insurance records, and so on.</p>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240996/work_kxv9t9.webp" alt="Clinical Workflow" width={100} height={100} />
    <h3>Clinical Workflow</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Clinical process streamlining through e-prescriptions, EHRs, and lab integration.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240975/economic-growth_sriipk.webp" alt="Financial Management" width={100} height={100} />
    <h3>Financial Management</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Smooth-till billing, revenue tracking, costing and reporting.</p>
    </div>
  </div>
</div>

</div>

<div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240987/Reporting-and-Analytics_1_ojifgn.webp" alt="Reporting and Analytics" width={100} height={100} />
    <h3>Reporting and Analytics</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Monitor the hospital’s performance with instantly available dashboards and reports.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240985/reliability_bzduit.webp" alt="Security" width={100} height={100} />
    <h3>Security</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Ensure patient protection using HIPPA-compliant security measures. Also, encrypt data.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240977/Fully-featured__oj1kf9.webp" alt="Additional Features" width={100} height={100} />
    <h3>Additional Features</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Mobile application, online appointment booking, patient portal, telemedicine, and others.</p>
    </div>
  </div>
</div>

  </div>
  </div>

  <FeatureHideShow buttonText="Learn More" className="about-class container p-0" > 
  <div className='fleet-feat-2 '  >
    <div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240990/Reporting-and-Analytics_w8dqos.webp" alt="Cloud-based" width={100} height={100} />
    <h3>Cloud-based</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Access you’re data anywhere and whenever.</p>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240993/scalable-1_qalry7.webp" alt="Scalable" width={100} height={100} />
    <h3>Scalable</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Supplies the expanding hospitals.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240971/aggrement_dc14yr.webp" alt="User-friendly" width={100} height={100} />
    <h3>User-friendly</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Simple enough to use and appropriate for nontechnical folks.</p>
    </div>
  </div>
</div>

</div>


<div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240973/Customizable-Dashboards_fouws3.webp" alt="Reliable" width={100} height={100} />
    <h3>Reliable</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>24/7 support and uptime guaranteed.</p>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722240982/Reduce-Costs_ygi1gg.webp" alt="Cost-effective" width={100} height={100} />
   <h3>Cost-effective</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>The best deal at your cheapest price.</p>
    </div>
  </div>
</div>

{/* <div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://sixthstartech.com/wp-content/uploads/2024/04/Boost-Productivity.png" alt="" width={100} height={100} />
    <h4>Boost Productivity</h4>
    </div>
    <div className="flip-card-back flip-box-back">
      <p>Enhance your drivers’ capability and simplify operations.</p>
    </div>
  </div>
</div> */}

  </div>


  </div>
  </FeatureHideShow>

  </div>
</div>
</section>

{/* fleet-feat-sec ends */}


{/* why-us stars */}
<section className="hms-why-us-sec">
<div className="container">
  <div className="row text-center">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Why Choose Us​</AnimatedHeading>
    </div>
    <div className="row fleet-why-us">

    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241357/hms-why-choose_txcvbm_kzinbb.webp" alt="Why Choose Us" loading='lazy' width={400} height={400} />
    </div>

    <div className="col-md-6">
    <ul>
              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241307/best-customer-experience_t3bxdz.webp" alt="Well built enterprise" width={63} height={63} />
                </div>
                <div className="col2">
                  <h3>Well built enterprise</h3>
                  <p>Sixth Star is functioning since 2007, we have skillful and experienced team successfully completed 1200+ projects, leads to tremendous development in the Indian webhosting industry.</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241309/customer-service_wwhgzh.webp" alt="24/7 support" width={63} height={63} />
                </div>
                <div className="col2">
                  <h3>24/7 support</h3>
                  <p>We stand by you always in all simple as well as in critical issues. Our professionals will involve and strive to clear all your back-end issues along guiding you with technical aspects and maintenance.</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241297/process_r3dz6e.webp" alt="Unique process" width={63} height={63} />
                </div>
                <div className="col2">
                  <h3>Unique process</h3>
                  <p>For each project assigned our team frameworks unique methods that are thoroughly researched to give profitable income for a long run. </p>
                </div>
              </li>

              <li >
                <div className="col1">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241304/data-center_jkkcjt.webp" alt="Multiple data centers" width={63} height={63} />
                </div>
                <div className="col2">
                  <h3>Multiple data centers</h3>
                  <p>We have multiple data centers located in India, Germany, Singapore, Malaysia, UK and US. Select your preferred server location</p>
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

{/* why-us ends */}

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

    
    <div className="col-md-6 " id='hmscontact'>
    <HmsForm />
    </div>

  </div>
</div>

</section>


{/* contact form ends */}



      </div>
    </div>
  )
}
