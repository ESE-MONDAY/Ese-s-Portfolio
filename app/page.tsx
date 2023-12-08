import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
import photo from '../public/photo.jpg'
import { FaHashnode } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='h-auto flex justify-between flex-col bg-[#111111]  max-w-[1440px] w-full mx-auto  overflow-y-auto'>
       <Head>
      <title>Ese Monday - Portfolio</title>
      <meta name="software developer" content="Ese Monday is a dynamic software developerbased in Lagos Nigeria" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='h-auto w-full  '>
    <div className='h-auto w-full '>
    <div className='text-white/70 gap-4  md:gap-8 mt-8 px-8 md:px-16 flex  justify-end w-full'>
         
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
       </div>
       <div className='p-2 mt-20  text-white md:px-16 '>
       <h1 className='text-[45px] md:text-[90px] font-roboto font-bold lg:pl-40 '> Hey 👋🏾 <br />I&apos;m Ese</h1>
        
        <p className='mt-2 text-2xl text-white/80 max-w-[900px]  lg:pl-52'> - a Frontend Engineer and Technical Writer with 3+ years of professional experience nudging early-stage brands and teams into greatness.</p>
        <div className='w-full border-red-500 flex gap-1 mt-8 lg:pl-52 '>
        <p className='px-2 py-1 rounded-full text-xs sm:text-sm border-[1px] bg-gray-500/20 border-[#ea4c89]/50 text-white/80'>Frontend Engineering</p>
           <p  className='px-2 py-1 rounded-full text-xs sm:text-sm border-[1px] bg-gray-500/20 border-[#ea4c89]/50 text-white/80'>Technical Writing</p>
           <p  className='px-2 py-1 rounded-full text-xs sm:text-sm  border-[1px] bg-gray-500/20 border-[#ea4c89]/50 text-white/80'>FOSS Advocate</p>

        </div>
       </div>
       <div className=' w-full mt-8 md:mt-40 flex md:hidden '>
            <Image src={photo} alt='Ese Monday' className='rounded-lg' />  
        </div>
        <div className='mt-40    grid grid-cols-5 grid-rows-5 gap-4 max-w-[1000px] md:h-[700px]  mx-auto'>
            <div className=" p-1 col-span-2 row-span-2 md:h-[150px]">
              <p className='text-md md:text-xl text-white font-roboto font-semibold whitespace-nowrap'>Selected projects</p>
              <p className='text-xs text-white/80'>Here are a few of my projects giving an insight on how I think through product development</p>
              <Link href="#" className='text-xs text-white/80 font-medium mt-4 hover:border-violet-500/50 hover:border-b-[1px]'>View all projects ➡️</Link>
                </div>
                <div className="bg-gray-500/20 border-violet-500/50 border-[1px] p-4 col-span-3 row-span-4 rounded-lg flex gap-2 flex-col ">
          
                <iframe
              title="My Embedded Content"
                className='w-full rounded-lg max-h-[400px] h-full '
              
              src="https://www.mymarketsq.com/"
              
              allowFullScreen
            ></iframe>
              <div>
                <Link href="https://www.mymarketsq.com/" target='_blank' className='underline text-xs text-white/80'>mymarketsq.com</Link>
              </div>
              </div>
              <div className="bg-gray-500/20 border-violet-500/50 border-[1px]  rounded-md p-4 row-span-3 col-span-2">
               
            <Link href="https://www.profitall.co.uk/" target='_blank' className='underline text-xs text-white/80'>Profitall.co.uk</Link>
          </div>
          <Link href="https://ese-monday.hashnode.dev/" target='_blank' className="border-violet-red-500 hover:bg-violet-red-500 text-white/90  border-[1px] rounded-md  p-4 col-span-3 row-span-5 text-center  ">
              <p className='flex justify-center'>  <FaHashnode size={20} className='text-white text-center' /></p>
              <p className='text-xs font-roboto  mt-2'>hashnode.com</p>
          
            <p className='text-xs font-semibold font-roboto mt-2'>Ese Monday - Hashnode</p>
            <p className='text-white/70 text-xs mt-4'>Read my blog 📝</p>          
          </Link>
          <Link target='_blank' href="https://drive.google.com/file/d/1KXyO2yW4dWd7PzD4---K48xkFEAYqSph/view?usp=sharing" className="border-indigo-500 hover:bg-indigo-500 border-[1px] p-4 row-span-4 col-span-2 text-white text-xs md:text-sm rounded-md flex items-center justify-center">  view my resume 📃
          </Link>
          
        </div>
        <div className='mt-20 px-3 md:px-16'>
        <p className='text-md md:text-xl text-white font-roboto  font-semibold text-left  '>About Me</p>
          <p className='max-w-[500px] item-center text-sm text-white/80 font-roboto mt-4  flex justify-center flex-col items-center'>
          In 2019, during my fourth year at university,I had the opportunity to undergo my Internship at a software development company. This played pivotal role for my journey into Frontend engineering and  ever since, I have been building applications for a diverse ecosystems, including Blockchain and Fintech ecosystems.

          </p>
          <p className='max-w-[500px] item-center text-sm text-white/80 font-roboto  mt-1'> I am constantly immersed in learning, I document my insights and share them through articles, aiming to reach a wider audience. Explore some of my work <Link href="https://ese-monday.hashnode.dev/">here</Link></p>
          <p className='max-w-[500px] item-center text-sm text-white/80 font-roboto  mt-1'>Apart from my coding pursuits, I am an avid gamer and I have two furry companions - Billy and Shepherd. They remind me to breathe and reconnect with my surrounding.</p>
          {/* <p className='text-white/80 text-xs text-center mt-8'>© 2021 Ese Monday. All rights reserved.</p> */}
        </div>

    </div>
   
        
      
        

       
    </main>
      
    </div>
  )
}

export default Home