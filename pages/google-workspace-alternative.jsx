import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../components/AnimatedHeading'
import GsuiteAlt from './forms/GsuiteAlt'
import Image from 'next/image'
import MetaTags from '../components/MetaTags';
import {googleWorkspaceSchema} from '../lib/data/schema'
export default function GoogleAlt() {
  return (
    <div>
      <MetaTags />
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722327574/gsuite-alt-bg-1_ny47lk.webp" type="image/webp" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(googleWorkspaceSchema) }}
                />
</Head>
      <div className='main'>

        {/* banner sec starts */}
        <section className="alt-gsuite-bansec">
        <div className="container">
  <div className="row alt-gsuite-ban">

    <div className="col-md-6 align-content-center p-3">
        <span className='Head-top'>Looking for</span>
        <h1 className='box-up'>Gsuite Alternative?</h1>
        <p>Carbonio excels in privacy, with superior data protection and control. Prioritize security with Carbonio</p>
        <button><Link href='#gsuitealt' className='text-white'>SWITCH TO CARBONIO WORK PLACE</Link></button>
    </div>

    <div className="col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722327574/gsuite-alt-bg-1_ny47lk.webp" priority width={400} height={400} alt='gsuite alt' />
    </div>

  </div>
</div>
        </section>

        {/* banner sec ends */}

        {/* why switch sec start */}

        <section className="rainmail-why-sec">
        <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>Why Switch to Carbonio?</AnimatedHeading>
    <div className="container rainmail-why">
  <div className="row ">

    <div className="col-md-6">
        <h3>Data Security</h3>
        <p>unlike Google Suite, Carbonio ensures data sovereignty with local data storage, full administrative control, and compliance with your region’s laws. Secure your data with our advanced, customizable solutions.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722327574/datasecurity-2_ewali5.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#E8EAEBA6'}} width={400} height={300} />
    </div>

    <div className="col-md-6">
    <h3>Dominant Pricing option </h3>
        <p>Carbonio offers competitive pricing with a technical edge over G Suite. Opt for scalable solutions and pay only for what you need. Benefit from cost-efficient data management without sacrificing functionality.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722327573/Cost-effective-2_hn4wbk.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#AADFDE99'}} width={400} height={300} />
    </div>

  </div>

  <div className="row ">

    <div className="col-md-6">
        <h3>Team Collaboration</h3>
        <p>Carbonio enhances team collaboration with superior tools that streamline communication and integration more effectively than G Suite. Experience seamless, secure teamwork. Elevate your team's productivity.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722327576/Team-collaboration-2_ykvcje.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#D5DFAA1F'}} width={400} height={300} />
    </div>

    <div className="col-md-6">
    <h3>Stay Connected</h3>
        <p>Connect like never before with Carbonio! tools that foster unstoppable  teamwork. outshine G Suite with secured and private connection.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722327575/Stay-connected_-2_ub4fbc.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#ACA3FA'}} width={400} height={300} />
    </div>

  </div>

  <div className="row ">

    <div className="col-md-6">
        <h3>Fully-featured</h3>
        <p>Carbonio offers enhanced privacy features compared to Google, with end-to-end encryption, strict data residency compliance, and robust administrative controls, ensuring superior data sovereignty and security.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722327574/Fully-featured_-2_ebxn38.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#C082DD'}} width={400} height={300} />
    </div>

    <div className="col-md-6">
    <h3>24*7 ultimate support</h3>
        <p>Carbonio offers 24/7 support with real-time chat and email assistance, providing a more personalized and responsive service compared to Google's standard options. Ensure your issues are addressed promptly.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722327576/support-1-removebg-preview_ixldd9.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#EDF2FF'}} width={400} height={300} />
    </div>

  </div>

</div>
    </div>

  </div>
</div>
        </section>

        {/* why switch sec ends */}

{/* ranmail feature sec start */}
<section className="rainmail-feat-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading'>Check out our feature based comparison</AnimatedHeading>
    <div className='feat-table'>
    <table>
        <thead>
            <tr>
                <td><h3>Features</h3></td>
                <td><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722327574/gsuite-logo_xmg9nn.webp" width={30} height={30} alt="Gsuite logo" /><h3> Gsuite</h3></td>
                <td><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315643/carbonio-logo_gbz7oz.webp" width={30} height={30} alt="Carbonio logo" /><h3> Carbonio</h3></td>
                <td><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315643/carbonio-logo_gbz7oz.webp" width={30} height={30} alt="Advantages logo" /><h3> Advantages</h3></td>
           
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Data Hosting</strong></td>
                <td> Cloud-based with data stored in global data centers.</td>
                <td> On-premises, private cloud, or hybrid hosting options.</td>
                <td> Enhanced data control and sovereignty</td>
            </tr>
            <tr>
                <td><strong>Customization</strong></td>
                <td> Limited to Google’s settings and interfaces.</td>
                <td> Highly customizable at all levels including UI and backend.</td>
                <td> Greater flexibility to meet specific business needs.</td>
            </tr>
            <tr>
                <td><strong>Privacy Controls</strong></td>
                <td> Standard privacy controls, managed by Google.</td>
                <td> Advanced privacy features, designed for high compliance sectors</td>
                <td> Better suited for organizations with strict privacy requirements</td>
            </tr>
            <tr>
                <td><strong>Deployment Flexibility</strong></td>
                <td> Better suited for organizations with strict privacy requirements</td>
                <td> Better suited for organizations with strict privacy requirements</td>
                <td> Better suited for organizations with strict privacy requirements</td>
            </tr>
           
        </tbody>
    </table>
    </div>
    <button className='mt-4'><Link href='https://drive.google.com/file/d/1vALYj-OpGEku3RYb50qOReUyI2NEOyoq/view?usp=sharing'>Download full comparison</Link></button>
    </div>

  </div>
</div>
</section>

{/* ranmail feature sec ends */}

{/* rainmail contact sec */}

<section className="rainmail-contact-ban" id='gsuitealt'>
<div className="container">
  <div className="row ">

    <div className="col-md-6">

    </div>

    <div className="col-md-6">
    <GsuiteAlt />
    </div>

  </div>
</div>
</section>

{/* rainmail contact sec ends */}
      </div>
    </div>
  )
}
