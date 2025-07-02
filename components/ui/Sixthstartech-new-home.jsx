import React from 'react';
import { Rocket } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';


const logoSet1 = [
  'https://res.cloudinary.com/daggx9p24/image/upload/v1745496948/butterfly-logo_lihzni.png', 'https://res.cloudinary.com/daggx9p24/image/upload/v1745496948/mtutor_ax0010.png', 'https://res.cloudinary.com/daggx9p24/image/upload/v1745496947/imc-logo_gt8kwt.png',
  'https://res.cloudinary.com/daggx9p24/image/upload/v1745496946/kshema_ivekpp.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745496946/dahnay-logo_wnik6h.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745496945/nccr-logo_ucqyqo.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745496945/vcare-logo_w3muev.png',
  'https://res.cloudinary.com/daggx9p24/image/upload/v1745496944/voltech-logo_bpdevu.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745496914/efiling-logo_cnargm.png',
  'https://res.cloudinary.com/daggx9p24/image/upload/v1745647539/hlf-services-logo_zi5nmc.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745647653/vcerp-logo_vouehe.png',  
];

const logoSet2 = [
  'https://res.cloudinary.com/daggx9p24/image/upload/v1745559668/marg_aamtoc.png', 'https://res.cloudinary.com/daggx9p24/image/upload/v1745559667/gro_b2ah8v.png', 'https://res.cloudinary.com/daggx9p24/image/upload/v1745559666/hhf_qqrolg.png',
  'https://res.cloudinary.com/daggx9p24/image/upload/v1745559666/kingfa_rxzrmw.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745559666/panimalar_bptaem.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745559666/power_bwpxtm.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745559665/ifluids_vnt9u9.png',
'https://res.cloudinary.com/daggx9p24/image/upload/v1745559665/sahara_x8parw.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745559662/marg-logo_omqdhz.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745559650/hoec-logo_py4wmy.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745559650/jamal_mohamed_-logo_r8bx6a.png'  
];
const logoSet3 = [
  'https://res.cloudinary.com/daggx9p24/image/upload/v1745559665/rock_worth_m8q5qt.png', 'https://res.cloudinary.com/daggx9p24/image/upload/v1745559664/spl_udjjtm.png', 'https://res.cloudinary.com/daggx9p24/image/upload/v1745559664/tech_india_wntwyx.png',
'https://res.cloudinary.com/daggx9p24/image/upload/v1745559663/tvs_wftk3c.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745559663/tnlp-logo_syybbk.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745496509/bonton-logo_rwl4lf.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745559663/vecura_h0gvgr.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745559662/vasanth_tv_bjwec1.png',
'https://res.cloudinary.com/daggx9p24/image/upload/v1745559662/ashok_leyalnd_hrcwkc.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745559650/makkal-logo_fod6pu.png','https://res.cloudinary.com/daggx9p24/image/upload/v1745559650/vijaytv-logo_unqnnc.png'
];




const LogoRow = ({ images }) => (
  <div className="overflow-hidden w-full">
    <div className="flex whitespace-nowrap animate-scroll-slow md:animate-scroll">
      {[...images, ...images].map((src, i) => (
        <div
          key={i}
          className="flex-shrink-0 w-[200px] h-[100px] flex items-center justify-center px-4"
// changed from mx-4 to px-2
        >
          <img
  src={src}
  alt="client logo"
  className="object-contain w-full h-full"
/>

        </div>
      ))}
    </div>
  </div>
);



const HeroSection = () => {
  return (

<>
<Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link
  href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
  rel="stylesheet"
/>
</Head>


    <section className="relative bg-[url(https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747379680/Untitled_1500_x_1000_px_2_wpxpyj.jpg)] bg-cover py-4 overflow-hidden pt-40 ">


      <div className="container mx-auto px-16 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div className="md:w-1/3 mb-10 md:mb-0 z-10">
            <div className="flex items-center gap-4 mb-6">
            
              <div className="text-xl md:text-xl text-navy font-semibold">
                Let's Go Digitally Hyperscale
              </div>
            </div>

            <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#2d387a] leading-tight font-sans ">
              With SixthStar
            </h1>

            <div className="relative mt-10 flex flex-row items-center gap-8 flex-wrap">
  {/* Rocket GIF */}
  {/* <img
    className="w-40 h-40"
    src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747377953/Untitled_design_3_okdiim.gif"
    alt="Rocket"
  /> */}

  {/* Checklist on the right of the image */}
  <div className="space-y-4">
    {[
     
      'More Power and Flexibility',
      'Real techies on call 24/7',
      'Fully Managed services',
       
    ].map((text, index) => (
      <div
        key={index}
        className="flex items-center gap-4 bg-white dark:bg-slate-700 shadow-md rounded-xl px-3 py-2 w-fit transition hover:scale-[1.02]"
      >
        <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-slate-700 dark:text-white font-medium text-base">
          {text}
        </span>
      </div>
    ))}
  </div>
</div>

          </div>

          {/* Right side: 3 synced carousels */}
          <div className="md:w-2/3 space-y-8 pb-10">
            <LogoRow images={logoSet1} />
            <LogoRow images={logoSet2} />
            <LogoRow images={logoSet3} />
          </div>
        </div>
      </div>

      {/* Ratings at bottom center */}
     {/* Ratings at bottom center */}
<section className="relative py-4">
  <div className="container mx-auto px-2">
    <div className="flex flex-wrap justify-center gap-6">
      {["Google", "Capterra", "Trustpilot"].map((platform, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-3xl px-4 py-3 shadow-lg w-64"
        >
          <img
            src={[
              "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747307673/4.5_145_x_45_px_175_x_75_px_9_lvyca7.png",
              "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747308757/4.5_145_x_45_px_175_x_75_px_12_qtemea.png",
              "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747307594/4.5_145_x_45_px_175_x_75_px_8_alwa6n.png",
            ][index]}
            alt={platform}
            className="w-40 h-16 sm:w-44 sm:h-20 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 opacity-80 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-72 bg-blue-100 rounded-tl-full -z-10"></div>
    </section>
    </>
  );
};

export default HeroSection;
