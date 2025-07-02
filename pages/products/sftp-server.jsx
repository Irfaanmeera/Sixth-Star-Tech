import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Sftpslider from '../section/Sftpslider'
import AnimatedHeading from '../../components/AnimatedHeading'
import FeatureHideShow from '../../components/FeatureHideShow'
import SftpForm from '../forms/SftpForm'
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import MetaTags from '../../components/MetaTags';
import { sftpSchema } from '../../lib/data/schema'
import { useEffect } from 'react'

export default function SftpServer() {

  return (
    <div>
      <MetaTags />
      <Head>
      <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(sftpSchema) }}
                />
      </Head>
      <div className='main'>

         {/* banner sec start */}
         <section className='sftp-banner-sec'>
            <h1 className='text-center'>Next Generation web Communication Tool</h1>
        <div className="container ">
  <div className="row p-2">

    <div className="Fleet-ban-1 col-md-6">
        <h2 className='ban-1'>
        <TypeAnimation
      sequence={[
        'Secured',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Communication',
        1000,
        'Data privacy',
        1000,
        'Infinite Storage',
        1000,
        'Unlimited Users',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '30px', display: 'inline-block' }}
      repeat={Infinity}
    />
    </h2>
        <div >
        <div className="row fleet-banner-fet p-2">
            <ul className="list1 col-md-12" >
                <li> <i className="fa-regular fa-square-check"></i>24/7 Expert support</li>
                <li> <i className="fa-regular fa-square-check"></i>Forum Support</li>
                <li> <i className="fa-regular fa-square-check"></i>Trusted by Industries Experts</li>
            </ul>
        </div>
        <br/>
           <Link href="#sftpcontact" className='banner-but'>Claim Deal</Link>
        </div>
    </div>

    <div className="col-md-6">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247399/sftp-banner_dsodwz.gif" alt="sftp banner" loading='lazy' width={530} height={300} />
    </div>

  </div>
</div>
            </section>

            {/* banner sec ends */}

            {/* transfer sec starts */}
        
        <section className="sftp-transfer-sec">
        <div className="container">
        <div className="row ">
        <div className="col-12">
            <h3>Transfer your File. Anytime. Anywhere</h3>
            <p>Want to store or transfer your data with sftp server?</p>
        </div>
        <div className="row sftp-transfer-pc">

    <div className="col-lg-2 col-md-12 ">
        <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247394/SFTP_ofblcd.webp" alt="SFTP" loading='lazy' width={100} height={85}/>
        <h4>SFTP or FTPS?​</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247383/Features_wqckea.webp" alt="Features" loading='lazy' width={100} height={85} />
    <h4>Features​​</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247380/Automation_byx36a.webp" alt="Automation" loading='lazy' width={100} height={85} />
    <h4>Automation​</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247387/Forum_abbei2.webp" alt="Forum" loading='lazy' width={100} height={85} />
    <h4>Forum​</h4>
    </div>

    <div className="col-lg-2 col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247390/Secured_uoonyi.webp" alt="Secured" loading='lazy' width={100} height={85} />
    <h4>Secured​</h4>
    </div>

  </div>
        </div>
        
        <div className="row sftp-transfer-mob-sec">

    <div className="col-lg-2 col-md-12">
        <Sftpslider />
    </div>
    </div>

        </div>

        </section>


            {/* transfer sec ends */}

            {/* how it work sec start */}

            <section className="howitwork-sec">
            <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>How it works​</AnimatedHeading>
    <p className='text-center'>Learn how to use our intra server file storage service to upload, organize, and access your files.</p>
    
    <div className="row sftp-why">

          <div className="col-md-6 ">
            <ul>
              <li >
                <div className="col1">
                <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="col2">
                  <h3>Step 1: Upload​</h3>
                  <p>Easily upload your files to our secure server by simply dragging and dropping them into the designated area.</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="col2">
                  <h3>Step 2: Organize​</h3>
                  <p>Once your files are uploaded, you can organize them into folders and subfolders for easy navigation and management.</p>
                </div>
              </li>

              <li >
                <div className="col1">
                <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="col2">
                  <h3>Step 3: Access​</h3>
                  <p>Access your files anytime, anywhere, and from any device. Simply log in to your account and start working with your files.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-md-6 align-content-center">
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247640/sftp-banner-1_h1vq3g.gif" alt="How it works" loading='lazy' width={400} height={300}/>
          </div>

          </div>
    
    </div>
  </div>
