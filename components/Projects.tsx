import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MockupImage from "../public/MockupImage.png";

const Projects = () => {
  return (
    <div className='my-40'>
          <p className='text-2xl mt-8 text-white  font-semibold text-left flex gap-2 items-center '>Featured Projects </p>
                  <div className='grid grid-cols-4 gap-6 mt-8'>
                    <div className='col-span-4 md:col-span-2 '>
                    <div className='max-w-[600px]  '>
                      <div className='mt-2 mb-4 hover:text-violet-red-600'>
                      <Image src={MockupImage} alt='Ese Monday' className='rounded-lg h-full' />
                      </div>
                      <Link  href="https://www.mymarketsq.com/" target='_blank' className='text-lg font-semibold text-white/80 hover:text-violet-red-400/80'> MARKETSQ</Link>
                      <h3 className='text-md text-white/80'>Eccomerce Marketplace</h3>
                      
                      </div>

                    </div>
                    {/* <div className='col-span-4 md:col-span-2  '>
                    <div className='max-w-[600px]  '>
                      <div className='mt-2 mb-4 hover:text-violet-red-600'>
                      <Image src={MockupImage} alt='Ese Monday' className='rounded-lg h-full' />
                      </div>
                      <Link  href="https://www.mymarketsq.com/" target='_blank' className='text-lg font-semibold text-white/80'> MARKETSQ</Link>
                      <h3 className='text-md text-white/80'>Eccomerce Marketplace</h3>
                      
                      </div>

                    </div> */}
                 
                    <div className='flex md:hidden'>
                      <p className='text-sm text-white/50 mt-2 whitespace-nowrap'>View all projects</p>

                    </div>
                   
                  </div>

    </div>
  )
}

export default Projects