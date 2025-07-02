import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import AnimatedHeading from '../components/AnimatedHeading'
import AppFeatSlider from './section/AppFeatSlider'
import Appslider from './section/Appslider'
import AppdevForm from './forms/AppdevForm'
import Image from 'next/image'
import MetaTags from '../components/MetaTags';
import {appDevSchema} from '../lib/data/schema'

export default function MobileAppDevelopment() {
  return (
    
    <div>
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722229434/mobile-app-bg_g0s140.webp" type="image/webp" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(appDevSchema) }}
                />
</Head>
      <MetaTags />

      <div className='main'>
    
   {/* banner */}
   <section className='app-banner-sec'>
        <div className="container webdev-banner">
  <div className="row ">

    <div className="ban-left-1 col-md-6">
    <h1 className="server-1 box-text-flip">
      <span className="letterflip textflip">M</span>
      <span className="letterflip textflip">O</span>
      <span className="letterflip textflip">B</span>
      <span className="letterflip textflip">I</span>
      <span className="letterflip textflip">L</span>
      <span className="letterflip textflip">E</span>
      <span className="letterflip textflip">&nbsp;</span>
      <span className="letterflip textflip">A</span>
      <span className="letterflip textflip">P</span>
      <span className="letterflip textflip">P</span>
      <br />
      <span className="letterflip textflip">D</span>
      <span className="letterflip textflip">E</span>
      <span className="letterflip textflip">V</span>
      <span className="letterflip textflip">E</span>
      <span className="letterflip textflip">L</span>
      <span className="letterflip textflip">O</span>
      <span className="letterflip textflip">P</span>
      <span className="letterflip textflip">E</span>
      <span className="letterflip textflip">M</span>
      <span className="letterflip textflip">E</span>
      <span className="letterflip textflip">N</span>
      <span className="letterflip textflip">N</span>
      <span className="letterflip textflip">T</span>

    </h1>
        <p>“High performance and scalable mobile app development in Chennai ”</p>
        <div >

        </div>
        <button><Link href='#appdevcontact'>GET STARTED</Link></button>
    </div>

    <div className="col-md-6 ban-right-1">

    </div>

  </div>
</div>
        </section>
{/* banner ends */}

{/* app-dev1 sec start */}

<section className="app-dev1-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Mobile App Development​</AnimatedHeading>
    <p>At Sixth Star, we help you to turn your views into apps, finding solutions for problems and make your app a tremendous one. With over 11 years of experience, we position ourselves as the evolver in the industry and one of the trustworthy app development company in Chennai have the most skillful, proficient and tech-savvy mobile app developers. Our developers have in-depth knowledge of major frameworks used for native and hybrid mobile app development.</p>
    </div>

  </div>
</div>
</section>

{/* app dev1 sec ends */}

{/* app-dev2 sec start */}

<section className="app-dev2-sec" >

<div className="container">
<div className="row ">

<div className="col-12">
<AnimatedHeading className='server heading p-3'>Excellent Mobile App Development Company in Chennai​</AnimatedHeading>
  <div className="row ">

    <div className="col-md-6">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722230350/mobile_app_img_qbinvb.webp" alt="" width={400} height={302} />
    </div>

    <div className="col-md-6 align-content-center">
    <p>We are not limited in building a single type of applications, as we create mobile apps for multiple operating systems. Our mobile app experts are talented to build apps for business, lifestyle, and entertainment.

Our goal is to deliver the Smartphone apps to our clients that can actually bring benefits and enhances brand recognition for their business.</p>
    </div>
</div>
</div>
  </div>
</div>
</section>

{/* app-dev2 sec start */}

{/* web dev why choose starts */}

<section className="app-service-sec">
<AnimatedHeading className='server heading p-3'>Mobile Application Service​</AnimatedHeading>
<div className="container">
  <div className="row app-service ">

    <div className="col-lg-4 col-md-12">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722230349/android_scavu6.webp" alt="" width={75} height={75} />
      <h3 className='text-center'>Android App Development</h3>
      <p>Provides range of android suitable mobile apps that expands the business profitably in today’s world and preferred by users.</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722230349/apple_vly6bc.webp" alt="" width={75} height={75} />
    <h3 className='text-center'>IOS App Development</h3>
      <p>An excellent choice for the high scale business and possess an easy flow, navigation along with well-optimized notification panels.</p>
  
    </div>

    <div className="col-lg-4 col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722230351/windows-1_eziscs.webp" alt="" width={75} height={75} />
    <h3 className='text-center'>Windows App Development</h3>
      <p>It is developed to run on Microsoft windows OS offers high-grade services in domains like healthcare, education, and retail.</p>
  
    </div>

  </div>
</div>

</section>

{/* web dev why choose ends */}

{/* app features sec start */}
<section className="app-feat-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Features Offered By Us​</AnimatedHeading>
    <AppFeatSlider />
    </div>

  </div>
</div>
</section>

{/* app features sec ends */}

{/* contact section starts*/}
<section className='fleet-call-t0-sec'>

<div className="container">
  <div className="row justify-content-center fleet-c2a container ">

    <div className="col-md-8 align-content-center text-center">
    <h3>Ready to Take Your Brand to the Next Level?
    Contact Us Today!</h3>
    </div>

    <div className="col-md-4 align-content-center text-center">
    <Link href="#appdevcontact">Contact us</Link>
    </div>

  </div>
</div>
</section>
{/* contact section ends*/}

{/* app dev sec start */}

<section className="appdev3-sec">
<AnimatedHeading className='server heading p-3'>App Development​</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-md-6 flip-card appdev3">
    <div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722230351/native_app-removebg-preview_k3mkcr.webp" alt="" width={150} height={150} />
    <h3>Native App Development</h3>
    </div>
    <div className="flip-card-back flip-box-back">
   <p className='p-3'>The native app development is an application program that is created for specific platform or using Android Studio, Java, Google material, Objective-C, Xcode, and Swift.</p>
    </div>
  </div>

    </div>

    <div className="col-md-6 flip-card appdev3">
    <div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722230350/hybrid_app-removebg-preview_s0xzt8.webp" alt="" width={150} height={150} />
    <h3>Hybrid App</h3>
    </div>
    <div className="flip-card-back flip-box-back">
    <p className="p3">The hybrid application is a web application in a native browser created by using HTML, CSS, and JavaScript, React and then wrapped in a native application</p>
    </div>
  </div>
    </div>

  </div>
</div>
</section>

{/* app dev sec ends */}

{/* app slider sec start */}

<section className="app-slider-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">

    <Appslider />
    </div>

  </div>
</div>

</section>

{/* app slider sec ends */}

{/* contact sec start */}
<section className="appdev-contact-sec">
<div className="container">
  <div className="row ">

    <div className="col-md-6">

    </div>

    <div className="col-md-6 webdev-contact" id='appdevcontact'>
      <h4 className='text-center'>Share Your Message</h4>
      <AppdevForm />
    </div>

  </div>
</div>
</section>

{/* contact sec ends */}

      </div>
    </div>
  )
}

