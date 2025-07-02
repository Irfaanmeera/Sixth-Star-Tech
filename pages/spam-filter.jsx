import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import SpamFIlterForm from './forms/SpamFIlterForm'
import MetaTags from '../components/MetaTags';
import { spamFilterSchema } from '../lib/data/schema'
export default function SpamFilter() {
  return (

    <div>
  <MetaTags />
  <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1723617112/spam_filter_banner_dgkuwr.webp" type="image/webp" />
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(spamFilterSchema) }} />
</Head>

      <div className='main'>

        {/* banner section starts */}
        <section className="spamfilter-ban-sec">
        <div className="container">
  <div className="row ">
    <div className="col-12">
    <h1>POWERFUL ANTI- SPAM FILTER FOR EFFECTIVE EMAIL CLEANSING</h1>
    <div className="row">
    <div className="col-md-6 spamfilter-ban">
        <p>Our Spam Filter Caught Your Unsolicited Bulk Emails and blocks Spam Before It Reaches Your Inboxes</p>
        <div className="ban-left">
            <ul>
                <li><i className="fa-regular fa-square-check"></i> 100% Transparent - Quarantine Report</li>
                <li><i className="fa-regular fa-square-check"></i> Free Trail - First Month</li>
                <li><i className="fa-regular fa-square-check"></i> Account Sync - Cpanel</li>
            </ul>
            <ul>
                <li><i className="fa-regular fa-square-check"></i> Preserving Budget</li>
                <li><i className="fa-regular fa-square-check"></i> More It Security</li>
                <li><i className="fa-regular fa-square-check"></i> 90 Days Money Back Guarantee</li>
            </ul>
        </div>
    </div>

    <div className="col-md-6 spamfilter-ban text-center">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1723617112/spam_filter_banner_dgkuwr.webp" alt="spam filter banner" priority width={380} height={320} />
    </div>
    </div>
  </div>
  </div>

</div>
        </section>

        {/* banner section ends */}

{/* spam filter sec 1 starts */}
<section className="spamfilter-sec1">
<div className="container">
  <div className="row ">

    <div className="col-12">    
        <h2>Protect and Stop Unwanted Spam Emails Reaching Your Network</h2>
        <hr />
        <p>Spam filter software mainly processes the incoming emails and prevents the spam before it is reaching the users. Its main function is to identify and remove the unwanted emails getting into the user’s accounts. In order to avoid the spam actions, effective spam filter service are provided by our solutions to maintain and clean spam-free inboxes. We offer spam filter services such as both Incoming and Outgoing spam filters based on your level of protection.</p>
        <p>We provide accessible Cloud-based anti-spam filter service in chennai that detect phishing which obtains username, password, credit card details and malware activities that causes damages to a computer, server, or computer network. Once the email filter is installed you can get an administration portal and where you can permit and manage the variety of features like management of whitelists and blacklists, subject or content filters, virus detection, email recovery and quarantine blocking spam</p>
        <p>Either you want to create a new website or want to convert a lost site into the engaging site, our talented web developers ensure to provide you with an impeccable service which will be out your expectation level. Our web development team not only develops attractive websites but also assures to make it audience-centric, and have global visibility. Besides it, they also update and manage your site systematically to maintain its standard.</p>
    </div>

  </div>
</div>
</section>
 
{/* spam filter sec 1 ends */}

