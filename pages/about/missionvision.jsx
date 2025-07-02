import React from 'react'
import Head from 'next/head'
import MetaTags from '../../components/MetaTags';


export default function missionvision() {
  return (
    <div>
      <MetaTags />
      
      <div className='missionvision-main'>

        
        {/* banner */}
        <section className='missionvision-container-banner'>
          <div className='missionvision-container-banner-content container'>
            <h1 className='missionvision-container-banner-content-heading'>
              Mission & Vision
            </h1>
            <p className='missionvision-container-banner-content-para'>
              Our perception in business strategies made us deliver quality services

            </p>

          </div>
        </section>{/* banner-ends */}
        <section className='missionvision-main-section2'>
          <div className='missionvision-second-container container'>
            <div className="row">
              <div className='col-sm'>
                <div className='col-sm second-container-column1-content'>
                  <h1 className='second-container-column1-heading'>Mission</h1>
                  <p className='second-container-column1-para' > Our mission is to give ASSURANCE for the clients by providing the combinations of our hostile deliberate support with innovative quality services.</p>
                  <ul className='second-container-column1-list1' >
                    <li><i className="fa-solid fa-circle-check"></i>A - ACCOUNTABILITY</li>
                    <li><i className="fa-solid fa-circle-check"></i>S - STRATEGY</li>
                    <li><i className="fa-solid fa-circle-check"></i>A - ACCOUNTABILITY</li>
                    <li><i className="fa-solid fa-circle-check"></i>S - SERVICES</li>
                    <li><i className="fa-solid fa-circle-check"></i>U - UTILITY</li>
                    <li><i className="fa-solid fa-circle-check"></i>R - REALNESS</li>
                    <li><i className="fa-solid fa-circle-check"></i>A - ACCESSIBLE</li>
                    <li><i className="fa-solid fa-circle-check"></i>N - NULLIVERSE</li>
                    <li><i className="fa-solid fa-circle-check"></i>C - CREATIVITY</li>
                    <li><i className="fa-solid fa-circle-check"></i>E - EMBELLISHMENT</li>
                  </ul>
                </div>

              </div>
              <div className='col-sm'>
                <div className='col-sm second-container-column2-content'>
                  <h1 className='second-container-column2-heading'>vision</h1>

                  <ul className='second-container-column2-list2'>
                    <li><i className="fa-solid fa-circle-check"></i>Globally significant for our “ECCENTRIC” software services provided for the customers.</li>
                    <li><i className="fa-solid fa-circle-check"></i>Be the Excellence, also stays unique in Hosting, Linux Service and Support.</li>
                    <li><i className="fa-solid fa-circle-check"></i>We mainly concentrate on Innovative Web Designing Services by including a High commitment..</li>
                    <li><i className="fa-solid fa-circle-check"></i>Value by forging SIXTH STAR - Efficient and Sustainable.</li>
                    <li><i className="fa-solid fa-circle-check"></i>To deliver product and services with the best quality.</li>
                    <li><i className="fa-solid fa-circle-check"></i>The main aim is to meet customer satisfaction by providing an excellent services to get authorization.</li>
                    <li><i className="fa-solid fa-circle-check"></i>To present the best service in marketing industries for our customers.</li>

                  </ul>
                </div>


              </div>
            </div>
          </div>

        </section>
      </div>
      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d492.4120417480844!2d80.233596!3d12.929387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1105717f8fe239c9%3A0x45c0f6cf503fc3ea!2sSixth%20Star%20Technologies%20-%20Web%20Hosting%20company%20in%20Chennai!5e1!3m2!1sen!2sin!4v1721890594475!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      </div>


    </div>
  )
}

