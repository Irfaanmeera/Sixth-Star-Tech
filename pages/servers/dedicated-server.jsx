import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Testimonial from '../Testimonial';
import ServersForm from '../forms/ServersForm'
import AnimatedHeading from '../../components/AnimatedHeading'
import HideShow from '../../components/HideShow';
import MetaTags from '../../components/MetaTags';

export default function DedicatedServer() {
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
    <AnimatedHeading className='server heading'>Powerful Dedicated Servers Hosting Solution</AnimatedHeading>
            <p className='ser-para'>A Dedicated Servers allows you to take a complete control over your resources using Control panel. With this physical server, you can have a dedicated environment where you can customize features and set resources based on your organizational needs. They are suited for all-purpose businesses right from web-stores to large-scale since they have reliable and stable operational configurations. With fast-uptime and accessibility, they boost performances instantly at expected rates.</p>
            <p className='ser-para'>Sixth Star offers the best dedicated servers hosting in India with abrupt security features like firewall, DDoS protection and SSL certificates with instant provisioning options. You can order our services at any time and will be deployed at the demanded time. Configure the packages based on the requirements like OS, RAM, disk storage, and processors before placing the order.</p>       
        
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
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 2</span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#dedicatedcontactform' className='price-but'>Contact now</Link>
    </div>

    <div className=" price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>STANDARD</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">64 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V2</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 2</span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#dedicatedcontactform' className='price-but'>Contact now</Link>
    </div>
 
    <div className="price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>PROFESSIONAL</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">128 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V2</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 4 TB</span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#dedicatedcontactform' className='price-but'>Contact now</Link>
    </div>

    <div className="price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>PREMIUM</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">256 GB</span>  RAM</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">E5-1650V3</span> Intel Xeon</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2 x 4 TB</span> SATA HDD</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1 GBPS</span> Speed</li>
            </ul>
      <Link href='#dedicatedcontactform' className='price-but'>Contact now</Link>
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
    <AnimatedHeading className='server heading'>Benefits Of Our Dedicated Server</AnimatedHeading>
            <p className='ser-para'>With robust tier-3 infrastructure at our data centres, we provide a range of features prioritizing stability, scalability and security for all customers. We make services precise that meet exactly your expectations as we are a pioneer in providing prime resources for every client with our expertise and specialize in giving “on time solution” for all your business issues.</p>
            <p className='ser-para'>Also, with each service packages, we add additional evident features comprising free backup, IP’s, subnets, domains and protection related measures under low cost. Here are some features that quickly confess the importance of the Dedicated Servers hosting.</p>       
        
    </div>

    <div className="col-12 server-benef">
    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056895/engineer_w51c3p.webp" width={64} height={64} alt='Free setup' loading='lazy' /> 
    <h3> Free setup</h3>
    <p>Server setup for first-time installers will be done instantly under free of cost with upgradation at any time.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056897/reliability_zo4twt.webp" width={64} height={64} alt='Security' loading='lazy'/> 
    <h3> Security</h3>
    <p>Firewall setup, anti-virus software will be provided to safeguard the server from anti-malware.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056896/Maintenance-Management_yvglle.webp" width={64} height={64} alt='Close Monitoring' loading='lazy'/> 
    <h3> Close Monitoring</h3>
    <p>System and server monitoring will be handled by us to increase the performance of the server.</p>
    </div>

    </div>

    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056894/database-storage_m79o0t.webp" width={64} height={64} alt='Hardware Resource' loading='lazy'/> 
    <h3> Hardware Resource</h3>
    <p>Hardware specifications are been preferred by the client and we provide the best hardware resources with high bandwidth and storage capacities.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056899/scalable-1_ulqgqy.webp" width={64} height={64} alt='Redundant Source' loading='lazy'/> 
    <h3>Redundant Source</h3>
    <p>Highly continued networking performance with high resource availability will be provided, eliminating downtime possibilities.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-3 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056894/24-hours_jgvji1.webp" width={64} height={64} alt='24/7 Tech Support' loading='lazy'/> 
    <h3>24/7 Tech Support</h3>
    <p>Reach our service team in any instances to resolve all your technical problems and also to get help in choosing the best server plan.</p>
    </div>
    </div>

    </div>
  </div>
</div>
        </section>
        {/* benefits section ends */}

        {/* features section */}
        <section className='feature-sec'>
        <div className="container ">
  <div className="row gx-6 ">
  <div className="col-12 " >
  <AnimatedHeading className='server heading'>Servers</AnimatedHeading>
    </div>

    <div className="col-12 server-feat-tab" >
      <div className='server-tab-title'>
    <ul className="nav nav-fill nav-tabs" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="fill-tab-0" data-bs-toggle="tab" href="#fill-tabpanel-0" role="tab" aria-controls="fill-tabpanel-0" aria-selected="true"><i className="fa-solid fa-shield-halved"></i> Server Features </a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="fill-tab-1" data-bs-toggle="tab" href="#fill-tabpanel-1" role="tab" aria-controls="fill-tabpanel-1" aria-selected="false"><i className="fa-solid fa-shield-halved"></i> Hardware Specifications </a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="fill-tab-2" data-bs-toggle="tab" href="#fill-tabpanel-2" role="tab" aria-controls="fill-tabpanel-2" aria-selected="false"><i className="fa-solid fa-shield-halved"></i> Server Specification </a>
  </li>
</ul>
</div>
<div className="tab-content fet-tab-con pt-5" id="tab-content">
  <div className="tab-pane active" id="fill-tabpanel-0" role="tabpanel" aria-labelledby="fill-tab-0">
    <p>Our Dedicated Servers has many key features with the advanced technology delivering a desirable outcome to all the clients. 
      <br/>The server features of the sixth star are given below,</p>
      <div className="container">
  <div className="row ">

    <div className="col-md-6">
    <ul>
      <li> <i className="fa-solid fa-circle-check"></i>Data centers with tier 3 architecture</li>
      <li> <i className="fa-solid fa-circle-check"></i>Convenient usage of CPanel and Plesk</li>
      <li> <i className="fa-solid fa-circle-check"></i>Hard disks with RAID 1 enabled</li>
      <li> <i className="fa-solid fa-circle-check"></i>Content Writing</li>
      </ul>
    </div>

    <div className="col-md-6">
    <ul>
      <li> <i className="fa-solid fa-circle-check"></i>Easy deployment</li>
      <li> <i className="fa-solid fa-circle-check"></i>High-speed connectivity</li>
      <li> <i className="fa-solid fa-circle-check"></i>Anti-virus management software’s</li>
      </ul>
    </div>

  </div>
</div>
     
  </div>
  <div className="tab-pane" id="fill-tabpanel-1" role="tabpanel" aria-labelledby="fill-tab-1">
  <p>Experience the best hardware features with our service which not only focuses on security but also enhances your business with leading technology. <br/>Some of the Dedicated Servers specifications are,</p>
      <ul>
      <li> <i className="fa-solid fa-circle-check"></i>Intel® Xeon® E5-1650 v3 Hexa-Core Hyper-Threading Technology</li>
      <li> <i className="fa-solid fa-circle-check"></i>High-end servers</li>
      <li> <i className="fa-solid fa-circle-check"></i>Advanced RAM memory up to 256GB</li>
      <li> <i className="fa-solid fa-circle-check"></i>Intel SATA and SSD</li>
      </ul>
      <p> Thus, Sixth Star Technologies in India will provide you Dedicated Servers with the robust and outstanding feature which helps you in scaling up your business at all aspects.</p>
  </div>
  <div className="tab-pane" id="fill-tabpanel-2" role="tabpanel" aria-labelledby="fill-tab-2">
  <p>Experience the best hardware features with our service which not only focuses on security but also enhances your business with leading technology. <br/>Some of the Dedicated Servers specifications are,</p>
      <ul>
      <li> <h3>RAM</h3> <p>Random Access Memory (RAM) will be provided for each package ranging from 8GB-256GB. And the RAM which we give comprises of DDR3 and DDR4 capability i.e. they possess unbuffered memory and better-performing upgrade solution at a lower price. Also, it provides high network speed to the operating systems and applications resulting in a good bandwidth for your websites with the best system stability i.e. it releases less heat and is more power efficient.</p></li>
      <li> <h3>Processor</h3> <p>The server comes with Intel 8 core and Xeon Processor which takes a leap in performance and capability. This innovative technology accounts for the best performance, maximizing security and increases the orchestration and possess hyper-threading with thermal design to be energy efficient.</p></li>
      <li> <h3>Hard Disk Drive (HDD)</h3> <p>Industry’s highest capacity nearline drive ranging from 2TB-90TB suiting all the demanded storage needs and designed for highest performance for business-critical applications. This disk comes with the best-inbuilt application with high-quality and reliability thereby helping your system to store as much data without any crash or malfunctioning.</p></li>
      </ul>
        </div>
</div>

      </div>

      </div>

      </div>
</section>
{/* features section ends*/}

{/* contact section ends*/}
<section className='call-t0-action-sec'>

<div className="container">
  <div className="row justify-content-center c2a container">

    <div className="col-md-6 ">
    <h3 className='text-white'>Get in-touch with our Experts now for Hosting services</h3>
    </div>

    <div className="col-md-6 ">
    <Link href="#dedicatedcontactform">Contact us</Link>
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
      <li> <i className="fa-solid fa-check"></i> <p>Experts in handling malware and repairs of servers and possess the capacity in rebuilding them within provided time.</p></li>
      <li> <i className="fa-solid fa-check"></i> <p>Deployment and Re-installation of hardware components including recovery software are provided to regain lost data.</p> </li>
      <li> <i className="fa-solid fa-check"></i> <p>Say whether a consultation to customers or instruction of service techniques, you can reach them through phone at any instance since we provide interminable support service.</p> </li>

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
      What is a dedicated server?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The Dedicated Server Hosting environment gives a selective server or servers dedicated singularly to your site. In this hosting, clients can get complete control that allows customization. This server is ideal for large websites that receive high traffic or need a unique hosting setup requiring high security.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How does it work?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Once you have rented the entire physical server, you will get access to all the resources entirely within it. Since you have customization facilities, you can modify or update your CPU type, OS, RAM, and storage.
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Difference between shared and dedicated server
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Dedicated is an entire single server whereas shared is a portion of it. Rather sharing a part of resources among others you can choose the dedicated server where you have entire access to all resources.
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      What’s the difference between managed and unmanaged dedicated hosting?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Unmanaged hosting is where you will receive a blank server, and all the technical side and security should be handled by yourself whereas in managed hosting you will have a professional team who will handle all the technical parts to keep it secure and reliable.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      What kind of speed will my server have once it is connected?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Usually, it will automatically connect at 100Mbps but we provide speed up to 1Gbps as an addition to all our packages. The network will be completely redundant and has expandable bandwidth capability.
        </div>
    </div>
  </div>
</div>


<HideShow buttonText="Learn More" className="about-class justification-center">
        <div>
        <div>
<div className= 'accordion dedicated-faq' id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
      What benefits does dedicated hosting have?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      It is a safe and secure option that has high uptime and is vulnerable to hacking, thereby reducing the hardware and software repairs. They are completely optimized for better performance among other servers and give scalability features for upgrading purposes.
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      How many mail accounts can I have? And what software is used?
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Email accounts are unlimited with features like auto-responders, Spam Assassins, aliasing, etc. Currently, we provide EXIM software.
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      How much bandwidth is included with each server and how is it metered?
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      We will set bandwidth based on your requirements for each month. Incoming bandwidth is checked once your usage exceeds
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      How many websites can I host on a dedicated server?
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You can host as many as you can since we provide unlimited service for domains.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      Do you offer backup services?
      </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Each dedicated server comes with HDD drives with additional cost that can be added to safeguard your storage documents or files. We also provide backup scripts if you wish to store it on any third-party storage.
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

    
    <div className="col-md-6" id='dedicatedcontactform'>
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