</div>
            </section>
            {/* how it work sec start ends */}

             {/* key feat sec start */}

             <section className="sftp-keyfeat-sec">
            <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>Key Features​</AnimatedHeading>
    <p className='text-center'>Discover the powerful features of our intra server file storage service.</p>
    
    <div className="container">
  <div className="row keyfeat">
    <div className="col-lg-4 col-md-12">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247631/Improved_Collaboration-removebg-preview_w1dvbj.webp" alt="Improved Collaboration" loading='lazy' width={150} height={150} />
      <h3 className='p-2'>Improved Collaboration</h3>
      <p>Streamline teamwork and enhance communication with seamless file sharing and real-time collaboration.</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247635/Increased_Productivity-removebg-preview_qrxew9.png" alt="Increased Productivity" loading='lazy' width={150} height={150} />
      <h3 className='p-2'>Increased Productivity</h3>
      <p>Boost productivity by easily accessing and managing files from anywhere, at any time.</p>
    </div>

    <div className="col-lg-4 col-md-6">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722247628/Enhanced_Data_Security-removebg-preview_wbcdub.webp" alt="Enhanced Data Security" loading='lazy' width={150} height={150} />
      <h3 className='p-2'>Enhanced Data Security</h3>
      <p>Protect your sensitive data with advanced security measures, including encryption and access controls.</p>
    </div>
  </div>
</div>
    
    </div>
  </div>
</div>
            </section>
            {/* key feat sec start ends */}

             {/* commu sec start */}

             <section className="sftp-com-sec">
            <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='heading p-3'>Communication Features​</AnimatedHeading>
    <p className='text-center'>Discover the advantages of using our intra server file storage service.</p>
    
    <div className="container">
  
    <div className="row sftp-com">
    <div className="col-lg-4 col-md-12">
    <i className="fa-solid fa-share-from-square" style={{color:'#4C77D9'}}></i>
      <h3 className='p-2'>File Sharing</h3>
       </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-square-phone" style={{color:'#2C8411'}}></i>
      <h3 className='p-2'>contact</h3>
      </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-regular fa-envelope" style={{color:'#2EBBFF'}}></i>
      <h3 className='p-2'>Mail</h3>
    </div>
    </div>

    <div className="row sftp-com ">
    <div className="col-lg-4 col-md-12">
    <i className="fa-solid fa-file-signature" style={{color:'#964B00'}}></i>
      <h3 className='p-2'>Personalization</h3>
       </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-book" style={{color:'#EBC136'}}></i>
      <h3 className='p-2'>Notes</h3>
      </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-bars" style={{color:'#A069FF'}}></i>
      <h3 className='p-2'>Custom menus</h3>
    </div>
    </div>

    <FeatureHideShow buttonText="Learn More" className="about-class"> 

    <div className="row sftp-com">
    <div className="col-lg-4 col-md-12">
    <i className="fa-solid fa-calendar-check" style={{color:'#F77C7C'}}></i>
      <h3 className='p-2'>Events calendar</h3>
       </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-bell" style={{color:'#66CBE8'}}></i>
      <h3 className='p-2'>Notifications</h3>
      </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-desktop" style={{color:'#0007'}}></i>
      <h3 className='p-2'>Custom themes</h3>
    </div>
    </div>


    <div className="row sftp-com">
    <div className="col-lg-4 col-md-12">
    <i className="fa-solid fa-comments" style={{color:'#264016'}}></i>
      <h3 className='p-2'>Talk</h3>
       </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-rss" style={{color:'#FFAF5D'}}></i>
      <h3 className='p-2'>Rss feed</h3>
      </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-users" style={{color:'#340EAA'}}></i>
      <h3 className='p-2'>Group memberships</h3>
    </div>
    </div>
    <div className="row sftp-com">
    <div className="col-lg-4 col-md-12">
    <i className="fa-solid fa-user-secret" style={{color:'#1B7F00'}}></i>
      <h3 className='p-2'>Privacy</h3>
       </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-shield-virus" style={{color:'#630000'}}></i>
      <h3 className='p-2'>Anti virus</h3>
      </div>

    <div className="col-lg-4 col-md-6">
    <i className="fa-solid fa-exchange-alt" style={{color:'#FF9600'}}></i>
      <h3 className='p-2'>Transfer ownership</h3>
    </div>
    </div>

    </FeatureHideShow>


</div>
    
    </div>
  </div>
