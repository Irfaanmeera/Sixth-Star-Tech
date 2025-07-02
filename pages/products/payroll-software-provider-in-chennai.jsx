import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import AnimatedHeading from '../../components/AnimatedHeading'
import PayrollTab from '../section/PayrollTab'
import PayrollSlider from '../section/PayrollSlider'
import FeatureHideShow from '../../components/FeatureHideShow'
import PayrollForm from '../forms/PayrollForm'
import Image from 'next/image'
import MetaTags from '../../components/MetaTags';
import {payrollSoftwareSchema} from '../../lib/data/schema'

export default function PayrollSoftwareProviderInChennai() {

  return (
    <div>
      <MetaTags />
      <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241620/payroll-bg_hvkiex.webp" type="image/webp" />
  <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(payrollSoftwareSchema) }}
                />
</Head>

      <div className='main'>

         {/* banner sec start */}
         <section className='payroll-banner'>
        <div className="container ">
  <div className="row p-2">

    <div className="ban-left-1 col-md-6">
        <h1 className='server-1 '>Streamline Yourpayroll processes</h1>
        <div >
        <div className="row fleet-banner-fet p-2">
            <ul className="list1 col-md-12" >
                <li> <i className="fa-regular fa-square-check"></i>Increase Efficiency</li>
                <li> <i className="fa-regular fa-square-check"></i>Boost Productivity</li>
                <li> <i className="fa-regular fa-square-check"></i>Improve Safety</li>
            </ul>
        </div>
        <br/>
            <Link href="/contact-us" className='banner-but'>Get Started</Link>
        </div>
    </div>

    <div className="col-md-6">

    </div>

  </div>
</div>
            </section>

            {/* banner sec ends */}

            {/* hr payroll software starts */}

            <section className="payroll-software  p-3">
            <div className="container">
          <div className="row ">

          <div className="col-12">
          <AnimatedHeading className='server heading p-3'>HR Payroll Software Provider in Chennai​</AnimatedHeading>
          <div className="row ">
          <div className="col-md-6 align-content-center payroll-why-img">
            <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241711/payroll-providers-in-chennai_n1umwm.webp" alt="HR Payroll Software Provider" loading='lazy' width={480} height={270}/>
          </div>


          <div className="col-md-6 text-center">
           <h2>Best Payroll Management Systems</h2>
           <p>Do you have a business or are you about to start a venture? Are productivity levels on the decline as a result of an absence of critical technology tools that can manage these core aspects of business more effectively such as PAYROLL? If so, then it might be time for you to switch gears to the top payroll software vendor and link arms with those top Payroll System providers in Chennai who will make Payroll Management seem like a picnic.</p>
           <br/>
           <Link href='/contact-us'>Get a Demo</Link> 
          </div>

          </div>
          </div>


          </div>
          </div>
            </section>

            {/* hr payroll software starts */}


            {/* why choose sec starts */}
            
            <section className="payroll-whychoose-sec">
            <div className="container">
            <div className="row ">

            <div className="col-12">
            <AnimatedHeading className='server heading p-3'>Why Choose HMS Software?​</AnimatedHeading>
            </div>
            <PayrollTab />
            </div>
            </div>

            </section>
            
            {/* why choose sec ends */}

            {/* Processes sec starts */}
      <section className='hr-process-sec'>
          <div className="container">
            <div className="row ">

            <div className="col-12">
            <AnimatedHeading className='server heading p-3'>HR Processes with Intuitive Automation​</AnimatedHeading>
            <PayrollSlider />
            </div>

            </div>
          </div>

      </section>
            {/* Processes sec ends */}

            {/* contact section ends*/}
<section className='fleet-call-t0-sec'>

<div className="container">
  <div className="row justify-content-center fleet-c2a container ">

    <div className="col-md-8 align-content-center text-center">
    <h3>Our customer care experts are always available to assist</h3>
    </div>

    <div className="col-md-4 align-content-center text-center">
    <Link href="/contact-us">Contact us</Link>
    </div>

  </div>
</div>
</section>
{/* contact section ends*/}

{/* fleet-feat-sec starts */}

<section className="payroll-feat-sec">
<div className="container">
  <div className="row text-center">

    <div className="col-12">
    <AnimatedHeading className='server heading p-3'>The Features Of Payroll Software​</AnimatedHeading>
    </div>
<div className='fleet-feat-1' >
    <div className="row ">
<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241931/taxes_tmtlgr.webp" alt="Taxation features" width={100} height={100} loading='lazy' />
    <h3>Taxation features</h3>
    </div>
    <div className="flip-card-back flip-box-back">
      <ul>
        <li>Form 16</li>
        <li>TDS</li>
        <li>E-Return</li>
        <li>Compute Income Tax</li>
      </ul>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241914/division_rmhtby.webp" alt="Employee Related" width={100} height={100} loading='lazy' />
    <h3>Employee Related</h3>
    </div>
    <div className="flip-card-back flip-box-back">
    <ul>
        <li>Employee Profiles</li>
        <li>Employee Details</li>
        <li>Contact Details</li>
        <li>Date Related Reports</li>
      </ul>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241923/Reporting-and-Analytics_ivfuet.webp" alt="Hr Reports" width={100} height={100} loading='lazy' />
    <h3>Hr Reports</h3>
    </div>
    <div className="flip-card-back flip-box-back">
    <ul>
        <li>Pay slip</li>
        <li>Advanced Pay slip</li>
        <li>Salary sheet</li>
        <li>Salary abstract</li>
      </ul>
    </div>
  </div>
