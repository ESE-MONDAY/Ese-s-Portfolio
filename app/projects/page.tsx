'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import cover from '../../public/cover.jpg';
import cover2 from '../../public/cover2.png';
import MockupImage from '../../public/MockupImage.png';




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
  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const t1 = gsap.timeline()
      .from('#title', {
        y: 110,
        duration: 1,
        ease: 'power2.out',
      }).from('#subtitle', {
        y: 110,
        duration: 1,
        ease: 'power2.out',
      }, '-=0.5')
      .from('#subtitle2', {
        y: 110,
        duration: 1,
        ease: 'power2.out',
      }, '-=0.5')
      .from('#right-text', {
        x: '100%',
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
      }, '-=0.5')
      

    }, container1)
    return () => context.revert()
  }, [])
  return (
    <>
    <main className='text-[#363636] h-full overflow-y-auto  py-8 md:p-24' ref={container1}>
    <div className="heading">
             <h3 className='text-center text-[60px] sm:text-[180px] font-gallient'>All <br/> Projects</h3>

        </div>
        <div className="projects mt-8">
        
        <div className='sm:w-[50%]'>
          <div className='bg-white p-8'>
          <Image src={MockupImage} alt='Markin Architecture Studio' style={{objectFit:"cover"}}  />
          </div>
          
          <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>MyMarketSq - Eccomerce </h4>
          <p className='text-base mt-2 sm:mt-4'>
            <Link href="https://www.mymarketsq.com/" target='_blank'>Visit Webpage</Link>
          </p>
        </div>
        <div className='w-full flex justify-end mt-8'>
        <div className='sm:w-[50%]'>
          <Image src={cover} alt='Markin Architecture Studio' style={{objectFit:"cover"}} />
          <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>Markin Architecture Studio </h4>
          <p className='text-base mt-2 sm:mt-4'>
            <Link href="https://spontaneous-vacherin-8afdf0.netlify.app/" target='_blank'>Visit Webpage</Link>
          </p>
        </div>
        </div>
        <div className='flex mt-4'>
          <div className='sm:w-[50%]'>
              <Image src={cover2} alt='Markin Architecture Studio' style={{objectFit:"cover"}}  />
              <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>Skincare Website </h4>
              <p className='text-base mt-2 sm:mt-4'>
              <Link href="https://verdant-bubblegum-5acbc7.netlify.app/" target='_blank'>Visit Webpage</Link>
              </p>
          </div>
         
         
        </div>
        

        
      </div>
      <div className='flex  flex-col sm:flex-row mt-20'>
      <div className='basis-1/3 flex sm:flex-col sm:gap-0 gap-3'>
        <p className='text-3xl sm:text-6xl sm:mt-8  font-gallient  font-semibold text-start lg:ml-40 '>Latest</p>
        <p className='text-3xl sm:text-6xl sm:mt-4  font-gallient  font-semibold text-start lg:ml-48  '>Articles</p>
        <div className='mt-8 hidden sm:flex  '>
        
          <p className='sm:ml-40 '>Writing is the art of discovering <br />what you believe. - Gustave Flaubert</p>
        </div>
        </div>

         <div className='lg:basis-1/2 w-full'>
     
                <div className='mt-4 sm:mt-12 '>
                  <p className='text-lg  font-semibold text-left '>
                  Managing Cookies and Ensuring User Privacy Compliance.
                  </p>
                  <p className='text-md mt-2  text-left '>
                   Nov 15, 2023
                  </p>
                  <p className='text-lg mt-2 text-justify '>Configuring cookies within your application using &ldquo;next-cookies&rdquo;</p> 
                </div>
                <div className='mt-8'>
                  <p className='text-lg  font-semibold text-left '>
                  A Comprehensive Guide to Understanding OOP Principles - Encapsulation, Abstraction, Polymorphism and Inheritance
                  </p>
                  <p className='text-md mt-2 text-left '>
                    Jan 30, 2023
                  </p>
                  <p className='text-lg mt-2 text-justify'>Object-oriented programming (OOP) is an exciting and powerful programming paradigm used by many modern languages to create object-oriented programs.</p>
                  
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