import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
import photo from '../public/photo.jpg'
import { FaHashnode } from "react-icons/fa6";
import MockupImage from "../public/MockupImage.png";

const Home = () => {
  return (
    <div className='h-auto flex justify-between flex-col bg-[#111111]  max-w-[1440px] w-full mx-auto  overflow-y-auto'>
       <Head>
      <title>Ese Monday - Portfolio</title>
      <meta name="software developer" content="Ese Monday is a dynamic software developerbased in Lagos Nigeria" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='h-auto w-full  '>
   
    <div className='text-white/70 gap-4  md:gap-8 mt-8 px-3 md:px-16 flex  justify-end w-full'>
         
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
       <div className='p-2 mt-10  text-white md:p-16  '>
       <h1 className='text-[45px] md:text-[90px] font-roboto font-bold lg:pl-72 '> Hey 👋🏾 <br />I&apos;m Ese</h1>
        
        <p className='mt-2 text-2xl text-white/80 max-w-[900px]  lg:pl-80'> - a Frontend Engineer and Technical Writer with 3+ years of professional experience nudging early-stage brands and teams into greatness.</p>
        <div className='w-full border-red-500 flex gap-1 mt-8 lg:pl-80'>
        <p className='px-2 py-1 rounded-full text-xs sm:text-sm border-[1px] bg-gray-500/20 border-[#ea4c89]/50 text-white/80'>Frontend Engineering</p>
           <p  className='px-2 py-1 rounded-full text-xs sm:text-sm border-[1px] bg-gray-500/20 border-[#ea4c89]/50 text-white/80'>Technical Writing</p>
           <p  className='px-2 py-1 rounded-full text-xs sm:text-sm  border-[1px] bg-gray-500/20 border-[#ea4c89]/50 text-white/80'>FOSS Advocate</p>

        </div>
       </div>
       <div className=' w-full mt-8 px-3 md:mt-40 flex md:hidden '>
            <Image src={photo} alt='Ese Monday' className='rounded-lg' />  
        </div>
          <p className='px-3 md:px-16  text-md md:text-xl mt-16 text-white  font-semibold text-left ml-24 '>Featured Projects</p>
    
        <div className=' px-3 md:px-16 flex gap-4 md:gap-16 flex-col md:flex-row max-h-[600px] justify-center'>
      
        <div className='mt-4 max-w-[400px]'>
          <h1 className='text-lg font-semibold text-white/80'> MARKETSQ</h1>
          <p className='text-md text-white/70 mt-4  text-justify'>Marketsq is a revolutionary two-in-one platform that combines the features of an ecommerce marketplace and a freelancing platform. .</p>
          <div className='text-white mt-4'>
          <Link href="https://www.mymarketsq.com/" target='_blank' className='mt-8 hover:text-violet-red-600'>Visit Website</Link>
            <h3 className='text-md text-white/80'>Technologies used:</h3>
            <div className='grid grid-cols-2 text-white/60'>
            <p>Nextjs</p>
            <p>Tailwindcss</p>
            <p>Redux toolkit</p>
            <p>DaisyUi</p>
            </div>
          </div>
        </div>
        <div className='max-w-[600px] p-8 '>
        
        <Link href="https://www.mymarketsq.com/" target='_blank' className='mt-8 hover:text-violet-red-600'>
        <Image src={MockupImage} alt='Ese Monday' className='rounded-lg h-full' />
        </Link>
        
        </div>
        </div>
        <div>
          <h3>A little about Me</h3>
          <Link href="/profile">View Full Profile </Link>
        </div>
       
       
        
     
    </main>
      
    </div>
  )
}

export default Home