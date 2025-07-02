import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import AnimatedHeading from '../../components/AnimatedHeading'
import ZimbraTab1 from '../section/ZimbraTab1';
import HideShow from '../../components/HideShow';
import MailServicesForm from '../forms/MailServicesForm'
import FeatureHideShow from '../../components/FeatureHideShow'
import MetaTags from '../../components/MetaTags';
import Image from 'next/image';
import {zimbraSchema} from '../../lib/data/schema'

export default function zimbra() {

  const Feattabs = [
    { id: 1, title: 'Zimbra talk',  content: 'This allows you to make enterprise-level chat and make video conferencing in your email without any third-party installation along file/screen sharing, corporate messaging etc.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064622/call-1_tkgwfm.webp' },
    { id: 2, title: 'Zimbra Drive', content: 'In the upgraded version you can share and sync files immediately without any delay. You can share numerous files to your users using any device.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064631/drive_swmyyz.webp' },
    { id: 3, title: 'Backup', content: 'Zimbra allows you to backup and restore in real-time with split-second precision. It can backup as well as save disk space up to 50% since they are well compressed.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064617/backup_ust5l6.webp' },
  ];
  const Feattabs2 = [
    { id: 1, title: 'Hierarchical storage',  content: 'You can manage multiple volumes and can also add and expand your Zimbra server without reduced performance by dividing I/O into different storage forms.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064629/database-storage_ciwrx4.webp' },
    { id: 2, title: 'Mobile sync', content: 'Now you can manage, view data and sync new data are along with other stored data easily. Activate your Exchange ActiveSync protocol to easily access your data through mobile phones.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064588/application_o3h11o.webp' },
    { id: 3, title: 'Delegated admins', content: 'You can now have and allow your users to have complete delegated admins to perform management tasks easily. You can also keep track of the actions and domain status with reporting features.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064660/user-gear_ykcfyo.webp' },
  ];
  const Feattabs3 = [
    { id: 1, title: 'IMAP',  content: 'In the upgraded version, the Zimbra server allows IMAP services to run separately and no longer affects the SLA. You can enjoy email filtering using IMAP.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064644/letter_zbbxso.webp' },
    { id: 2, title: 'Authentication', content: 'This makes your mailbox extra secure by providing a physical layer to safeguard your data along with safe login credentials.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064593/Authentication_br7fq6.webp' },
    { id: 3, title: 'SSL', content: 'Here you can handle multiple domains with HTTPS access under the same IP address and port number.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064653/ssl_kmvy8w.webp' },
  ];
  const Feattabs4 = [
    { id: 1, title: 'Zimbra Post screen',  content: 'This Postscreen keeps spam bots away and delays overload conditions. Also, it can handle many server processors at the same time.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064620/blogging_s4znvh.webp' },
    { id: 2, title: 'Packaging system', content: 'You can now update using OS update commands by applying security patches to the packages, and it will be upgraded within minutes.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064656/system-update_tpniol.webp' },
    { id: 3, title: 'Security features', content: 'With cryptographic security service, all your authentication processes, message integrity, and other documents will be protected in encrypted form.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064650/shield_1161388_mu0lcj.webp' },
  ];
  const Feattabs5 = [
    { id: 1, title: 'Unified Communications',  content: 'Now you can integrate features using the voice application through the user interface making communications easier.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064641/group_pfblhf.webp' },
    { id: 2, title: 'Archive', content: 'This is an optional feature in Zimbra collaboration enables you to archive both delivered and sent messages to search easily.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064590/archive_vfa45r.webp' },
    { id: 3, title: 'Outlook Sync', content: 'Using Zimbra’s MAPI connector you can look into your user’s entire mailbox if he/she uses or works with enterprise email clients like Microsoft Outlook.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064647/outlook_rhmi09.webp' },
  ];
  const Feattabs6 = [
    { id: 1, title: 'Exchange Web Services',  content: 'This feature in Zimbra allows your user to connect to their mailbox on a different operating system.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064626/data-exchange_rkou3y.webp' },
    { id: 2, title: 'Accessibility', content: 'This allows you to make enterprise-level chat and make video conferencing in your email without any third-party installation along file/screen sharing, corporate messaging etc.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064635/easy-access_vilzoj.webp' },
    { id: 3, title: 'Mail – Server', content: 'LMTP TLS support adds an option to make LHLO mandatory in LMTP transactions and includes server attribute to toggle Ctrl-Enter shortcut. Your Local LMTP client should communicate via SSL.', imgSrc: 'https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722064637/email-2_uisdoq.webp' },
  ];

  return (
    <div>
      <MetaTags />
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063331/zimbra-bg1_be7zgg.webp" type="image/webp" />
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063334/zimbra-bg2_yuhmgs.webp" type="image/webp" />
    <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(zimbraSchema),
                  }}                />
