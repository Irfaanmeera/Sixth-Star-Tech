import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../components/AnimatedHeading'
import SlideHeading from '../components/SlideHeading'
import DomainSlider from './section/DomainSlider'
import HideShow from '../components/HideShow';
import DomainForm from './forms/DomainForm'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import MetaTags from '../components/MetaTags';
import {DomainSchema} from '../lib/data/schema'

export default function domain() {
  return (
    <div>
       <MetaTags />
       <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722254431/www.yourdomain.com_giyola.gif" type="image/webp" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(DomainSchema) }}
                />
</Head>

      <div className='main'>
       {/* banner section starts */}
       <section className="domain-banner-sec">

<div className="container">
    <div className="row ">
    <div className="col-md-6 text-center ">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722254431/www.yourdomain.com_giyola.gif" alt="domain banner" priority width={500} height={500}  />
      
</div>

    <div className="col-md-6">
        <span className='head-top'>Professional Branding starts with us</span>
        <TypeAnimation
      sequence={[
        'Grab the Perfect domain',
        1000, 
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block', color:"#FFD869", fontWeight:'700', padding:'5px' }}
      repeat={Infinity}
      className='domain-ban-text'
    />
        <p className='p-2'>Boost Your Online Presence with Our Expert Domain Solutions</p>
        <button className=''> <Link href='https://nash473536.supersite2.myorderbox.com/' rel="nofollow">Click Here to buy now</Link></button>
    </div>

     </div>
    </div>

</section>

{/* communication sec start */}

{/* why choose sec start */}
<section className="domain-why-choose">
<div className="container">
  <div className="row ">

    <div className="col-12">
      <h2 className='text-center'>Why Choose Sixthstartech ?</h2>
      <div className="row domain-why">

    <div className="col-lg-4 col-md-6  p-3">
    <div className="row ">
    <div className="col-md-4">
    <i className="fa-solid fa-globe"></i>
    </div>

    <div className="col-md-8">
    <h3 >Global level Recognition</h3>
    <p>friendly domain names are easy to attract Customers.</p>
    </div>

    </div>
    </div>

    <div className="col-lg-4 col-md-6 p-3">
    <div className="row ">
    <div className="col-md-4">
    <i className="fa-regular fa-thumbs-up"></i>
    </div>

    <div className="col-md-8">
    <h3>user Friendly Interface</h3>
    <p>simple and clean User interface</p>
    </div>

    </div>
    </div>

    <div className="col-lg-4 col-md-6  p-3">
    <div className="row ">
    <div className="col-md-4">
    <i className="fa-solid fa-map-location-dot" ></i>
    </div>

    <div className="col-md-8">
    <h3>easy navigation</h3>
    <p>complication no worries ours are simple and friendly.</p>
    </div>

    </div>
    </div>

    </div>
    </div>

  </div>
</div>
</section>
{/* why choose sec start ends */}

{/* features sec starts */}

<section className="domain-feat">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>Features</AnimatedHeading>
    <DomainSlider />
    </div>

  </div>
</div>

</section>

{/* features sec ends */}
      
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
      What is domain registration?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>A domain extension, or TLD (top-level domain), is the suffix at the end of a domain name, such as .com, .org, or .net. Choose an extension that suits your business type and audience; .com is the most popular and widely recognized.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How do I choose a domain name?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Choose a domain name that is short, memorable, easy to spell, and relevant to your business or personal brand. Avoid using numbers and hyphens if possible.</p>
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How long can I register a domain name for?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Most domain registrars offer registration periods ranging from one to ten years. You can renew your domain registration to maintain ownership.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      What is the difference between a domain registrar and a web host?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>A domain registrar is a company that manages the reservation of domain names, while a web host provides the infrastructure and services needed to make your website accessible on the internet.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Can I transfer my domain to another registrar?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, you can transfer your domain to another registrar. The process typically involves unlocking your domain, obtaining an authorization code, and initiating the transfer with the new registrar.</p>
        </div>
    </div>
  </div>
</div>


<HideShow className="about-class justification-center">
        <div>
        <div>
<div className= 'accordion domain-faq' id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
      What is a domain extension, and how do I choose one?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>A domain extension, or TLD (top-level domain), is the suffix at the end of a domain name, such as .com, .org, or .net. Choose an extension that suits your business type and audience; .com is the most popular and widely recognized.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      What is WHOIS information?
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>WHOIS information is the public record of domain ownership, including the registrant's name, address, email, and phone number. This information is required by ICANN (Internet Corporation for Assigned Names and Numbers).</p>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      What happens if I don't renew my domain registration?
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>If you don't renew your domain registration, it will expire and eventually become available for others to register. This can result in losing your domain and any associated website or email services.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      Can I register a domain name that is already taken?
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>No, you cannot register a domain name that is already registered by someone else. However, you can check if similar names or different extensions are available, or you may contact the current owner to see if they are willing to sell the domain.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      What is a premium domain name?
      </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>A premium domain name is a domain that is already registered but is considered highly valuable due to its short length, memorable keywords, or high commercial potential. These domains are often sold at a higher price.</p>
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
        <section className="domain-contact-sec">
<div className="container">
  <div className="row ">

    <div className="col-md-6  align-content-center">
    </div>

    
    <div className="col-md-6 ">
    <DomainForm />
    </div>

  </div>
</div>

</section>


{/* contact form ends */}
      </div>
    </div>
  )
}
