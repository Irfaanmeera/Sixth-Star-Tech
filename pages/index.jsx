import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Head from 'next/head'
import MetaTags from '../components/MetaTags';
import {HomeLocalSchema} from '../lib/data/schema'
import { homeorgSchema } from '../lib/data/schema'
import HeroSection from '../components/ui/Sixthstartech-new-home'
import SixthstarPerformance from '../components/ui/sixthstartech-peromrmance'
import WhyChooseUs from '../components/home/sixthstartech-new-why-choose-us'
import FeaturesBentoGrid from '../components/home/sixthstartech-new-feature'
import Carousel from '../components/home/sixthstartech-testimonial'
import Faq1 from '../components/home/sixthstartech-new-faq'
import SixthstarContact from '../components/ui/sixthstartech-new-contact'
import Testimonial21 from '../components/home/sixthstartech-testimonial'
import HomeResources from '../components/home/home-resources'
import head from 'next/head'

const index=() =>{

  return (
	<div className='layout'>
   <MetaTags />
   <Head>
  <link rel="preload" as="image" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1726145324/home-banner-bg_eqodqu_k3yrm4.webp" type="image/webp" />
    <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(HomeLocalSchema) }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(homeorgSchema) }}
            />
</Head>


      <div className='main'>
        <HeroSection />
        <SixthstarPerformance />
        <WhyChooseUs />
        <FeaturesBentoGrid />
        <Testimonial21 />
        <HomeResources />
        <SixthstarContact />
        <Faq1 />
        
        


      </div>

    </div>
  )
}

export default index