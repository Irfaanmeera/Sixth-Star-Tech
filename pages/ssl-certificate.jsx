import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../components/AnimatedHeading'
import HideShow from '../components/HideShow';
import SSLForm from './forms/SSLForm'
import axios from 'axios'
import MetaTags from '../components/MetaTags';
import Image from 'next/image';
import {sslSchema} from '../lib/data/schema'

export default function SSLCertificate() {
  return (
    <div>
   <MetaTags />
   <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722081996/banner-img-2_eldjg4.webp" type="image/webp" />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sslSchema) }} />
</Head>
   <Head>

      </Head>


      <div className='main'>

         {/* banner sec starts */}
         <section className='ssl-banner-sec'>
        <div className="container">
  <div className="row p-2 ssl-banner">

    <div className="ban-left-1 col-md-6">
        <span>STANDARD</span>
    <h1 className="head box-up">
    SSL CERTIFICATE
     </h1>
        <p>We Build Your Business with Professional Coding and Strive Success</p>
        <div >
        <div className="row ssl-banner-fet">
            <ul className="list1 col-12" >
                <li> <i className="fa-solid fa-square-check"></i>Total Security Protection</li>
                <li> <i className="fa-solid fa-square-check"></i>Trusted by over 100+ businesss</li>
                <li> <i className="fa-solid fa-square-check"></i>Quick & Easy Renewals</li>
                <li> <i className="fa-solid fa-square-check"></i>Encryption Active</li>
            </ul>
            </div>

        </div>
        <br/>
        <Link href='#sslcontact'>Claim Deal</Link>
    </div>

    <div className="col-md-6 ban-right-1">

    </div>

  </div>
</div>
        </section>

      {/* banner sec ends */}

      {/* ha1 sec start */}

<section className="ssl1-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>SSL Certificate in chennai​</AnimatedHeading>
    <p>Sixth Star offers a standard ssl certificate in chennai and security protocol that establishes secured connection between your web server and browser. This SSL ensures your customer that all the data and information transmitted are saved under a protected environment. You can increase trust and visibility strength among customers if once the certificate is installed in the web browser.</p>
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082132/sslq-1-1_juy1r4.webp" alt="SSL Certificate" loading='lazy' width={1100} height={110} />
    </div>

  </div>
</div>
</section>

{/* ha1 sec ends */}

{/* ssl choose sec start */}

    <section className="ssl-choose-sec">
    <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>CHOOSE THE BEST SSL CERTIFICATE​</AnimatedHeading>

    {/* tab title starts */}
    <div className='ha-tab-title'>
    <ul className="nav nav-fill nav-tabs" role="tablist">
      <li className="nav-item" role="presentation">
        <a className="nav-link active" id="fill-tab-0" data-bs-toggle="tab" href="#fill-tabpanel-0" role="tab" aria-controls="fill-tabpanel-0" aria-selected="true"><i className="fa-solid fa-shield-halved"></i> Positive SSL </a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="fill-tab-1" data-bs-toggle="tab" href="#fill-tabpanel-1" role="tab" aria-controls="fill-tabpanel-1" aria-selected="false"><i className="fa-solid fa-shield-halved"></i> Positive SSl MD </a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="fill-tab-2" data-bs-toggle="tab" href="#fill-tabpanel-2" role="tab" aria-controls="fill-tabpanel-2" aria-selected="false"><i className="fa-solid fa-shield-halved"></i> EV SSL </a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="fill-tab-2" data-bs-toggle="tab" href="#fill-tabpanel-3" role="tab" aria-controls="fill-tabpanel-3" aria-selected="false"><i className="fa-solid fa-shield-halved"></i> EV SSL Multi Domain </a>
      </li>
    </ul>
  </div>
       {/* tab title ends */}

        {/* tab content starts */}
  <div className="tab-content fet-tab-con pt-5" id="tab-content">
  
    <div className="tab-pane active" id="fill-tabpanel-0" role="tabpanel" aria-labelledby="fill-tab-0">
      <div className="ssl-choose text-center">
        <p>The product comes as a domain validated 2056 bit industry standard SSL with 256-bit encryption strength. It gives 99.9% browser and mobile ubiquity with complete business authentication and easy upgrades. You will be provided with a dynamic site seal, unlimited server license, and unlimited re-issuances within 5 days of order.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082205/ssl-bar_s4tcyq.webp" alt="Positive SSL" loading='lazy' width={800} height={50}/>
        <div className='plan'>
          <h3>Positive SSL</h3>
          <ul>
            <li><i className="fa-solid fa-check"></i> 1 domain</li>
            <li><i className="fa-solid fa-check"></i> Domain Validation</li>
            <li><i className="fa-solid fa-check"></i> Basic HTTPS</li>
            <li><i className="fa-solid fa-check"></i> Comodo SSL</li>
            <li><i className="fa-solid fa-check"></i> Low assurance</li>
          </ul>
        </div>
      </div>
    </div>
     
    <div className="tab-pane" id="fill-tabpanel-1" role="tabpanel" aria-labelledby="fill-tab-1">
    <div className="ssl-choose text-center">
        <p>This Domain validated multi-domain SSL certificate supports and secures multiple domain names with 256-bit encryption strength and gives 99.9% compatibility. Here it protects one complete domain and two additional domains with 2 free SAN Certificate. Also, there is an availability of re-issuance in minutes besides unlimited server license.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082205/ssl-bar_s4tcyq.webp" alt="Positive SSl Multi-Domain" loading='lazy' width={800} height={50}/>
        <div className='plan'>
          <h3>Positive SSl Multi-Domain</h3>
          <ul>
            <li><i className="fa-solid fa-check"></i> 3-100 domain seats</li>
            <li><i className="fa-solid fa-check"></i> Domain Validation</li>
            <li><i className="fa-solid fa-check"></i> Basic HTTPS</li>
            <li><i className="fa-solid fa-check"></i> Comodo SSL</li>
            <li><i className="fa-solid fa-check"></i> Low assurance</li>
          </ul>
        </div>
      </div>
       </div>

    <div className="tab-pane" id="fill-tabpanel-2" role="tabpanel" aria-labelledby="fill-tab-2">
    <div className="ssl-choose text-center">
        <p>The Extended Validation SSL certification secures single domain with full business authentication and has 2048 bit high assurance along 128-256 bit encryption strength. This EV SSL gives extra credibility for your entire single domain’s security with free re-issuances and a qualified site seal.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082210/ev-ssl-bar-1_wl8mh0.webp" alt="EV SSL" loading='lazy' width={800} height={50}/>
        <div className='plan'>
          <h3>EV SSL</h3>
          <ul>
            <li><i className="fa-solid fa-check"></i> 1 domain</li>
            <li><i className="fa-solid fa-check"></i> Extended Validation</li>
            <li><i className="fa-solid fa-check"></i> Company name in browser</li>
            <li><i className="fa-solid fa-check"></i> Comodo SSL</li>
            <li><i className="fa-solid fa-check"></i> Very high assurance</li>
          </ul>
        </div>
      </div>
        </div>

    <div className="tab-pane" id="fill-tabpanel-3" role="tabpanel" aria-labelledby="fill-tab-3">
    <div className="ssl-choose text-center">
        <p>This Extended validation single certificate gives authorization to multiple domains or sub domains with a maximum of 256-bit encryption strength enhancing the security practices and proving the site is been controlled by a legal entity. Also, this comes with the attachment of 2 SAN Certificate with unlimited service license including site seal and free re-issuance.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722082210/ev-ssl-bar-1_wl8mh0.webp" alt="EV SSL Multi Domain" loading='lazy' width={800} height={50}/>
        <div className='plan'>
          <h3>EV SSL Multi Domain</h3>
          <ul>
            <li><i className="fa-solid fa-check"></i> 3-100 domain seats</li>
            <li><i className="fa-solid fa-check"></i> Extended Validation</li>
            <li><i className="fa-solid fa-check"></i> Company name in browser</li>
            <li><i className="fa-solid fa-check"></i> Comodo SSL</li>
            <li><i className="fa-solid fa-check"></i> Very high assurance</li>
          </ul>
        </div>
      </div>
       </div>

  </div>
      {/* tab content starts */}

    </div>

  </div>
</div>
    </section>
{/* ssl choose sec ends */}

{/* ssl why sec starts */}

<section className="ssl-why-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Why To buy SSL From Sixth Star?​</AnimatedHeading>
    </div>

  </div>
</div>
</section>

<section className="ssl-whychoose-sec">
<div className="container ha-infra">
            <div className="row vps-whychoose-1">
            
            <div className="col-md-6">
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057806/Why-To-buy-SS-img_rwxwpx.webp" alt="why choose ssl" loading='lazy' width={500} height={500}/>
            </div>

            <div className="col-md-6 ">
            <div className="row ">

            <div className="col-12 ha-infra">
            
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
   
    <div className="carousel-item active " data-bs-interval="10000">
    <h3 className='slideInUp'>Support</h3>
    <p>24/7 support services will be provided by our professionals. You can reach our SSL support in any instance</p>
    </div>
    
    <div className="carousel-item " data-bs-interval="2000">
    <h3 className='slideInUp'>Warranty</h3>
    <p>Our certificates come with a warranty based on the package. We will provide cash back if any wrong occurs.</p>
    </div>

    <div className="carousel-item ">
      <h3 className='slideInUp'>Trust Seal</h3>
      <p>The trust seal can assure your customers that all transactions are safe and secure.</p>
    </div>

    <div className="carousel-item ">
    <h3 className='slideInUp'>Increase Visibility</h3>
    <p>Installing SSL certificate can gradually increase your SEO ranking i.e. as your visitor strength increases your page ranking will increase.</p>   
    </div>
 

  <div className="carousel-item ">
    <h3 className='slideInUp'>Assurance</h3>
    <p>You can assure your customer that their data’s are in right hands. Through trust seal and other guarantee issuance.</p>   
   
  </div>
  <div className="carousel-item ">
    <h3 className='slideInUp'>Authentic Security</h3>
    <p>We provide encryption strength up to 2048 bit for maximum security with ECC support. Your entire website visitor’s data will be well-protected.</p>   
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
  <i className="fa-solid fa-chevron-left"></i>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
  <i className="fa-solid fa-chevron-right"></i>
    <span className="visually-hidden">Next</span>
  </button>
  </div>

            </div>

            </div>

            <div className="row vps-whychoose-2">
            <div className="col-12">
              <br/>
                <Link href='tel:9383996666'>Talk to our Experts</Link>
               
                </div>
                

            </div>
            </div>

            </div>
        </div>
</section>

{/* ssl why sec ends */}

{/* ssl impliment sec starts */}
<section className="ssl-imp-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Implementing SSL​</AnimatedHeading>
    <ul>
      <li>
        <i className="fa-regular fa-circle-check"></i> 
        <div>
          <h3>Purchase a certificate</h3> 
          <p>Buy the SSL certificate that matches exactly to your website need. Trusted CA will increase your visibility strength. You can choose our SSL certificate listed below.</p>
          </div>
          </li>
          <li>
        <i className="fa-regular fa-circle-check"></i> 
        <div>
          <h3>Install the certificate</h3> 
          <p>If you manage your site then you must first generate a certificate signing request (CSR) and then install it if not our team will help you install it. To complete the CSR process, Sixth Star will provide all the documents correctly.</p>
          </div>
          </li>
          <li>
        <i className="fa-regular fa-circle-check"></i> 
        <div>
          <h3>Convert to https</h3> 
          <p>Once you install SSL certificate change all your site page URL into HTTPS so that all the content will be served securely. Generally, Google will give preference/ priority to an HTTPS site.</p>
          </div>
          </li>
    </ul>
    </div>

  </div>
</div>
  
</section>

{/* ssl impliment sec ends */}

{/* contact section starts*/}
<section className='fleet-call-t0-sec '>

<div className="container">
  <div className="row justify-content-center fleet-c2a container " style={{height:'130px'}}>

    <div className="col-md-8 align-content-center text-center">
    <h3>Setting up SSL on your website is easy</h3>
    </div>

    <div className="col-md-4 align-content-center text-center">
    <Link href="#sslcontact">Contact us</Link>
    </div>

  </div>
</div>
</section>
{/* contact section ends*/}

{/* faq section starts */}
<section className='ssl-faq-sec'>
<AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-12 text-center">
    
    <div className="accordion ssl-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is SSL certification?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Secure socket layer (SSL) provides safe and secure communication across the web server and the browser using the encryption method i.e. the most sensitive information of the user like account numbers, card numbers, login ID, etc. are encrypted to not get traced by anyone during transactions. Padlock, https is added credentials in the SSL to ensure user trust.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Can I get a green bar on my website?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Yes, if you have an Extended Validation (EV) SSL Certificate</p>
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How can I get EV certificate?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Only if you have a registered company with government authority you are eligible to get EV certificate.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      What certificate offers www and non-www coverage?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Except multi-domain, all certificates come with www and non-www coverage automatically.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      What is a Multi-domain?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>A Multi-Domain certificate secures multiple domain names with a single certificate.</p>
        </div>
    </div>
  </div>
</div>


<HideShow buttonText="Learn More" className="about-class justification-center">
        <div>
        <div>
<div className= 'accordion ssl-faq' id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
      What is the difference between wildcard and multi-domain functionality?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Wildcard protects a single domain and unlimited sub-domains whereas multi-domain protects multiple domain names with one certificate, and you can add/delete SANs (Subject Alternative Names) in this.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      Can I use 256-bit encryption?
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>256-bit encryption is available for all SSL certificates.</p>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      What is the difference between 1024 and 2048 bit key lengths?
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>2048 bits is more secure than other bit lengths and is the latest industry standard key size. The strength of the private key used in the cryptographic algorithm is determined by this key size.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      What is SSL certificate warranty?
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>The warranty provides protection in settling amount if your SSL is misused or hacked by a third person. We provide different warranties for each SSL package, ranging from $10,000 to $1,750,000, etc.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      Can I use SSL to cover an internal domain?
      </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>If your internal domain is registered to any delegated domain, you can use SSL for it. If not, you can’t use it</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading11">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
      What is the difference between 128 and 256-bit security?
      </button>
    </h2>
    <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>The only difference is the key length used to establish SSL on the browser. 128-bit encryption is enough to ensure security, but if you purposely require 256-bit encryption, you can have it.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading12">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
      How many domains can I secure with Multi-domain SSL?
      </button>
    </h2>
    <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>You can secure about 250 domains with a multi-domain SSL certificate.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading13">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
      What should I do with my private key?
      </button>
    </h2>
    <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Keep it secure since it is important for your certificate to work.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading14">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
      Where do I expedite the validation?
      </button>
    </h2>
    <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>If you are in need, contact us soon, and we will help you to make your order a priority.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading15">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
      How do I know what my control panel/OS is?
      </button>
    </h2>
    <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>To know anything about the control panel or its settings, you can call us immediately or reach us by email at support@sixthstar.in.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading16">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
      My verified phone is outdated? What should I do?
      </button>
    </h2>
    <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Contact us immediately, and we will sort it out soon and tell you the procedure to update it.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading17">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
      I accidentally deleted my private key. What can I do now?
      </button>
    </h2>
    <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>You can use your backup to re-install your ‘Private Key’ using a system administrator. Contact us if you don’t find any backups.</p>
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

{/* contact sec start */}
<section className="webdev-contact-sec">
<div className="container">
  <div className="row ">

    <div className="col-md-6">

    </div>

    <div className="col-md-6 webdev-contact" id='sslcontact'>
      <h3 className='text-center'>Share Your Message</h3>
      <SSLForm />
    </div>

  </div>
</div>
</section>

{/* contact sec ends */}

      </div>
    </div>
  )
}
