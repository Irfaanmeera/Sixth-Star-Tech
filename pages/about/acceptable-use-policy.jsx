import React from "react"
import Head from "next/head"
import MetaTags from '../../components/MetaTags';

export default function acceptableusepolicy() {

  return (
    <div> 

      <MetaTags />

       {/* banner */}
       <section className='methodology-container-banner'>
          <div className='methodology-container-banner-content'>
            <h1 className='methodology-container-banner-content-heading'>
            Acceptable Use Policy
            </h1>
           
          </div>
        </section>{/* banner-ends */}

        <section className="methodology-container-section2">
          <div className="methodology-container-section2-content container">
          <h1 className="methodology-container-section2-Heading">Prohibited Uses</h1>
          <p className="methodology-container-section2-para">
          1 . Unlawful Activities
          </p>
          <ul className="methodology-container-section2-list1">
            <p className="methodology-container-section2-paragraph">Our services must not be used for any illegal activities. This includes, but is not limited to:</p>
            <li><i className="fa-solid fa-circle-check"></i>Publishing or sharing content that is unlawful, fraudulent, or harmful to others.</li>
            <li><i className="fa-solid fa-circle-check"></i>Distributing malware or harmful software.</li>
            <li><i className="fa-solid fa-circle-check"></i>Illegal distribution of controlled substances, or selling medications without a prescription.</li>
            <li><i className="fa-solid fa-circle-check"></i>Conducting or facilitating gambling.</li>
            <li><i className="fa-solid fa-circle-check"></i>Sharing content harmful to minors, including child pornography, which will result in immediate termination and reporting to law enforcement.</li>
            <li><i className="fa-solid fa-circle-check"></i>Operating sites related to FOREX, E-Gold Exchange, Second Life, pyramid schemes, or high-yield interest programs (HYIP).</li>
            <li><i className="fa-solid fa-circle-check"></i>Engaging in phishing, identity theft, or money laundering.</li>
            <li><i className="fa-solid fa-circle-check"></i>Selling weapons or ammunition.</li>
            <li><i className="fa-solid fa-circle-check"></i>Violating intellectual property rights of others. Incidents can be reported via our ‘Report Abuse’ form.</li>
            
          </ul>
          <p className="methodology-container-section2-para2"><span style={{ color: "#042152;" }}>Network Abuse:</span> Unauthorized access to or attacks on networks, running unauthorized file-sharing services, or using our services for network scanning or monitoring tools that interfere with or harvest data without consent is prohibited.</p>
          <p className="methodology-container-section2-para2"><span style={{ color: "#042152;" }}>System Performance:</span>Overuse of system resources which degrades performance for other customers is not allowed. This includes running scripts or processes that adversely affect our network</p>
          <p className="methodology-container-section2-para2"><span style={{ color: "#042152;" }}>Adult Content:</span> Hosting adult content without proper legal authorization is prohibited.</p>
          <p className="methodology-container-section2-para2"><span style={{ color: "#042152;" }}>Data Storage:</span> Upon account termination or service cancellation with or without prior notice, all data will be permanently deleted. We are responsible solely for hosting your website and do not retain any backups of your data. We possess the full right to erase or delete any backups from your hosting account at any time.</p>
          <div className="second-para">
          <p className="methodology-container-section2-para">
          2 . No Spam Policy
          </p>
          <p className="methodology-container-section2-para2">You may not use our services to send bulk unsolicited messages. We enforce a zero-tolerance spam policy. Unauthorized use of our services for transmission of spam messages, including those sent via email, fax, or other forms of communication, will result in immediate account termination.</p>
          <p className="methodology-container-section2-para">
          3 . Defamation and Objectionable Content
          </p>
          <p className="methodology-container-section2-para2">We do not monitor or censor content uploaded by users but reserve the right to remove or disable access to any content that is deemed objectionable or harmful at our discretion. Users are encouraged to maintain respectful and lawful interactions.</p>
          <p className="methodology-container-section2-para">
          4 . Enforcement
          </p>
          <p className="methodology-container-section2-para2">Reseller Accounts​: Violations by users within reseller accounts will be notified to the reseller for resolution. Continuous violations will result in termination of the reseller account.</p>
          <p className="methodology-container-section2-para2">Direct Customers: Direct violations of this policy will lead to service termination and possible legal action. We reserve the right to enforce or waive any part of this policy at our sole discretion.</p>
         
          <p className="methodology-container-section2-para">
          5 . Invoice and Payments
          </p>
          <p className="methodology-container-section2-para2">If the customer has not paid the invoice within the given due date, we have full authority to suspend the server or block the entire access and will terminate the current and all previously existing services without giving any prior notification. No new services or other products will be provided until the pending payment is cleared. In such cases, no amount will be refunded under any circumstances.</p>
          
          
          </div>
          </div>

        </section>
    
    </div>
  )
}