{/* spam filter Trail sec starts */}
<section className="spamfilter-trail-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
        <h3>Enjoy Free Trail On Our Cloud-Based Spam Filter Service</h3>
  
  <div className="row spamfilter-trail">

    <div className="col-md-6">
    <a className="btn text-center" data-bs-toggle="collapse" href="#incomingspamfilter" role="button" aria-expanded="false" aria-controls="incomingspamfilter">Incoming Spam Filter</a>
    <div className="collapse multi-collapse" id="incomingspamfilter">
      <div className="card card-body">
        <div className='trail'>
            <h4>Why choose SixthStar Incoming Spam Filter?</h4>
            <p>SixthStar offers you the best incoming spam filter in which users send mails to the recipient. Before the mail reaches the receiving end, it will undergo a detection process in the intermediate server to find any malware presence. Once the detecting process gets complete, the mail will automatically reach the receiver end.</p>
            <h4>Guard your network against spams</h4>
            <p>We have applied innovative and best strategy to exclude spam mail before it reaches your inbox.</p>
            <h4>Identifies new spam instantly</h4>
            <p>We ensure uninterrupted progress in safe data collection and analysis, immediately finding new techniques and identifying the threats. That amassed spam filter technique is shared in real-time with all our worldwide clients, offering an instant solution against new malware issues.</p>
            <h4>Maximized Email Continuity</h4>
            <p>An additional protection layer is provided in spam filter for redundancy and email continuity purpose. When the receiver mail server is unapproachable, SixthStar’s Spam filters queue inbound email.</p>
            <h4>Superior filter quality and efficiency</h4>
            <p>Our spam filter processes tons of emails per second. We offer incoming filters that provide you more accuracy.</p>
            <h4>Enhance resource effectiveness</h4>
            <p>Our superior level incoming filter functions in your mail infrastructure, and you no longer require to handle such a huge number of inbounding mail spam.</p>
            <h4>Strengthen employee productivity</h4>
            <p>Using this Spam filter, your quality time is preserved, and thus you can concentrate fully on your business work.</p>
            <h5>Process carried out in SixthStar’s Incoming spam filter</h5>
            <h4>Filtering Technology</h4>
            <ul>
                <li>SMTP Level Filtering</li>
                <li>Data Level Filtering</li>
            </ul>
            <h4>Filtering Technology</h4>
            <ul>
                <li>Login</li>
                <li>Add domain</li>
                <li>Configure MX record</li>
            </ul>
            <h4>View incoming Bandwidth overview</h4>
            <p>View incoming delivery queue</p>
            <h5>Incoming whitelist filtering rules</h5>
            <ul>
                <li>Domain rules</li>
                <li>Admin rules</li>
                <li>Default rules</li>
                <li>Global rules</li>
                <li>Inherited rules</li>
                <li>Query rules</li>
            </ul>
            <h5>Add incoming whitelist filtering rules</h5>
            <h4>Incoming Blacklist filtering rules</h4>
            <ul>
                <li>Domain rules</li>.
                <li>Admin rules</li>
                <li>Default rules</li>
                <li>Global rules</li>
                <li>Inherited rules</li>
                <li>Query rules</li>
            </ul>
            <h5>Add Incoming Blacklist filtering rules</h5>
            <h4>View incoming log search</h4>
            <ul>
                <li>Filter incoming mail</li>
                <li>Report</li>
            </ul>
            <h4>Create email scout report</h4>
            <h5>View spam quarantine</h5>
            <ul>
                <li>Enable the quarantine</li>
                <li>Access the quarantine</li>
                <li>View Domain level incoming spam quarantine</li>
                <li>View Email Level spam quarantine</li>
                <li>IMAP Access</li>
                <li>IMAP folders</li>
            </ul>
            <h4>Message queueing</h4>
            <ul>
                <li>Automatic retry schedule Message queued</li>
                <li>Your own fallback server</li>
            </ul>
            <h4>Manage domain alias</h4>
            <ul>
                <li>Add domain alias</li>
            </ul>
            <h4>Configure domain settings</h4>
            <ul>
                <li>Rejected local part characters</li>
                <li>Advanced settings</li>
            </ul>
            <h4>Manage destinations</h4>
            <ul>
                <li>Add destinations</li>
                <li>Perform Network checks on destination server</li>
            </ul>
            <h4>View domain statistics</h4>
            <ul>
                <li>Train spam</li>
                <li>Train not spam</li>
                <li>Report spam</li>
                <li>Clear callout cache – incoming</li>
                <li>Set up whitelist filtering rules domain level</li>
                <li>Set up blacklist filtering rules domain level</li>
            </ul>
            <h5>Technical Features of Incoming Spam Filter</h5>
            <h4>Dual deployment options</h4>
            <p>You can either pick our hosted cloud spam filter or indulge the incoming filter instantly into your cloud hardware locally.</p>
            <h4>Integration and automation</h4>
            <p>SixthStar offers pre-built accomplices to completely incorporate the incoming filter with significant control panels and other email collaboration tools such as</p>
            <ul>
                <li>CPanel</li>
                <li>Odin Service Automation</li>
                <li>Direct Admin</li>
                <li>Plesk</li>
                <li>Open-Xchange.</li>
            </ul>
            <h4>Supported mail server</h4>
            <p>Our spam filter solution is completely independent and assists any SMTP consistent mail server like</p>
            <ul>
                <li>Zimbra mail</li>
                <li>Exchange mail filter</li>
                <li>Postfix mail filter</li>
                <li>Exim</li>
                <li>Gmail</li>
                <li>Lotus</li>
            </ul>
            <h4>Full support and updates</h4>
            <p>The incoming spam filter is entirely monitored, maintained, and updated by our expert team and synchronize with our worldwide centralized database.</p>
            <h4>Quarantine and reporting</h4>
            <p>In order to verify the status of any email, we provide an extensive log-search tool with progressed quarantine options. These quarantine options can be displayed through IMAP via the web.</p>
            <h4>Delivery queue</h4>
            <p>We provide an additional redundancy level in spam filter when required destination server becomes unreached. The queued mails are forced to the receiver end mail server when approachable again, thus it avoids email from being lost or pushed back to the sender.</p>
            <h4>Administration</h4>
            <p>In this incoming spam filter, there is the availability of a multi-level central web interface that provides access to various permission levels, branding choices, and other functional capabilities like user detection, whitelisting tools, blacklisting tools, and attachment management.</p>
        </div>

      </div>
    </div>
    </div>

    <div className="col-md-6">
    <a className="btn" data-bs-toggle="collapse" href="#outgoingspamfilter" role="button" aria-expanded="false" aria-controls="outgoingspamfilter">Outgoing Spam Filter</a>
    <div className="collapse multi-collapse" id="outgoingspamfilter">
      <div className="card card-body">
      <div className='trail'>
        <h4>Why select SixthStar Outgoing Spam filter?</h4>
        <p>SixthStar offers cloud-based outgoing spam filter that detects and blocks spams to provide the most secured email delivery. Using the outgoing spam filter, you can easily remove mail delivery issues caused by IP address blacklisting.</p>
        <h4>Evade IP blacklisting</h4>
        <p>The utilization of outgoing spam filter will help you to get free from network-oriented issues and reduces the time spent on ordering the spam mail.</p>
        <h4>Defend your brand and infrastructure</h4>
        <p>We ensure positive client prestige by providing them with an excellent and complete email solution with integrity.</p>
        <h4>Enhance abuse operability</h4>
        <p>Our outgoing spam filter provides neat and clear reports denoting, which users’ needs your consideration, and systematically locks them.</p>
        <h4>Avoid heavy fines</h4>
        <p>Nation-wide legislative and control organization established a rule that is to pay heavy fines for Sending out harmful emails.</p>
        <h5>Process carried out in SixthStar’s Outgoing spam filter</h5>
        <h4>Start outgoing filtering</h4>
        <ul>
          <li>Create outgoing user</li>
          <li>Configure the abuse report address</li>
          <li>Configure outgoing delivery</li>
          <li>Set up SPF</li>
          <li>Set up DKIM</li>
          <li>Set up your SMTP Hostnames</li>
          <li>Configure your MTA</li>
          <li>Connection Limits</li>
          <li>Available Outgoing ports</li>
          <li>Block Outgoing Traffic on port 25</li>
          <li>Outgoing License Size</li>
          <li>How to count users/domains?</li>
        </ul>
        <h4>Configure your MTA</h4>
        <ul>
          <li>Qmail</li>
          <li>PostFix iP authentication</li>
          <li>PostFix per Username authentication</li>
          <li>PostFix Sender-based routing</li>
          <li>cPanel/WHM User-based authentication</li>
          <li>cPanel/WHM IP-bases authentication</li>
          <li>cPanel/WHM IP-based authentication for selected domain</li>
          <li>Exim IP based authentication</li>
          <li>Exim Username based authentication</li>
          <li>Microsoft Exchange</li>
          <li>Sendmail</li>
          <li>MailEnable</li>
          <li>Kerio</li>
          <li>Icewrap</li>
        </ul>
        <h4>Outbound spam monitoring</h4>
        <ul>
          <li>Control panel quarantine (only for Local Cloud)</li>
          <li>Managing outgoing spam</li>
          <li>Automatic and manual locking</li>
          <li>Alternative reporting</li>
        </ul>
        <h5>View outgoing bandwidth overview</h5>
        <h4>Manage identities</h4>
        <ul>
          <li>Add identities</li>
        </ul>
        <h4>Manage outgoing user</h4>
        <ul>
          <li>Add an outgoing user</li>
          <li>Edit an outgoing user</li>
          <li>Outgoing Identity setup</li>
          <li>Setup Outgoing user authentication for multiple domains with the same IP address</li>
          <li>Generate outgoing report</li>
        </ul>
        <h4>View outgoing blacklist filtering rules</h4>
        <ul>
          <li>Domain rules</li>
          <li>Admin Rules</li>
          <li>Default Rules</li>
          <li>Global Rules</li>
          <li>Inherited Rules</li>
          <li>Query Rules</li>
        </ul>
        <h5>Add an outgoing blacklist filtering rules</h5>
        <h4>Outgoing Log Search</h4>
        <ul>
          <li>Filter outgoing mail</li>
          <li>Report</li>
          <li>Create an email scout report</li>
          <li>DKIM Certificate generation</li>
          <li>Manage outgoing settings</li>
          <li>Clear Callout cache – outgoing</li>
          <li>View domain statistics outgoing</li>
        </ul>
        <h5>Technical Features of Outgoing Spam Filter</h5>
        <h4>Dual deployment</h4>
        <p>The outgoing spam filter can be implemented either in the hosted cloud or into your system hardware locally based on your needs. Additionally, it can be utilized as an outbound SMTP server or redirect all outgoing traffic via the system.</p>
        <h4>Integration and automation</h4>
        <p>We offer a pre-designed add-on to completely combine outgoing spam filter with significant control panels and other email collaboration tools like</p>
        <ul>
          <li>CPanel</li>
          <li>Odin service automation</li>
          <li>ISP system</li>
          <li>Open-Xchange</li>
          <li>Plesk</li>
          <li>Open-Xchange</li>

        </ul>
        <h4>Supported mail servers</h4>
        <p>Our email solutions entirely support any of the SMTP based mail servers like</p>
        <ul>
          <li>Zimbra mail</li>
          <li>Postfix mail filter</li>
          <li>Exim</li>
          <li>Gmail</li>
          <li>Lotus</li>
          <li>Exchange mail filter</li>
        </ul>
        <h4>Reports and support</h4>
        <p>Apart from ARF reports and automatic locking, we also hold ties with RBL operators and security firm with business.</p>
        <h4>Software updates and maintenance</h4>
        <p>Don’t spend your quality time in doing administrating work for your system. Our expert professional team will completely take care of your system.</p>
        <h4>Administration</h4>
        <p>SixthStar’s spam filter has user-friendly interface provides various permission stage, branding choices, new user/account discovery, blacklisting tools, whitelisting tools etc.</p>
        
         </div>
        </div>
    </div>
    </div>

  </div>
    </div>

  </div>