</div>

</div>

<div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241909/calculator_hgzdsp.webp" alt="Income Tax Related" width={100} height={100} loading='lazy' />
    <h3>Income Tax Related</h3>
    </div>
    <div className="flip-card-back flip-box-back">
    <ul>
        <li>Estimation of TDS</li>
        <li>Deduction of TDS</li>
        <li>Challan entry & Printing</li>
        <li>Generation of Form 24Q</li>
      </ul>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241920/report_knuwhm.webp" alt="Statutory Reports" width={100} height={100} loading='lazy' />
    <h3>Statutory Reports</h3>
    </div>
    <div className="flip-card-back flip-box-back">
    <ul>
        <li>PF Report & ESI Report</li>
        <li>Monthly PF & ES</li>
        <li>Form 3A, 6A, 10, 12-a</li>
        <li>PF & ESI Challan</li>
      </ul>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241934/transaction_rv57ol.webp" alt="Transactions" width={100} height={100} loading='lazy' />
    <h3>Transactions</h3>
    </div>
    <div className="flip-card-back flip-box-back">
    <ul>
        <li>Advances</li>
        <li>Loans</li>
        <li>Insurance Insurance</li>
        <li>Incentives</li>
      </ul>
    </div>
  </div>
</div>

  </div>
  </div>

  <FeatureHideShow buttonText="Learn More" className="about-class container p-0" > 
  <div className='fleet-feat-2' >
  <div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241906/bill_f3ejmt.webp" alt="TDS features" width={100} height={100} loading='lazy' />
    <h3>TDS features</h3>
    </div>
    <div className="flip-card-back flip-box-back">
    <ul>
        <li>Advances</li>
        <li>TSD/TCS and file</li>
        <li>Form 24Q, 26Q, 27Q and 27EQ</li>
        <li>Generation of Form</li>
      </ul>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241929/settings_ymyhbo.webp" alt="Tools" width={100} height={100} loading='lazy' />
    <h3>Tools</h3>
    </div>
    <div className="flip-card-back flip-box-back">
    <ul>
        <li>Import export excel</li>
        <li>Template definition, processing</li>
        <li>Payroll calendar</li>
        <li>Interest calculator</li>
      </ul>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241918/profit_ldkfom.webp" alt="Monthly Reports" width={100} height={100} loading='lazy' />
    <h3>Monthly Reports</h3>
    </div>
    <div className="flip-card-back flip-box-back">
    <ul>
        <li>Salary Sheet</li>
        <li>Pay Slip</li>
        <li>Bank Statement</li>
        <li>Attendance Details</li>
      </ul>
    </div>
  </div>
</div>

  </div>


  <div className="row ">

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241912/Customizable-Dashboards_awv2wk.webp" alt="Masters" width={100} height={100} loading='lazy' />
    <h3>Masters</h3>
    </div>
    <div className="flip-card-back flip-box-back">
    <ul>
        <li>Attendance settings</li>
        <li>Leave settings</li>
        <li>Holiday list</li>
        <li>OT management</li>
      </ul>
    </div>
  </div>
</div>

<div className="col-lg-4 col-md-12 flip-card">
<div className="flip-card-inner">
    <div className="flip-card-front flip-box">
    <Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722241926/salary_pblmz9.webp" alt="Salary" width={100} height={100} loading='lazy' />
    <h3>Salary</h3>
    </div>
    <div className="flip-card-back flip-box-back">
    <ul>
        <li>Salary editor</li>
        <li>Earnings/deduction sheet</li>
        <li>Adjustments</li>
        <li>ESI charges</li>
      </ul>
    </div>
  </div>
</div>


  </div>

  </div>
  </FeatureHideShow>

  </div>
</div>
</section>

{/* fleet-feat-sec ends */}

{/* faq sec starts */}
<section className='payroll-faq-sec'>
<AnimatedHeading className='server heading'>FAQ</AnimatedHeading>
<div className="container">
  <div className="row ">

    <div className="col-12 text-center">
    
    <div className="accordion payroll-faq" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is payroll software, and how does it benefit my business?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Payroll software is a device that assists one in computing, disbursement of wages, and taxation on behalf of staff. It is beneficial in that it promotes efficiency, reduces mistakes, upholds tax compliance, and saves time for your essential business functions.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Can your payroll software handle both salaried and hourly employees?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>Yes, it can handle salaried as well as hourly-paid workers. The solution supports numerous payment plans allowing precise determination of every type of settlement.</p>
        </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How does your software handle payroll taxes?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>We make it simple for businesses to manage their payroll taxes since our software calculates them in accordance with the current regulations. It faithfully holds back federal, state, and local taxes, as well as Social Security and Medicare which is in conformity with Tax Laws.</p>
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Is your payroll software scalable for growing businesses?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Absolutely. We have made our software flexible enough to meet the needs of any type of
        enterprise. Irrespective of whether you are a start-up or a big organization, our solution grows with you, without sacrificing efficacy and precision.</p>
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Can your software handle multiple pay rates and deductions?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p>Yes, our software is used to manage employees that have different pay rates, deductions, and benefits. This allows you to set different settings according to the categories of employees so that payroll processing is performed in a reliable way with respect to every group.</p>
        </div>
    </div>
  </div>
</div>

    </div>

  </div>
</div>

</section>

{/* faq section ends */}

<section className='payroll-form-sec p-3 bg-white'>
<div className="container">
<div className="row">
<div className="col-12">
<PayrollForm />
</div>
</div>
</div>
</section>


      </div>
    </div>
  )
}
