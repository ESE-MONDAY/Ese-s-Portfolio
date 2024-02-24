'use client'
import '../styles/globals.css'
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import CustomCursor from '../components/CustomCursor';
import Footer from '../components/Footer';
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";






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
            <title>Ese Monday - Frontend Engineer, Technical Writer, and FOSS</title>
            <meta name="author" content="Ese Monday" />
            <meta name="description" content="Reactjs Frontend Engineer, Technical Writer, and FOSS Advocate with 3+ years of professional experience." />
            <meta name="keywords" content="Frontend Developer React, Reactjs Frontend Developer, Firebase, Web Development, HTML5, CSS3, JavaScript, React.js, Vue.js, Technical Writing, Documentation, Open Source Contributions, FOSS Advocate ,Web Development, HTML5, CSS3,JavaScript, Code Documentation,  User Interface (UI) Design , Responsive Web Design, Git and GitHub, Software Development, Coding Standards, Accessibility (a11y), Web Standards, Performance Optimization, Cross-Browser Compatibility, Progressive Web Apps (PWAs), API Integration, Frontend Frameworks, Blogging on Tech Topics,Code Reviews, Software Engineering, Collaboration in Tech, Coding Best Practices, Technical Communication"/>
              <meta property="og:title" content="Frontend Engineer and Technical Writer" />
              <meta property="og:description" content="Experienced Frontend Engineer, Technical Writer, and FOSS Advocate with 3+ years of professional experience. Check out selected projects and more." />
              <meta property="og:image" content="/public/homepage.png" />
              <meta property="og:url" content="https://www.esemonday.study/" />
              <meta property="og:type" content="website" />
              <meta property="linkedin:owner" content="https://www.linkedin.com/in/ese-monday/" />
              <meta name="twitter:site" content="https://twitter.com/EseMonday1" />
              <meta property="fb:pages" content="https://web.facebook.com/ese.monday.5" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Ese Monday - Frontend Engineer, Technical Writer, and FOSS Advocate." />
              <meta name="twitter:description" content="Experienced Frontend Engineer, Technical Writer, and FOSS Advocate with 3+ years of professional experience. Check out selected projects and more." />
              <meta name="twitter:image" content="/homepage.png" />
              <link rel="icon" href="/favicon.ico" />
              <link rel="canonical" href="https://www.esemonday.study/" />
          </head>
      <body>
      <div className=' overflow-auto' ref={container}>
      <div id='intro-slider' className='fixed h-[100vh] z-10 w-screen overflow-hidden flex justify-center items-center'>
       
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
        <div className='h-full relative  '>
        <nav className='text-[#363636] w-full sm:px-32 '>

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
                <Link className='navigation' href="https://blog.esemonday.study/" target='_blank' >
                <p className='text-lg font-roboto font-medium flex '>Blog</p>
                </Link> 
                  
                <Link className='navigation' href="/contact" >
                <p className='text-lg font-roboto font-medium flex '>Contact</p>
                </Link> 
            </div>
            <Link className='rounded-lg navigation text-[#fafaf8] bg-[#363636] px-4 py-2' href="https://read.cv/esemonday" >
                <p className='text-lg font-roboto font-medium flex '>Read.cv</p>
                </Link> 
           </div>
           <div className='flex sm:hidden flex-col'>
            <div className='flex justify-between w-full py-2 px-4'>
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
                  
                <Link className='navigation -[#363636]' href="/contact" onClick={handleMenuClose} >
                <p className='text-xl text-center  font-roboto font-medium flex '>Contact</p>
                </Link> 

            </div>

                
              </div>
            )}

            </div>
           
           </div>
          
        </nav>
        <CustomCursor/>
        <div className=' h-full  '>
        {children}
        </div>
      
        <Footer/>

        </div>
        
        
         </div>

       </body>
    </html>
  )
}
