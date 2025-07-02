
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import AnimatedHeading from '../../components/AnimatedHeading'
import Office365TalkForm from '../forms/Office365TalkForm'
import Office365Slider from '../section/Office365Slider'
import MailServicesForm from '../forms/MailServicesForm'
import MetaTags from '../../components/MetaTags';
import Image from 'next/image'
import {office365Schema} from '../../lib/data/schema'
export default function Office365Providers() {

  return (
    <div>
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722079712/office-logo_p9sl4r.webp" type="image/webp" />
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722079784/office-365-bg-768x576_mfvcwy.webp" type="image/webp" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(office365Schema) }} />
</Head>
       <MetaTags />

      <div className='main'>
        {/* banner section starts */}
        <section className="office-banner-sec">
        <div className="container">
            <div className="row ">

            <div className="col-md-6 align-content-center ">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722079712/office-logo_p9sl4r.webp" alt="office-logo" className='mb-4' width={260} height={40} priority />
                <h1 className='mb-4'>Unleash the Power of Office 365</h1>
                <p className='mb-4'>Experience seamless communication and productivity with Office 365, the leading email provider.</p>
                <button className=''> <Link href='#officecontact'>GET STARTED</Link></button>
            </div>

            <div className="col-md-6 align-content-center">
                <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722079784/office-365-bg-768x576_mfvcwy.webp" width={550} height={413} alt="office-365" priority />
            </div>

             </div>
            </div>

        </section>

        {/* banner ends */}

        <section className='gsuite-com-sec'>
        <div className="container">
            <div className="row ">

            <div className="col-12 text-center">
                <AnimatedHeading className='server heading p-4'>Streamline your communication</AnimatedHeading>
                 <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080066/Office-365_jyni3d.gif" alt="Office-365" width={456} height={260} loading='lazy' />   
                </div>

            </div>
            </div>
        </section>

        {/* communication sec ends */}

        {/* office exp sec starts */}

        <section className="office-feat-sec" style={{backgroundColor:'#FEFFFF'}} >
        <div className="container">
            <div className="row ">

                <div className="col-12">
                <AnimatedHeading className='server heading p-4'>Experience the Power of Office 365</AnimatedHeading>
                <div className="row ">
                <div className="col-md-6 align-content-center">
                <p className='p-2'>Your invaluable data is protected using strong storage abilities and G-SUITE inbuilt security mechanisms offered by Google Drive.s Your files are available wherever you will access google drive and you can as well easily share among others.</p>
                <ul className='p-2'>
                    <li><i className="fa-regular fa-circle-dot"></i> Secure email communication</li>
                    <li><i className="fa-regular fa-circle-dot"></i> Advanced security features</li>
                    <li><i className="fa-regular fa-circle-dot"></i> Protect your confidential information.</li>                
                </ul>
                </div>
                
                <div className="col-md-6 pb-3">
                    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080067/office-365-1_q0abys.webp" alt="office-365" width={470} height={250} loading='lazy' />
                </div>
                </div>
                </div>

            </div>
        </div>
        </section>

        {/* office exp sec starts */}

        {/* email features starts */}
        <section className="office-feat-sec" style={{backgroundColor:"#FCFCFC"}}>
        <div className="container">
            <div className="row ">

                <div className="col-12">
                <AnimatedHeading className='server heading p-4'>Experience powerful email features.</AnimatedHeading>
                <div className="row ">
                <div className="col-md-6 pb-3">
                    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080053/office-365-3_sfkkub.webp" width={470} height={250} alt="office-365" loading='lazy' />
                </div>

                <div className="col-md-6 align-content-center">
                <p className='p-2'>Regarding email improvement, Office 365 has huge storage, advanced search capability, and collaboration tools. It comes with sufficient storage capacity for you to archive all vital emails and other attachments without having to worry about a shortage of space. It comes with enhanced search features that can pinpoint an email or attachment easily. The cooperation instruments also facilitate easy work and the flow of information within the company.</p>
                </div>

                </div>
                </div>
            </div>
        </div>
        </section>

        {/* email features ends */}

        {/* office-talk-sec */}

        <section className='gsuite-talk-sec'>
        <div className="container">
        <div className="row ">

            <div className="col-12">
            <h3 className='text-center p-3'>Talk to our G Suite expert</h3>
            <Office365TalkForm />
            </div>

        </div>
        </div>
        </section>

        {/* office-talk-sec */}

         {/* email fun starts */}
         <section className="office-feat-sec" style={{backgroundColor:'#F7FBFF'}}>
        <div className="container">
            <div className="row ">

                <div className="col-12">
                <AnimatedHeading className='server heading p-4'>Efficient search functionality with Office 365</AnimatedHeading>
                <div className="row ">
                <div className="col-md-6 align-content-center">
                <p className='p-2'>With Office 365’s efficient search functionality, you can easily locate any email or attachment within seconds. Whether you need to find an important document or search for a specific conversation, the advanced search capabilities of Office 365 ensure that you can quickly access the information you need.</p>
                </div>
                
                <div className="col-md-6 pb-3">
                    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080058/office-365-4_eviwp9.webp" alt="office-365" width={470} height={250} loading='lazy' />
                </div>

                

                </div>
                </div>
            </div>
        </div>
        </section>

        {/* email fun ends */}


         {/* email tools starts */}
         <section className="office-feat-sec" style={{backgroundColor:'#FFFFFF'}}>
        <div className="container">
            <div className="row ">

                <div className="col-12">
                <AnimatedHeading className='server heading p-4'>Seamless Collaboration Tools</AnimatedHeading>
                <div className="row ">
                <div className="col-md-6 pb-3">
                    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722080073/office-365-2_dly93w.webp" width={470} height={250} alt="office-365" loading='lazy' />
                </div>

                <div className="col-md-6 align-content-center">
                <p className='p-2'>Office 365’s collaboration tools make it easy for teams to work together and stay connected. </p>
                <p className='p-2'>With features like shared calendars, real-time document editing, and instant messaging, your team can collaborate seamlessly, no matter where they are located. Enhance productivity and streamline communication with Office 365’s powerful collaboration tools.</p>
                </div>

                </div>
                </div>
            </div>
        </div>
        </section>

        {/* email features ends */}

        {/* office Workplace sec starts */}

    <section className="gsuite-wp-sec p-4">

<div className="container">
<div className="row ">

<div className="col-12">
<AnimatedHeading className='server heading p-4'>Office 365 Apps</AnimatedHeading>
</div>
<Office365Slider />
</div>
</div>
</section>

    {/* office Workplace sec ends */}

{/* office faq sec starts */}

<section className="office-faq" style={{backgroundColor:'#F7FBFF'}}>
        <AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
        <div className="container">
        <div className="row ">

            <div className="col-12">

            <div className= 'accordion office-faq' id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
      What is Microsoft 365?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Office 365 is designed for individuals, families, and businesses of all sizes. It offers a variety of plans to meet different needs and budgets.</p> 
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      What are the benefits of using Office 365?
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p className='p-2'>Access to the latest versions of Office apps: Always have the latest features and updates at your fingertips.
     Work from anywhere. Access your files and documents from any device, anywhere, with an internet connection.</p> 
      <ul className='p-2'>
        <li><strong>Collaborate seamlessly:</strong> Work together on projects in real-time with colleagues and clients.</li>
        <li><strong>Enhanced security:</strong> Protect your data with robust security features and compliance standards.</li>
        <li><strong>Reduced costs: </strong>Save money compared to buying and maintaining individual software licenses.</li>
        <li><strong>Scalability: </strong>Easily adjust your plan as your needs change.</li>
      </ul>
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      Is Office 365 secure?
      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, Office 365 is highly secure. Microsoft invests heavily in security and provides robust features to protect your data, including:<br/>
      <p>
      <strong>Encryption:</strong> All data transmitted and stored in the cloud is encrypted.<br/>

      An additional level of protection is added to your account with two-factor authentication.<br/>

      <strong>Advanced threat protection:</strong> protects against malware, phishing, and other threats.<br/>

      <strong>Data loss prevention:</strong> helps prevent sensitive information from being accidentally leaked.<br/>

      <strong>Compliance with industry standards:</strong> Meets strict standards for data security and privacy.
      </p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      How much does Office 365 cost?
      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      There are a variety of Office 365 plans available, each with different features and pricing. The cost depends on the number of users, the specific features you need, and the billing cycle you choose. You can see a full list of plans and pricing on the Microsoft website.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      How can I get started with Office 365?
      </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You can sign up for a free trial of Office 365 on the Microsoft website. This will give you access to all the features and services for a limited time. After the trial ends, you can choose to subscribe to a paid plan or continue using the free version of Office, which includes limited functionality.
     </div>
    </div>
  </div>

</div>            </div>

        </div>
        </div>
        </section>

        {/* office faq sec ends */}

         {/* contact form starts */}
<section className="gsuite-contact-sec">
<div className="container1">
  <div className="row ">

    <div className="col-md-6  align-content-center">

    </div>

    
    <div className="col-md-6 " id='officecontact'>
    <MailServicesForm />
    </div>

  </div>
</div>

</section>


{/* contact form ends */}


      </div>
    </div>
  )
}
