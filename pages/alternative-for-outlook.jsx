import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../components/AnimatedHeading'
import Office365AltForm from './forms/Office365AltForm'
import Image from 'next/image'
// import useMetadata from '../lib/hooks/useMetadata'
import MetaTags from '../components/MetaTags';


export default function AltForoffice365() {
  return (
    <div>
        <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722399511/16368963_Business_team_looking_for_new_people-removebg-preview_q8exy3.webp" type="image/webp" />
</Head>
          <MetaTags />

      <div className='main'>

        {/* banner sec starts */}
        <section className="alt-office-bansec">
        <div className="container">
  <div className="row alt-zimbra-ban">
  <div className="col-md-6">
  <Image
  src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722399511/16368963_Business_team_looking_for_new_people-removebg-preview_q8exy3.webp"
  width={636} height={400}
  alt="Office 365 alternative"
  priority
  className="slideInUp"
/>
    </div>

    <div className="col-md-6 align-content-center p-3">
        <h3>Looking for</h3>
        <h1 className='box-up'>Office 365 alternative?</h1>
        <p>Carbonio Workplace unlocks every productivity at your fingertips with its all-encompassing suite of apps, crafted to elevate your creative, collaborative, and communicative endeavors—At  anytime, anywhere and Anyplace.</p>
        <Link href='#officealtcontact' className="text-white">SWITCH TO CARBONIO WORK PLACE</Link>
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
        <p>Carbonio stands out with its data security, prioritizing data sovereignty and privacy compliance. Its private digital workplace integrates essential communication tools, enhancing overall security. Email server configuration and anti-spam/anti-virus defenses fortify against cyber threats.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722399511/datasecurity-1_frpjxd.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#64EFE921'}} width={400} height={400} />
    </div>

    <div className="col-md-6">
    <h3>Cost effective </h3>
        <p> Carbonio offers affordability with its free Community Edition and cost-effective self-hosting. It’s an all-in-one platform, reducing the need for multiple applications. Scalability ensures gradual investment, while open-source benefits eliminate licensing fees. Opt for Carbonio for significant savings and value.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722399512/Cost-effective-1_llkca0.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#E4F5FF'}} width={400} height={400} />
    </div>

  </div>

  <div className="row ">

    <div className="col-md-6">
        <h3>Team Collaboration</h3>
        <p>Carbonio redefines collaboration with sleek, integrated tools for real-time teamwork. Outlook connects through Teams for shared workspaces. Choose Carbonio for a customizable, streamlined collaborative experience</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722399512/Team-collaboration_iik0iu.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#4183EC5E'}} width={400} height={400} />
    </div>

    <div className="col-md-6">
    <h3>Stay Connected</h3>
        <p>Carbonio ensures as best Office 365 alternative by constant connectivity with browser-based access and self-hosted options for full control. Choose Carbonio for autonomy</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722399512/Stay-connected_-1_pufkqa.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#41A1EC91'}} width={400} height={400} />
    </div>

  </div>

  <div className="row ">

    <div className="col-md-6">
        <h3>Fully-featured</h3>
        <p> Carbonio offers a privacy-centric, integrated workplace with a suite of communication tools. Carbonio features in customizability and control. Carbonio excels in customizability and control</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722399511/Fully-featured_-1_iyfeu8.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#887DEC'}} width={400} height={400} />
    </div>

    <div className="col-md-6">
    <h3>Expert team support</h3>
        <p>Carbonio’s support includes 24/7 assistance and self-help resources.with addition to office 365 robust customer service, with Carbonio vast resource library as a standout feature.”</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722399512/support_uubu8v.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#D3FAF1'}} width={400} height={400} />
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
                <td><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315643/carbonio-logo_gbz7oz.webp" width={30} height={30} alt="Carbonio Workspace Logo" /><h3> Carbonio</h3></td>
                <td><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722399511/office_lrvhro.webp" width={30} height={30} alt="office logo" /><h3> Office 365</h3></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>On-premises Deployment</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
            </tr>
            <tr>
                <td>Cloud Deployment</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
            </tr>
            <tr>
                <td>Hybrid Deployment</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
            </tr>
            <tr>
                <td>GDPR, LGPD, CCPA</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
            </tr>
            <tr>
                <td>Hybrid Deployment</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
            </tr>
            <tr>
                <td>White label</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
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
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
            </tr>
            <tr>
                <td>XenServer</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
            </tr>
            <tr>
                <td>KVM</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
            </tr>
            <tr>
                <td>Microsoft Hyper-V</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
            </tr>
            <tr>
                <td>Video conference</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> Yes</td>
            </tr>
            <tr>
                <td>Screen sharing</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> Yes</td>
            </tr>
            <tr>
                <td>Delegating Group Moderators</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
            </tr>
            <tr>
                <td>Multiple Moderators</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
            </tr>
            <tr>
                <td>Support for external users</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check red"></i> Yes</td>
            </tr>
            <tr>
                <td>Hierarchical storage management</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-circle-xmark red"></i> No</td>
            </tr>
            <tr>
                <td>Delegated administration</td>
                <td><i className="fa-regular fa-square-check gr"></i> Yes</td>
                <td><i className="fa-regular fa-square-check org"></i> Limited</td>
            </tr>
            
        </tbody>
    </table>
    </div>
    <div className='p-3'>
    <Link href='https://drive.google.com/file/d/14rjDeRPjzWOiW33WZ_vbD2CBjNdnhEJA/view?usp=sharing'>Download full comparison</Link>
    </div>
    </div>
  </div>
</div>
</section>

{/* ranmail feature sec ends */}

{/* rainmail contact sec */}

<section className="office365-contact-ban" id='officealtcontact'>
<div className="container">
  <div className="row ">

    <div className="col-md-6">

    </div>

    <div className="col-md-6">
    <Office365AltForm />
    </div>

  </div>
</div>
</section>

{/* rainmail contact sec ends */}
      </div>
    </div>
  )
}