</Head>
      <div className='main'>
        {/* banner */}
        <section className='zimbra-bg-slider'>
        <div className="container w-90 text-center">
  <div className="row">
    <div className="col-12 align-content-center">
    <div id="carouselExampleDark" className="carousel carousel-dark slide text-center" data-bs-ride="carousel">
  <div className="carousel-inner">
    
    <div className="carousel-item active" data-bs-interval="5000">
    <div className="zimbra-slide">
              <div className="row">
                <div className="col-md-6 align-content-center">
                  <h3 >Zimbra for Enterprise</h3>
                  <h1>ZIMBRA EMAIL SERVICE</h1>
                  <p>
                    Zimbra Collaboration makes communications effortless and
                    productivity smooth. Improve your team’s efficiency in
                    working together towards the attainment of results.
                  </p>
                  <button><Link href='#zimbracontact'>Contact Us</Link></button>
                </div>
                <div className="col-md-6">
                  <Image
                    src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063331/zimbra-bg1_be7zgg.webp"
                    alt="zimbra banner" width={636} height={591} priority
                  />
                </div>
              </div>
            </div>
    </div>
    
    <div className="carousel-item" data-bs-interval="3000">
    <div className="zimbra-slide">
              <div className="row">
                <div className="col-md-6 align-content-center">
                  <h3>Zimbra for Enterprise</h3>
                  <h2 >ZIMBRA EMAIL SERVICE</h2>
                  <p>
                  Zimbra  Mail remains the best solution for enterprise collaboration with many unique functions that support improved communications and efficiency.
                  </p>
                  <button> <Link href='#zimbracontact'>Contact Us</Link></button>
                </div>
                <div className="col-md-6">
                  <Image
                    src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063334/zimbra-bg2_yuhmgs.webp"
                    alt=" zimbra mail banner 2" width={636} height={591} priority
                  />
                </div>
              </div>
            </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" aria-label="Previous Slide" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
  <i className="fa-solid fa-chevron-left"></i>
  </button>
  <button className="carousel-control-next" type="button"aria-label="next Slide" data-bs-target="#carouselExampleDark" data-bs-slide="next">
  <i className="fa-solid fa-chevron-right"></i>
  </button>
</div>
    </div>
  </div>
</div>

        </section>

        {/* banner ends */}

        {/* zimbra clients starts */}
        <section className='zimbra-client-sec'>
        <div className="container w-90">
          <div className="row ">

            <div className="col-12 text-center">
              <p className='text-center'><strong>90%</strong> of Fortune<strong> 500</strong> companies use Zimbra technology</p>
            </div>

          </div>
          <div className="row ">

            <div className="col-12 text-center">
              <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063672/sai_rizcmx.webp" alt="sai" width={246} height={120} loading='lazy' />
              <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063666/panimalar_kub7nr.webp" alt="panimalar" width={246} height={120} loading='lazy'/>
              <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063674/spl_jzsk4x.webp" alt="spl" width={246} height={120} loading='lazy'/>
              <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063668/radiance_lv7gb7.webp" alt="radiance" width={246} height={120} loading='lazy' />

            </div>

          </div>
          </div>

        </section>

        {/* zimbra clients ends */}

        {/* zimbra clients mobile starts */}
        <section className='zimbra-client-sec-mob'>
        <div className="container w-100">
          <div className="row ">

            <div className="col-12 text-center">
              <p className='text-center'><strong>90%</strong> of Fortune<strong> 500</strong> companies use Zimbra technology</p>
            </div>

          </div>
          <div className="row ">

            <div className="col-12 text-center">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063672/sai_rizcmx.webp" alt="sai" width={246} height={120} loading='lazy'/>
    </div>
    <div className="carousel-item">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063666/panimalar_kub7nr.webp" alt="panimalar" width={246} height={120} loading='lazy' />
    </div>
    <div className="carousel-item">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063674/spl_jzsk4x.webp" alt="spl" width={246} height={120} loading='lazy' />
    </div>
    <div className="carousel-item">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063668/radiance_lv7gb7.webp" alt="radiance" width={246} height={120} loading='lazy'/>
    </div>
  </div>
