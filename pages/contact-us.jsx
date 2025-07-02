import React from 'react'
import Head from 'next/head'
import ContactUsForm from './forms/ContactUsForm'
import Link from 'next/link'
import MetaTags from '../components/MetaTags';
export default function ContactUs() {


  const contactInfoChennai = [
  { icon: 'fa-phone', text: '(044) 43869199', href: 'tel:43869199', color: 'blue' },
  { icon: 'fa-phone', text: '+91 99621 07399', href: 'tel:9962107399', color: 'blue' },
  { icon: 'fa-envelope', text: 'sales@sixthstar.in', href: 'mailto:sales@sixthstar.in', color: 'green' },
  { icon: 'fa-envelope', text: 'support@sixthstar.in', href: 'mailto:support@sixthstar.in', color: 'green' },
];

const contactInfoMalaysia=[
 { icon: 'fa-phone', text: ' +60 1021 17305', href: 'tel:102117305', color: 'blue' },
  { icon: 'fa-phone', text: '+03 7772 0136', href: 'tel:7772 0136', color: 'blue' },
   { icon: 'fa-envelope', text: 'sales@sixthstar.in', href: 'mailto:sales@sixthstar.in', color: 'green' },
  { icon: 'fa-envelope', text: 'support@sixthstar.in', href: 'mailto:support@sixthstar.in', color: 'green' },

]

const contactInfoGermany =[
  { icon: 'fa-phone', text: '+49 761 4514 0', href: 'tel:+76145140', color: 'blue' },
   { icon: 'fa-envelope', text: 'sales@sixthstar.in', href: 'mailto:sales@sixthstar.in', color: 'green' },
  
]

const contactInfoHyderabad=[
  { icon: 'fa-phone', text: '+91 9383996666', href: 'tel:9383996666', color: 'blue' },
]

const contactInfoSingapore=[
  { icon: 'fa-phone', text: '+91 93839 96666', href: 'tel:9383996666', color: 'blue' },
  { icon: 'fa-envelope', text: 'sales@sixthstar.in', href: 'mailto:sales@sixthstar.in', color: 'green' },
]
  return (
    <div>
    <MetaTags />

    <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1744871715/contact-bg_ud3jxw.webp" type="image/webp" />
</Head>

      <div className='main'>

        {/* banner sec starts */}

        <section className="contact-banner-sec">
        <div className="container-1">
  <div className="row ">

    <div className="col-12">
        <h1>Contact Us</h1>
    </div>

  </div>
</div>
        </section>

        {/* banner sec ends */}

        {/* contact form starts */}

    <section className="contact-form-sec">
    <div className="container-1">
  <div className="row">
    <div className="col-md-6">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.6483831902!2d80.2334966!3d12.9294261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1105717f8fe239c9%3A0x45c0f6cf503fc3ea!2sSixth%20Star%20Technologies%20-%20Web%20Hosting%20company%20in%20Chennai!5e0!3m2!1sen!2sin!4v1721981052844!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps location of SixthStar Technologies"/>
    </div>

    <div className="col-md-6 contact-form">
    <ContactUsForm />
    </div>

  </div>
</div>
    </section>

        {/* contact form ends */}

            {/* contact para sec starts */}
        <section className="contact-para-sec">
        <div className="container-1 ">
  <div className="row ">

    <div className="col-12">
        <p>We never fail to hear your queries at any cause. You can call us or email and can fix meetings to get your things done very quickly. We are always at your door step to get involved and ensure to remain in constant touch till you get rid of your problems. Though we branch out at various geographical regions we never break down in providing our vast IT services. We have got everything covered meeting your needs.</p>
    </div>

  </div>
</div>
        </section>

        {/* contact para sec starts */}``

        {/* contact address sec starts */}
        
      <section className="contact-add-sec py-10 bg-gray-100">
  <div className=" py-2 px-4">
    <h2 className="text-center text-xl font-semibold mb-4">Find Us</h2>
    <hr className="mb-8 border-gray-300" />

    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

      {/* Corporate Office */}
      <div className="bg-white border p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">Corporate Office</h3>
        <hr className="my-2 border-gray-600" />
        <p className="text-sm text-left text-gray-700 mb-3">
          <strong>Sixth Star Technologies,</strong><br />
          1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Muttukkaranchavadi, Thoraipakkam,Chennai, Tamilnadu, India – 600 097.
        </p>
  <ul className="space-y-2 text-sm  text-gray-800 p-0">
    {contactInfoChennai.map(({ icon, text, href, color }) => (
      <li key={text} className="flex items-center  gap-2">
        <div className={`text-${color}-600 bg-${color}-100 p-1 h-8 w-8 flex justify-center items-center rounded-full`}>
          <i className={`fa-${icon.includes('phone') ? 'solid' : 'regular'} ${icon}`} />
        </div>
        <a href={href} className={`hover:text-${color}-600 text-sm  transition-all`}>{text}</a>
      </li>
    ))}
  </ul>

      </div>

      {/* Malaysia */}
      <div className="bg-white border p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">Malaysia</h3>
         <hr className="my-2 border-gray-600" />
        <p className="text-sm text-left text-gray-700 mb-3">
          <strong>Sixth Star Technologies,</strong><br />
          C4-2-39, Jalan 1/152, Taman OUG, Parklane, 58200, Kuala Lumpur, Malaysia.
        </p>
        <ul className="space-y-2  text-gray-800 p-0"> 
        {contactInfoMalaysia.map(({ icon, text, href, color }) => (
       <li key={text} className="flex items-center  gap-2">
        <div className={`text-${color}-600 bg-${color}-100 p-1 h-8 w-8 flex justify-center items-center rounded-full`}>
          <i className={`fa-${icon.includes('phone') ? 'solid' : 'regular'} ${icon}`} />
        </div>
        <a href={href} className={`hover:text-${color}-600 text-sm  transition-all`}>{text}</a>
      </li>
    ))}
    </ul>
      </div>

      {/* Germany */}
      <div className="bg-white border p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">Germany</h3>
         <hr className="my-2 border-gray-600" />
        <p className="text-sm text-left text-gray-700 mb-3">
          <strong>Sixth Star Technologies,</strong><br />
          Boetzinger Straße 60, 79111 Freiburg, Germany.
        </p>
        <ul className="space-y-2 text-sm text-gray-800 p-0"> 
        {contactInfoGermany.map(({ icon, text, href, color }) => (
       <li key={text} className="flex items-center  gap-2">
        <div className={`text-${color}-600 bg-${color}-100 p-1 h-8 w-8 flex justify-center items-center rounded-full`}>
          <i className={`fa-${icon.includes('phone') ? 'solid' : 'regular'} ${icon}`} />
        </div>
        <a href={href} className={`hover:text-${color}-600 text-sm transition-all`}>{text}</a>
      </li>
    ))}
    </ul>
      </div>

      {/* Hyderabad */}
      <div className="bg-white border p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">Hyderabad</h3>
       <hr className="my-2 border-gray-600" />
        <p className="text-sm text-left text-gray-700 mb-3">
          <strong>Sixth Star Technologies,</strong><br />
          Infotech Plot No A-38, Ground Floor, JJ Nagar, Naredmet X Roads, Hyderabad – 500094
        </p>
         <ul className="space-y-2  text-gray-800 p-0"> 
        {contactInfoHyderabad.map(({ icon, text, href, color }) => (
      <li key={text} className="flex items-center  gap-2">
        <div className={`text-${color}-600 bg-${color}-100 p-1 h-8 w-8 flex justify-center items-center rounded-full`}>
          <i className={`fa-${icon.includes('phone') ? 'solid' : 'regular'} ${icon}`} />
        </div>
        <a href={href} className={`hover:text-${color}-600 text-sm  transition-all`}>{text}</a>
      </li>
    ))}
    </ul>
      </div>

      {/* Singapore */}
      <div className="bg-white border p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold">Singapore</h3>
        <hr className="my-2 border-gray-600" />
       <p className="text-sm text-left text-gray-700 mb-3 ">
          <strong>Sixth Star Technologies,</strong><br />
        71 UBI Crescent, #06-07C, Excalibur Centre Singapore 408571
        </p>
        <ul className="space-y-2  text-gray-800 p-0"> 
        {contactInfoSingapore.map(({ icon, text, href, color }) => (
       <li key={text} className="flex items-center  gap-2">
        <div className={`text-${color}-600 bg-${color}-100 p-1 h-8 w-8 flex justify-center items-center rounded-full`}>
          <i className={`fa-${icon.includes('phone') ? 'solid' : 'regular'} ${icon}`} />
        </div>
        <a href={href} className={`hover:text-${color}-600 text-sm  transition-all`}>{text}</a>
      </li>
    ))}
    </ul>
      </div>

    </div>
  </div>
</section>


        {/* contact address sec ends */}


      </div>
    </div>
  )
}
