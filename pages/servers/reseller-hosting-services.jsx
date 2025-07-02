
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AnimatedHeading from '../../components/AnimatedHeading'
import Testimonial from '../Testimonial';
import HideShow from '../../components/HideShow';
import ServersForm from '../forms/ServersForm'
import Image from 'next/image';
import MetaTags from '../../components/MetaTags';
import {resellerHostingSchema} from '../../lib/data/schema'

export default function ResellerHosting() {

  return (
    <div>
      <MetaTags />
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722058498/cloudhosting-bg-pc_e4hvtp.webp" type="image/webp" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(resellerHostingSchema) }}
                />
</Head>
      <div className='main'>

        {/* banner */}
        <section className='server-banner-sec'>
        <div className="container banner">
  <div className="row ">

    <div className="ban-left-1 col-md-6 p-3">
        <h1 className='server-1 box-up'>Reseller Server Hosting</h1>
        <div >
        <div className="row banner-fet p-2">
            <ul className="list1 col-md-6" >
                <li> <i className="fa-regular fa-circle-check"></i>Rock Solid Network</li>
                <li> <i className="fa-regular fa-circle-check"></i>Highly Flexible</li>
                <li> <i className="fa-regular fa-circle-check"></i>Incorporate WHM</li>
            </ul>
            <ul className="list2 col-md-6" >
                <li> <i className="fa-regular fa-circle-check"></i>Easy cPanel</li>
                <li> <i className="fa-regular fa-circle-check"></i>100% Satisfaction</li>
                <li> <i className="fa-regular fa-circle-check"></i>24*7 Live Support</li>
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
    <div><h3 className='feticon-head'>Hardware RAID</h3></div>
    </div>

    <div className="col-lg-2 col-md-6 p-2">
    <div className="feticon"><i className="fa-solid fa-location-dot"></i></div>
    <div><h3 className='feticon-head'>Additional IP</h3></div>
    </div>

    <div className="col-lg-2 col-md-6 p-2">
    <div className="feticon"><i className="fa-solid fa-table-cells"></i></div>
    <div><h3 className='feticon-head'>Firewall</h3></div>
    </div>

    <div className="col-lg-2 col-md-6 p-2">
    <div className="feticon"><i className="fa-solid fa-network-wired"></i></div>
    <div><h3 className='feticon-head'>Private Network</h3></div>
    </div>

    <div className="col-lg-2 col-md-6 p-2">
    <div className="feticon"><i className="fa-solid fa-desktop"></i></div>
    <div><h3 className='feticon-head'>IPMI</h3></div>
    </div>

    <div className="col-lg-2 col-md-6 p-2">
    <div className="feticon"><i className="fa-solid fa-server"></i></div>
    <div><h3 className='feticon-head'>Backup</h3></div>
    </div>

  </div>
</div>

<div className="icon-feature-mob">
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="feticon"><i className="fa-solid fa-hard-drive" ></i></div>
    <div><h3 className='feticon-head'>Hardware RAID</h3></div>
    </div>
    <div className="carousel-item">
    <div className="feticon"><i className="fa-solid fa-location-dot" ></i></div>
    <div><h3 className='feticon-head'>Additional IP</h3></div>
    </div>
    <div className="carousel-item">
    <div className="feticon"><i className="fa-solid fa-table-cells" ></i></div>
    <div><h3 className='feticon-head'>Firewall</h3></div>
    </div>
    <div className="carousel-item">
    <div className="feticon"><i className="fa-solid fa-network-wired" ></i></div>
    <div><h3 className='feticon-head'>Private Network</h3></div>
    </div>
    <div className="carousel-item">
    <div className="feticon"><i className="fa-solid fa-desktop" ></i></div>
    <div><h3 className='feticon-head'>IPMI</h3></div>
    </div>
    <div className="carousel-item">
    <div className="feticon"><i className="fa-solid fa-server" ></i></div>
    <div><h3 className='feticon-head'>Backup</h3></div>
    </div>
  </div>
</div>
</div>
        </section>
       {/* feartures ends */}

       <section>
        <div className="container p-3">
            <div className="row gx-6 ">

                <div className="col-12 text-center">
                <AnimatedHeading className='server heading'>Best Reseller Hosting Provider</AnimatedHeading>
                    <p className='ser-para'>Kick start your own web hosting business without the huge capital investment and management foundation. For this, we provide an excellent Reseller Hosting with fundamental administering tools and software to customize and alter the purchased solutions only to be sold as their product. The Reseller hosting offered by us is very inexpensive and simple to set up and launch. Most of the professional reseller makes a good profit from selling our hosting solutions.</p>
                    <p className='ser-para'>You can leverage your business by providing the best compatible services for the third parties to drive your business forward. It will be full and full cost-effective and beneficial for you in the end.</p>   
                     <HideShow className='reseller-show-but'>
                        <p className='ser-para'>Our Reseller server management will provide a server with appropriate features so that there is no need to integrate obsolete software solutions later.
                                            We outweigh tour competitors by providing the best Reseller Hosting in Chennai and the best technical support with performance assurance.
                                            We offer a high-quality web space to manage yourself – so you can easily add, edit, and remove hosting for sites that you wish to host. Moreover, you can manage your own reseller hosting company, selling hosting to your clients, or hosting multiple sites on your own in minutes!
                                            You can leverage your business by providing the best compatible services for the third parties to drive your business forward. It will be full and full cost-effective and beneficial for you in the end.</p>
                     </HideShow>
                </div>
            </div>
        </div>
        </section>

        {/* Why Choose starts */}

        {/* pricing */}
        <section className='pricing '>
        <div className="container p-3">
  <div className="row gx-6 justify-content-center">

    <div className="col-12">

    </div>
    <AnimatedHeading className='server heading'>Reseller Hosting Plans</AnimatedHeading>
    <p className='text-center'>Don’t worry about server packages. We provide you at a reasonable cost and with great performance!</p>
    <div className="container">
  <div className="row gx-6">

    <div className="price col-lg-3 col-md-6 text-center">
      <h3 className='text-center'>Freelance</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">500 GB</span>  Traffic</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">60 GB</span> Disk Space</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">FTA</span> Access</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">WHM</span> Panel</li>
            </ul>
      <Link href='#resellercontactform' className='price-but'>Contact now</Link>
    </div>

    <div className=" price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>Small Business</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">800 GB</span>  Traffic</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">80 GB</span> Disk Space</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">FTA</span> Access</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">WHM</span> Panel</li>
            </ul>
      <Link href='#resellercontactform' className='price-but'>Contact now</Link>
    </div>
 
    <div className="price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>Team</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">1.5 TB GB</span>  Traffic</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">120 GB</span> Disk Space</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">FTA</span> Access</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">WHM</span> Panel</li>
            </ul>
      <Link href='#resellercontactform' className='price-but'>Contact now</Link>
    </div>

    <div className="price col-lg-3 col-md-6 text-center">
    <h3 className='text-center'>Enterprise</h3>
      <ul className="text-center" >
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">2TB</span>  Traffic</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">140 GB</span> Disk Space</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">FTA</span> Access</li>
                <li> <i className="fa-regular fa-circle-check"></i><span className="spec-l">WHM</span> Panel</li>
            </ul>
      <Link href='#resellercontactform' className='price-but'>Contact now</Link>
    </div>

  </div>
</div>
  </div>
</div>
            
  </section>


        <section className="reseller-whychoose-sec p-3">
        <AnimatedHeading className='server heading'>Why Choose Sixth Star?</AnimatedHeading>
        <div className="container">
            <div className="row vps-whychoose-1">
            
            <div className="col-md-6">
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057806/Why-To-buy-SS-img_rwxwpx.webp" alt="why choose" width={400} height={400} />
            </div>

            <div className="col-md-6 align-content-center">
            <div className="row ">

            <div className="col-12">
            <div id="carouselExampleSlidesOnly" className="carousel slide vps-whychoose-slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              
              <div className="carousel-item active slideInUp">
                <p>We provide full control over the websites you host via your reseller hostingcontrol panel. You can manage, add, edit, and remove sites quickly and easy at any time.</p>
              </div>
              
              <div className="carousel-item slideInUp">
                <p>We provide your reseller hosting account fully branded with your own logo and DNS name servers.</p> 
              </div>

              <div className="carousel-item slideInUp">
                <p>Each site you host in reseller hosting has its own individual control panel; this is branded with your logo and allows for easy site management – reducing your workload.</p>
              </div>
              
              <div className="carousel-item slideInUp">
                <p>Each site you decide to host has access to the full range of powerful features detailed further down this page, with no hidden or added costs.</p>
              </div>

              <div className="carousel-item slideInUp">
                <p>You don’t need any technical knowledge to be a reseller hosting. We take care of managing the server to make sure your sites are online 100% of the time.</p>
              </div>

              <div className="carousel-item slideInUp">
                <p>we have Professional Reseller Hosting server staffs are online 24/7 and 365 days a year to make sure you’re always given priority support for any questions or concerns.</p>
              </div>
              <div className="carousel-item slideInUp">
                <p> Reselling server hosting saves you time and money – servers are expensive to maintain. You will be reselling using an infrastructure that took us 8 years to perfect!</p>
              </div>
              
              </div>
              </div>

            </div>

            </div>

            <div className="row vps-whychoose-2">
            <div className="col-12">
            
                <Link href='#resellercontactform'>Talk to our Experts</Link> 
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
    <AnimatedHeading className='server heading'>BENEFITS OF  RESELLER HOSTING</AnimatedHeading>
    </div>

    <div className="col-12 server-benef">
    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722402974/personalization_hrfqj1.webp" width={64} height={64} alt='Best Security'/> 
    <h3> Control Panel </h3>
    <p>As reseller, you can offer cPanel access to your clients to maintain and manage their emails domains and websites from a web-based interface.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059295/6_xmsa9h.webp" width={64} height={64} alt='Uptime Guarantee'/> 
    <h3> Softaculous </h3>
    <p>One click to install tons of popular scripts via softaculous auto installer. Integrate into cPanel, we provide auto installer for free of cost.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056896/Maintenance-Management_yvglle.webp" width={64} height={64} alt='Complete Access'/> 
    <h3> WHM</h3>
    <p>Web Host Manager is effective software which is used to automate server management tasks, customize cPanel of your clients to create brand image.</p>
    </div>

    </div>

    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722420095/backup_grm769.webp" width={64} height={64} alt='High Performance'/> 
    <h3> Free Website Migration</h3>
    <p>You can count on us for obtaining your website migrated from your existing reseller provider to Sixth Star reliable reseller hosting plan.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056897/reliability_zo4twt.webp" width={64} height={64} alt='24/7 Support'/> 
    <h3>Malware Removal</h3>
    <p>We provide malware protection for your websites that are auto scanned on regular basis. If we find any threats, we fix for you.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056894/database-storage_m79o0t.webp" width={64} height={64} alt='Affordable'/> 
    <h3>Datacenter Choice</h3>
    <p>You receive an option to select the reseller hosting, server location includes India, UK, US, Singapore, and Germany for no additional cost.</p>
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
    <Link href="#resellercontactform">Contact us</Link>
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
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057385/dedicated-server-os_yiacig.webp" className='box-up' alt='vps hosting' width={527} height={423}/> 
    </div>

    <div className="col-md-6">
    <div className="row">
      <div className="col-6 text-end p-5 os-img"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057246/linux_irvhev.webp" alt='linux' width={108} height={108}/></div>
      <div className="col-6 text-start p-5 os-img"><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057246/windows_tqsl78.webp" width={108} height={108} alt='windows'/></div>
    </div>

    <div className="row">
      <div className="col reseller-os-list slideInRight">
        <h4>Linux Hosting Features & Addons</h4>
        <div className="row list">

        <div className="col-md-6">
            <ul>
                <li><i className="fa-solid fa-check"></i> <p>Private SSL Available</p></li>
                <li><i className="fa-solid fa-check"></i> <p>Limitless bandwidth</p></li>
                <li><i className="fa-solid fa-check"></i> <p>Infinite Add-On Domains</p></li>
                <li><i className="fa-solid fa-check"></i> <p>Instinctive control panel</p></li>
                <li><i className="fa-solid fa-check"></i> <p>Add-on Dedicated IP</p></li>
                <li><i className="fa-solid fa-check"></i> <p>Custom SPAM filtering</p></li>
            </ul>
        </div>

        <div className="col-md-6 list">
        <ul>
                <li><i className="fa-solid fa-check"></i> <p>Automated tools</p></li>
                <li><i className="fa-solid fa-check"></i> <p>Inexpensive and more control</p></li>
                <li><i className="fa-solid fa-check"></i> <p>selling web space</p></li>
                <li><i className="fa-solid fa-check"></i> <p>upgradations option</p></li>
                <li><i className="fa-solid fa-check"></i> <p>Complete control</p></li>
                <li><i className="fa-solid fa-check"></i> <p>Advanced emails</p></li>
            </ul>
        </div>

        </div>
        
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

    <div className="col-12 text-center ">
    
    <div className="accordion reseller-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is reseller hosting?
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
      How does it work
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Here are the steps to be followed to obtain the reseller hosting:</p>
      <ol type='number' >
        <li>Find a good hosting company.</li>
        <li>Select the package from the host that meets your requirements.</li>
        <li>Know the need for your customer and set the target market.</li>
        <li>Create packages for your customer.</li>
        <li>Post the packages on websites and sell it.</li>
        <li>Earn as you sell.</li>
      </ol>
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What are the benefits of reseller hosting?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ol type='number' >
        <li>You can become an entrepreneur and get to act as a hosting company and can make money.</li>
        <li>You can able to design packages that are tailored to your own business and clients.</li>
        <li>You can host and bill your customers enhancing your brand reputation.</li>
        <li>You can provide an independent CPanel for each client.</li>
        <li>Invest low, and you can scale higher.</li>
      </ol>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      What’s included in a reseller package?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ol >
        <li>Disc Space</li>
        <li>Bandwidth</li>
        <li>Domain Hosting</li>
        <li>Latest CPanel control panel</li>
        <li>Premium support service</li>
      </ol>  
     </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Will my clients know it’s me…or my hosting company?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>The specialty of this hosting is that you can sell and run your business with your own brand name bannered everywhere. So they will believe it’s you, and you can take total control over it promoting your brand. In any case, if you face any technical issues, we will help you quickly.</p>
        </div>
    </div>
  </div>
</div>


<HideShow buttonText="Learn More" className="about-class justification-center">
        <div>
        <div>
<div className= 'accordion reseller-faq' id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
      How can I manage if I’m technically weak in hosting services?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Your hosting provider (us) will handle all the back-end works, keeping your mind healthy and peaceful. From server management, administration, network performance, connectivity to security, we will handle everything so you can focus on your core business. Moreover, anytime technical support will be issued.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      Can I upgrade at any time?
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes! You can upgrade your account as per your requirements and demands grow higher. You can contact us or mail us to fulfill the request through support@sixthstartech.com.</p>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      Will you ever contact my clients?
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Never! We will not reach your clients in any instance, and the deal will be offered and contacted between you and us.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      Can I create accounts in real time?
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p>Yes, you can create them through your CPanel, and there will be no obligation from our side.</p> 
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      How much time does it take to set up a reseller hosting account?
      </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>The set-up procedure will be easy to process. Once you select, register, and pay, your package will be ready.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading11">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
      May I know about windows reseller hosting?
      </button>
    </h2>
    <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>In windows reseller hosting, you will be provided with unlimited domains, FTP accounts, databases, SSL, and a dedicated IP address.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading12">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
      Can I have multiple domains?
      </button>
    </h2>
    <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, you can handle multiple domains in your account.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading13">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
      Are there any choices for reseller hosting package?
      </button>
    </h2>
    <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, there are choices for the package. You can choose them according to your requirements based on the domains, disk space, storage, etc.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading14">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
      Can I migrate my account?
      </button>
    </h2>
    <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, you can migrate it easily through simple steps.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading15">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
      Do you provide uptime guarantee?
      </button>
    </h2>
    <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, we will provide 99.99% of uptime. You can check our SSL to know more.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading16">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
      How can my customers manage their package?
      </button>
    </h2>
    <div id="collapse16" className="accordion-collapse collapse" aria-labelledby="heading16" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>They will be given a CPanel/Plesk to manage it individually.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading17">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
      Does your reseller come with one-click installers?
      </button>
    </h2>
    <div id="collapse17" className="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, we will provide a Softaculous installer that will help you install applications within minutes.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading18">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
      How do I benefit with this?
      </button>
    </h2>
    <div id="collapse18" className="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>You can get a profitable income by reselling your space to your customers at whatever price you fix.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading19">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
      How can I add or delete features on the domains of the clients?
      </button>
    </h2>
    <div id="collapse19" className="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>You can do it with your reseller control panel since you have complete access to their accounts.</p>
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading20">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
      What name servers will be used by the clients?
      </button>
    </h2>
    <div id="collapse20" className="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>It is based on the choice that you make at the time of provisioning.</p>
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

    
    <div className="col-md-6" id='resellercontactform'>
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
