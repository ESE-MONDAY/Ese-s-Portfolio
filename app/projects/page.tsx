'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import cover from '../../public/cover.jpg';
import cover2 from '../../public/cover2.png';
import MockupImage from '../../public/MockupImage.png';
import Travel from '../../public/Travel.png';
import Megamind from '../../public/megamind.png'
import Tempo from '../../public/Tempo.png'
import { FaLink, FaGithub } from "react-icons/fa";




const Works = () => {
  useEffect(() => {
    {
      async() =>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const scroll = new LocomotiveScroll();
      }
    }
  }, [])
  const container1 = useRef(null);
 
  return (
    <>
    <main className='text-[#363636] h-full overflow-y-auto px-4  py-10 md:p-24' ref={container1}>
      {/* Heading */}
    <div className="heading p-4">
             <h1 className='text-center text-[40px] sm:text-8xl font-gallient'>All <br/> Projects</h1>
        </div>
          {/* Projects */}
        <div className="projects mt-8">
          {/* Project 1 */}
        <div className='sm:w-[50%]'>
          <div className='bg-white p-8'>
          <Image src={MockupImage} loading='lazy'  alt='MyMarketsq - Ecommerce marketplace for goods and services in Africa and Uk' style={{objectFit:"cover"}}  />
          </div>
          
          <h2 className='text-xl sm:text-4xl font-bold mt-4 sm:mt-8'>MyMarketSq - Eccomerce </h2>
          <p className='mt-4 text-base'>Marketsq is a revolutionary two-in-one platform that combines the features of an ecommerce marketplace and a freelancing platform. It allows buyers to access sellers storefronts to buy and sell goods and services, creating a seamless experience for both transactions and freelance collaborations.</p>
            <Link href="https://www.mymarketsq.com/"  className="text-base " target='_blank'><FaLink size={16} className='mt-4'/></Link>
         
        </div>
        {/* Project 2 */}
        <div className='w-full flex justify-end mt-8'>
        <div className='sm:w-[50%]'>
          <Image src={cover} loading='lazy'  alt='Markin Architecture Studio based in Brooklyn New York' style={{objectFit:"cover"}} />
          <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>Markin Architecture Studio </h4>
            <p className='mt-4 text-base'>Markin is an architecture studio based in Broolyn, New York that specializes in crafting captivating spaces that inspire. With meticulous attention to detail and a passion for pushing design boundaries. </p>
            <Link href="https://spontaneous-vacherin-8afdf0.netlify.app/" className='text-base ' target='_blank'><FaLink size={16} className='mt-4'/></Link>
          
        </div>
        </div>
        {/* Project 3 */}
        <div className='flex mt-4'>
          <div className='sm:w-[50%]'>
              <Image src={cover2} loading='lazy'  alt='Skincare Mart - One Stop store for korean beauty products' style={{objectFit:"cover"}}  />
              <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>Skincare Website </h4>
              
              <Link href="https://verdant-bubblegum-5acbc7.netlify.app/" className='text-base ' target='_blank'><FaLink size={16} className='mt-4'/></Link>
           
          </div>
         
         
        </div>
         {/* Project 4 */}
         <div className='w-full flex justify-end mt-8'>
        <div className='sm:w-[50%]'>
          <Image src={Travel} loading='lazy'  alt='Book your next vacation with us! These websites can help you book the full package–flights, hotels, cars. It’s like having a travel agent. You can find solid deals with these sites, lthough you' style={{objectFit:"cover"}} />
          <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>Travel Forest </h4>
          <p className='mt-4 text-base'>Travel Forest is a company that offer comprehensive booking services for flights, hotels, and car rentals, akin to having a personal travel agent</p>
         <div className='flex gap-4'>
         <Link href="https://travel-forest-io.vercel.app/#" className='text-base' target='_blank'><FaLink size={16} className='mt-4'/></Link>
         <Link href="https://github.com/ESE-MONDAY/travel-forest.io" className='text-base' target='_blank'><FaGithub size={16} className='mt-4'/></Link>
         </div>
           
          
        </div>
        </div>
        {/* Project 5 */}
        <div className='flex mt-4'>
          <div className='sm:w-[50%]'>
              <Image src={Megamind} loading='lazy'  alt='Skincare Mart - One Stop store for korean beauty products' style={{objectFit:"cover"}}  />
              <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>Megamind</h4>
              <p className='text-base mt-4'>Megamind is a sleek analytics dashboard powered by Next.js, Next.js-Themes, and Recharts. Seamlessly switch themes and visualize data with ease. Compact and efficient, Megamind delivers actionable insights for informed decision-making.</p>
              <div className='flex gap-4'>
              <Link href="https://analytics-dashboard-one-swart.vercel.app/" className='text-base ' target='_blank'><FaLink size={16} className='mt-4'/></Link>
              <Link href="https://github.com/ESE-MONDAY/analytics-dashboard" className='text-base ' target='_blank'><FaGithub size={16} className='mt-4'/></Link>

              </div>
              
             
           
          </div>
         
         
        </div>
        {/* Project 6 */}
        <div className='w-full flex justify-end mt-8'>
        <div className='sm:w-[50%]'>
          <Image src={Tempo} loading='lazy'  alt='Book your next vacation with us! These websites can help you book the full package–flights, hotels, cars. It’s like having a travel agent. You can find solid deals with these sites, lthough you' style={{objectFit:"cover"}} />
          <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>Tempo Weather </h4>
          <p className='mt-4 text-base'>Tempo is a modern weather app built with React and Redux toolkit, integrating the OpenWeatherMap API and Geonames API. It provides users with real-time weather updates and detailed forecasts, all within an intuitive and user-friendly interface. With Tempo, users can easily access accurate weather information tailored to their location, ensuring they stay informed and prepared for any weather conditions.</p>
          <div className='flex gap-4'>
          <Link href="https://vercel.com/ese-monday/tempo" className='text-base' target='_blank'><FaLink size={16} className='mt-4'/></Link>
            <Link href="https://github.com/ESE-MONDAY/Tempo" className='text-base' target='_blank'><FaGithub size={16} className='mt-4'/></Link>
          </div>
         
            
          
        </div>
        </div>
      </div>
      {/* Articles */}

      <div className='flex  flex-col sm:flex-row mt-20 justify-between'>
      <div className='basis-1/3  flex sm:flex-col sm:gap-0 gap-3'>
        <h2 className='text-3xl sm:text-6xl sm:mt-8  font-gallient  font-semibold text-start lg:ml-32 '>Latest</h2>
        <h2 className='text-3xl sm:text-6xl sm:mt-4  font-gallient  font-semibold text-start lg:ml-36 '>Articles</h2>
        <div className='mt-8 hidden sm:flex  '>
        
          <q className='pr-4 '>Writing is the art of discovering <br />what you believe. - Gustave Flaubert</q>
        </div>
        </div>
         <div className='lg:basis-1/2 w-full'>
          {/* Article 1 */}
          <div className='mt-4 sm:mt-12 '>
                  <h2 className='text-lg  font-semibold text-left '>
           Managing Cookies and Ensuring User Privacy Compliance.
           </h2>
                  <h4 className='text-md mt-2  text-left '>
                   Nov 15, 2023
                  </h4>
                  <h3 className='text-lg mt-2 text-justify '>Configuring cookies within your application using &ldquo;next-cookies&rdquo;</h3> 
                </div>
                {/* Project 2 */}
                <div className='mt-8'>
                  <h2 className='text-lg  font-semibold text-left '>
                  A Comprehensive Guide to Understanding OOP Principles - Encapsulation, Abstraction, Polymorphism and Inheritance
                  </h2>
                  <h4 className='text-md mt-2 text-left '>
                    Jan 30, 2023
                  </h4>
                  <h3 className='text-lg mt-2 text-justify'>Object-oriented programming (OOP) is an exciting and powerful programming paradigm used by many modern languages to create object-oriented programs.</h3>
                  
                </div>
                <div className='mt-2 flex justify-end'>
                  <Link className='font-bold underline text-xl' href="https://ese-monday.hashnode.dev/" target='_blank'>Visit my blog</Link>
                </div>

                </div>

      </div>
     

        

    
      
        
        </main>
     
    

    </>
   
  )
}

export default Works