import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Testimonial from '../Testimonial';
import ServersForm from '../forms/ServersForm'
import AnimatedHeading from '../../components/AnimatedHeading'
import Image from 'next/image';
import MetaTags from '../../components/MetaTags';
import {dedicatedChennaiSchema} from '../../lib/data/schema'

export default function DedicatedServerChennai() {
  return (
    <div className='layout'>

      <MetaTags />
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722058498/cloudhosting-bg-pc_e4hvtp.webp" type="image/webp" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(dedicatedChennaiSchema) }}
                />
</Head>
      <div className='main'>
        {/* banner */}
        <section className='server-banner-sec'>
        <div className="container banner">
  <div className="row">

    <div className="ban-left-1 col-md-6">
        <h1 className='server-1 box-up'>Dedicated Server Hosting in Chennai</h1>
        <div >
        <div className="row banner-fet p-2">
            <ul className="list1 col-md-6" >
                <li> <i className="fa-regular fa-circle-check"></i>24/7 Proactive Support</li>
                <li> <i className="fa-regular fa-circle-check"></i>99.99%  Uptime</li>
                <li> <i className="fa-regular fa-circle-check"></i>Spam Protection</li>
            </ul>
            <ul className="list2 col-md-6" >
                <li> <i className="fa-regular fa-circle-check"></i>Complete Access</li>
                <li> <i className="fa-regular fa-circle-check"></i>Quick Installation</li>
                <li> <i className="fa-regular fa-circle-check"></i>Money Back Guarantee</li>
            </ul>
            </div>
            <br/><Link href="/request-a-quote" className='banner-but'>Get demo</Link>
        </div>
    </div>

    <div className="col-md-6">

    </div>

  </div>
</div>
        </section>
{/* banner ends */}


 {/* fetures    */}
<section>
        <div className="container icon-feature-pc">
  <div className="row ">

    <div className="icon-feature col-lg-2 col-md-6 p-2">
    <div className="feticon"><i className="fa-solid fa-hard-drive"></i></div>
    <div><h2 className='feticon-head'>Hardware RAID</h2></div>
    </div>

    <div className="col-lg-2 col-md-6 p-2">
    <div className="feticon"><i className="fa-solid fa-location-dot"></i></div>
    <div><h2 className='feticon-head'>Additional IP</h2></div>
    </div>

    <div className="col-lg-2 col-md-6 p-2">
    <div className="feticon"><i className="fa-solid fa-table-cells"></i></div>
    <div><h2 className='feticon-head'>Firewall</h2></div>
    </div>

    <div className="col-lg-2 col-md-6 p-2">
    <div className="feticon"><i className="fa-solid fa-network-wired"></i></div>
    <div><h2 className='feticon-head'>Private Network</h2></div>
    </div>

    <div className="col-lg-2 col-md-6 p-2">
    <div className="feticon"><i className="fa-solid fa-desktop"></i></div>
    <div><h2 className='feticon-head'>IPMI</h2></div>
    </div>

    <div className="col-lg-2 col-md-6 p-2">
    <div className="feticon"><i className="fa-solid fa-server"></i></div>
    <div><h2 className='feticon-head'>Backup</h2></div>
    </div>

  </div>
</div>

<div className="icon-feature-mob">
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="feticon"><i className="fa-solid fa-hard-drive" ></i></div>
    <div><h2 className='feticon-head'>Hardware RAID</h2></div>
    </div>
    <div className="carousel-item">
    <div className="feticon"><i className="fa-solid fa-location-dot" ></i></div>
    <div><h2 className='feticon-head'>Additional IP</h2></div>
    </div>
    <div className="carousel-item">
    <div className="feticon"><i className="fa-solid fa-table-cells" ></i></div>
    <div><h2 className='feticon-head'>Firewall</h2></div>
    </div>
    <div className="carousel-item">
    <div className="feticon"><i className="fa-solid fa-network-wired" ></i></div>
    <div><h2 className='feticon-head'>Private Network</h2></div>
    </div>
    <div className="carousel-item">
    <div className="feticon"><i className="fa-solid fa-desktop" ></i></div>
    <div><h2 className='feticon-head'>IPMI</h2></div>
    </div>
    <div className="carousel-item">
    <div className="feticon"><i className="fa-solid fa-server" ></i></div>
    <div><h2 className='feticon-head'>Backup</h2></div>
    </div>
  </div>
</div>
</div>
        </section>
       {/* feartures ends */}
       
        <section>
        <div className="container p-3">
  <div className="row gx-6 ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>FAST AND ROBUST DEDICATED SERVER HOSTING IN CHENNAI</AnimatedHeading>
            <p className='ser-para'>Our dedicated server hosting in chennai will provide you a great credibility in serving you the best servers with reliable operation. We usually get focused on our client economic status and provide them servers with flexible functioning and an affordable fare with impressive scalability.</p>    
    </div>

  </div>
</div>
        </section>

            {/* pricing */}
        <section className='pricing '>
        <div className="container p-3">
  <div className="row gx-6 justify-content-center">

    <div className="col-12">

    </div>
    <AnimatedHeading className='server heading'>Dedicated Server Plans</AnimatedHeading>
    <p className='text-center'>Don’t worry about server packages. We provide you at a reasonable cost and with great performance!</p>
    <div className="container">
  <div className="row gx-6">

    <div className="price col-lg-3 col-md-6 text-center">
      <h3 className='text-center'>BASIC</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">32 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E3-1246V3</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 2 TB </span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#dedicatedchennaicontact' className='price-but'>Contact now</Link>
    </div>

    <div className=" price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>STANDARD</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">64 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V2</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 2 TB </span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#dedicatedchennaicontact' className='price-but'>Contact now</Link>
    </div>
 
    <div className="price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>PROFESSIONAL</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">128 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V2</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 4 TB</span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#dedicatedchennaicontact' className='price-but'>Contact now</Link>
    </div>

    <div className="price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>PREMIUM</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">256 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V3</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 4 TB</span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#dedicatedchennaicontact' className='price-but'>Contact now</Link>
    </div>

  </div>
</div>
  </div>
</div>
            
  </section>

  {/* benefits section */}
  <section className='server-bene-sec'>
        <div className="container p-3">
  <div className="row gx-6 ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>DEDICATED SERVER HOSTING IN CHENNAI</AnimatedHeading>
    </div>

    <div className="col-12 server-benef">
    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402974/personalization_hrfqj1.webp" width={64} height={64} alt='Free setup' loading='lazy' /> 
    <h3> Personalization</h3>
    <p>You can design and tailor the website on own and can manipulate it without any hindrance of other websites.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057949/database_jaxjsy.webp" width={64} height={64} alt='Security' loading='lazy'/> 
    <h3> Uptime</h3>
    <p>We assure 99.9% uptime guarantee at all intervals to every customer at different locations.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402974/browser_eevlew.webp" width={64} height={64} alt='Close Monitoring' loading='lazy'/> 
    <h3> Traffic free</h3>
    <p>Server congestion is not faced since we provide excellent hardware features with best storage capacity.</p>
    </div>

    </div>

    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402974/economic-growth_wjir8l.webp" width={64} height={64} alt='Hardware Resource' loading='lazy'/> 
    <h3> Economical</h3>
    <p>The server plans which we offer are affordable as per your space requirements.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402975/reliability_xjqayp.webp" width={64} height={64} alt='Redundant Source' loading='lazy'/> 
    <h3>Reliable</h3>
    <p>Our hosting service will have a versatile feature in stable performing and secure with best security systems.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402973/24-hours_j0uqeh.webp" width={64} height={64} alt='24/7 Tech Support' loading='lazy'/> 
    <h3>24/7 support</h3>
    <p>We will be available at every time measures to support you technically with preventive maintenance for your site.</p>
    </div>
    </div>

    </div>
  </div>
</div>
        </section>
        {/* benefits section ends */}

{/* contact section ends*/}
<section className='call-t0-action-sec'>

<div className="container">
  <div className="row justify-content-center c2a container">

    <div className="col-md-6 ">
    <h4>Get in-touch with our Experts now for Hosting services</h4>
    </div>

    <div className="col-md-6 ">
    <Link href="#dedicatedchennaicontact">Contact us</Link>
    </div>

  </div>
</div>

</section>


{/* contact section ends*/}

{/* os section ends*/}
<section className='server-os-sec'>

<div className="container p-3">
  <div className="row justify-content-center">
  <AnimatedHeading className='server heading'>OPERATING SYSTEM</AnimatedHeading>
  </div>
  
  <div className="row justify-content-center">
  <div className="container server-os">
  <div className="row justify-content-center">

    <div className="col-md-6 os-sec-left">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057385/dedicated-server-os_yiacig.webp" className='box-up' alt='dedicated-server' loading='lazy' width={527} height={423}/> 
    </div>

    <div className="col-md-6">
    <div className="row">
      <div className="col-6 text-end p-5 os-img"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057246/linux_irvhev.webp" width={108} height={108} alt='linux' loading='lazy'/></div>
      <div className="col-6 text-start p-5 os-img"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057246/windows_tqsl78.webp" width={108} height={108} alt='windows' loading='lazy'/></div>
    </div>

    <div className="row">
      <div className="col os-list slideInRight">
      <ul>
      <li> <i className="fa-solid fa-check"></i> <p>Unlimited guidance on technical knowledge for end-users to tackle the damages.</p></li>
      <li> <i className="fa-solid fa-check"></i> <p>Fee installation and deployment of components are been given to every client at the time of purchase.</p> </li>
      <li> <i className="fa-solid fa-check"></i> <p>Influence the grasping nature and broad-minded tech knowledge to resolve all software oriented resources repair’s and design it as per your aspects.</p> </li>

      </ul>
      </div>
    </div>
    </div>

  </div>
</div>
</div>

    </div>
    </section>
{/* os section ends*/}

{/* testimonial start */}
<Testimonial/>

{/* testimonial ends */}


{/* contact section starts */}
<section className='server-contact-sec'> 
<AnimatedHeading className='server heading'>Connect with our Experts</AnimatedHeading>

<div className="container">
  <div className="row ">

    <div className="col-md-6 p-5 align-content-center">
    <div className="server-sales">
    <h3>Sales</h3>
    <ul className="">
		<li><Link href="tel:9383996666"><i className="fa fa-phone"></i> +91 9383 99 6666</Link></li>
    <li><Link href="mailto:sales@sixthstar.in"><i className="fa-regular fa-envelope"></i> sales@sixthstar.in</Link></li>	
    </ul>
    </div>
    <div className="server-support">
    <h3>Support</h3>
    <ul className="">
		<li><Link href="tel:9176637399"><i className="fa fa-phone"></i> +91 9176637399</Link></li>
    <li><Link href="mailto:support@sixthstar.in"><i className="fa-regular fa-envelope"></i> support@sixthstar.in</Link></li>	
    </ul>
    </div>

    <div className="server-address">
    <h3>Address</h3>
    <p>1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Muttukkaranchavadi, Thoraipakkam, Chennai, Tamilnadu, India – 600 097.</p>
    </div>

    <div className="server-social">
    <i className="fa-brands fa-facebook" style={{ backgroundColor: '#3b5998' }}></i> 
    <i className="fa-brands fa-x-twitter" style={{ backgroundColor: 'black' }}></i>
    <i className="fa-brands fa-youtube" style={{ backgroundColor: '#cd201f' }}></i>
    <i className="fa-brands fa-instagram" style={{ backgroundColor: '#d57004' }}></i>
    <i className="fa-brands fa-linkedin" style={{ backgroundColor: '#0077b5' }}></i> 
    </div>

    </div>

    
    <div className="col-md-6" id='dedicatedchennaicontact'>
    <ServersForm />
    </div>

  </div>
</div>

</section>


{/* contact section ends */}
    </div>

    </div>
  )
}