</div>

            </div>

          </div>
          </div>

        </section>

        {/* zimbra clients mobile ends */}

        {/* ZimbraTab1 starts */}

        <section className="zimbra-slide-tab-sec">
          <h3 className='text-center zimbra-slide-tab-title'>Zimbra Mail Solutions</h3>
          <ZimbraTab1 />
        </section>
       
        {/* ZimbraTab1 ends */}

{/* zimbra clients starts */}
<section className='zimbra-guide-sec'>
        <div className="container">
          <div className="row ">
            <div className="col-md-6 text-start">
              <h2 className=' text-start'>Download the Guide to Zimbra </h2>
              <p className=' text-left'>Carbonio mail service is a powerful and scalable email platform that offers a range of advanced features</p>
              <button className='text-start'><Link href='https://zimbra.webmail.sixthstartech.com/'>Download</Link> </button>

             </div>
            <div className="col-md-6 text-center">
              <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722063881/zimbra-download_w5ksno.webp" alt="zimbra guide" width={350} height={240} className='slideInUp' />

            </div>

          </div>
          </div>

        </section>

        {/* zimbra clients ends */}

    </div>

{/* zimbra reach section start */}
    
    <section className="zimbra-reach-sec">
    <div className="container">
  <div className="row ">

    <div className="col-12">
    <h2 className='text-center p-4'>Zimbra Reach</h2>
    </div>

  </div>
  <div className="row ">

    <div className="col-12">
    <div className="row zimbra-reach">

<div className="col-lg-2 col-md-12 text-center slideInUp">
    <h3 style={{color:'#F8C16B'}}>25</h3>
    <h4>YEARS</h4>
</div>

<div className="col-lg-2 col-md-6 text-center slideInUp">
<h3 style={{color:'#FD925E'}}>100+</h3>
    <h4>USERS</h4>
</div>

<div className="col-lg-2 col-md-6 text-center slideInUp">
<h3 style={{color:'#59CDDD'}}>150+</h3>
    <h4>COUNTRIES</h4>
</div>

<div className="col-lg-2 col-md-6 text-center slideInUp">
<h3 style={{color:'#6BF8C3'}}>15K</h3>
    <h4>EMPLOYEES</h4>
</div>

<div className="col-lg-2 col-md-6 text-center slideInUp">
<h3 style={{color:'#896BF8'}}>55</h3>
    <h4>APPS</h4>
</div>

</div>

    </div>

  </div>
</div>
    </section>

{/* zimbra reach section ends */}

{/* Zimbra email features starts */}
<section className="zimbra-email-fetsec">

