import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../components/AnimatedHeading'
import FeatureHideShow from '../components/FeatureHideShow'
import SeoSlider from './section/SeoSlider'
import SeoForm from './forms/SeoForm'
import { TypeAnimation } from 'react-type-animation';
import MetaTags from '../components/MetaTags';
import {seoSchema} from '../lib/data/schema'

export default function SEOServices() {
  return (
    <div>
       <Head>
  <link rel="preload" as="image" href="	https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722231895/seo-bg_ldiogc.webp" type="image/webp" />
  <script
                   type="application/ld+json"
                   dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
                 />
</Head>
      <MetaTags />

      <div className='main'>

        {/* banner sec starts */}

        <section className="seo-banner-sec">
        <div className="container">
        <div className="row ">

<div className="col-12 text-center">

<div className="row ">
    <div className="col-md-6">
        <h1>
        <TypeAnimation
      sequence={[
        '',
        1000, 
        'SEARCH ENGINE OPTIMIZATION',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    /> </h1>
        <div className="row seo-banner-fet">
            <ul className="list1 col-md-12" >
                <li> <i className="fa-regular fa-square-check"></i>100% Ethical and Efficient</li>
                <li> <i className="fa-regular fa-square-check"></i>Enhance Website Ranking</li>
                <li> <i className="fa-regular fa-square-check"></i>Analyze Competitor</li>
                <li> <i className="fa-regular fa-square-check"></i> Flexibility and Support</li>
            </ul>
        </div>

        <div className='seo-ban-float'>
            <AnimatedHeading className='heading'><span style={{color:'#ff6100'}}>300%</span> Organic growth Quarterly</AnimatedHeading>
            <AnimatedHeading className='heading'> Retain more than <span style={{color:'#11009e'}}> 100+</span> customers through Organic Marketing</AnimatedHeading>
        </div>
    </div>

    <div className="col-md-6">
    </div>

  </div>
      <br/>
  <Link href='#seocontact'>GET STARTED</Link>
</div>


</div>
  
</div>
        </section>

        {/* banner sec ends */}

        {/* se01 sec start */}

<section className="seo1-sec">
<div className="container">
  <div className="row ">

    <div className="col-12 text-center">
    <AnimatedHeading className='server heading p-3'>Search Engine Optimization​</AnimatedHeading>
    <p>Sixth Star Technologies offer an effective and professional SEO service that provides best website optimization for our clients. Our SEO Service will give you more growth by obtaining high traffic, ranks your business on Google which results in getting leads of extra sales.</p>
    <FeatureHideShow buttonText="View More" className="about-class container text-center"> 
    <p>We have SEO Packages that is the combination of on-page and off-page SEO tasks. Using the most reasonable SEO Services and authoritive online marketing, we have a tremendous record of helping your business to develop and grow.
    </p>
    <p>Either you want to create a new website or want to convert a lost site into the engaging site, our talented web developers ensure to provide you with an impeccable service which will be out your expectation level. Our web development team not only develops attractive websites but also assures to make it audience-centric, and have global visibility. Besides it, they also update and manage your site systematically to maintain its standard.</p>
    
    </FeatureHideShow> 
    </div>

  </div>
</div>
</section>

{/* seo1 sec ends */}

{/* seo whychoose sec start */}
<section className="seo-why-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Why Choose US?​</AnimatedHeading>
    <SeoSlider />

    </div>

  </div>
</div>
</section>

{/* seo whychoose sec ends */}

{/* seo serv sec start */}
<section className="seo-serv-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>OUR SEO SERVICES​</AnimatedHeading>
    <div className="row seo-serv">

    <div className="col-lg-4 col-md-12">
        <div className='serv'>
        <i className="fa-solid fa-magnifying-glass-chart"></i>
            <h3>Website
            Analysis</h3>
        </div>
        <p>To find strength and weakness, we will review your entire site. And improve your site’s efficiency based on your needs.</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <div className='serv'>
    <i className="fa-solid fa-traffic-light"></i>
            <h3>Higher
            Traffic​</h3>
        </div>
        <p>Our  team promised to render the quality SEO services and ensures our clients for organic website traffic to increase their ROI.</p>
   
    </div>

    <div className="col-lg-4 col-md-6">
    <div className='serv'>
    <i className="fa-solid fa-earth-oceania"></i>
            <h3>Global And National SEO​</h3>
        </div>
        <p>Our SEO service can be applicable for both small business and large corporations. So we provide local and global SEO for users.</p>
    </div>

  </div>
  <div className="row seo-serv">

<div className="col-lg-4 col-md-12">
    <div className='serv'>
    <i className="fa-solid fa-globe"></i>
        <h3>ORM
        Management</h3>
    </div>
    <p>We promote your brands by enhancing interactions with your customer’s and Regularly monitor your SERP’s and ranking results.</p>
</div>

<div className="col-lg-4 col-md-6">
<div className='serv'>
<i className="fa-solid fa-magnifying-glass-location"></i>
        <h3>Local
        SEO​</h3>
    </div>
    <p>We apply proven techniques to get more traffic for your websites that revamps the conversion rates and turns the visitors into customers.</p>

</div>

<div className="col-lg-4 col-md-6">
<div className='serv'>
<i className="fa-solid fa-cart-shopping"></i>
        <h3>E-Commerce
        SEO​</h3>
    </div>
    <p>Our E-Commerce package is designed to deliver an acute expansion in traffic and online sales for E-Com sites to get more visitors.</p>
</div>

</div>

<div className="row seo-serv">

<div className="col-lg-4 col-md-12">
    <div className='serv'>
    <i className="fa-solid fa-arrows-to-circle"></i>
        <h3>Enhance Site Conversion</h3>
    </div>
    <p>We apply proven techniques to get more traffic for your websites that revamps the conversion rates and turns the visitors into customers.</p>
</div>

<div className="col-lg-4 col-md-6">
<div className='serv'>
<i className="fa-solid fa-sheet-plastic"></i>
        <h3>Strategic SEO Content​</h3>
    </div>
    <p>We deliver you significant content plan based on your needs. Our services contents involves Articles, blogs, reviews etc.</p>

</div>

</div>

    </div>

  </div>
</div>
</section>

{/* seo serv sec ends */}

{/* contact section starts*/}
<section className='fleet-call-t0-sec'>

<div className="container">
  <div className="row justify-content-center fleet-c2a container ">

    <div className="col-md-8 align-content-center text-center">
    <h3>Elevate Your Brand Identity Get in Touch</h3>
    </div>

    <div className="col-md-4 align-content-center text-center">
    <Link href="#seocontact">Contact us</Link>
    </div>

  </div>
</div>
</section>
{/* contact section ends*/}

 {/* faq section starts */}
 <section className='domain-faq'>
<AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-12 text-center">
    
    <div className="accordion domain-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What Is SEO?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>SEARCH ENGINE OPTIMIZATION is the method for enhancing the quality and quantity of traffic to your website through the result of organic search engine results.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What Is Link Building?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Link building is an SEO procedure by which an SEO obtains connections to help a page’s connection value, and consequently, it’s positioning and ranking. Both internal and external link building can enable to lift the pages.</p>
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Internal Vs External Links?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Internal links that come from the same domain. External links that come from within the same domain.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Why Is Seo So Important?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Search Engines are very significant for any online business. With over 85% of Internet clients utilize search engines to discover items for a purchasing product. SEO ensures your website rank in search results of search engines.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Difference between on Page and off Page Seo
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>On page seo servicemanages perspectives on your site that can be advanced for web indexes. Off-page SEO includes perspectives on different sites on the web that can be advanced to enhance the ranking of your site on search engines.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapsesix">
      How Does Google View My Site?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Google Webmaster Tools is a free charge site provided by Google for website admins. It enables website admins to check indexing status and advance their sites. It has instruments that provide the website admins a chance to submit and check sitemaps, list interior and outside pages connecting to the webpage.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingseven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
      How Social Media Can Be Used For SEO?

      </button>
    </h2>
    <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Social media presents chances to secure backlinks and social notices to your webpage’s pages, articles, public statements, and so on. Social media are a well-known and regularly developing part of the Web and are an extraordinary compliment to an seo service or SEM battle. Taking part in social media presents a unique chance to develop a network around your particular item that enables you to remain associated and provide information to consumers.</p>
        </div>
    </div>
  </div>
</div>

    </div>

  </div>
</div>

</section>

{/* faq section ends */}

{/* contact sec start */}
<section className="webdev-contact-sec">
<div className="container">
  <div className="row ">

    <div className="col-md-6">

    </div>

    <div className="col-md-6 webdev-contact" id='seocontact'>
      <h3 className='text-center'>Share Your Message</h3>
      <SeoForm />
    </div>

  </div>
</div>
</section>

{/* contact sec ends */}

      </div>
    </div>
  )
}
