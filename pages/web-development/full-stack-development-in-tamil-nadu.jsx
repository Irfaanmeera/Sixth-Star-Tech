import React from 'react'
import axios from 'axios';
import { m } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import FullStackForm from '../forms/FullStackForm';
import FullStackStories from '../section/FullStackStories'; import { storiesData } from '../../lib/data/fullstack/fullstackdata';
import Fullstackexpert from '../section/Fullstackexpert'; import {services} from '../../lib/data/fullstack/fullstackdata';
import FullstackTabsec from '../section/FullstackTabsec'; import {tabs} from '../../lib/data/fullstack/fullstackdata';
import Fullstackprocess from '../section/Fullstackprocess'; import {steps} from '../../lib/data/fullstack/fullstackdata';
import FullStackhireForm from '../forms/FullStackhireForm';
import FullStackTesti from '../section/FullStackTesti'; import {testimonials} from '../../lib/data/fullstack/fullstackdata';
import FullstackFaq from '../section/FullstackFaq'; import {faqs} from '../../lib/data/fullstack/fullstackdata';
import FullStackResources from '../section/FullStackResources'; 
import FullStackClientsec from '../section/FullStackClientsec';
import MetaTags from '../../components/MetaTags';


function FullStackDevelopment({meta}) {
  return (
    
    <div>
 <MetaTags />

       {/* banner section starts */}

       <section className="full-stack-banner-sec">

       <div className="banner">
  <div className="row ">

    <div className="col-md-6">
    <h1 >Top-Grade Full Stack Development Company</h1>
    <p>Hire Full-stack developers from Sixthstar Tech to set a faster pace of growth. With an extensive understanding and experience, we serve custom Full Stack development services and solutions with the latest technologies.</p>
    <FullStackClientsec />
    </div>

    <div className="col-md-6">
    <FullStackForm />
    </div>

  </div>
</div>
       </section>

       {/* banner section ends */}

       <section className="fullstack-client-sec">
      <div className="container">
  <div className="row ">

    <div className="col-12">
      <div className="head">
      <h3>Our Full Stack Projects</h3>
      <div className="line"></div>
      </div>
    </div>

  </div>
</div>
      </section>

       {/* stories section starts */}

      <section className="fullstack-success-sec">
      <div className="container">

</div>
<FullStackStories stories={storiesData} />
      </section>

       {/* stories section ends */}

       {/* full stack services sec starts */}

    <section className="fullstack-services-sec">
    <div className="container">
  <div className="row fullstack-services">

    <div className="col-md-6">
      <div className='sticky top-25'>
    <h3>Comprehensive Full Stack Development Services</h3>
    <p>Empowering innovation from concept to deployment with Custom Full Stack Development.</p>
    {/* <img src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?t=st=1746424852~exp=1746428452~hmac=17a1de1a5e7f1892bcda3d32aed8fabd3c93d7bd06e1dc323e30b74eb1ffee52&w=900"/> */}
    <button className='fullstackbtn'><Link href='/contact-us'>Contact us</Link></button>
    </div>
    </div>

    <div className="col-md-6">
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      API Development
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>Need your systems to talk to each other smoothly? Our API development makes that happen—fast, secure, and built to scale as you grow. Whether it's connecting apps, platforms, or third-party tools, we’ve got you covered. Let’s build something smart that just works.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Full Stack eCommerce Development
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Now it’s time your online store matched that standard. We offer full stack eCommerce development that upgrades your digital presence—seamless, scalable, and fully customized. From backend logic to front-end design, we handle it all. Let’s take your online sales to the next level.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Full Stack Web Hosting
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>Tired of juggling different hosting tools? We bring it all together—speed, security, and stability in one full stack solution. Your site stays fast, safe, and always online. Just plug in your brand—we’ll keep the engine running.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      Full Stack CMS Development
      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Managing content shouldn’t be a headache. We build CMS platforms that feel like they were made just for your team—because they are. Easy to use, fully flexible, and ready to grow with your brand. Publish faster, manage smarter.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      Full Stack Integration
      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>All your tools should play nice—so we make sure they do. From CRMs to custom APIs, we connect every piece of your tech stack into one smooth, synced-up system. No more silos, no more chaos—just clean, connected workflows.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
      Full Stack Migration and Porting
      </button>
    </h2>
    <div id="collapsesix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Thinking about moving platforms? We’ll get you there without the mess. Our full stack migration takes care of everything—code, content, data, you name it—with zero downtime and zero stress. You evolve, we handle the shift.</p>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
      Data Visualization Dashboard
      </button>
    </h2>
    <div id="collapseseven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Got data but need clarity? We turn your numbers into smart, interactive dashboards that actually make sense. Track what matters, spot trends, and make moves—all with visuals that feel as sharp as your brand.</p>
      </div>
    </div>
  </div>
</div>
    </div>

  </div>
</div>
    </section>

       {/* full stack services sec ends */}

       {/* full stack Expertise sec starts */}

        <section className="fullstack-expertise-sec">
            <div className="container">
                <div className="row fullstack-expertise">
                    <div className="col-12">
                      <h3 className='text-center fullstack-head'>Our Expertise in Full Stack Development</h3>
                      <p className='text-center m-0'>Building Powerful, Scalable Solutions</p>
                      </div>
                      <Fullstackexpert services={services} />
                </div>
            </div>
        </section>

       {/* full stack Expertise sec ends */}

       {/* full stack hiring section starts */}

      <section className="fullstack-hiring-sec">
      <div className="container">
  <div className="row ">

    <div className="col-12">
    <h3 className='fullstack-head text-center'> Hire Full Stack Developers</h3>
    </div>
<FullstackTabsec tabs = {tabs} />

  </div>
</div>
      </section>

       {/* full stack hiring section ends */}

       {/* full stack Business sec ends */}

       <section className="fullstack-business-sec py-12 bg-linear-to-r/srgb from-indigo-80 to-indigo-60">
  <div className="container mx-auto px-6 fullstack-business">
    <div className="mb-12 text-center">
      <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
        Why Choose Our Full Stack Development Services?
      </h3>
      <p className="text-lg text-gray-700">
        We don't just build software—we create solutions that are fast, efficient, and built to scale.
      </p>
    </div>

    <div className="grid fullstack-business grid-cols-1 md:grid-cols-6 gap-8 auto-rows-fr">
      {/* Box 1 */}
      <div className=" rounded-xl p-6 shadow-md border border-black-300 md:col-span-3 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-linear-to-r/increasing from-indigo-100 to-teal-60">
        <div className="flex flex-col h-full">
          <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1740643478/Affordable-Development-Cycle_fnyfob.svg" alt="" className="w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold  mb-2">Affordable Development Cycle</h4>
          <p className="mb-1">Get enterprise-level solutions without breaking the bank.</p>
          <ul className="space-y-2 text-sm ">
            <li>✓ We optimize resources and use proven frameworks to deliver powerful results on a budget.</li>
            <li>✓ Ideal for startups and SMEs looking for cost-effective solutions.</li>
          </ul>
        </div>
      </div>

      {/* Box 2 */}
      <div className="bg-white-500 rounded-xl p-6 shadow-md border border-grey-300 md:col-span-3 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-lg hover:bg-linear-to-r/increasing from-indigo-100 to-teal-60">
        <div className="flex flex-col h-full">
          <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1740643478/Accelerated-Development-Process_r8wsty.svg" alt="" className="w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold  mb-2">Accelerated Development Process</h4>
          <p className=" mb-1">Move from idea to execution—faster than ever.</p>
          <ul className="space-y-2 text-sm ">
            <li>✓ Full stack developers handle both front-end and back-end seamlessly.</li>
            <li>✓ Pre-built components and reusable code structures speed up delivery time.</li>
          </ul>
        </div>
      </div>

      {/* Box 3 */}
      <div className="bg-white-500 rounded-xl p-6 shadow-md border border-grey-300 md:col-span-2 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-lg hover:bg-linear-to-r/increasing from-indigo-100 to-teal-60">
        <div className="flex flex-col h-full">
          <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1740643479/Extremely-Secure_lfapxp.svg" alt="" className="w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Highly Scalable</h4>
          <p className=" mb-1">Built to grow with your business.</p>
          <ul className="space-y-2 text-sm">
            <li>✓ Our architecture supports future feature expansion and user growth.</li>
            <li>✓ Easily adaptable to evolving tech demands and market changes.</li>
          </ul>
        </div>
      </div>

      {/* Box 4 */}
      <div className="bg-white-500 rounded-xl p-6 shadow-md border border-grey-300 md:col-span-2 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-lg hover:bg-linear-to-r/increasing from-indigo-100 to-teal-60">
        <div className="flex flex-col h-full">
          <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1740643478/Enhanced-Productivity_gjixf8.svg" alt="" className="w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold  mb-2">Enhanced Productivity</h4>
          <p className=" mb-1">Do more with fewer developers.</p>
          <ul className="space-y-2 text-sm ">
            <li>✓ One expert can handle multiple layers of development, reducing communication gaps.</li>
            <li>✓ Streamlined workflows and tools ensure faster iterations and delivery.</li>
          </ul>
        </div>
      </div>

      {/* Box 5 */}
      <div className="bg-white-500 rounded-xl p-6 shadow-md border border-grey-300 md:col-span-2 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-lg hover:bg-linear-to-r/increasing from-indigo-100 to-teal-60">
        <div className="flex flex-col h-full">
          <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1740643479/Extremely-Secure_lfapxp.svg" alt="" className="w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold mb-2">Extremely Secure</h4>
          <p className=" mb-1">Security is built into every layer.</p>
          <ul className="space-y-2 text-sm">
            <li>✓ End-to-end encryption, secure coding practices, and regular audits ensure your data stays safe.</li>
            <li>✓ Compliance-ready development for sensitive and regulated industries.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

       {/* full stack Business sec ends */}

       {/* full stack process sec starts */}

      <section className="fullstack-process-sec">
        <div className="container">
        <div className="row fullstack-why">

<div className="col-12">
<h3 className=''> Why Choose Sixthstar Tech for Full Stack Development?</h3>
<p>Experience seamless execution with our end-to-end custom full stack solutions—designed to transform ideas into scalable, high-performance applications.</p>
</div>

<Fullstackprocess steps = {steps} />

</div>
        </div>
      </section>

       {/* full stack process sec ends */}

       {/* full stack cta sec starts */}

      <section className="fullstack-cta-sec">
      <div className="container">
  <div className="row fullstack-cta">

    <div className="col-md-6">
    <h3 className=''> Why Choose Sixthstar Tech as Your Full Stack Development Agency</h3>
<p>Leverage our end-to-end Custom Full Stack Development solutions.</p>
<div className="call">
  <Link href='tel:9962107399' className="box">
    <div className="col1">
      <span>Call Us</span>
      <p>+91 9962107399</p>
      <p>Sales</p>
    </div>
    <div className="col2">
      <i className="fa-solid fa-phone"></i>
    </div>
  </Link>
  <Link href='tel:9176627399' className="box">
    <div className="col1">
      <span>Call Us</span>
      <p>+91 9176627399</p>
      <p>Support</p>
    </div>
    <div className="col2">
      <i className="fa-solid fa-phone"></i>
    </div>
  </Link>
</div>

    </div>

    <div className="col-md-6">
      <FullStackhireForm />
    </div>

  </div>
</div>

      </section>

       {/* full stack cta sec ends */}

<FullStackResources />
       {/* full stack Resources sec ends */}

       {/* full stack client section ends */}

    <section className="fullstack-testimonial-sec">
      <div className="container">
        <div className="row fullstack-testimonial">
          <div className="col-12">
          <h3 className=''> What Our Clients Say</h3>
          </div>
          <FullStackTesti testimonials={testimonials} />
        </div>
      </div>
    </section>

       {/* full stack client section ends */}

      {/* full stack Agency section starts */}

      <section className="fullstack-agency-sec">

        <div className="container">
        <div className="grid md:grid-cols-2 gap-8 mt-10 items-center">
        {/* Left Side: Text & Stats */}
        <div className='fullstack-agency'>
          <h3 className="text-2xl font-bold text-gray-900">What Makes Sixthstar Tech the Best Full Stack Development Agency</h3>
          <p className="text-gray-600 mt-4">
            At Sixthstar Tech, we cover every aspect of Full Stack Development to provide you with a holistic project
            development service. With our flexible workflows, you can ensure peak efficiency of the services...
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="text-blue-900 font-bold text-lg">1500+<span className="block text-gray-600 text-sm">Projects Completed</span></div>
            <div className="text-blue-900 font-bold text-lg">500+<span className="block text-gray-600 text-sm">Apps Developed</span></div>
            <div className="text-blue-900 font-bold text-lg">800+<span className="block text-gray-600 text-sm">Resources</span></div>
            <div className="text-blue-900 font-bold text-lg">500+<span className="block text-gray-600 text-sm">Happy Clients</span></div>
          </div>
        </div>

        {/* Right Side: Video */}
        <div className="relative text-center">
          <Image
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1740743526/18996_tace0l.jpg" 
            alt="Sixthstar Tech Video"
            width={500}
            height={300}
            className="rounded-lg shadow-lg inline-block"
          />
        </div>
      </div>
        </div>
      </section>

      {/* full stack agency section ends */}

      <section className="fullstack-contact-cta-sec ">

<div className="container">
  <div className="row fullstack-contact-cta rounded-4xl bg-[#1b76fe] p-3">
    <div className="col-8">
      <h4>Hire Full Stack Developers from Sixthstar Tech Today!</h4>
      <button className='fullstack-cta-btn'><Link href="/contact-us">Get in Touch</Link></button>
    </div>
    <div className="col-4">
      <img src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1740995796/8716348-removebg-preview_eohhsr.png" alt="" />
    </div>
  </div>
</div>
</section>

      {/* full stack faq section starts */}

      <section className="fullstack-faq-sec">
        <div className="container">
        <FullstackFaq faqs={faqs} />

        </div>
      </section>

      {/* full stack faq section ends */}
       
    </div>
  )
}

export default FullStackDevelopment