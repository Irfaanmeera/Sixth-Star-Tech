import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Testimonial from '../Testimonial';
import ServersForm from '../forms/ServersForm'
import AnimatedHeading from '../../components/AnimatedHeading'
import Image from 'next/image';
import MetaTags from '../../components/MetaTags';

export default function DedicatedServerKolkata() {
  return (
    <div className='layout'>
      <MetaTags />
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722058498/cloudhosting-bg-pc_e4hvtp.webp" type="image/webp" />
</Head>

      <div className='main'>
        {/* banner */}
        <section className='server-banner-sec'>
        <div className="container banner">
  <div className="row">

    <div className="ban-left-1 col-md-6">
        <h1 className='server-1 box-up'>Dedicated Server Hosting in Delhi</h1>
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
            <Link href="/request-a-quote" className='banner-but'>Get demo</Link>
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
    <AnimatedHeading className='server heading'>FAST AND ROBUST DEDICATED SERVER IN KOLKATA</AnimatedHeading>
            <p className='ser-para'>Sixth Star Technologies offers dedicated server hosting in kolkata at low cost, you can buy or rent a flexible server for your business from our firm to secure your data’s and sophisticated application. Managed dedicated hosting is where maintenance of server will be done by server provider and the server administration is taken by the client where he/she has complete access to configure or customize.</p>    
            <p>This is a secure and transparent service where you can login to your server at any intervals through your PC. This type of server will never get low in performing and it has seamless operation and scalability to function.</p>
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
    <p className='text-center'>Our services and plans are endless and you can enjoy the freedom of hosting.</p>
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
      <Link href='#dedicatedkolkatacontact' className='price-but'>Contact now</Link>
    </div>

    <div className=" price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>STANDARD</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">64 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V2</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 2 TB </span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#dedicatedkolkatacontact' className='price-but'>Contact now</Link>
    </div>
 
    <div className="price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>PROFESSIONAL</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">128 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V2</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 4 TB</span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#dedicatedkolkatacontact' className='price-but'>Contact now</Link>
    </div>

    <div className="price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>PREMIUM</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">256 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V3</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 4 TB</span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#dedicatedkolkatacontact' className='price-but'>Contact now</Link>
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
    <AnimatedHeading className='server heading'>BENEFITS OF OUR DEDICATED SERVER HOSTING</AnimatedHeading>
    <p>In our Sixth Star Technologies, we deliver servers with an intent to provide the best services for all our client. We generally tend to know all your hardware requirements and then offer you the best plan for the better performance.</p>
    </div>

    <div className="col-12 server-benef">
    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402974/personalization_hrfqj1.webp" width={64} height={64} alt='Accessibility' loading='lazy' /> 
    <h3> Self-customize</h3>
    <p>Design and configuration can be root accessed by the client and the server maintenance is provided by us at benefited cost.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057949/database_jaxjsy.webp" width={64} height={64} alt='Uptime' loading='lazy'/> 
    <h3> Non-stop resource</h3>
    <p>We guarantee 99.9% update availability with our data centers. And we are resourceful to solve all your propagations.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056899/scalable-1_ulqgqy.webp" width={64} height={64} alt='Reliability' loading='lazy'/> 
    <h3> Flexibility</h3>
    <p>Our servers are malleable in operation and we have installed interminable power source with no loss of function.</p>
    </div>

    </div>

    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402974/economic-growth_wjir8l.webp" width={64} height={64} alt='Lower Total Cost' loading='lazy'/> 
    <h3> Economical</h3>
    <p>We provide you the best servers with less money conservation with flawless potential.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402975/reliability_xjqayp.webp" width={64} height={64} alt='Backup And Setup' loading='lazy'/> 
    <h3>Security</h3>
    <p>Firewall and antivirus security systems is been provided to guard your website from anti-malware</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402973/24-hours_j0uqeh.webp" width={64} height={64} alt='24/7 Tech support' loading='lazy'/> 
    <h3>Support</h3>
    <p>Preventive maintenance and tech support will be given at all-time means with no cost considerations.</p>
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
    <Link href="#dedicatedkolkatacontact">Contact us</Link>
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
      <li> <i className="fa-solid fa-check"></i> <p>Real-time optimization services for the server is been carried out.</p></li>
      <li> <i className="fa-solid fa-check"></i> <p>High-speed server response capabilities will be provided.</p> </li>
      <li> <i className="fa-solid fa-check"></i> <p>User-friendly hosting features will be prompted to every customer.</p> </li>

      </ul>
      <p>We have the immense feature on the hosting side considering your welfare in business. Reach peak in online business with Sixth Star endless features!</p>
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

    
    <div className="col-md-6" id='dedicatedkolkatacontact'>
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