<div className="container">
  <div className="row ">

    <div className="col-12">
      <h2 className='text-center p-3'>Zimbra email features</h2>
      <p>Since Zimbra comes with an upgraded version of v8.8 it is inherited with new technology advancements making a level-high in user experience. Here we have listed a few features that make your enterprise work efficiently.</p>
    </div>
    
    <div className="col-12 text-center">
         
         <div className="zimbra-fet-first">
          <div className="row">
          {Feattabs.map((feature) => (
          <div key={feature.id} className="col-lg-4 col-md-12 text-center p-4">
            <Image src={feature.imgSrc} width={75} height={75} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        ))}
          </div>

          <div className="row">
          {Feattabs2.map((feature) => (
          <div key={feature.id} className="col-lg-4 col-md-12 text-center p-4">
            <Image src={feature.imgSrc} width={75} height={75} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        ))}
          </div>

          <div className="row">
          {Feattabs3.map((feature) => (
          <div key={feature.id} className="col-lg-4 col-md-12 text-center p-4">
            <Image src={feature.imgSrc} width={75} height={75} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        ))}
          </div>

         </div>
         
         <FeatureHideShow buttonText="View More" className="about-class justification-center">
         <div className="zimbra-fet-second">
         <div className="row">
          {Feattabs4.map((feature) => (
          <div key={feature.id} className="col-lg-4 col-md-12 text-center p-4">
            <Image src={feature.imgSrc} width={75} height={75} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        ))}
          </div>

          <div className="row">
          {Feattabs5.map((feature) => (
          <div key={feature.id} className="col-lg-4 col-md-12 text-center p-4">
            <Image src={feature.imgSrc} width={75} height={75} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        ))}
          </div>

          <div className="row">
          {Feattabs6.map((feature) => (
          <div key={feature.id} className="col-lg-4 col-md-12 text-center p-4">
            <Image src={feature.imgSrc} width={75} height={75} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        ))}
          </div>
         </div>
         </FeatureHideShow>

    </div>
  </div>
 
</div>

</section>
    
{/* Zimbra email features ends */}

{/* faq starts */}
<section className='server-faq '>
<AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-12 text-center align-items-center">
    
    <div className="accordion dedicated-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is Zimbra Mail Server?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Zimbra Mail Server is a collaborative email and calendar server that offers features like email, contacts, calendar, tasks, and document management in an integrated platform.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What are the system requirements for Zimbra Mail Server?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      system requirements depend on factors like the number of users and expected workload. Generally, Zimbra recommends a minimum of 8 GB RAM, a multi-core processor, and sufficient disk space for installations.
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How can I migrate my existing email data to Zimbra Mail Server?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Zimbra provides migration tools and guides for importing email data from various platforms such as Microsoft Exchange, Gmail, and others. These tools help streamline the migration process with minimal downtime.
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      How do I configure email clients to work with Zimbra Mail Server?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Zimbra supports popular email clients such as Microsoft Outlook, Mozilla Thunderbird, and native mobile clients. Configuration instructions for these clients are available in the Zimbra documentation.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      How do I secure my Zimbra Mail Server installation?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Zimbra provides zimbra documentation that contains  various security features, including encryption, anti-spam, anti-virus, and firewall integration. Additionally, regular updates and security patches should be applied to ensure the server’s security.
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
      Is Zimbra Mail Server open-source or proprietary?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Zimbra offers both open-source and commercially supported editions. The open-source edition provides basic email functionality, while the commercially supported editions offer additional features, support, and services. for more information visit our zimbra page 
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      What support options are available for Zimbra Mail Server?
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Zimbra offers different support plans ranging from community support through forums to paid support subscriptions with various levels of assistance, including technical support, software updates, and access to knowledge bases.
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      Can I integrate Zimbra Mail Server with other applications?
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, Zimbra provides APIs and documentation for integrating with third-party applications, allowing you to extend its functionality and integrate it with other business systems.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      How do I troubleshoot common issues with Zimbra Mail Server?
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Zimbra provides comprehensive documentation, knowledge base articles, and community forums where users can seek assistance for troubleshooting common issues. Additionally, paid support subscriptions offer direct access to technical support for more complex problems.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      Who is the primary Zimbra Mail Server provider in Chennai?
      </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Sixthstar technologies , is  the primary zimbra customer support in chennai for mail server and mail service and  all around south india.
     </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      Who is the primary provider of customer service and server support for Zimbra Mail Server in Chennai

      </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>Data Privacy, Security and controlling your data:</strong>

      Sixth Star Technologies are the the primary and an authorized provider of customer service and server support for Zimbra Mail Server in Chennai 
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


{/* faq ends */}

{/* contact form starts */}
<section className="zimbra-contact">
<AnimatedHeading className='server heading'>Connect with our Experts</AnimatedHeading>

<div className="container-1">
  <div className="row ">

    <div className="col-md-6 p-5 align-content-center">

    </div>

    
    <div className="col-md-6 " id='zimbracontact'>
    <MailServicesForm />
    </div>

  </div>
</div>

</section>


{/* contact form ends */}

    </div>
  )
}
