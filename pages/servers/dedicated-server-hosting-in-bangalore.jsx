import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Testimonial from '../Testimonial';
import ServersForm from '../forms/ServersForm'
import AnimatedHeading from '../../components/AnimatedHeading'
import Image from 'next/image';
import MetaTags from '../../components/MetaTags';

export default function DedicatedServerBangalore() {
  return (
    <div className='layout'>
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722058498/cloudhosting-bg-pc_e4hvtp.webp" type="image/webp" />
</Head>
      <MetaTags />
      <div className='main'>
        {/* banner */}
        <section className='server-banner-sec'>
        <div className="container banner">
  <div className="row">

    <div className="ban-left-1 col-md-6">
        <h1 className='server-1 box-up '>Dedicated Servers Hosting</h1>
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
    <AnimatedHeading className='server heading'>FAST AND ROBUST DEDICATED SERVER IN BANGALORE</AnimatedHeading>
            <p className='ser-para'>Sixth Star Technologies provides up-marketed dedicated server hosting in bangalore with low-cost consumption. We are facilitated with the best data center for resolving all your business obstacles with endurance thereby maintaining your server with high standard security. Grab our packages with no pause in time.</p>    
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
      <Link href='#serverbangalorecontact' className='price-but'>Contact now</Link>
    </div>

    <div className=" price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>STANDARD</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">64 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V2</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 2 TB </span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#serverbangalorecontact' className='price-but'>Contact now</Link>
    </div>
 
    <div className="price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>PROFESSIONAL</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">128 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V2</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 4 TB</span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#serverbangalorecontact' className='price-but'>Contact now</Link>
    </div>

    <div className="price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>PREMIUM</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">256 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V3</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 4 TB</span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#serverbangalorecontact' className='price-but'>Contact now</Link>
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
    <AnimatedHeading className='server heading'>BENEFITS OF DEDICATED SERVER HOSTING IN BANGALORE</AnimatedHeading>
    </div>

    <div className="col-12 server-benef">
    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402974/personalization_hrfqj1.webp" width={64} height={64} alt='Free setup' loading='lazy' /> 
    <h3> Custom service</h3>
    <p>The added advantage of our hosting service is that the server administration will be provided to configure and customize the architectures and hardware designs.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402974/engineer_uhskc5.webp" width={64} height={64} alt='Security' loading='lazy'/> 
    <h3> Uninterrupted
    function</h3>
    <p>Our data centers are provided with the highly unobstructed supply for continuous function and also we guarantee 99.9% uptime availability.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402974/browser_eevlew.webp" width={64} height={64} alt='Close Monitoring' loading='lazy'/> 
    <h3> No traffic congestion</h3>
    <p>Upgraded RAM and storage capacity with the best bandwidth will be provided with high-quality service to avoid over crowding in your site.</p>
    </div>

    </div>

    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402974/economic-growth_wjir8l.webp" width={64} height={64} alt='Hardware Resource' loading='lazy'/> 
    <h3> Low capital investment</h3>
    <p>Invest low and Save your expenditures by grabbing our hosting plans features to increase your potentials.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402975/reliability_xjqayp.webp" width={64} height={64} alt='Redundant Source' loading='lazy'/> 
    <h3>Assured protection</h3>
    <p>Advanced security systems for Data protection with firewall and antivirus to avoid mantraps of neighboring clients.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402973/24-hours_j0uqeh.webp" width={64} height={64} alt='24/7 Tech Support' loading='lazy'/> 
    <h3>support and maintenance</h3>
    <p>Our professional will be present at every instance to give technical advice and up-keep your website performing at its best.</p>
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
    <Link href="#serverbangalorecontact">Contact us</Link>
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
      <li> <i className="fa-solid fa-check"></i> <p>We provide resources that help in promoting your websites with high-quality service.</p></li>
      <li> <i className="fa-solid fa-check"></i> <p>Genuine issuance of a guaranteed server with trailblazing features which makes your work easier.</p> </li>
      <li> <i className="fa-solid fa-check"></i> <p>Instant support will be provided at the time of request with detailed scrutiny.</p> </li>

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

{/* faq sec starts */}
<section className='server-faq'>
<AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-12 text-center">
    
    <div className="accordion dedicated-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is dedicated server hosting, and why choose it in Bangalore?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Dedicated server hosting involves renting an entire physical server solely for your website or application. In Bangalore, choosing dedicated hosting ensures exclusive resources and high performance, ideal for businesses with high traffic or resource-intensive applications.</p></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What are the benefits of dedicated server hosting over shared hosting?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Dedicated server hosting offers several advantages over shared hosting, including better performance, increased security, customization options, and full control over server resources. In Bangalore, where businesses often require scalable and reliable hosting solutions, dedicated servers are preferred for their robustness</p>
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How do I choose the right dedicated server hosting provider in Bangalore?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>When selecting a dedicated server hosting provider in Bangalore, consider factors such as server reliability, network uptime, data center location, customer support quality, and pricing. Look for providers with a strong reputation and experience in the industry to ensure reliable service.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      What technical support options are available with dedicated server hosting in Bangalore?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p>Dedicated server hosting providers in Bangalore typically offer various technical support options, including 24/7 monitoring, server management, troubleshooting assistance, and regular backups. Opt for a provider that offers responsive support to address any issues promptly.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Can I upgrade my dedicated server resources as my business grows in Bangalore?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, most dedicated server hosting providers in Bangalore offer scalability options, allowing you to upgrade server resources such as CPU, RAM, storage, and bandwidth as your business expands. This flexibility ensures that your hosting solution can accommodate increasing traffic and resource demands over time</p>
        </div>
    </div>
  </div>
</div>

    </div>

  </div>
</div>

</section>

{/* faq section ends */}


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

    
    <div className="col-md-6" id='serverbangalorecontact'>
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
