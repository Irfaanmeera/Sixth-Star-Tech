import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../components/AnimatedHeading'
import ZimbraAltForm from './forms/ZimbraAltForm'
import Image from 'next/image'
import MetaTags from '../components/MetaTags';
import { zimbraAltSchema } from '../lib/data/schema'
export default function AltForZimbra() {

  return (
    <div>
       <MetaTags />
       <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722337881/gsuite-alt-bg_dfyxyi.webp" type="image/webp" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(zimbraAltSchema) }}
                />
</Head>

      <div className='main'>

        {/* banner sec starts */}
        <section className="alt-zimbra-bansec">
        <div className="container">
  <div className="row alt-zimbra-ban">
  <div className="col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722337881/gsuite-alt-bg_dfyxyi.webp"  priority width={636} height={400} alt='Zimbra alternative' />
    </div>

    <div className="col-md-6 align-content-center p-3">
        <h3>Looking for</h3>
        <h1 className='box-up'>Zimbra Alternative?</h1>
        <p>Carbonio Workplace offers an entire suite of 9+ productivity apps to help you create, collaborate, and communicate—whenever you need, wherever you are.</p>
        <button><Link href='#zimbraaltcontact' className='text-white'>SWITCH TO CARBONIO WORK PLACE</Link></button>
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
        <p>Carbonio ensures data security with advanced encryption, customizable auditing, and GDPR compliance, providing extensive control over data hosting and processing.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722337881/datasecurity-3_zt9vcx.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#D5ECFF'}} width={410} height={310} />
    </div>

    <div className="col-md-6">
    <h3>Huge savings </h3>
        <p> Carbonio offers huge savings with its cost-effective, flexible pricing model, eliminating costly vendor lock-ins, and providing customizable solutions to fit your budget and needs.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722337880/Cost-effective-3_iixijb.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#FFF5F0'}} width={410} height={310} />
    </div>

  </div>

  <div className="row ">

    <div className="col-md-6">
        <h3>Team Collaboration</h3>
        <p>Carbonio boosts team collaboration with integrated chat, video calls, and shared document editing, ensuring seamless communication and productivity.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722337884/Team-collaboration-3_dzmlpn.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#FCFFF0'}} width={410} height={310} />
    </div>

    <div className="col-md-6">
    <h3>Stay Connected</h3>
        <p>Carbonio ensures you stay connected with integrated chat, video calls, and real-time collaboration tools, keeping your team in sync wherever they are.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722337882/Stay-connected_-3_uqfq0e.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#F0F0FF'}} width={410} height={310} />
    </div>

  </div>

  <div className="row ">

    <div className="col-md-6">
        <h3>Fully-featured</h3>
        <p> Carbonio is fully featured with integrated email, chat, video calls, document collaboration, and advanced security, offering a comprehensive solution for all your communication needs.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722337880/Fully-featured_-3_wr12go.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#F4F0FF'}} width={410} height={310} />
    </div>

    <div className="col-md-6">
    <h3>Support</h3>
        <p>Carbonio provides extensive support through active community engagement, detailed documentation, and responsive local support options, ensuring users receive timely assistance and solutions.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722337883/support-2_osfhlu.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#FFF0FF'}} width={410} height={310} />
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
                <td><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315643/carbonio-logo_gbz7oz.webp" width={30} height={30} alt="carbonio logo" /><h3> Carbonio</h3></td>
                <td><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722337884/zimbra-logo_qqngje.webp" width={30} height={30} alt="zimbra logo" /><h3> Zimbra</h3></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>On-premises Deployment</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>Cloud Deployment</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> Yes</td>
            </tr>
            <tr>
                <td>Hybrid Deployment</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>GDPR, LGPD, CCPA</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>Hybrid Deployment</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>White label</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>Embedded Anti-malware</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check org"></i> Extra Charge</td>
            </tr>
            <tr>
                <td>Embedded Antispam</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check org"></i> Extra Charge</td>
            </tr>
            <tr>
                <td>VMware vSphere</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>XenServer</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>KVM</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>Microsoft Hyper-V</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>Video conference</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> Yes</td>
            </tr>
            <tr>
                <td>Screen sharing</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> Yes</td>
            </tr>
            <tr>
                <td>Delegating Group Moderators</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>Multiple Moderators</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>Support for external users</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> Yes</td>
            </tr>
            <tr>
                <td>Hierarchical storage management</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> No</td>
            </tr>
            <tr>
                <td>Delegated administration</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check org"></i> Limited</td>
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

<section className="zimbraalt-contact-ban" id='zimbraaltcontact'>
<div className="container">
  <div className="row ">

    <div className="col-md-6">

    </div>

    <div className="col-md-6">
    <ZimbraAltForm />
    </div>

  </div>
</div>
</section>

{/* rainmail contact sec ends */}
      </div>
    </div>
  )
}
