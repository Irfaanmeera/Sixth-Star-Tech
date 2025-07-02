import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Testimonial from '../Testimonial';
import AnimatedHeading from '../../components/AnimatedHeading'
import ServersForm from '../forms/ServersForm'
import Image from 'next/image';
import MetaTags from '../../components/MetaTags';
import { webHostingSchema } from '../../lib/data/schema';
export default function WebHosting() {

  return (
    <div>
      <MetaTags />
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722058498/cloudhosting-bg-pc_e4hvtp.webp" type="image/webp" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webHostingSchema) }} />
</Head>
      <div className='main'>
         {/* banner */}
      <section className='server-banner-sec'>
        <div className="container banner">
            <div className="row ">

                <div className="ban-left-1 col-md-6">
                    <h1 className='server-1 box-up'>Shared Servers Hosting</h1>
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
                <AnimatedHeading className='server heading'>Unlimited Web Hosting Services</AnimatedHeading>
                    <p className='ser-para'>Sixth Star Technology is the incredible Web hosting company in chennai by offering adaptable highlights and high transparency at awful costs. As an excellent supplier, we lift and strengthen your business with free domain registration and reliable email services.</p>    
                   
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
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057806/Why-To-buy-SS-img_rwxwpx.webp" alt=" shared hosting whychoose" width={400} height={400} />
            </div>

            <div className="col-md-6 align-content-center">
            <div className="row ">

            <div className="col-12">
            <div id="carouselExampleSlidesOnly" className="carousel slide vps-whychoose-slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              
              <div className="carousel-item active slideInUp">
                <h3>Powerful Control Panel</h3>
                <p>Experience the strong capabilities of our Powerful Control Panel, which allows you to easily manage web pages, website statistics, and create email accounts.</p>
              </div>
              
              <div className="carousel-item slideInUp">
              <h3>Access And Security Control </h3>
                <p>Ensure Access And Security Control with features such as secure FTP access, password protection, and IP blocking for added security.</p> 
              </div>

              <div className="carousel-item slideInUp">
              <h3>Promoted Domain Name</h3>
                <p>Increase your online profile with a Promoted Domain Name, which includes free DNS Management and URL Masking services.</p>
              </div>
              
              <div className="carousel-item slideInUp">
              <h3>Active Websites</h3>
                <p>Optimize your Active Websites with our Linux shared hosting services to improve performance and dependability.</p>
              </div>
              <div className="carousel-item slideInUp">
              <h3>Odin Plesk</h3>
                <p>With Odin Plesk, you can effortlessly manage your server and apps while enjoying seamless control and flexibility.</p>
              </div>
              <div className="carousel-item slideInUp">
              <h3>Free Applications</h3>
                <p>Access over 50 applications for simple installation and customization on your website, and unlock a number of free apps.</p>
              </div>
              
              </div>
              </div>

            </div>

            </div>

            <div className="row vps-whychoose-2">
            <div className="col-12">
            
                <Link href='#hostingcontactform'>Talk to our Experts</Link>
               
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
    <AnimatedHeading className='server heading'>KEY BENEFITS OF CHOOSING SIXTHSTAR FOR WEB HOSTING</AnimatedHeading>
    </div>

    <div className="col-12 cloud-server-benef">
    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056895/engineer_w51c3p.webp" width={64} height={64} alt='Control Panel'/> 
    <h3> Control Panel</h3>
    <p>Handle your Linux shared hosting account using the control panel that add domains, subdomains, emails, and databases.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722057950/easy-access_d1kbfj.webp" width={64} height={64} alt='Instant Account Setup'/> 
    <h3>Instant Account Setup</h3>
    <p>Go to our website immediately, based on payment confirmation the hosting packages will organize at once.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059295/6_xmsa9h.webp" width={64} height={64} alt='Pro-Website Builder'/> 
    <h3> Pro-Website Builder</h3>
    <p>Prefer your template based on your choice and create your own websites without the technical skills.</p>
    </div>

    </div>

    <div className="row server-benifits">
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722056897/reliability_zo4twt.webp" width={64} height={64} alt='Identify Malware And Eliminate'/> 
    <h3> Identify Malware And Eliminate</h3>
    <p>On daily basis your website is auto scanned, once any threat is found, we will fix for you.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059373/mail_f2djvj.webp" width={64} height={64} alt='Email Accounts'/> 
    <h3>Email Accounts</h3>
    <p>POP3, SMTP and IMAP protocols are used to send and receive emails in secured path with high speed.</p>
    </div>
    <div className="col-lg-4 col-md-12 p-3 m-4 text-center benefit">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722059371/12_okz0ow.webp" width={64} height={64} alt='SSD Storage'/> 
    <h3>Authentic SSD Storage</h3>
    <p>SSD provides better performance with high speed and great reliability with energy efficiency.</p>
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
    <Link href="#hostingcontactform">Contact us</Link>
    </div>

  </div>
</div>

</section>


{/* contact section ends*/}


{/* testimonial start */}
<Testimonial/>

{/* testimonial ends */}

<section className='server-faq'>
<AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-12 text-center">
    
    <div className="accordion dedicated-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What Is Web Hosting?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Web Hosting is a straightforward term, which empowers your site to be open by means of the Internet. All information on your site should be facilitated on a server through an administration known as Web Hosting.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Do I Require A Web Hosting?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        With the goal to get your dynamic site and live on the Internet, you have to host a site. In the event, you are trying to create a website without taking web hosting administrations, enlisting domain names will serve no need. Web hosting is essentially the space that you have to purchase on a web server to store your website documents.
        </p>
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How Does Web Hosting Works?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>
      When you buy a Web Hosting plan from Sixth Star technologies, stores your website on one of our servers and appoints it unique DNS. The DNS supplies the location that enables individuals around the globe to discover and see your website.
      By buying a site facilitating bundle, you’re fundamentally purchasing space on one of our servers. It’s like the space on a PC’s hard drive, yet the server enables your site’s documents to be gotten to from anyplace.
      </p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      What Sort Of Web Hosting Do I Require?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      To choose the best Web hosting provider in chennai, Sixth Star Technologies that will fulfil your needs, Start by thinking about the aim of your business. Based on that choose the hosting packages on the basis of data transfer, size of disk space, number of mailboxes and tools that are of open source applications and programming languages. After finalizing you have to know how to use your website and analyse the traffic that is required, so that you’ll be able to determine which package is best suited for your business.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      What Makes Sixth Star Better Than Other Web Hosting Companies?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Security and reliability are the two important points to be considered. Our Sixth Star Technologies provides 99.99% Linux and Windows hosting in uptime and 24/7 technical service through email, chats or phones.
        </p>
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

    
    <div className="col-md-6" id='hostingcontactform'>
    <ServersForm />
    </div>

  </div>
</div>

</section>


{/* contact section starts */}

      </div>
    </div>
  )
}
