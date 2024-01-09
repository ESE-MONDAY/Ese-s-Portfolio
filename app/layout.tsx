'use client'
import '../styles/globals.css'
import Head from 'next/head';
import Link from 'next/link';
import CustomCursor from '../components/CustomCursor';
import Footer from '../components/Footer';
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { Metadata } from 'next';



import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const container = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(!isMenuOpen);

  }




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
        <head>
            <meta charSet="utf-8" />
            <title>Ese Monday - Experienced Frontend Engineer, Technical Writer, and FOSS Advocate with 3+ years of professional experience. Check out selected projects and more.</title>
            <meta name="software developer" content="Ese Monday is a dynamic software developer based in Lagos Nigeria" />
            <meta name="author" content="Ese Monday" />
            <meta name="description" content=" Experienced Frontend Engineer, Technical Writer, and FOSS Advocate with 3+ years of professional experience." />
            <meta name="keywords" content="Ese Monday, Ese, Monday, Ese Monday Portfolio, Ese Monday Software Developer, Ese Monday Frontend Engineer, Ese Monday Technical Writer, Ese Monday FOSS Advocate, Ese Monday Blockchain Engineer, Ese Monday Lagos Nigeria, Ese Monday Software Developer Lagos Nigeria, Ese Monday Frontend Engineer Lagos Nigeria, Ese Monday Technical Writer Lagos Nigeria, Ese Monday FOSS Advocate Lagos Nigeria, Ese Monday Blockchain Engineer Lagos Nigeria" />

            <meta property="og:title" content="Use Client - Frontend Engineer and Technical Writer" />
              <meta property="og:description" content="Experienced Frontend Engineer, Technical Writer, and FOSS Advocate with 3+ years of professional experience. Check out selected projects and more." />
            <link rel="icon" href="/favicon.ico" />
          </head>
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
        <div className='h-full relative'>
        <nav className='text-[#363636]  sm:px-32 '>

           <div className='hidden sm:flex sm:justify-end items-center w-full'>
           <div className=' gap-8 flex px-8 py-4'>
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
           </div>
           <div className='flex sm:hidden flex-col'>
            <div className='flex justify-between w-full p-4'>
              <Link href="/" className='font-bold font-merriweather text-3xl '>
                Ese.</Link>
              <button className='sm:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {
                  isMenuOpen ? <MdOutlineClose size={24} /> : <RiMenu3Line size={24} />
                }
                </button>
            </div>
            <div className='relative'>
            {isMenuOpen && (
              <div className='bg-[#363636] text-[#fafaf8] w-full  fixed p-4 '>
                <div className=' gap-8 flex flex-col px-8 py-4'>
              <Link className='navigation ' href="/" onClick={handleMenuClose}>
                <p className=' text-xl text-center font-roboto font-medium flex '>Home</p>
                </Link> 
                <Link className=' navigation' href="/projects" onClick={handleMenuClose} >
                <p className='text-xl text-center  font-roboto font-medium flex '>Projects</p>
                </Link>
                <Link className='navigation' href="/about" onClick={handleMenuClose} >
                <p className='text-xl text-center  font-roboto font-medium flex '>About</p>
                </Link>
                <Link className='navigation' href="https://ese-monday.hashnode.dev/" target='_blank' onClick={handleMenuClose} >
                <p className='text-xl text-center  font-roboto font-medium flex '>Blog</p>
                </Link> 
                  
                <Link className='navigation' href="/contact" onClick={handleMenuClose} >
                <p className='text-xl text-center  font-roboto font-medium flex '>Contact</p>
                </Link> 

            </div>

                
              </div>
            )}

            </div>
           
           </div>
          
       
       

             
      
        </nav>
        <CustomCursor/>
        <div className='pt-[10vh] h-full  '>
        {children}
        </div>
      
        <Footer/>

        </div>
        
        
         </div>

       </body>
    </html>
  )
}
