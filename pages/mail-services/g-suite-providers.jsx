import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import AnimatedHeading from '../../components/AnimatedHeading'
import MailServicesForm from '../forms/MailServicesForm'
import GsuiteTalkForm from '../forms/GsuiteTalkForm'
import GsuiteSlider from '../section/GsuiteSlider'
import Image from 'next/image'
import MetaTags from '../../components/MetaTags';

export default function GsuiteProviders() {

  return (
    <div>
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722069341/google-workspace_bemyaq.webp" type="image/webp" />
</Head>
      <MetaTags />

      <div className='main'>

        {/* banner section starts */}
        <section className="gsuit-banner-sec">

        <div className="container">
            <div className="row ">

            <div className="col-md-6 align-content-center ">
                <Image width={260} height={40} src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722069341/google-workspace_bemyaq.webp" alt="" className='mb-4' priority />
                <h1 className='mb-4'>Transform Your Business with G SUITE</h1>
                <p className='mb-4'>Collaborate effortlessly and increase productivity through G SUITE. Make your workflow more simplified, have efficient communication and remote file accessibility.</p>
                <button className=''><Link href='#gsuitecontact'>GET STARTED</Link></button>
            </div>

            <div className="col-md-6 align-content-center">
                <Image width={550} height={413 } src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722069338/gsuite-bg_bnkxy4.webp" alt="" loading='lazy' />
            </div>

             </div>
            </div>

        </section>

        {/* communication sec start */}

        <section className='gsuite-com-sec'>
        <div className="container">
            <div className="row ">

            <div className="col-12 text-center">
                <AnimatedHeading className='server heading p-4'>Streamline your communication</AnimatedHeading>
                 <Image width={456} height={260} src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722069436/gosuite_qlcisr.gif" alt="" loading='lazy' />   
                 <p className='p-3'> G-suite provider in Chennai, Sixth Star Technologies understand the different challenges and opportunities faced by small and large Enterprise businesses in this dynamic market. That’s why we offer comprehensive G-suite solutions that enhances the business productivity through a basic setup and support. From seamless migration and integration to ongoing training and optimization, Our Technical Experts are committed to helping you maximize the potential of G-suite to drive efficiency, collaboration, and growth for your business.</p>
            </div>

            </div>
            </div>
        </section>


        {/* communication sec ends */}

        {/* gsuite Key Feat sec start */}
            <section className="gsuite-keyfeat-sec">
            <AnimatedHeading className='server heading p-4'>Key Features of Collaboration with G Suite</AnimatedHeading>
            <div className="container">
            <div className="row ">

            <div className="col-md-6 text-center align-content-center">

            <div className="row gsuite-keyfeat">

                <div className="col-md-6 p-3 ">
                    <Image  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722077710/docs_wc1lok.webp" alt="docs" width={55} height={55} loading='lazy'  />
                    <h4 className='pt-3'>Docs</h4>
                    <p>The powerful Docs tool of G-SUITE lets one create edit and share documents in real time.</p>
                </div>

                <div className="col-md-6 p-3 ">
                <Image  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722077706/sheets_d39cnq.webp" alt="sheets" width={55} height={55} loading='lazy'/>
                    <h4 className='pt-3'>Sheets</h4>
                    <p>The new G-SUITE enables organising of data for easy sharing with other people utilizing the Sheets.</p>
                
                </div>

                </div>
                <p>Google  G Suite  offers a set of working tools enabling easy collaboration between teams for an increase in Team Productivity.</p>
                <button className='text-center'><Link href='/request-a-quote'>Get a demo</Link></button>

            </div>

                
            <div className="col-md-6 gsuite-keyfeat-img">
                <Image width={470} height={340} src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722077827/gsuite-feature_s9d7yj.webp" alt="gsuite feature" loading='lazy'/>
            </div>

            </div>
            </div>
            </section>

        {/* gsuite Key Feat sec start */}

        {/* gsuite-talk-sec */}

        <section className='gsuite-talk-sec'>
        <div className="container">
        <div className="row ">

            <div className="col-12">
            <h5 className='text-center p-3'>Talk to our G Suite expert</h5>
            <GsuiteTalkForm />
            </div>

        </div>
        </div>
        </section>

        {/* gsuite-talk-sec */}

        {/* gsuite Files sec starts */}

        <section className="gsuite-file-sec">
        <div className="container">
            <div className="row ">

                <div className="col-12">
                <AnimatedHeading className='server heading p-4'>Save Your Files Safely and Effortlessly</AnimatedHeading>
                <div className="row ">

                <div className="col-md-6 pb-3">
                    <Image width={500} height={320} src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722077911/gsuite-files_hjmnhp.gif" alt="gsuite files" loading='lazy' />
                </div>

                <div className="col-md-6 align-content-center">
                <p className='p-2'>Your invaluable data is protected using strong storage abilities and G-SUITE inbuilt security mechanisms offered by Google Drive.s Your files are available wherever you will access google drive and you can as well easily share among others.</p>
                <ul className='p-2'>
                    <li><i className="fa-regular fa-circle-dot"></i> Ample storage space to keep all your files organized</li>
                    <li><i className="fa-regular fa-circle-dot"></i> Privacy and security of your data is achieved through a high level of encryption</li>
                    <li><i className="fa-regular fa-circle-dot"></i> Seamless teamwork between colleagues in real time.</li>                
                </ul>
                </div>

                </div>
                </div>

            </div>
        </div>
        </section>

        {/* gsuite Files sec starts */}

        {/* G suite Provider sec start */}
<section className="gsuite-pro-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-4'>Discover the Power of G-SUITE with G suite Providers</AnimatedHeading>
    </div>
    <hr />
    <div className="row ">

    <div className="col-lg-4 col-md-12 ">
        <Image width={275} height={180} src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078169/gsuite-calender_rcco2s.gif" alt="calender" loading='lazy' />
        <h4 className='text-center p-3'>Calender</h4>
        <p className='pl-4 pr-4'>Remain structured while maintaining a good time schedule.
Automatically plan for meetings, events, and appointments through
G-SUITE Calendar. Keep track of timetable synchronization among devices, so as not to skip one date.
</p>
    </div>

    <div className="col-lg-4 col-md-6 ">
    <Image width={275} height={180} src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078171/gsuiteforms_fkt7py.gif" alt="forms" loading='lazy' />
        <h4 className='text-center p-3'>Forms</h4>
        <p className='pl-4 pr-4'>Collect data and gather insights G-SUITE Forms lets you design your own forms/surveys. Obtain responses, analyze data, and learn critical insights needed for making appropriate decisions
</p>
    </div>

    <div className="col-lg-4 col-md-6 ">
    <Image width={275} height={180} src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078180/gsuitenotes_e0koxs.gif" alt="notes" loading='lazy' />
        <h4 className='text-center p-3' >Keep</h4>
        <p className='pl-4 pr-4'>Capture ideas and organize information G-SUITE Keep lets you quickly take notes, make a list of things to do and bring order to your thoughts. Your information will be readily accessible wherever and whenever you want.
</p>
    </div>

  </div>
  </div>
</div>
</section>

        {/* G suite Provider sec ends */}

        {/* Google Workplace sec starts */}

    <section className="gsuite-wp-sec p-4">

    <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-4'>Google Workplace Apps</AnimatedHeading>
    </div>
    <GsuiteSlider />
  </div>
</div>
    </section>

        {/* Google Workplace sec ends */}

        {/* gsuite Prod sec starts */}

            <section className="gsuite-prd-sec">
            <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-2'>Boost Productivity</AnimatedHeading>
    <div className="row ">

    <div className="col-md-6 align-content-center">
    <p className='pb-3'>Find out the main advantages of introducing G-SUITE in your business. Boost your productivity, collaborate in real time, and enjoy heightened security.</p>
    <ul className='p-3'>
      <li><i className="fa-regular fa-circle-dot"></i> Increase Efficiency and Productivity</li>
      <li><i className="fa-regular fa-circle-dot"></i> Collaborate in Real-Time Enhance Data Security</li>       
    </ul>
    </div>

    <div className="col-md-6 text-center">
    <Image width={480} height={330} src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722078303/gsuite-team_jo9zrj.gif" alt="team" loading='lazy' />
    </div>

  </div>

    </div>

  </div>
</div>
            </section>
        {/* gsuite Prod sec ends */}

        {/* gsuite faq sec starts */}

        <section className="gsuite-faq-sec">
        <AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
        <div className="container">
        <div className="row ">

            <div className="col-12">

            <div className= 'accordion gsuite-faq' id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading1">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
      How do I sign up?
      </button>
    </h2>
    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      G-SUITE can be easily registered by visiting our website. In case of any problems, please feel free to contact a member of our support staff for assistance.
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
      What are the pricing plans?
      </button>
    </h2>
    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Our highly competitive and flexible pricing plan for G-SUITE is aimed at meeting the preferences of any business entity. Check out our offers and prices or simply contact us.
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
      Would it be possible for me to continue to use my existing domain?
      </button>
    </h2>
    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Definitely, it’s possible to integrate your current domain with G-SUITE. We have instructions that guide you on how to link your domain to our services during the setup process.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading4">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
      Is customer support available?
      </button>
    </h2>
    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Absolutely! The supportive staff of G-SUITE is available round the clock to solve your queries and problems.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading5">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
      What is Google G Suite services?
      </button>
    </h2>
    <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      G Suite is a basic edition in a Google business email suite services which provides of collaborative productivity apps that streamline every activity in a centralized business professional email id, shared calendars, online document editing and storage, video meetings in G-meet , and much more.
     </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading6">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
      Is G-suite suitable for small businesses or is it primarily designed for larger enterprises?
      </button>
    </h2>
    <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      G-suite is suitable for businesses of all sizes, including small businesses . Its scalable nature allows small businesses to access the same powerful productivity tools and collaboration features used by larger enterprises.
     </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading7">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
      G-suite providers and Resellers are there in chennai ?
      </button>
    </h2>
    <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      there are several G-suite providers and resellers in Chennai. Sixthstar Technologies is one of the top Resellers and providers offer G-suite subscriptions, setup assistance, migration services, training, and ongoing support to businesses in Chennai. Sixthstar Technologies. may also offer additional services such as customization, integration with third-party applications, and consulting to tailor G-suite to the specific needs of businesses in Chennai.
     </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="heading8">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
      How secure is G-SUITE?
      </button>
    </h2>
    <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Advanced security tools in G-SUITE ensure protection of your data. Our user safety is guaranteed through implementation of industry standard safety measures.
     </div>
    </div>
  </div>

</div>            </div>

        </div>
        </div>
        </section>

        {/* gsuite faq sec ends */}

        {/* contact form starts */}
<section className="gsuite-contact-sec">
<div className="container1">
  <div className="row ">

    <div className="col-md-6  align-content-center">

    </div>

    
    <div className="col-md-6 " id='gsuitecontact'>
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
