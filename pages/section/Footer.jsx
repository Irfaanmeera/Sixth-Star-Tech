import Link from 'next/link';
import React, { Component } from 'react'
import FloatingIcons from './FloatingIcons'
import Image from 'next/image';

export class footer extends Component {
  render() {
    return (
      <div>

<footer id="footer" className="footer">
			{/* <!-- Footer Top --> */}
			<div className="footer-top">
				<div className="container1 ">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer">
								<h2>About Us</h2>
								<p>With over 16+ years of expertise, Sixth Star Technology stands as a premier IT solution provider in India.</p>
								<ul className="footer-link">
								<li><i className="fa fa-envelope"></i><Link href="mailto:sales@sixthstar.in">sales@sixthstar.in</Link></li>
								<li><i className="fa fa-envelope"></i><Link href="mailto:support@sixthstar.in">support@sixthstar.in</Link></li>
							</ul>
								{/* <!-- Social --> */}
								<ul className="social">
									<li><Link href="https://www.facebook.com/sixthstartechnologies.page/" aria-label="Follow us on Facebook"><i className="fa-brands fa-facebook"></i></Link></li>
									<li><Link href="https://twitter.com/sixthstartechno" aria-label="Follow us on Twitter"><i className="fa-brands fa-x-twitter"></i></Link></li>
									<li><Link href="https://www.youtube.com/@sixthstarTechnologies" aria-label="Follow us on Youtube"><i className="fa-brands fa-youtube"></i></Link></li>
									<li><Link href="https://www.instagram.com/sixthstar_technologies/" aria-label="Follow us on Instagram"><i className="fa-brands fa-instagram"></i></Link></li>
									<li><Link href="https://www.linkedin.com/company/sixth-star-technologies" aria-label="Follow us on Linkedin"><i className="fa-brands fa-linkedin"></i></Link></li>
								</ul>
								{/* <!-- End Social --> */}
							</div>
						</div>
						
						<div className="col-lg-6 col-md-6 col-12">
						<div className="row">
							<div className="col-12 p-0">
							<div className="cert-Image pb-2">
								<Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055888/iso-20000_obiguc.webp" width={71} height={71} alt="iso-20000" loading='lazy'/>
								<Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055888/gdpr_qhmwv2.webp" width={71}  height={71} alt="gdpr" loading='lazy' />
								<Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055889/rqc_vqtye4.webp" width={71}  height={71} alt="rqc" loading='lazy' />
								<Image src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055890/ukasl_ae4pum.webp" width={71}  height={71} alt="ukasl" loading='lazy' />
								<Image 
								src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1722055889/iso-27001_nenayk.webp" width={71}  height={71} alt="iso-27001" loading='lazy'
								/>					
							</div>

							</div>
						</div>

						<div className="row">
							<div className="col-12">
								<div className="row">
								<div className="col-md-6">
								<div className="single-footer foot-address">
								<h3 style={{marginBlock:'-4px',marginTop:'5px'}}>Corporate Office:</h3>
								<p>Sixth Star Technologies, 1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar,  Thoraipakkam, Chennai, Tamilnadu,
								India – 600097</p>
								
								 <h3 style={{marginBlock:'-4px'}}>Germany:</h3>
								<p>Sixth Star Technologies, Boetzinger Straße 60, 79111 Freiburg, Germany</p>
								   <h3 style={{marginBlock:'-4px'}}>Singapore :</h3>
								 <p>71 Ubi Crescent #06-07C, Excalibur Centre, Singapore 408571</p>
							</div>
								</div>

								<div className="col-md-6">
								<div className="single-footer foot-company f-link">
							<div className="single-footer foot-address">
								<h3 style={{marginBlock:'-4px' ,marginTop:'5px'}}>Malaysia:</h3>
								<p>Sixth Star Technologies, C4-2-39, Jalan 1/152,Taman OUG, Parklane ,58200, Kuala Lumpur, Malaysia.</p>
								<h3 style={{marginBlock:'-4px',marginTop:'5px'}}>Hyderabad:</h3>
								<p >Sixth Star Technologies, Plot No A-38,Ground Floor JJ Nagar , Naredmet x Roads, Hyderabad-500094
								PH: 9383996666</p>
								
							  
							
							</div>
							</div>
								</div>
								</div>
								
							</div>
						</div>

						</div>

						<div className="col-lg-3 col-md-6 col-12">
							<div className="single-footer f-link">
								<div className="row">
									<div className="col-lg-6 col-md-6 col-6">
									<ul>
								<li><Link href="#" style={{ fontWeight: 600 }}>Company</Link></li>
								<li><Link href="/about">About</Link></li>
								<li><Link href="/about/whysixthstar">Why Sixthstar</Link></li>
								<li><Link href="/about/businessmodels">Business Models</Link></li>
								<li><Link href="/about/testimonials">Testimonials</Link></li>	
								<li><Link href="/about/clients">Clients</Link></li>	
								<li><Link href="/about/career">Careers</Link></li>	
								<li><Link href="/about/methodology">Methodology</Link></li>	
								<li><Link href="/about/sitemap">Sitemap</Link></li>	
								<li><Link href="/about/privacypolicy">Privacy Policy</Link></li>	
								<li><Link href="/about/acceptable-use-policy">Acceptable Use Policy</Link></li>	
								<li><Link href="/blogs">Insights</Link></li>
								</ul>
									</div>
									<div className="col-lg-6 col-md-6 col-6">
									<ul>
								<li><Link href="#" style={{ fontWeight: 600 }}>Servers</Link></li>
								<li><Link href="/servers/dedicated-server">Dedicated Servers </Link></li>
							    <li><Link href="/servers/cloud-hosting-services">Cloud</Link></li>
								<li><Link href="/servers/vps-server-hosting">VPS Server</Link></li>
								<li><Link href="/servers/web-hosting">Shared Server</Link></li>
								<li><Link href="#" style={{ fontWeight: 600 }}>Hosting</Link></li>
								<li><Link href="/servers/web-hosting">Shared Hosting</Link></li>	
								<li><Link href="#">Reseller Hosting</Link></li>	
								<li><Link href="/servers/dedicated-server">Dedicated Hosting</Link></li>	
								<li><Link href="/servers/cloud-hosting-services">Cloud Hosting</Link></li>	
								<li><Link href="/servers/vps-server-hosting">VPS Hosting</Link></li>	
								<li><Link href="/ssl-certificate">SSL Certificate</Link></li>		
								</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--/ End Footer Top -->
			<!-- Copyright --> */}
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							<div className="copyright-content">
								<p>© Copyright 2025  |  All Rights Reserved by <Link href="#" target="_blank">Sixthstar tech</Link> </p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--/ End Copyright --> */}
		</footer>

		{/* popup icon starts */}
				<FloatingIcons />
		{/* popup icon ends */}
      </div>
    )
  }
}

export default footer