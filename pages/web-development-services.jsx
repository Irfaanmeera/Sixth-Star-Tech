import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../components/AnimatedHeading'
import WebdevSlider from './section/WebdevSlider'
import WebdevTollsSlider from './section/WebdevTollsSlider'
import WebdevForm from './forms/WebdevForm'
import Image from 'next/image'
import MetaTags from '../components/MetaTags';
import {webDevSchema} from '../lib/data/schema'

export default function WebDevelopmentServices() {
  return (
    <div>
      <MetaTags />
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722083712/web-dev-banner_mdpthc_mkw2ws.webp" type="image/webp" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevSchema) }} />
</Head>
      <div className='main'>

        {/* banner */}
        <section className='webdev-banner-sec'>
        <div className="container webdev-banner">
  <div className="row p-2">

    <div className="ban-left-1 col-md-6">
    <h1 className="server-1 box-text-flip">
      <span className="letterflip textflip">W</span>
      <span className="letterflip textflip">E</span>
      <span className="letterflip textflip">B</span>
      <span className="letterflip textflip">&nbsp;</span>
      <span className="letterflip textflip">D</span>
      <span className="letterflip textflip">E</span>
      <span className="letterflip textflip">V</span>
      <span className="letterflip textflip">E</span>
      <span className="letterflip textflip">L</span>
      <span className="letterflip textflip">O</span>
      <span className="letterflip textflip">P</span>
      <span className="letterflip textflip">M</span>
      <span className="letterflip textflip">E</span>
      <span className="letterflip textflip">N</span>
      <span className="letterflip textflip">T</span>
      <br />
      <span className="letterflip textflip">I</span>
      <span className="letterflip textflip">N</span>
      <span className="letterflip textflip">&nbsp;</span>
      <span className="letterflip textflip">C</span>
      <span className="letterflip textflip">H</span>
      <span className="letterflip textflip">E</span>
      <span className="letterflip textflip">N</span>
      <span className="letterflip textflip">N</span>
      <span className="letterflip textflip">A</span>
      <span className="letterflip textflip">I</span>

    </h1>
        <p>We Build Your Business with Professional Coding and Strive Success</p>
        <div >
        <div className="row webdev-banner-fet">
            <ul className="list1 col-md-12" >
                <li> <i className="fa-solid fa-square-check"></i>Website Migration</li>
                <li> <i className="fa-solid fa-square-check"></i>Backup and Restore</li>
                <li> <i className="fa-solid fa-square-check"></i>Email Account</li>
                <li> <i className="fa-solid fa-square-check"></i>24/7 Support</li>
            </ul>
            </div>

        </div>
        <br/>
        <Link href='#webdevcontact'>GET STARTED</Link>
    </div>

    <div className="col-md-6 ban-right-1">

    </div>

  </div>
</div>
        </section>
{/* banner ends */}

{/* webdev-site-sec starts */}

<section className="webdev-site-sec">
<div className="container">
  <div className="row ">

    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722083601/web-development-2_he2to8.webp" alt="web development" width={400} height={290} />
    </div>

    <div className="col-md-6">
    <AnimatedHeading className='server heading p-3'>Develop your site with our developers​</AnimatedHeading>
    <p >Looking to create a stunning website that truly represents your brand? You’ve come to the right place. Our team of experts specializes in web development, creating unique and user-friendly websites that elevate your brand to new heights.</p>
    </div>

  </div>
</div>
</section>
{/* webdev-site-sec ends */}

{/* web dev why choose starts */}

<section className="webdev-whychoose-sec">
<AnimatedHeading className='server heading p-3'>Why Choose Us?​</AnimatedHeading>
<div className="container">
  <div className="row webdev-whychoose ">

    <div className="col-lg-4 col-md-12">
      <h3 className='text-center'>Advanced Frameworks</h3>
      <p>We think it’s important to stay on top of trends. we utilize the newest and most sophisticated web application frameworks.</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <h3 className='text-center'>Scalable and Reliable</h3>
      <p>Our web development services are dependable, flexible, and adaptable, so they can grow with your company’s requirements.</p>
  
    </div>

    <div className="col-lg-4 col-md-6">
    <h3 className='text-center'>Superior Programming</h3>
      <p>To provide solutions that are reliable, safe, and effective, we follow strict coding standards and rules along with excellent programming techniques.</p>
  
    </div>

  </div>
</div>

</section>

{/* web dev why choose ends */}

{/* webdev process page start */}

<section className="webdev-process-sec">
<AnimatedHeading className='server heading p-3'>OUR PROCESS​</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-12">
    <WebdevSlider />
    </div>

  </div>
</div>

</section>

{/* webdev process page ends */}

{/* contact section starts*/}
<section className='fleet-call-t0-sec'>

<div className="container">
  <div className="row justify-content-center fleet-c2a container ">

    <div className="col-md-8 align-content-center text-center">
    <h3>Ready to Take Your Brand to the Next Level?
    Contact Us Today!</h3>
    </div>

    <div className="col-md-4 align-content-center text-center">
    <Link href="#webdevcontact">Contact us</Link>
    </div>

  </div>
</div>
</section>
{/* contact section ends*/}

{/* web dev tools sec start */}
<section className="webdev-tools-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-4'>Tools & Technologies We Utilize​</AnimatedHeading>
    <WebdevTollsSlider />
    </div>

  </div>
</div>
</section>

{/* web dev tools sec ends */}

{/* web Maintenance sec start */}

<section className="webdev-maint-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Website Maintenance​</AnimatedHeading>
  <div className="row ">

    <div className="col-lg-4 col-md-12">
      <ul>
        <li><i className="fa-regular fa-circle-check"></i> <h3>Requirement Gathering</h3></li>
        <li><i className="fa-regular fa-circle-check"></i> <h3>Planning</h3></li>
        <li><i className="fa-regular fa-circle-check"></i> <h3>Design</h3></li>
      </ul>
    </div>

    <div className="col-lg-4 col-md-6">
    <ul>
        <li><i className="fa-regular fa-circle-check"></i> <h3>Testing</h3></li>
        <li><i className="fa-regular fa-circle-check"></i> <h3>Maintenance</h3></li>
        <li><i className="fa-regular fa-circle-check"></i> <h3>Website Publishing</h3></li>
      </ul>
    </div>

    <div className="col-lg-4 col-md-6">
    <ul>
        <li><i className="fa-regular fa-circle-check"></i> <h3>Content Writing</h3></li>
        <li><i className="fa-regular fa-circle-check"></i> <h3>Coding</h3></li>
        <li><i className="fa-regular fa-circle-check"></i> <h3>Web Hosting</h3></li>
      </ul>
    </div>

  </div>

    </div>


  </div>
</div>
</section>

{/* web Maintenance sec ends */}

{/* contact sec start */}
<section className="webdev-contact-sec">
<div className="container">
  <div className="row ">

    <div className="col-md-6">

    </div>

    <div className="col-md-6 webdev-contact" id='webdevcontact'>
      <h3 className='text-center'>Share Your Message</h3>
      <WebdevForm />
    </div>

  </div>
</div>
</section>

{/* contact sec ends */}
      </div>
    </div>
  )
}