</div>
</section>
{/* spam filter Trail sec ends */}

{/* spam filter feat sec start */}
<section className="spamfilter-feat-sec">
<div className="container">
  <div className="row ">

    <div className="col-md-6 align-content-center">
      <h4>Key Features of Email Filtering Services</h4>
      <p>We significantly demonstrate high verifiable levels of spam and virus detection service for your business. The organizations should take following,</p>
      <p><strong>How email verified as spam </strong>– quarantined, tagged and delivered.</p>
      <p><strong>Percentage of false positives </strong>– number of authenticated emails get blocked.</p>
      <p><strong>Reporting options </strong>– The reporting options are available to identify whitelist and blacklist senders.</p>
      <p><strong>Filtering and testing </strong>– To accelerate the filtering process, front end test is conducted.</p>
      <p><strong>Virus protection </strong>– High quality of the antivirus software protecting your business from malware activities.</p>
    </div>

    <div className="col-md-6 text-center">
      <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1723617112/Incoming-flow-chart1_zvwbsm.webp" alt="" width={480} height={350} />
    </div>

  </div>
</div>
</section>

{/* spam filter feat sec ends */}

{/* spam filter Protect sec start */}

<section className="spamfilter-pro-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
      <h3>Protect and Stop Unwanted Emails Reaching Your Network</h3>
      <hr />
      <div className="row spamfilter-pro">

    <div className="col-lg-4 col-md-12">
      <h4>Ease Of Use</h4>
      <p>Sending the data and other information is an easy process. You can easily manage and transfer your data’s via the network in short time period.</p>
        <hr />
    </div>

    <div className="col-lg-4 col-md-6">
      <h4>High Detection Rate</h4>
      <p>The rate of virus and malware activities were detected accurately and can be prevented without entering into the email network of sender and receiver end.</p>
      <hr  />
    </div>

    <div className="col-lg-4 col-md-6">
    <h4>Email Continuity Service</h4>
      <p>The maintenance of email flow is carried via email delivery process. We provide an extra protective layer for incoming filter that maintains the email flow.</p>
      <hr  />
    </div>
  </div>
  <div className="row spamfilter-pro">

