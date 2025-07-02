import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../components/AnimatedHeading'
import FeatureHideShow from '../components/FeatureHideShow'
import HaForm from './forms/HaForm'
import Image from 'next/image'
import MetaTags from '../components/MetaTags';

// const  meta = {
//   title:  'high availability service in Chennai - Sixthstar Technologies',
//   description:  'high availability service providers in Chennai for applications, databases, and file storage both on-premises data centers and in the cloud.',
//   ogTitle:  'high availability service in Chennai - Sixthstar Technologies',
//   ogDescription:  'high availability service providers in Chennai for applications, databases, and file storage both on-premises data centers and in the cloud.',
//   ogUrl:  'https://sixthstartech.com/high-availability',
//   articleModifiedTime:  '2024-09-30T06:19:50+00:00',
//   ogImage:  'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063037/logo-1_ewjygi.webp',
   
// };

export default function HighAvailability() {

  return (
    <div>
       <MetaTags />
      <div className='main'>
        {/* banner sec starts */}
        <section className='ha-banner-sec'>
        <div className="container ha-banner">
  <div className="row p-2">

    <div className="ban-left-1 col-md-6">
    <h1 className="text-container">
    <span className="letter flip">H</span>
    <span className="letter flip">i</span>
    <span className="letter flip">g</span>
    <span className="letter flip">h</span>
<span className="letter flip">&nbsp;</span>
    <br/>

    <span className="letter flip">A</span>
    <span className="letter flip">v</span>
    <span className="letter flip">a</span>
    <span className="letter flip">i</span>
    <span className="letter flip">l</span>
    <span className="letter flip">a</span>
    <span className="letter flip">b</span>
    <span className="letter flip">i</span>
    <span className="letter flip">l</span>
    <span className="letter flip">i</span>
    <span className="letter flip">t</span>
    <span className="letter flip">y</span>
     </h1>
        <p>We Build Your Business with Professional Coding and Strive Success</p>
        <div >
        <div className="row ha-banner-fet">
            <ul className="list1 col-md-6" >
                <li> <i className="fa-solid fa-square-check"></i>Downtime reduction</li>
                <li> <i className="fa-solid fa-square-check"></i>Continuity of service</li>
                <li> <i className="fa-solid fa-square-check"></i>Stable and Scalable</li>
            </ul>
            <ul className="list1 col-md-6" >
                <li> <i className="fa-solid fa-square-check"></i>SLA next to 100%</li>
                <li> <i className="fa-solid fa-square-check"></i>High-level performance</li>
                <li> <i className="fa-solid fa-square-check"></i>Secure data</li>
            </ul>
            </div>

        </div>
        <Link href='#hacontactform'>GET STARTED</Link>
    </div>

    <div className="col-md-6 ban-right-1">

    </div>

  </div>
</div>
        </section>

      {/* banner sec ends */}

      {/* ha1 sec start */}

<section className="app-dev1-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>HIGH AVAILABILITY​</AnimatedHeading>
    <p>High Availability (HA) is the ability of a system to operate continuously and error-free over a period of time. The HA ensures that the system achieves the agreed level of operational performance. SixthStar, we have implemented high availability service for many companies in and around Chennai.</p>
    </div>

  </div>
</div>
</section>

{/* ha1 sec ends */}

{/* ha elements sec starts */}
<section className="ha-elem-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Elements of high-availability​​</AnimatedHeading>
    {/* tab title starts */}
    <div className='ha-tab-title'>
    <ul className="nav nav-fill nav-tabs" role="tablist">
      <li className="nav-item" role="presentation">
        <a className="nav-link active" id="fill-tab-0" data-bs-toggle="tab" href="#fill-tabpanel-0" role="tab" aria-controls="fill-tabpanel-0" aria-selected="true"><i className="fa-solid fa-shield-halved"></i> Redundancy </a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="fill-tab-1" data-bs-toggle="tab" href="#fill-tabpanel-1" role="tab" aria-controls="fill-tabpanel-1" aria-selected="false"><i className="fa-solid fa-shield-halved"></i> Replication </a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="fill-tab-2" data-bs-toggle="tab" href="#fill-tabpanel-2" role="tab" aria-controls="fill-tabpanel-2" aria-selected="false"><i className="fa-solid fa-shield-halved"></i> Failover </a>
      </li>
    </ul>
  </div>
       {/* tab title ends */}

        {/* tab content starts */}
  <div className="tab-content fet-tab-con pt-5" id="tab-content">
  
    <div className="tab-pane active" id="fill-tabpanel-0" role="tabpanel" aria-labelledby="fill-tab-0">
      <p>High-availability IT infrastructure features hardware redundancy, software and application redundancy, and data redundancy. Redundancy means the IT components in a high-availability cluster, like servers or high availability database, can perform the same tasks.</p>
    </div>
     
    <div className="tab-pane" id="fill-tabpanel-1" role="tabpanel" aria-labelledby="fill-tab-1">
      <p>Data replication is necessary to achieve high availability. The same nodes in a cluster must exchange and replicate data. To ensure that any node can step in and deliver the best possible service in the event that the high availability web server or network device it is supporting fails, the nodes must interact with one another and share the same information. In order to help maintain high availability and business continuity in the event that a data center fails, data can also be copied between clusters.</p>
    </div>

    <div className="tab-pane" id="fill-tabpanel-2" role="tabpanel" aria-labelledby="fill-tab-2">
      <p>A high-availability cluster experiences a failover when a task carried out by the failed primary component switches to a backup component. Maintaining an off-site failover system is a best practice for high availability and disaster recovery. When crucial primary systems fail or become overloaded, IT managers can immediately move traffic to the failover system by keeping an eye on their condition.</p>
    </div>

  </div>
      {/* tab content starts */}
    </div>

  </div>
</div>
</section>

{/* ha elements sec ends */}

 {/* Ha Infra sec starts */}
<section className='ha-infa-sec'>
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>Why is a HA infrastructure necessary?</AnimatedHeading>
    </div>

  </div>
</div>
</section>

 <section className="vps-whychoose-sec p-3">
        <div className="container ha-infra">
            <div className="row vps-whychoose-1">
            
            <div className="col-md-6">
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057806/Why-To-buy-SS-img_rwxwpx.webp" alt="HA why choose" loading='lazy' width={400} height={400} />
            </div>

            <div className="col-md-6 ">
            <div className="row ">

            <div className="col-12 ha-infra">
            
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
   
    <div className="carousel-item active " data-bs-interval="10000">
    <h3 className='slideInUp'>Application Management Excellence</h3>
    <p>Managing your applications effectively is crucial for ensuring smooth operation and optimal performance.</p>
    </div>
    
    <div className="carousel-item " data-bs-interval="2000">
    <h3 className='slideInUp'>Zero Tolerance</h3>
    <p>By using effective traffic management tactics and leveraging relevant technology, you can maintain your website's reliability, speed, and stability.</p>
    </div>

    <div className="carousel-item ">
      <h3 className='slideInUp'>Ensuring High Performance</h3>
      <p>Downtime is unaffordable, and service disruptions are your worst nightmare because part of your work involves ensuring high performance.</p>
    </div>

    <div className="carousel-item ">
    <h3 className='slideInUp'>Reliable Accessibility</h3>
    <p>By prioritizing accessibility and reliability, you not only enhance user satisfaction and loyalty but also safeguard your brand reputation and competitiveness in the market.</p>   </div>
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
            
                <Link href='tel:9962107399'>Talk to our Experts</Link>
               
                </div>
                

            </div>
            </div>

            </div>
        </div>
        </section>

        {/* Ha Infra sec ends */}

       
      {/* ha cluster sec start */}
      <section className="ha-clust-sec">
      <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>High Availability Clusters</AnimatedHeading>
    <div className="row ha-clust">

    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722232215/ha_cluster-removebg-preview_pmsca4.webp" alt="High Availability Clusters" loading='lazy' width={400} height={400}/>
    </div>

    <div className="col-md-6">
      <ul>
        <li> <i className="fa-regular fa-circle-check"></i> <p>High availability clusters are grouped servers that act as a unified system. Also called failover clusters, they share the same storage space but use different networks. They also perform the same job as they can run the same workloads as the underlying system they support.</p></li>
        <li> <i className="fa-regular fa-circle-check"></i> <p>If a ha server in a cluster fails, another HA server or node can immediately take over to keep the cluster-hosted application or service running. Deploying high-availability clusters helps ensure there is no single point of failure for critical computing and reduces or eliminates downtime.</p></li>
        <li> <i className="fa-regular fa-circle-check"></i> <p>HA clusters are regularly tested to ensure nodes are always ready. IT admins often use the open-source Heartbeat program to monitor cluster health. The program sends data packets to each machine in the cluster to confirm that it is working as expected.</p></li>
      </ul>
    </div>

  </div>
    </div>

  </div>
</div>
      </section>

      {/* ha cluster sec start */}

            {/* ha cluster sec start */}
            <section className="ha-clust-sec">
      <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>High availability vs IT disaster recovery?</AnimatedHeading>
    <div className="row ha-clust">

    <div className="col-md-6">
      <ul>
        <li> <i className="fa-regular fa-circle-check"></i> <p>High availability technology IT systems and services are designed to be available 99.999% of the time during planned and unplanned outages. The so-called five-nine reliability system is almost always switched on.</p></li>
        <li> <i className="fa-regular fa-circle-check"></i> <p>If a critical IT infrastructure fails but is supported by a high-availability architecture, the backup system or backup component takes over. This allows users and applications to continue working without interruption and access the same data that was available before the interruption.</p></li>
      </ul>
      <FeatureHideShow buttonText="View More" className="ha-clust-hide container text-center"> 
      <ul>
        <li> <i className="fa-regular fa-circle-check"></i> <p>IT Disaster Recovery refers to the policies, tools, and procedures that IT organizations should adopt to bring critical IT components and services back online after a disaster. An example of a cyber disaster is the destruction of a data center as a result of a natural event, such as a major earthquake.</p></li>
        <li> <i className="fa-regular fa-circle-check"></i> <p>High availability is a strategy for dealing with small but critical failures of IT infrastructure components that can be easily recovered. IT disaster recovery is a process for dealing with serious events that can lead to the failure of the entire IT infrastructure.</p></li>
      </ul>
      </FeatureHideShow> 
    </div>

    <div className="col-md-6">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722232254/disaster_recovery-removebg-preview_niqisa.webp" alt="disaster recovery" loading='lazy' width={400} height={400}/>
    </div>

  </div>
    </div>

  </div>
</div>
      </section>

      {/* ha cluster sec start */}

{/* contact section starts*/}
<section className='fleet-call-t0-sec'>

<div className="container">
  <div className="row justify-content-center fleet-c2a container ">

    <div className="col-md-8 align-content-center text-center">
    <h3>Enhance Your Brand's Potential with High Availability Solutions</h3>
    </div>

    <div className="col-md-4 align-content-center text-center">
    <Link href="#hacontactform">Contact us</Link>
    </div>

  </div>
</div>
</section>
{/* contact section ends*/}

 {/* ha2 sec start */}

 <section className="app-dev2-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Highly Available Load Balancer​</AnimatedHeading>
    <div className="container">
  <div className="row ">

    <div className="col-12 app-dev2">
    <ul>
        <li> <i className="fa-regular fa-circle-check"></i> <p>In general, total availability is expressed as a percentage of availability. An HA load balancer can achieve optimal operational performance by being deployed on a single node or in a cluster.</p></li>
        <li> <i className="fa-regular fa-circle-check"></i> <p>In a single-node deployment, a single HA load balancer performs all management functions and collects and processes all analytics. In a high-availability load-balancing cluster, additional nodes provide node-level redundancy for the load-balancing controller and optimize performance for CPU-intensive scans.</p></li>
      </ul>
    </div>

  </div>
</div>
    </div>

  </div>
</div>
</section>

{/* ha1 sec ends */}

{/* contact sec start */}
<section className="webdev-contact-sec">
<div className="container">
  <div className="row ">

    <div className="col-md-6">

    </div>

    <div className="col-md-6 webdev-contact" id='hacontactform'>
      <h3 className='text-center'>Share Your Message</h3>
      <HaForm />
    </div>

  </div>
</div>
</section>

{/* contact sec ends */}

      </div>

          
    </div>
  )
}
