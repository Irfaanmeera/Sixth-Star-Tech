import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Testimonial from '../Testimonial';
import AnimatedHeading from '../../components/AnimatedHeading'
import ServersForm from '../forms/ServersForm';
import Image from 'next/image';
import MetaTags from '../../components/MetaTags';
import {cloudHostingSchema} from '../../lib/data/schema'

export default function cloudHostingServices() {

  return (
    <div>
      <MetaTags />
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722058498/cloudhosting-bg-pc_e4hvtp.webp" type="image/webp" />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cloudHostingSchema) }} />
</Head>
      <div className='main'>
         {/* banner */}
         <section >
        <div className="container cloud-banner">
  <div className="row ">
    <div className="ban-left-1 col-md-6 p-4">
        <h1 className=' cloud-server-1 '>High Performance Cloud hosting provider in chennai</h1>
        <div >
        <div className="row banner-fet pl-3 pr-3">
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
                <AnimatedHeading className='server heading'>Cloud Hosting Provider Service Provider In India</AnimatedHeading>
                    <p className='ser-para'>Cloud hosting is beneficial when compared with dedicated server hosting and shared hosting features. The cloud servers are interconnected within a virtual network where resources will be high with low latency network performance. These servers are like a physical server (dedicated) where you can secure your data’s and customize it regularly. With redundant storage and reliable network, the cloud servers can maintain 99.98% uptime at all instances.</p>    
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
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057806/Why-To-buy-SS-img_rwxwpx.webp" alt="cloud-whychoose" loading='lazy' width={400} height={400} />
            </div>

            <div className="col-md-6 align-content-center">
            <div className="row ">

            <div className="col-12">
            <div id="carouselExampleSlidesOnly" className="carousel slide vps-whychoose-slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              
              <div className="carousel-item active slideInUp">
                <h3>Built-in Security Architecture</h3>
                <p>Maximize security with our firewall, IDS/IPS technology, ensuring safe transactions and data transfers.</p>
              </div>
              
              <div className="carousel-item slideInUp">
              <h3>Back up Configuration</h3>
                <p>Leverage cloud’s triple data replication for easy snapshots and server setup with minimal effort</p> 
              </div>

              <div className="carousel-item slideInUp">
              <h3>Monitoring and Support functions</h3>
                <p>Monitor performance with our tools; get 24/7 expert support for all server and network queries.</p>
              </div>
              
              <div className="carousel-item slideInUp">
              <h3>Flexible Service</h3>
                <p>Adjust resources anytime with options for extra IPs, domains, SSLs, and enhanced security features.</p>
              </div>
              
              </div>
              </div>

            </div>

            </div>

            <div className="row vps-whychoose-2">
            <div className="col-12">
            <br/>
                <Link href='#cloudcontactform'>Talk to our Experts</Link> 
               
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
    <AnimatedHeading className='server heading'>Benefits Of Cloud Hosting</AnimatedHeading>
    <p>In addition to all those features, Sixth Star offers the best cloud hosting provider company in chennai that works great for sites withscalable traffic. We also provide other broad features where cloud computing plays its best for enhanced website performance. We mitigate to maintain a perfect work environment where everything becomes possible under the cloud without any stressful procedures. You can do features correlation, modification and transfer data at any time under perfect security with no downtime occurrence.</p>
    </div>

    <div className="col-12 cloud-server-benef">
    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056894/database-storage_m79o0t.webp" width={64} height={64} alt='Redundant Storage' loading='lazy'/> 
    <h3> Redundant Storage</h3>
    <p>cloud uses CEPH it uses a data mirroring method where the triple data replication processes making any hardware or network failures do not affect the stored data’s.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057949/database_jaxjsy.webp" width={64} height={64} alt='Flexible Billing' loading='lazy'/> 
    <h3>Flexible Billing</h3>
    <p>Utility payment is ensured in cloud hosting. You can pay off your bills as per the resources used and won’t be charged for unused ones. Profitable features are available only on cloud servers.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057950/easy-access_d1kbfj.webp" width={64} height={64} alt='Management Panel' loading='lazy'/> 
    <h3> Management Panel</h3>
    <p>Our cloud dashboard Open stack Horizon makes the web presence easier. track performances and management features with less tech knowledge in the cloud.</p>
    </div>

    </div>

    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722058130/Gain-Insights_zbiorn.webp" width={64} height={64} alt='Dedicated Resources' loading='lazy'/> 
    <h3> Dedicated Resources</h3>
    <p>We offer dedicated bare metal instances that inherit consistent performance at all instances along expandability i.e. you can broaden the resources at any time easily.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056894/24-hours_jgvji1.webp" width={64} height={64} alt='Solid Network' loading='lazy'/> 
    <h3>Solid Network</h3>
    <p>Our hypervisors provides fast and secure networking performance with low latency 100Gbps for high internet speed. And also offers dedicated IPv4 and IPv6.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722058890/ssh_hsxqs1.webp" width={64} height={64} alt='SSH Key Deployment' loading='lazy'/> 
    <h3>SSH Key Deployment</h3>
    <p>As a security measure, we deploy automatic SSH key once the purchase is done. We assure to dispense encrypted measures for all type of server communications.</p>
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
    <Link href="#cloudcontactform">Contact us</Link>
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
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057385/dedicated-server-os_yiacig.webp" className='box-up' alt='cloud hosting' loading='lazy' width={527} height={423}/> 
    </div>

    <div className="col-md-6 align-content-center">
    <div className="row">
      <div className="col-6 text-end p-5 os-img"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057246/linux_irvhev.webp" width={108} height={108} alt='linux' loading='lazy'/></div>
      <div className="col-6 text-start p-5 os-img"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057246/windows_tqsl78.webp" width={108} height={108} alt='windows' loading='lazy'/></div>
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

    
    <div className="col-md-6" id='cloudcontactform'>
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
