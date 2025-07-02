
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AnimatedHeading from '../../components/AnimatedHeading'
import Testimonial from '../Testimonial';
import HideShow from '../../components/HideShow';
import ServersForm from '../forms/ServersForm'
import Image from 'next/image';
import MetaTags from '../../components/MetaTags';
import {vpsHostingSchema} from '../../lib/data/schema'


export default function VpsServerHosting() {
  return (
    <div>
      <MetaTags />
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722058498/cloudhosting-bg-pc_e4hvtp.webp" type="image/webp" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(vpsHostingSchema) }}
                />
</Head>
      <div className='main'>

        {/* banner */}
        <section className='server-banner-sec'>
        <div className="container banner">
  <div className="row ">

    <div className="ban-left-1 col-md-6 p-3">
        <h1 className='server-1 box-up'>Secured VPS Server Hosting</h1>
        <div >
        <div className="row banner-fet p-2">
            <ul className="list1 col-md-6" >
                <li> <i className="fa-regular fa-circle-check"></i>Highly-secured</li>
                <li> <i className="fa-regular fa-circle-check"></i>99.99%  Uptime</li>
                <li> <i className="fa-regular fa-circle-check"></i>Easy root access</li>
            </ul>
            <ul className="list2 col-md-6" >
                <li> <i className="fa-regular fa-circle-check"></i>Robust hardwares</li>
                <li> <i className="fa-regular fa-circle-check"></i>Automated Platform</li>
                <li> <i className="fa-regular fa-circle-check"></i>Managed and unmanaged</li>
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
                <AnimatedHeading className='server heading'>VPS Server Hosting In Chennai</AnimatedHeading>
                    <p className='ser-para'>Virtual Private Server (VPS) holds the features of both dedicated Hosting and shared Hosting focusing on your critical data privacy with complete security solutions. This virtual server comprises RAM, disk space, processors and other storage and network capabilities with an expandable feature where you can configure based on your requirement. With our immense server features and proactive support, you can certainly run your business without any downtime.</p>    
                </div>
            </div>
        </div>
        </section>

        {/* Why Choose starts */}

        <section className="vps-whychoose-sec p-3">
        <AnimatedHeading className='server heading'>Why Choose Sixth Star?</AnimatedHeading>
        <div className="container">
            <div className="row vps-whychoose-1">
            
            <div className="col-md-6">
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057806/Why-To-buy-SS-img_rwxwpx.webp" alt="why choose" width={400} height={400} />
            </div>

            <div className="col-md-6 ">
            <div className="row ">

            <div className="col-12">
            <div id="carouselExampleSlidesOnly" className="carousel slide vps-whychoose-slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              
              <div className="carousel-item active slideInUp">
                <h3>Super Fast ssd</h3>
                <p>Highly-reliable networking performance is guaranteed with our robust local RAID and SSD operations. All your data’s and applications will be implemented at lightning speed to your users assuring low load times.</p>
              </div>
              
              <div className="carousel-item slideInUp">
              <h3>Global Datacenters</h3>
                <p>Choose our data centres based on your business and potential customers locations. Our colocation data centres on different geographical locations enable for faster response time, quicker output and increase local presence. You can choose the best to enhance productivity.</p> 
              </div>

              <div className="carousel-item slideInUp">
              <h3>SLA Performance Guarantee</h3>
                <p>As our SSL portrays, we will strive and provide the reliable hosting performance to all the customers with 99.98% uptime and resource availability.</p>
              </div>
              
              <div className="carousel-item slideInUp">
              <h3>SSL Security</h3>
                <p>As security is a great concern, we help you maintain a safe and secure website by providing SSL certificates. By installing the SSL certificate, you can improve your site credibility and trust among the customer’s ensuring that all transactions or information’s are kept safe.</p>
              </div>

              <div className="carousel-item slideInUp">
              <h3>24X7 Supports</h3>
                <p>We give high-priority to resolve customer queries and the problem in any instance. Our expert team will perform support services for 24x7x365 through email, chat or call. You can reach us at any time.</p>
              </div>

              <div className="carousel-item slideInUp">
              <h3>24X7 Supports</h3>
                <p>We give high-priority to resolve customer queries and the problem in any instance. Our expert team will perform support services for 24x7x365 through email, chat or call. You can reach us at any time.</p>
              </div>
              
              </div>
              </div>

            </div>

            </div>

            <div className="row vps-whychoose-2">
            <div className="col-12">
                <br/>
                <Link href='#vpscontactform'>Talk to our Experts</Link>
               
                </div>
                

            </div>
            </div>

            </div>
        </div>
        </section>

        {/* Why Choose ends */}

        {/* benefits section */}
  <section className='server-bene-sec'>
        <div className="container p-3">
  <div className="row gx-6 ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>Benefits Of VPS SERVER Hosting</AnimatedHeading>
    </div>

    <div className="col-12 server-benef">
    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056897/reliability_zo4twt.webp" width={64} height={64} alt='Best Security'/> 
    <h3> Best Security</h3>
    <p>With password protected directories and IP denials VPS stands as the best option. We also offer ssl certificate for secure transactions and operations.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057949/database_jaxjsy.webp" width={64} height={64} alt='Uptime Guarantee'/> 
    <h3> Uptime Guarantee</h3>
    <p>99.99% uptime is guaranteed at all time since we offer expandable bandwidth with redundant networking performance for faster load times.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057950/easy-access_d1kbfj.webp" width={64} height={64} alt='Complete Access'/> 
    <h3> Complete Access</h3>
    <p>System and server monitoring will be handled by us to increase the performance of the server.</p>
    </div>

    </div>

    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722058130/Gain-Insights_zbiorn.webp" width={64} height={64} alt='High Performance'/> 
    <h3> High Performance</h3>
    <p>With tier-3 infrastructure all the servers works at lightning speed and performs operations faster with no delay.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056894/24-hours_jgvji1.webp" width={64} height={64} alt='24/7 Support'/> 
    <h3>24/7 Support</h3>
    <p>Our technical team will be active round the clock to support you technically for all back-end process. You can reach them at any time</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057973/economic-growth_uo2jgi.webp" width={64} height={64} alt='Affordable'/> 
    <h3>Affordable</h3>
    <p>With our high-end hardware and software features we offer packages at cheap prices to reduce your capital investment.</p>
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
    <h3 className='text-white'>Get in-touch with our Experts now for Hosting services</h3>
    </div>

    <div className="col-md-6 ">
    <Link href="#vpscontactform">Contact us</Link>
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
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057385/dedicated-server-os_yiacig.webp" className='box-up' alt='vps hosting' width={527} height={473} /> 
    </div>

    <div className="col-md-6">
    <div className="row">
      <div className="col-6 text-end p-5 os-img"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057246/linux_irvhev.webp" alt='linux' width={108} height={108}/></div>
      <div className="col-6 text-start p-5 os-img"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057246/windows_tqsl78.webp" width={108} height={108} alt='windows'/></div>
    </div>

    <div className="row">
      <div className="col vps-os-list slideInRight">

        {/* tab title starts */}
      <div className='server-tab-title'>
    <ul className="nav nav-fill nav-tabs" role="tablist">
      <li className="nav-item" role="presentation">
        <a className="nav-link active" id="fill-tab-0" data-bs-toggle="tab" href="#fill-tabpanel-0" role="tab" aria-controls="fill-tabpanel-0" aria-selected="true"><i className="fa-solid fa-shield-halved"></i> Linux </a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="fill-tab-1" data-bs-toggle="tab" href="#fill-tabpanel-1" role="tab" aria-controls="fill-tabpanel-1" aria-selected="false"><i className="fa-solid fa-shield-halved"></i> Windows </a>
      </li>
    </ul>
  </div>
       {/* tab title ends */}

        {/* tab content starts */}
  <div className="tab-content fet-tab-con pt-5" id="tab-content">
  
    <div className="tab-pane active" id="fill-tabpanel-0" role="tabpanel" aria-labelledby="fill-tab-0">
      <p>Windows (Plesk Control Panel) can eradicate complications by giving a hack-free environment. They use .Net programming features making your platform easy to develop and modify. If you are working with windows applications or developing business under windows platform this VPS server is ideal.</p>
    </div>
     
    <div className="tab-pane" id="fill-tabpanel-1" role="tabpanel" aria-labelledby="fill-tab-1">
      <p>Using an Open source technology Linux can operate in a reliable manner with inbuilt CSS Optimizer. The server enables you to install/update software and other programs without purchasing any license key (from open source). They are flexible with real-time rebooting procedures</p>
    </div>

  </div>
      {/* tab content starts */}

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


{/* faq section ends */}
<section className='server-faq'>
<AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-12 text-center">
    
    <div className="accordion dedicated-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is the difference between VPS and shared hosting?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>VPS gives you a virtualized environment as well as shared hosting features where resources are shared on a particular server. In shared hosting, you will not have an independent server.</p></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Can I have additional bandwidth?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, you can upgrade your resources at any time you want. Reach our support team at support@sixthstar.in for further details.</p>
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Who should use VPS?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>If your website is receiving high traffic or you need to customize applications or increase your security level but not willing to invest more, then VPS is the best choice.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Does VPS provide good security?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, VPS provides good security, keeping your information and applications protected within its own independent environment.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Is VPS easy to use?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Utilization is an added advantage in VPS hosting since you have root access. You can remove or install as per your requirements, enhancing the performance of your site.</p>
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
      What is a virtual private server (VPS)?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>The VPS server has both the configuration of dedicated and shared server, i.e., as a dedicated server, it has a virtual independent environment, and as a shared one, it shares the resources of the server. Also, the server will not interface with the other hardware or file system; rather, it will send requests through queues and manage interpretation.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      What is the need for VPS server?
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>VPS is always a better choice. If you own a shared server and want an alternative like a dedicated server, then VPS is a perfect solution that can fit your requirements. They are affordable compared to other hosting options and highly secure too.</p>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      What about speed in VPS?
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Our data centers are equipped with the latest tech hardware and software and are connected to Ethernet. So the speed will be in gigabits and is redundant.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      Can I get a dedicated IP address?
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p>Yes, you can get a dedicated IP address at Sixth Star.</p> 
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      Can I customize my VPS server?
      </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Of course! You can customize it according to your needs and can install or remove applications. You will be provided with root access to modify your server based on the requirements.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading11">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
      VPS is cheap or costly?
      </button>
    </h2>
    <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, VPS is cheap compared to another hosting service.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading12">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
      Can I customize my VPS server?
      </button>
    </h2>
    <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, with root access, you can customize it as you wish.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading13">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
      How long will it take to set up my account?
      </button>
    </h2>
    <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Once the payment is verified through email or phone, your account will be set up on the same business day.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading14">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
      Do you offer an uptime guarantee?
      </button>
    </h2>
    <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, we offer a 99.99% uptime guarantee based on the SLA.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading15">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
      What is the operating system used in VPS?
      </button>
    </h2>
    <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>CentOS and Apache web server are offered with VPS at Sixth Star. You can choose them according to your requirements.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading16">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
      What kind of VPS server is available?
      </button>
    </h2>
    <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>We offer both managed and unmanaged services. Managed service is where all the technical aspects are handled by our professionals, whereas in unmanaged, you will receive a blank server that you have to optimize according to your requirements.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading17">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
      Will I have access to a firewall for my VPS?
      </button>
    </h2>
    <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>You can configure the iptables rules to secure your server.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading18">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
      Can I have additional storage?
      </button>
    </h2>
    <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>You can connect to your desktop or through SSH.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading19">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
      How often do you backup?
      </button>
    </h2>
    <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>We do daily backups and can restore it once you request. Kindly check our SLA to know more backup procedures.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading20">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
      What should I do when I want to change my server location?
      </button>
    </h2>
    <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Simply contact our team members through email or calls and they will do the rest.</p>
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

    
    <div className="col-md-6" id="vpscontactform">
      {/* <VpsServerHosting /> */}
      <ServersForm />
    </div>

  </div>
</div>

</section>


{/* contact ends starts */}


      </div>
    </div>
  )
}
