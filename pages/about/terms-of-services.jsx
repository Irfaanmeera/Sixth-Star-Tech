import React from 'react'
import Head from 'next/head'
import MetaTags from '../../components/MetaTags';

export default function termsofservices() {
  return (
    <div>
      <MetaTags />

      <section className='termsofservices-container-banner'>
          <div className='termsofservices-container-banner-content'>
            <h1 className='termsofservices-container-banner-content-heading'>
            Terms and Conditions
            </h1>
           

          </div>
        </section>{/* banner-ends */}   

      <section className='termsofservices-section2'>
        <div className='termsofservices-section2-content container'>
          <h2 className='termsofservices-section2-heading'>
          Welcome
          </h2>
          <p className='termsofservices-section2-para'>
          Welcome to our services. By utilizing our services, you agree to be bound by the following terms and conditions. Please review them thoroughly to ensure you understand and accept all provisions. Note that these terms are subject to updates at any time, and we encourage regular review.
          </p>
          <h2 className='termsofservices-section2-heading'>
          Domain Name Registration
          </h2>
          <p className='termsofservices-section2-para'>
          Ensure the availability of your desired domain names before requesting registration. Although we make every effort to secure your preferred domain, we cannot guarantee its availability due to possible prior claims or other registration complications. If registration of your chosen domain is not possible, we will issue a refund within 10 days. For any concerns, please promptly contact our support team.
          </p>

          <h2 className='termsofservices-section2-heading'>
          Service Availability and Delivery
          </h2>
          <p className='termsofservices-section2-para'>
          Our services are designed to ensure security and reliability. We aim to activate purchased services by the next business day. Upon successful payment, all necessary login details will be delivered via email. We will inform you in advance of any potential delays and provide ongoing updates regarding service deployment.
          </p>

          <h2 className='termsofservices-section2-heading'>
          Account Misuse
          </h2>
          <p className='termsofservices-section2-para'>
          We reserve the right to suspend or terminate services without prior notice for any breaches of our policies, which include unauthorized account transfers among other violations.
          </p>
          <h2 className='termsofservices-section2-heading'>
          Money-Back Guarantee
          </h2>
          <p className='termsofservices-section2-para'>
          A 7-day money-back guarantee is available for all server services, allowing new users to evaluate our offerings. Should you opt to deactivate your service within this period, a full refund will be provided, minus any fees for administration or installation. within 4 to 30 days refund witll be transferred after the initiation to the original payment account
          </p> 
          <h2 className='termsofservices-section2-heading'>
          Real Time Backups and Data Loss
          </h2>
          <p className='termsofservices-section2-para'>
          We provide daily and weekly real-time backups upon request, we are not responsible for any data loss that occurs on your end. In case of data loss, efforts will be made to restore from the most recent backup available.
          </p>

          <h2 className='termsofservices-section2-heading'>
          Indemnification
          </h2>
          <p className='termsofservices-section2-para'>
          You agree to indemnify and hold harmless our company, its affiliates, and employees from any claims, liabilities, or expenses arising from your violations of these terms.
          </p>

          <h2 className='termsofservices-section2-heading'>
          Entire Agreement
          </h2>
          <p className='termsofservices-section2-para'>
          This document represents the full agreement between you and our company regarding our services. Should any provision be deemed unenforceable, it will be amended to as closely reflect the original intent as possible.
          </p>

          <h2 className='termsofservices-section2-heading'>
          Billing and Payment Information
          </h2>
          
         <ul className='termsofservices-section2-para'>
          <li><i className="fa-solid fa-circle-check"></i>Prepayment: Services require prepayment. Keep your payment information current.</li>
          <li><i className="fa-solid fa-circle-check"></i>Auto-renewal: Services will continue on an auto-renewal basis until cancellation is explicitly requested.</li>
          <li><i className="fa-solid fa-circle-check"></i>Taxes: Listed prices do not include taxes. Applicable taxes will be added as per the invoice.</li>
          <li><i className="fa-solid fa-circle-check"></i>Late Payment: Late payments may result in service suspension or termination.</li>
          <li><i className="fa-solid fa-circle-check"></i>Fraud: Immediate action is taken against suspected fraudulent payment activities.</li>
          <li><i className="fa-solid fa-circle-check"></i>Invoice Disputes: Please contact our billing department with any issues promptly.</li>
          <li><i className="fa-solid fa-circle-check"></i>Price Changes: We reserve the right to modify pricing and will notify you in advance of such changes.</li>
          
         </ul>
          

          <h2 className='termsofservices-section2-heading'>
          No Spam Policy
          </h2>
          <p className='termsofservices-section2-para'>
          Sending unsolicited bulk communications is prohibited. Ensure SMTP relay settings are secure.
          </p>

          <h2 className='termsofservices-section2-heading'>
          Data Protection Compliance
          </h2>
          <p className='termsofservices-section2-para'>
          In compliance with Indian data protection regulations, we are committed to protecting your personal information. Data processing and storage are performed with the utmost care and legal compliance, ensuring data privacy and security.
          </p>

          <h2 className='termsofservices-section2-heading'>
          Disclaimer and Warranty
          </h2>
          <p className='termsofservices-section2-para'>
          Neither we nor our suppliers guarantee that the services will meet your specific needs, or that service will be uninterrupted or error-free. All implied warranties, including any warranty of merchantability or fitness for a particular purpose, are expressly disclaimed.

          These terms are designed to ensure a mutual understanding and enhance your experience with our services. We value your cooperation and are committed to delivering quality services.
          </p>

          <p>If the customer has not paid the invoice within the given due date, we have full authority to suspend the server or block the entire access and will terminate the current and all previously existing services without giving any prior notification. No new services or other products will be provided until the pending payment is cleared. In such cases, no amount will be refunded under any circumstances.</p>

        </div>

      </section>
    </div>
  )
}