</div>
            </section>
            {/* comm sec start ends */}

            {/* FTP sec starts */}
    
    {/* <section className="sftp-ftp-sec">
      <h2 className='text-center p-3'>More than just FTP</h2>
      <p className='text-center p-2'>Provides a brief overview of the features and benefits of the intra server file storage service.</p>
    
      <div className="container">
        <div className="row justify-content-space-around">
        <div className="col-md-6">
            <h4 style={{borderColor:'#37756C'}}>automated</h4>
          </div>

          <div className="col-md-6">
            <h4 style={{borderColor:'#A977FF'}}>Highly secure</h4>
          </div>
        </div>

        <div className="row justify-content: space-evenly">
        <div className="col-md-6">
          <h4 style={{borderColor:'#4544FF'}}>First rate support</h4>
          </div>

          <div className="col-md-6" >
            <h4 style={{borderColor:'#743636'}}>Low maintanance</h4>
          </div>
        </div>

      </div>
    </section> */}


            {/* FTP sec starts */}

        {/* benefits sec starts */}

      <section className="sftp-benefits-sec">

      <div className="container">
  <div className="row ">

    <div className="col-12">
    <AnimatedHeading className='heading p-3 server'>Benefits​</AnimatedHeading>
    <p className='text-center'>Choose the perfect plan for your intra server file storage needs.</p>

    <div className="container">
  <div className="row sftp-benefits">

    <div className="col-lg-4 col-md-12">
      <h3 >Protect Against Ransomware </h3>
      <ul>
        <li> <i className="fa-solid fa-circle-chevron-right"></i> Provides robust security measures. </li>
        <li> <i className="fa-solid fa-circle-chevron-right"></i> advanced encryption protocols. </li>
        <li> <i className="fa-solid fa-circle-chevron-right"></i> Offers real-time threat monitoring. </li>
      </ul>
    </div>

    <div className="col-lg-4 col-md-6">
    <h3>Powers data accessibility </h3>
      <ul>
        <li> <i className="fa-solid fa-circle-chevron-right"></i> Enables seamless access. </li>
        <li> <i className="fa-solid fa-circle-chevron-right"></i> Supports data portability. </li>
        <li> <i className="fa-solid fa-circle-chevron-right"></i> Offers real-time threat monitoring. </li>
      </ul>
    </div>

    <div className="col-lg-4 col-md-6">
    <h3>Achieve compliance </h3>
      <ul>
        <li> <i className="fa-solid fa-circle-chevron-right"></i> tailored to meet the specific needs. </li>
        <li> <i className="fa-solid fa-circle-chevron-right"></i> Provides customizable frameworks. </li>
        <li> <i className="fa-solid fa-circle-chevron-right"></i> Offers centralized control. </li>
      </ul>
    </div>

  </div>
</div>

    </div>
    </div>
    </div>

      </section>


        {/* benefits sec ends */}

        {/* faq sec starts */}
<section className='sftp-faq-sec'>
<AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-12 text-center">
    
    <div className="accordion sftp-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <i className="fa-solid fa-pen-to-square"></i> What is intra server file storage?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Intra server file storage is a service that allows you to securely store and access files within your server environment. It provides a convenient and efficient way to manage and share files among team members or applications.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <i className="fa-solid fa-pen-to-square"></i> How does intra server file storage work?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Intra server file storage works by utilizing the server's storage capacity to store files. It provides a dedicated space within the server environment where you can upload, organize, and retrieve files as needed. This eliminates the need for external file storage solutions and ensures that your files are always accessible within your server infrastructure.</p>
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <i className="fa-solid fa-pen-to-square"></i> Is intra server file storage secure?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, intra server file storage is designed with security in mind. It utilizes encryption protocols to protect your files from unauthorized access. Additionally, access to the file storage is controlled through user authentication and permission settings, ensuring that only authorized individuals or applications can access the files.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <i className="fa-solid fa-pen-to-square"></i> Can I share files stored in intra server file storage with others?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, you can easily share files stored in intra server file storage with others. The service provides options to generate shareable links or invite specific users to access the files. You have full control over the permissions and access levels for each shared file, ensuring that you can securely collaborate and share files with team members or clients.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <i className="fa-solid fa-pen-to-square"></i>  What are the benefits of using intra server file storage?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Using intra server file storage offers several benefits. It provides a centralized and secure location for storing files within your server infrastructure, eliminating the need for external file storage solutions. This improves data security and reduces the risk of data breaches. Additionally, it allows for efficient file management and collaboration within your team, enhancing productivity and streamlining workflows.
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
<section className='sftp-contact-sec'> 
<AnimatedHeading className='server heading'>Connect with our Experts</AnimatedHeading>

<div className="container">
  <div className="row ">

    <div className="col-md-6 p-3 align-content-start">
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

    
    <div className="col-md-6" id='sftpcontact'>
    <SftpForm />
    </div>

  </div>
</div>

</section>


{/* contact section ends */}


      </div>
    </div>
  )
}
