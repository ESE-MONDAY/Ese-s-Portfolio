'use client'
import React, {use, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cover from '../public/cover.jpg'
import cover2 from '../public/cover2.png'
import MockupImage from '../public/MockupImage.png'
import photo from '../public/photo.jpg'


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
    <div className='overflow-auto px-4'>
        <div className='text-[#363636] py-10 sm:p-24 overflow-auto h-full  '>
      <section className=''>
        <div className='flex flex-col justify-between'>
          <div className=''>
          <p className='text-[60px]  sm:text-9xl font-gallient '>Frontend Engineer</p>
          <div className=' mt-4 flex flex-col md:flex-row justify-around'>
          <Image src={photo} alt='Ese Monday' className='w-[200px] ' style={{objectFit: "cover"}} />
            <div className='mt-4 flex flex-col justify-center sm:items-center'>
            <p className='text-[40px]  sm:text-8xl font-gallient '> Technical Writer</p>
            <p className='text-[40px]  sm:text-8xl font-gallient mt-4 '> FOSS Advocate</p>
            </div>
          </div>

          </div>
         
          <div className='flex justify-between mt-8 sm:mt-16 gap-8'>
            <div className='sm:w-[50%]'>
            <p className='text-xl sm:text-3xl sm:max-w-[400px] ' id='link'>  3+ years of professional experience nudging early-stage brands and teams into greatness.</p>
            </div>
         
          </div>
        </div>
       

      </section>
  
     <section className='mt-16 '>
      <div className="heading flex flex-col ">
      <h3 className='text-center text-[70px] sm:text-[180px] font-gallient'>Selected</h3>
      <h3 className='ml-16 text-end  -mt-8  font-gallient text-[50px] sm:text-[120px] '>Projects</h3>
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
        <div className='sm:flex mt-4'>
          <div className='sm:w-[50%]'>
              <Image src={cover2} alt='Markin Architecture Studio' style={{objectFit:"cover"}}  />
              <h4 className='text-2xl sm:text-4xl font-bold mt-4 sm:mt-8'>Skincare Website </h4>
              <p className='text-base mt-2 sm:mt-4'>
              <Link href="https://verdant-bubblegum-5acbc7.netlify.app/" target='_blank'>Visit Webpage</Link>
              </p>
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
    </div>
   
  )
}

export default Home