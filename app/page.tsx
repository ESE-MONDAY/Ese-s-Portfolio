import React from 'react'
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
  return (
    <div className='h-auto flex justify-between flex-col bg-[#111111]  max-w-[1440px] w-full mx-auto  overflow-y-auto px-8 md:px-16'>
        <Head>
            <title>Ese Monday - Portfolio</title>
            <meta name="software developer" content="Ese Monday is a dynamic software developerbased in Lagos Nigeria" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className='h-auto w-full  '>
                <div className='text-white/70 gap-4 md:gap-8 mt-8 flex  justify-end w-full'>
              
              <Link className='hover:text-[#ea4c89]' href="https://www.linkedin.com/in/ese-monday/" >
                <BsLinkedin size={16} className='md:hidden flex' />
                <p className='text-lg font-roboto font-medium hidden md:flex'>Linkedin</p>
                
                </Link> 
              <Link className='hover:text-[#ea4c89]' href="https://github.com/ESE-MONDAY">
                <BsGithub size={16} className='md:hidden flex' />
                <p className='text-lg font-roboto font-medium hidden md:flex'>Github</p>
                </Link>
              <Link className='hover:text-[#ea4c89]' href="https://twitter.com/EseMonday1">
                <BsTwitter size={16} className='md:hidden flex'/>
                <p className='text-lg font-roboto font-medium hidden md:flex'>Twitter</p>
                </Link>
                <Link className='hover:text-[#ea4c89]' href="https://ese-monday.hashnode.dev/">
                <FaHashnode size={16} className='md:hidden flex'/>
                <p className='text-lg font-roboto font-medium hidden md:flex'>Hashnode</p>
                </Link>
            </div>
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