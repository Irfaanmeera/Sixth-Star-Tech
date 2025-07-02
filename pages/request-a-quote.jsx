import React from 'react'
import Head from 'next/head'
import RequestForm from './forms/RequestForm'

export default function RequestAQuote() {
  return (
    <div>
        <Head>
     <title>Request a Quote - Sixthstar Technologies</title>
	<meta name="description" content="Request a quote at Sixthstar Technologies regarding the prices and plans of servers and hosting, Corporate business email solutions and more." />
  <link rel="canonical" href="https://sixthstartech.com/request-a-quote" />
	</Head>

    {/* banner sec starts */}
    <section className="request-banner-sec">
        <h1>Request Quote</h1>
    </section>
    {/* banner sec ends */}

        {/* form sec starts */}
        <section className="requestform-sec">
    <div className="container">
  <div className="row ">

    <div className="col-12">
        <h3>Request for Quote</h3>
        <hr />
        <RequestForm />
    </div>

  </div>
</div>
</section>
    {/* form sec ends */}

    </div>
  )
}
