'use client'
import React, {use, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cover from '../public/cover.jpg'
import cover2 from '../public/cover2.png'
import MockupImage from '../public/MockupImage.png'
import photo from '../public/photo.jpg'
import Tempo from '../public/Tempo.png'
import { FaLink, FaGithub} from "react-icons/fa";



const Home = () => {
useEffect(() => {
  {
    async() =>{
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll();
    }
  }
}, [])

 
  
  return (
     <div className='text-[#363636] py-10 px-8  overflow-auto h-full  '>
       {/* Hero section */}
      <section className='lg:px-24  '>
        <div className='flex flex-col md:justify-between '>
          <div className=''>
          <h1 className='text-[40px]  sm:text-8xl font-gallient text-center md:text-start  '>
            Frontend Engineer</h1>
          <div className=' mt-4 flex flex-col sm:flex-row md:justify-around justify-center items-center   gap-8 lg:gap-4'>
          <Image src={photo} alt='Ese Monday - Frontend Engineer, Technical Writer, and FOSS Advocate'  className='w-[200px] ' style={{objectFit: "cover"}} />
            <div className='mt-4 flex flex-col justify-center items-center '>
            <h3 className='text-[40px] sm:text-7xl lg:text-8xl  font-gallient '> Technical Writer</h3>
            <h3 className='text-[40px]  sm:text-7xl lg:text-8xl font-gallient sm:mt-8 '> FOSS Advocate</h3>
            </div>
          </div>

          </div>
         
          <div className='flex justify-between mt-8 sm:mt-16 gap-8'>
            <div className='sm:w-[50%]'>
            <p className='text-xl sm:text-3xl sm:max-w-[400px] mx-auto ' id='link'>  3+ years of professional experience nudging early-stage brands and teams into greatness.</p>
            </div>
          </div>
        </div>
      </section>
  
   {/* Projectsection */}
     <section className='mt-16 sm:px-24 '>
      <div className="heading flex flex-row sm:flex-col gap-4 justify-center ">
      <h2 className='text-center text-[40px] sm:text-8xl font-gallient'>Selected</h2>
      <h2 className='text-center    font-gallient text-[40px] sm:text-8xl sm:ml-28 '>Projects</h2>
      </div>
      <div className="projects mt-8">
         {/* Project 1 section */}
        <div className='sm:w-[50%]'>
          <div className=''>
          <Image src={MockupImage} loading='lazy'  alt='MyMarketsq - Ecommerce marketplace for goods and services in Africa and Uk' style={{objectFit:"cover"}}  />
          </div>
          
          <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>MyMarketSq - Ecommerce </h4>
          <p className='mt-4 text-base'>Marketsq is a revolutionary two-in-one platform that combines the features of an ecommerce marketplace and a freelancing platform. It allows buyers to access sellers storefronts to buy and sell goods and services, creating a seamless experience for both transactions and freelance collaborations.</p>
          <p className='text-base mt-2 sm:mt-4'>
            <Link href="https://www.mymarketsq.com/" target='_blank'><FaLink size={16} className='mt-4'/></Link>
          </p>
        </div>
        {/* Project 2 section */}
        <div className='w-full flex justify-end mt-8'>
        <div className='sm:w-[50%]'>
          <Image src={cover} loading='lazy'  alt='Markin Architecture Studio  based in Brooklyn New York city' style={{objectFit:"cover"}} />
          <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>Markin Architecture Studio </h4>
          <p className='mt-4 text-base'>Markin is an architecture studio based in Broolyn, New York that specializes in crafting captivating spaces that inspire. With meticulous attention to detail and a passion for pushing design boundaries. </p>
          <p className='text-base mt-2 sm:mt-4'>
            <Link href="https://spontaneous-vacherin-8afdf0.netlify.app/" target='_blank'><FaLink size={16} className='mt-4'/></Link>
          </p>
        </div>
        </div>
        {/* Project 3 section */}
        <div className='sm:flex mt-4'>
          <div className='sm:w-[50%]'>
              <Image src={Tempo} loading='lazy'  alt='Skincare Mart - One Stop store for korean beauty products' style={{objectFit:"cover"}}  />
              <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>Tempo Weather </h4>
                <p className='mt-4 text-base'>Tempo is a modern weather app built with React and Redux toolkit, integrating the OpenWeatherMap API and Geonames API. It provides users with real-time weather updates and detailed forecasts, all within an intuitive and user-friendly interface. With Tempo, users can easily access accurate weather information tailored to their location, ensuring they stay informed and prepared for any weather conditions.</p>
             
              <div className='flex gap-4'>
              <Link href="https://tempo-gules.vercel.app/" className='text-base' target='_blank'><FaLink size={16} className='mt-4'/></Link>
                <Link href="https://github.com/ESE-MONDAY/Tempo" className='text-base' target='_blank'><FaGithub size={16} className='mt-4'/></Link>
              </div>
          </div>
          <div className=' sm:w-[50%] flex justify-center items-center mt-4 sm:mt-0'>
            <Link href="/projects" className='font-gallient  sm:text-5xl text-center sm:border-[1px] sm:border-[#363636] hover:bg-[#363636] hover:text-[#fafaf8] transition duration-300 ease-in-out p-4 sm:p-12 hover:rounded-full flex  items-center justify-center sm:flex-col gap-2 '>
              <p>View</p>
              <p className='sm:mt-2'>All</p>
            </Link>
          </div>
         
        </div> 
      </div>
  
     </section>
     {/* <section className='mt-16 '>
     <div className="flex-col ">
      <h3 className='text-start text-[70px]  font-gallient'>Services I Offer</h3>
      </div>

     </section> */}
 
    
      

    </div>
 
   
  )
}

export default Home