import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../components/AnimatedHeading'
import RainMailAlt from './forms/RainMailAlt'
import Image from 'next/image'
import MetaTags from '../components/MetaTags';
import {rainMailSchema} from '../lib/data/schema'

export default function RainMail() {
  return (
    <div>
        <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315643/16368963_Business_team_looking_for_new_people-removebg-preview_vlvfwg.webp" type="image/webp" />
    <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(rainMailSchema) }}
                    />
</Head>
      <MetaTags />
      
      <div className='main'>
        {/* banner sec starts */}
        <section className="alt-rainmail-bansec">
        <div className="container">
  <div className="row ">

    <div className="col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315643/16368963_Business_team_looking_for_new_people-removebg-preview_vlvfwg.webp" alt="alternative for rainmail" priority width={400} height={400} />
    </div>

    <div className="col-md-6 align-content-center p-3">
        <h3>Looking for</h3>
        <h1>Rain Mail
        alternative?</h1>
        <p>With its full suite of over 10+ productivity tools, Carbonio Digital Workplace is the best alternative for rain mail for creating, collaborating, and communication.</p>
        <button><Link href='#rainmailalt' className='text-white'>SWITCH TO CARBONIO WORK PLACE</Link></button>
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
    <AnimatedHeading className='server heading'>Why Switch to Sixthstar?</AnimatedHeading>
    <div className="container rainmail-why">
  <div className="row ">

    <div className="col-md-6">
        <h3>Data Security</h3>
        <p>At Carbonio, we understand the importance of privacy and data protection. That’s why we’ve fortified our email services with robust security measures to safeguard your digital correspondence. TFA, S/MIME Support, Password Policies:, Anti-Spam and Anti-Virus. so only the end user recipients can view/access it.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315643/data-security_ynexye.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#F0F8FF'}} width={400} height={400} />
    </div>

    <div className="col-md-6">
    <h3>Affordable Price </h3>
        <p>Private workplace offer with customized plan according the needs the users with transparent and no hidden charges. Your inbox and Collaboration apps are always at your fingertips, any time, anywhere.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315643/Huge-savings_brpk7q.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#FFF5F0'}} width={400} height={400} />
    </div>

  </div>

  <div className="row ">

    <div className="col-md-6">
        <h3>Team Collaboration</h3>
        <p>Unlock seamless teamwork with Carbonio Email’s Collaboration mode. Sharing files is a breeze with our intuitive controls and customizable access permissions. Set up your private workspace and collaborate with colleagues smoothly and efficiently via Integrated Communication and Cloud Collaboration based apps.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315644/Team-Collaboration_-1_eepzgs.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#FCFFF0'}} width={400} height={400} />
    </div>

    <div className="col-md-6">
    <h3>Stay connected</h3>
        <p>staying connected is more than just a feature—it’s a seamless experience. Our platform ensures that you’re always in sync with your team, fostering a collaborative environment that’s both efficient and reliable. Embrace the ease of constant communication with Carbonio Email, where connectivity is at the heart of collaboration.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315644/Stay-Connected_vb8brd.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#F0F0FF'}} width={400} height={400} />
    </div>

  </div>

  <div className="row ">

    <div className="col-md-6">
        <h3>Fully-featured</h3>
        <p>Designed for dynamic work environments, our suite offers a comprehensive set of tools that streamline communication, simplify project management, and facilitate real-time collaboration. Whether you’re working remotely or in the office, Carbonio Email connects you with your team, ensuring that every project is a collaborative success.</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315643/Fully-featured__do5dps.webp" alt="Data Security" loading='lazy' className='slideInUp' style={{backgroundColor:'#F4F0FF'}} width={400} height={400} />
    </div>

    <div className="col-md-6">
    <h3>Carbonio Care for 24*7</h3>
        <p>At Carbonio, we’re dedicated to providing you with exceptional support around the clock. Our in-house team is ready to assist you with any inquiries via call, email, or chat—completely complimentary. Stay connected with us on Mail for updates and support at support@sixthstar.in</p>
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315644/Support__th0p1f.webp" alt="Affordable Price" loading='lazy' className='slideInUp' style={{backgroundColor:'#FFF0FF'}} width={400} height={400} />
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
                <td><h3>Rain Mail</h3></td>
                <td><Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722315643/carbonio-logo_gbz7oz.webp" width={30} height={30} alt="" /><h3>Carbonio</h3></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Custom Domains</td>
                <td><i className="fa-regular fa-square-check org"></i> Limited</td>
                <td><i className="fa-regular fa-square-check"></i> Unlimited</td>
            </tr>
            <tr>
                <td>Integration Options</td>
                <td><i className="fa-regular fa-square-check bl"></i> Basic</td>
                <td><i className="fa-regular fa-square-check"></i> Extensive</td>
            </tr>
            <tr>
                <td>Collaboration Features</td>
                <td><i className="fa-regular fa-square-check bl"></i> Basic</td>
                <td><i className="fa-regular fa-square-check"></i> Advanced</td>
            </tr>
            <tr>
                <td>Mobile Apps</td>
                <td><i className="fa-regular fa-square-check bl"></i> Basic</td>
                <td><i className="fa-regular fa-square-check"></i> Comprehensive</td>
            </tr>
            <tr>
                <td>Advanced Filters</td>
                <td><i className="fa-regular fa-square-check bl"></i> Basic</td>
                <td><i className="fa-regular fa-square-check"></i> Advanced</td>
            </tr>
            <tr>
                <td>Attachment Handling</td>
                <td><i className="fa-regular fa-square-check bl"></i> Standard</td>
                <td><i className="fa-regular fa-square-check"></i> Advanced</td>
            </tr>
            <tr>
                <td>User Interface</td>
                <td><i className="fa-regular fa-square-check bl"></i> Traditional</td>
                <td><i className="fa-regular fa-square-check"></i> Modern</td>
            </tr>
            <tr>
                <td>Security Auditing</td>
                <td><i className="fa-regular fa-square-check org"></i> Limited</td>
                <td><i className="fa-regular fa-square-check"></i> Comprehensive</td>
            </tr>
            <tr>
                <td>Migration Assistance</td>
                <td><i className="fa-regular fa-square-check bl"></i> Basic</td>
                <td><i className="fa-regular fa-square-check"></i> Extensive</td>
            </tr>
            <tr>
                <td>Spam Protection</td>
                <td><i className="fa-regular fa-square-check bl"></i> Basic</td>
                <td><i className="fa-regular fa-square-check"></i> Advanced</td>
            </tr>
            <tr>
                <td>User Support</td>
                <td><i className="fa-regular fa-square-check bl"></i> Standard</td>
                <td><i className="fa-regular fa-square-check"></i> Comprehensive</td>
            </tr>
            <tr>
                <td>Data Sovereignty</td>
                <td><i className="fa-regular fa-square-check bl"></i> Depends on setup</td>
                <td><i className="fa-regular fa-square-check"></i> Strong</td>
            </tr>
            <tr>
                <td>Privacy Features</td>
                <td><i className="fa-regular fa-square-check bl"></i> Basic</td>
                <td><i className="fa-regular fa-square-check"></i> Advanced</td>
            </tr>
            <tr>
                <td>Community Engagement</td>
                <td><i className="fa-regular fa-square-check org" ></i> Limited</td>
                <td><i className="fa-regular fa-square-check"></i> Vibrant</td>
            </tr>
            <tr>
                <td>Developer APIs</td>
                <td><i className="fa-regular fa-square-check org"></i> Limited</td>
                <td><i className="fa-regular fa-square-check"></i> Extensive</td>
            </tr>
            <tr>
                <td>Pricing Flexibility</td>
                <td><i className="fa-regular fa-square-check bl"></i> Less Flexible</td>
                <td><i className="fa-regular fa-square-check"></i> Flexible</td>
            </tr>
            <tr>
                <td>Scalability</td>
                <td><i className="fa-regular fa-square-check bl"></i> Suitable for SMEs</td>
                <td><i className="fa-regular fa-square-check"></i> High</td>
            </tr>
            <tr>
                <td>Third-Party Apps</td>
                <td><i className="fa-regular fa-square-check org"></i> Limited compatibility</td>
                <td><i className="fa-regular fa-square-check"></i> Wide compatibility</td>
            </tr>
            <tr>
                <td>Backup and Recovery</td>
                <td><i className="fa-regular fa-square-check bl"></i> Basic</td>
                <td><i className="fa-regular fa-square-check"></i> Robust</td>
            </tr>
            <tr>
                <td>User Training</td>
                <td><i className="fa-regular fa-square-check bl"></i> Requires significant training</td>
                <td><i className="fa-regular fa-square-check"></i> Minimal required</td>
            </tr>
            <tr>
                <td>Global Accessibility</td>
                <td><i className="fa-regular fa-square-check org"></i> Limited</td>
                <td><i className="fa-regular fa-square-check" ></i> Designed for global reach</td>
            </tr>
        </tbody>
    </table>
    </div>
    <br/>
    <Link href='https://drive.google.com/file/d/1fB7IqF2KMMcOTCLbCZjQLQnsYUF1mZPa/view?usp=sharing'>Download full comparison</Link>
    </div>

  </div>
</div>
</section>

{/* ranmail feature sec ends */}

{/* rainmail contact sec */}

<section className="rainmail-contact-ban">
<div className="container">
  <div className="row ">

    <div className="col-md-6">

    </div>

    <div className="col-md-6" id='rainmailalt'>
    <RainMailAlt />
    </div>

  </div>
</div>
</section>

{/* rainmail contact sec ends */}
      </div>
    </div>
  )
}
