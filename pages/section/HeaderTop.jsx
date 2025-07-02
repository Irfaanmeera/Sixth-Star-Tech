import React from 'react'
import Link from 'next/link'



export default function HeaderTop() {
  return (
    <div>

        {/* <!-- Topbar --> */}
        <div className="topbar top-head-desk">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-5 col-12 align-content-center">
                  {/* // Contact */}
                  <ul className="top-link top-contact">
                    <li><Link href="tel:9383996666" aria-label="sales phone"><i className="fa fa-phone"></i> +91 9383996666</Link></li>
                    <li><i className="fa fa-envelope" aria-label="sales email"></i><Link href="mailto:sales@sixthstar.in">sales@Sixthstar.in</Link></li>
                    <li><Link href="tel:9962107399" aria-label="sales phone"><i className="fa fa-phone"></i> +91 9962107399</Link></li>
                  </ul>
                  {/* <!-- End Contact --> */}
                </div>
                <div className="col-lg-6 col-md-7 col-12 align-content-center">
                  <div className="row">
                    <div className="col-md-6 text-end">
                      <div className="header-social">
                        <Link href='https://www.facebook.com/sixthstartechnologies.page/' aria-label="facebook link"><i className="fa-brands fa-facebook"></i></Link>
                        <Link href='https://twitter.com/sixthstartechno' aria-label="twitter link"><i className="fa-brands fa-x-twitter"></i></Link>
                        <Link href='https://www.youtube.com/@sixthstarTechnologies' aria-label="youtube link"><i className="fa-brands fa-youtube"></i></Link>
                        <Link href='https://www.instagram.com/sixthstar_technologies/' aria-label="instagram link"><i className="fa-brands fa-instagram"></i></Link>
                        <Link href='https://www.linkedin.com/company/sixth-star-technologies' aria-label="linkedin link"><i className="fa-brands fa-linkedin"></i></Link>
                      </div>
                    </div>

                    <div className="col-md-6 ">
                      <ul className="top-contact">
                        <li><Link href="/about/career" id='blinking'>CAREERS</Link></li>
                        <li><button className='head-but-1'><Link href='/request-a-quote'>Get a Quote</Link></button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Topbar --> */}

           {/* <!-- Topbar mobile starts --> */}

           <div className="topbar top-head-mob">
           <div className="container">
          <div className="row ">
          <div className="col-12">
          <div className="header-social">
                        <Link href='https://www.facebook.com/sixthstartechnologies.page/' aria-label="facebook link"><i className="fa-brands fa-facebook"></i></Link>
                        <Link href='https://twitter.com/sixthstartechno' aria-label="twitter link"><i className="fa-brands fa-x-twitter"></i></Link>
                        <Link href='https://www.youtube.com/@sixthstarTechnologies' aria-label="youtube link"><i className="fa-brands fa-youtube"></i></Link>
                        <Link href='https://www.instagram.com/sixthstar_technologies/' aria-label="instagram link"><i className="fa-brands fa-instagram"></i></Link>
                        <Link href='https://www.linkedin.com/company/sixth-star-technologies' aria-label="linkedin link"><i className="fa-brands fa-linkedin"></i></Link>
                      </div>
          </div>

  </div>
</div>
            </div>


           {/* <!-- Topbar mobile ends --> */}

    </div>
  )
}
