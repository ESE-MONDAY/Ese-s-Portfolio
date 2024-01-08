'use client'
import '../styles/globals.css'
import Head from 'next/head';
import Link from 'next/link';
import CustomCursor from '../components/CustomCursor';
import Footer from '../components/Footer';



import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const container = useRef(null);


  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
     
     .from('#portfolio', {
        opacity: 0,
        y: 10,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      }).to('#portfolio', {
        opacity: 0,
        y: -10,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
      })
      .to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      })
      .from('.navigation', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
      });

    }, container)
    return () => ctx.revert()
  }, [])
  return (
    
    <html lang="en">
        <Head>
            <title>Ese Monday - Portfolio</title>
            <meta name="software developer" content="Ese Monday is a dynamic software developer based in Lagos Nigeria" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
      <body>
      <div className='relative overflow-auto' ref={container}>
      <div id='intro-slider' className='fixed h-[100vh] z-10 w-screen overflow-hidden'>
        <div className=' w-full flex justify-center items-center flex-col h-[80%]'>
              <p className='text-6xl lg:text-9xl mb-4 font-bold  text-[#fafaf8] font-gallient  bg-transparent text'>
                <span className='inline-block'  id='portfolio'   >P</span>
                <span className='inline-block'  id='portfolio'  >O</span>
                <span className='inline-block'  id='portfolio'  >R</span>
                <span className='inline-block'  id='portfolio'  >T</span>
                <span className='inline-block'  id='portfolio' >F</span>
                <span className='inline-block'  id='portfolio'  >O</span>
                <span className='inline-block'  id='portfolio' >L</span>
                <span className='inline-block'  id='portfolio' >I</span>
                <span className='inline-block'  id='portfolio' >O</span>
                </p>
              </div>
        </div>
        <div className='h-full px-4'>
        <nav className='text-[#363636] fixed py-4  flex sm:justify-end items-center w-full sm:px-32 '>
      
          <div className=' gap-8 hidden sm:flex'>
              <Link className='navigation' href="/" >
                <p className=' text-start text-lg font-roboto font-medium flex '>Home</p>
                </Link> 
                <Link className=' navigation' href="/projects" >
                <p className='text-right text-lg font-roboto font-medium flex '>Projects</p>
                </Link>
                <Link className='navigation' href="/about" >
                <p className='text-lg font-roboto font-medium flex '>About</p>
                </Link>
                <Link className='navigation' href="https://ese-monday.hashnode.dev/" target='_blank' >
                <p className='text-lg font-roboto font-medium flex '>Blog</p>
                </Link> 
                  
                <Link className='navigation' href="/contact" >
                <p className='text-lg font-roboto font-medium flex '>Contact</p>
                </Link> 

          </div>
       
       

             
      
        </nav>
        <CustomCursor/>
        {children}
        <Footer/>

        </div>
        
        
         </div>

       </body>
    </html>
  )
}
