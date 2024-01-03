'use client'
import React, {useEffect} from 'react'
import { useLayoutEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import Contact from '../components/Contact'
import photo from '../public/photo.jpg'
import { FaHashnode } from "react-icons/fa6";
import Footer from '../components/Footer'
import ArticlesPage from '../components/Articles'
import Work from '../components/Work'
import Aboutme from '../components/Aboutme'
import Projects from '../components/Projects'
import { Metadata } from 'next'
import gsap from 'gsap'







const  Articles = [
  {
    id: 1,
    title: "Managing Cookies and Ensuring User Privacy Compliance.",
    date: "Nov 18, 2023",
    link: "https://ese-monday.hashnode.dev/managing-cookies-and-ensuring-user-privacy-compliance",
  },
  {
    id: 2,
    title: "Crafting Eye-Catching READMEs with Git Hub and Markdown Techniques",
    date: "Feb 16, 2023",
    link: "https://ese-monday.hashnode.dev/crafting-eye-catching-readmes-with-git-hub-and-markdown-techniques",
  },
  {
    id: 3,
    title: "CSS Reset: The Importance of Starting with a Clean Slate",
    date: "Feb 3, 2023",
    link: "https://ese-monday.hashnode.dev/css-reset-the-importance-of-starting-with-a-clean-slate",
  },
  {
    id: 4,
    title: "A Comprehensive Guide to Understanding OOP Principles - Encapsulation, Abstraction, Polymorphism and Inheritance",
    date: "Jan 30, 2023",
    link: "https://ese-monday.hashnode.dev/a-comprehensive-guide-to-understanding-oop-principles-encapsulation-abstraction-polymorphism-and-inheritance",
  },
 
]




const Home = () => {
  const container = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline()
  //     t1.from("#intro-slider", {
  //       xPercent: "-100",
  //       duration: 1.3,
  //       delay: 0.3,
  //     }).from('#portfolio', {
  //       opacity: 0,
  //       y: 10,
  //       stagger: 0.1,
  //       duration: 0.5,
  //       ease: 'power2.out',
  //     }).to('#portfolio', {
  //       opacity: 0,
  //       y: -10,
  //       stagger: 0.1,
  //       duration: 0.5,
  //       ease: 'power2.out',
  //     })
  //     .to(["#title-1", "#title-2", "#title-3"], {
  //       opacity: 0,
  //       y: "-=30",
  //       delay: 0.3,
  //       stagger: 0.5,
  //     })
  //     .to("#intro-slider", {
  //       xPercent: "-100",
  //       duration: 1.3,
  //     })
  //     .from('.navigation', {
  //       opacity: 0,
  //       y: 20,
  //       stagger: 0.1,
  //       duration: 0.7,
  //       ease: 'power3.out',
  //     });

  //   }, container)
  //   return () => ctx.revert()
  // }, [])
 
  
  return (
    // <div className='relative' ref={container}>
    //   <div id='intro-slider' className='absolute h-screen z-10 bg-gray-100  w-full'>
    //     <div className=' w-full flex justify-center items-center flex-col h-[80%]'>
    //     <p className='text-5xl text-gray-900 mb-4 font-semibold '>
    //       <span  id='portfolio'   >P</span>
    //       <span className='inline-block'  id='portfolio'  >O</span>
    //       <span className='inline-block'  id='portfolio'  >R</span>
    //       <span className='inline-block'  id='portfolio'  >T</span>
    //       <span className='inline-block'  id='portfolio' >F</span>
    //       <span className='inline-block'  id='portfolio'  >O</span>
    //       <span className='inline-block'  id='portfolio' >L</span>
    //       <span className='inline-block'  id='portfolio' >I</span>
    //       <span className='inline-block'  id='portfolio' >O</span>
    //       </p>
    //     </div>
    
    //       <div className="w-full bg-red-500 flex justify-between">
    //         <div>
    //           <p>Design </p>
    //           <p>Develop</p>
    //         </div>
    //         <div>
    //           <p>Ese Monday</p>
    //           <p>mondayese8@gmail.com</p>
    //         </div>
    //       </div>
        

    //   </div>

    //   <div className='h-screen bg-gray-900 '>
    //   <nav className='text-white/70 gap-4 md:gap-8  flex  justify-end w-full '>
              
    //           <Link className='navigation' href="https://www.linkedin.com/in/ese-monday/" >
    //             <BsLinkedin size={16} className='md:hidden flex' />
    //             <p className='text-lg font-roboto font-medium hidden md:flex '>Linkedin</p>
                
    //             </Link> 
    //           <Link className=' navigation' href="https://github.com/ESE-MONDAY">
    //             <BsGithub size={16} className='md:hidden flex' />
    //             <p className='text-lg font-roboto font-medium hidden md:flex'>Github</p>
    //             </Link>
    //           <Link className=' navigation' href="https://twitter.com/EseMonday1">
    //             <BsTwitter size={16} className='md:hidden flex'/>
    //             <p className='text-lg font-roboto font-medium hidden md:flex'>Twitter</p>
    //             </Link>
    //             <Link className='navigation' href="https://ese-monday.hashnode.dev/">
    //             <FaHashnode size={16} className='md:hidden flex'/>
    //             <p className='text-lg font-roboto font-medium hidden md:flex'>Hashnode</p>
    //             </Link>
    //         </nav>
    //   </div>

    // </div>
    <div className='
    h-auto flex justify-between flex-col bg-[#111111]  w-full mx-auto  overflow-y-auto px-8 md:px-16'>
        <main className='h-auto w-full  '>
    <nav className='text-white/70 gap-4 md:gap-8 mt-8 flex  justify-end w-full '>
  
  <Link className='navigation' href="https://www.linkedin.com/in/ese-monday/" >
    <BsLinkedin size={16} className='md:hidden flex' />
    <p className='text-lg font-roboto font-medium hidden md:flex '>Linkedin</p>
    
    </Link> 
  <Link className=' navigation' href="https://github.com/ESE-MONDAY">
    <BsGithub size={16} className='md:hidden flex' />
    <p className='text-lg font-roboto font-medium hidden md:flex'>Github</p>
    </Link>
  <Link className=' navigation' href="https://twitter.com/EseMonday1">
    <BsTwitter size={16} className='md:hidden flex'/>
    <p className='text-lg font-roboto font-medium hidden md:flex'>Twitter</p>
    </Link>
    <Link className='navigation' href="https://ese-monday.hashnode.dev/">
    <FaHashnode size={16} className='md:hidden flex'/>
    <p className='text-lg font-roboto font-medium hidden md:flex'>Hashnode</p>
    </Link>
</nav>
<div className='mt-8 max-w-[1000px] mx-auto '>
      <div className=' w-full mt-8   flex justify-between  '>
      <h1 className='text-[45px] md:text-[90px] text-white/80 font-roboto font-bold'> Hey 👋🏾 <br />I&apos;m Ese</h1>
      <div className='h-[300px] w-[300px] hidden md:flex'>
      <Image src={photo} alt='Ese Monday' className='rounded-lg filter grayscale-100' />  
      </div>
          
      </div>
   
    <p className='mt-2 text-2xl text-white/80 max-w-[900px]  '> - a Frontend Engineer and Technical Writer with 3+ years of professional experience nudging early-stage brands and teams into greatness.</p>
      <div className='w-full flex gap-1 mt-4 '>
        <p className='px-2 py-1 rounded-full text-xs sm:text-sm border-[1px] bg-gray-500/20 border-[#ea4c89]/50 text-white/80'>Frontend Engineering</p>
          <p  className='px-2 py-1 rounded-full text-xs sm:text-sm border-[1px] bg-gray-500/20 border-[#ea4c89]/50 text-white/80'>Technical Writing</p>
          <p  className='px-2 py-1 rounded-full text-xs sm:text-sm  border-[1px] bg-gray-500/20 border-[#ea4c89]/50 text-white/80'>FOSS Advocate</p>

      </div>
      <div className=' w-full mt-8 px-3  flex md:hidden '>
          <Image src={photo} alt='Ese Monday' className='rounded-lg' />  
      </div>

</div>
<div className='max-w-[1000px] mx-auto'>
<Projects />
<Aboutme />
<Work />
<ArticlesPage />
<Contact />
<Footer />

</div>


</main>

    </div>
  
   
  )
}

export default Home