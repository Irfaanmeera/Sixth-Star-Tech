import React from 'react'
import Head from 'next/head'
import MetaTags from '../../components/MetaTags';


export default function businessmodels() {
  return (
    <div>
      <MetaTags />
 {/* banner */}
 <section className='businessmodels-container-banner'>
          <div className='businessmodels-container-banner-content container'>
            <h1 className='businessmodels-container-banner-content-heading'>
            Business Models
            </h1>
            <p className='businessmodels-container-banner-content-para'>
            “Successful Business Model Have Strategic Planning”

            </p>

          </div>
        </section>{/* banner-ends */}


<div className='businessmodels-main'></div>
<section className='businessmodels-second-container-banner'>
          <div className='businessmodels-second-container-content container'>
            <h1 className='businessmodels-second-container-heading'>
            Business Models
            </h1>
            <p className='businessmodels-second-container-para'>
            Welcome to Carbonio Mail Service, brought to you by Sixth Star Technologies! We are excited to offer you an open-source email solution that is powerful, scalable, and reliable. Our Carbonio Mail Service is based on the Zextras Carbonio CE platform, which gives you access to advanced features that will take your email experience to the next level.
            With Carbonio Mail Service, you get a highly flexible and customizable email solution that is perfect for businesses of all sizes. Our solution supports ActiveSync for seamless synchronization across all your devices, distributed architecture for improved performance, and powerful collaboration tools for better team communication.

            </p>
            <h1 className='businessmodels-second-container-heading-2'>Predetermined Price Approach</h1>
            <p className='businessmodels-second-container-para2'>“Clear Vision and Outcomes”</p>
            <p className='businessmodels-second-container-para2-1'>Sixth Star Technologies acquires best business marketing plans with fixed price model. This model is applicable, only if the clients have clear vision about their requirement and discuss it with developers. They should allocate the fixed budget and time duration to complete the project. In case of any changes needed in the project execution that can be rectified immediately. This approach is useful for small projects with limited project scopes.</p>
            <ul className='businessmodels-second-container-list1' >
              <li><i className="fa-solid fa-circle-check"></i> Exact requirements and mentioned deadlines</li>
              <li><i className="fa-solid fa-circle-check"></i>  Fixed cost</li>
              <li><i className="fa-solid fa-circle-check"></i> MVPs</li>
              <li><i className="fa-solid fa-circle-check"></i> Small projects</li>
            </ul>

            <h1 className='businessmodels-second-container-heading-2'>Time and Material Approach</h1>
            <p className='businessmodels-second-container-para2'>“Flexibility and Modification”</p>
            <p className='businessmodels-second-container-para2-1'>Sixth Star Technologies uses this model, only for the long-term project and dynamic requirements. Time and Material based approach is the best option for the clients who doesn’t know the full project scope and specification. In this model, the exact number of hours and cost of resources is reported to the clients properly. We have certain skills like flexibility, ability to adjust requirements, feature replacement to get the perfect products. We could able to modify the certain specifications required from the client side.</p>
            <ul className='businessmodels-second-container-list1' >
              <li><i className="fa-solid fa-circle-check"></i> Not mentioned perfect requirement</li>
              <li><i className="fa-solid fa-circle-check"></i>  Long-Term projects</li>
              <li><i className="fa-solid fa-circle-check"></i> Flexibility</li>
              <li><i className="fa-solid fa-circle-check"></i> Required to change the scope of the project</li>
            </ul>

          </div>
        </section>{/* banner-ends */}
        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d492.4120417480844!2d80.233596!3d12.929387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1105717f8fe239c9%3A0x45c0f6cf503fc3ea!2sSixth%20Star%20Technologies%20-%20Web%20Hosting%20company%20in%20Chennai!5e1!3m2!1sen!2sin!4v1721890594475!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
</div>
  )
}