<div className="col-lg-4 col-md-12">
  <h4>Reporting Options</h4>
  <p>The reporting option is useful to find out the whitelist and blacklist so that the user can sort out mail list in an effective way.</p>
    <hr />
</div>

<div className="col-lg-4 col-md-6">
  <h4>Antivirus Software</h4>
  <p>It is used to detect, prevent and remove malware and viruses that affects in any part of the files or software in the desktop.</p>
  <hr  />
</div>

<div className="col-lg-4 col-md-6">
<h4>Phishing Protection</h4>
  <p>A powerful layer of phishing protections is significantly required to protect users and organizations from hacking attacks like threating sensitive information of the user.</p>
  <hr  />
</div>
</div>

    </div>

    

  </div>
</div>
</section>

{/* spam filter Protect sec ends */}

{/* spam filter faq sec start */}

<section className="spamfilter-faq-sec">
<div className="container">
  <div className="row ">

    <div className="col-12">
      <h2>Frequently Asked Questions</h2>
      <hr />

      <div className="accordion spamfilter-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What happens to a spam-detected message?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>For inbound messages: This filtering will be done based on the IP address of the sender. As a default process, content-filter spam is sent to the junk folder of the recipient. All these actions can be controlled by you. For outbound messages: Here the emails delivery status can be easily known by the sender whether the email is bounced or not delivered through a message status.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Do I need to configure the service to provide anti-spam protection?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>Once you get the spam filter service, it will be automatically enabled as per anti-spam policies. If you want any alteration in the policies based on your organizational structure, you can tailor it according to it.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Does the service have URL filtering?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>Yes, the service provides URL filtering. If the read URL has any spam content, then it will be marked as a spam message.</p>
         </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
     Is bulk email filtering works automatically?

      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This email filtering works differently for new and migrated customers. So make sure if the service is automatically enabled or not.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      Can I get spam reports?
      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Yes, you will get spam reports about the volume of messages present in the account.</p>  
        </div>
    </div>
  </div>
</div>

    </div>

  </div>
</div>
</section>


{/* spam filter faq sec ends */}
<section className="spamfilter-contact-sec p-2">
  <div className="container">
  <h3 className='text-center'>Contact Form</h3>
  <SpamFIlterForm />
  </div>
  
</section>
      </div>
    </div>
  )
}
