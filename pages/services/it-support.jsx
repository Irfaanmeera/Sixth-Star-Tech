import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../../components/AnimatedHeading'
import Image from 'next/image'
import ItSupportClient from '../section/ItsupportClient'
import Testimonial from '../Testimonial'
import MetaTags from '../../components/MetaTags';

export default function ItSupport() {

  return (
    <div>
      <MetaTags />

        {/* it support banner starts */}

        <section className="itsupport-banner-sec">

        <div className="container">
  <div className="row itsupport-banner">

    <div className="col-md-6">
    <h1 >IT Support Services</h1>
    <p>IT services company in Chennai, Sanjeevi Technology Solutions provides IT support services to help organizations manage their IT infrastructure.</p>
    <button><Link href='#'>Our Services</Link></button>
    </div>

    <div className="col-md-6">
    <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1729078674/firmware-concept-illustration_e5a9ff.png" alt="" />
    </div>

  </div>
</div>
       
        </section>


        {/* it-support banner ends */}

        {/* it support section 1 starts */}
        <section className="mailserver1-sec">
        <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading text-left'>Top-Class IT support Service</AnimatedHeading>
    <div className="row mailserver1">

    <div className="col-1">
        <ul>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>Running a business involves countless responsibilities, and managing your IT infrastructure shouldn't be one of the burdens you carry alone. Many business owners lack the resources or expertise to handle IT support services internally, making it not only challenging but also costly. That’s where Sixthstar Technologies comes in.</p>
            </li>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>Based in Chennai, Sixthstar Technologies is a leading IT solutions provider offering comprehensive IT support services designed to help organizations efficiently manage their IT infrastructure.</p>
            </li>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>While we are based in Chennai, we serve businesses of all sizes—small, medium, and large—across the globe, delivering value-added services that ensure seamless operations.</p>
            </li>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <div>
            <span>Our expert team specializes in a wide range of services, including:</span>
            <ul className="list" style={{listStyleType:'disc'}}>
              <li>Cloud Computing</li>
              <li>Software Development and Maintenance</li>
              <li>Network Security and Compliance</li>
              <li>IT Consulting</li>
            </ul>
            <p></p>
            </div>
            
            </li>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>These services help our clients stay competitive, adopt next-generation technologies, and ensure the highest standards of quality and usability.</p>
            </li>
            <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>Let Sixthstar Technologies handle your IT needs, so you can focus on growing your business. We are here to ensure your IT infrastructure is secure, scalable, and ready for the future.</p>
            </li>
        </ul>
    </div>

    <div className="col-2">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1729080985/rb_69913_bflr8e.png" alt="mail-server" loading='lazy' width={390} height={355} />
    </div>
  </div>
    </div>

  </div>
</div>
        </section>

        {/* it support section 1 ends */}

        {/* it support service1 sec starts */}
        <section className="it-support-service1-sec">
        <div className="container">
  <div className="row it-support-service1">

    <div className="col-12">
    <AnimatedHeading className='server heading text-left'>Our Services</AnimatedHeading>
    <h3 className='text-center'>We Provide Customized Business IT Support Solutions to Our Clients.</h3>
    <p>Our support solutions also include comprehensive<strong> website maintenance</strong> to keep your website professional, fresh, and running smoothly. We fix broken links, update content, and ensure security, allowing you to focus on growing your business while we manage and update your site. With our extensive IT support expertise and modernized approach, we offer customized services to help you achieve your organizational goals.</p>
    <div className="row service1">

    <div className="col-lg-4 col-md-12">
    <h4>IT Consulting</h4>
    <p>We provide reliable and tailored IT consulting services, from network analytics to managed IT solutions, to support any level of your IT projects.</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <h4>IT Management</h4>
    <p>Our end-to-end IT management services offer full support. Using a problem-solving approach, we help clients successfully complete their projects.</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <h4>Cloud Backup Services</h4>
    <p>Ensure your data is secure with our automated and reliable <strong>Cloud Backup Solutions</strong>, keeping your business safe and protected.</p>
    </div>

  </div>
  <div className="row service1">

<div className="col-lg-4 col-md-12">
<h4>Network Security and Compliance</h4>
<p>We provide secure network solutions designed to protect your business. Our customized cybersecurity systems offer round-the-clock network security.</p>
</div>

<div className="col-lg-4 col-md-6">
<h4>Remote System Monitoring</h4>
<p>Using reliable tools, we monitor the health of your computing environment to identify security risks, performance issues, and required updates, ensuring flawless operation.</p>
</div>

<div className="col-lg-4 col-md-6">
<h4>24/7 Monitoring</h4>
<p>Our experienced team constantly monitors system performance, examining error rates, load times, and response times to resolve any issues. We offer continuous 24/7 monitoring and alerts in case of any failure.</p>
</div>

</div>
<div className="row service1 justify-content-start">

<div className="col-lg-4 col-md-6">
<h4>IT Help Desk Service</h4>
<p>Our team is available to resolve network issues, answer queries, and provide solutions for any problems you encounter.</p>
</div>



</div>
    </div>

  </div>
</div>
        </section>
        {/* it support service1 sec ends */}

        {/* it support client sec starts */}
      <section className="itsupport-client-sec">
      <div className="container">
  <div className="row itsupport-client">

    <div className="col-md-6">
    <h5>Our Clients</h5>
    <h2>Expert IT Support Across Various Industries</h2>
    <p>We are proud to work with a wide range of clients, offering reliable IT support services that ensure uninterrupted performance and availability. Our <strong>customized IT support solutions</strong> are designed to meet the specific needs of each business, helping them achieve operational efficiency and success. With a focus on <strong>business continuity </strong>and <strong>technology optimization</strong>, we ensure that our clients' IT systems are always running smoothly.</p>
    </div>

    <div className="col-md-6 aligh-content-center">
    <ItSupportClient />
    </div>

  </div>
</div>
      </section>

        {/* it support client sec ends */}

        {/* it support testimonial sec starts */}
      <section className="itsupport-test-sec">
      <AnimatedHeading className='server heading text-left'>Customer Testimonial</AnimatedHeading>
        <Testimonial />
        
              </section>

        {/* it support testimonial sec ends */}

    </div>
  )
}
