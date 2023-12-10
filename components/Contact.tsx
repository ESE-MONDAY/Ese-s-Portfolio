import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='my-40'>
        <h3 className='text-2xl mt-8 text-white  font-semibold '>Contact Me</h3>
        <div className='flex justify-between flex-col md:flex-row mt-8 md:items-center '>
            <p className=' text-xl text-white/80'>I&apos;m open to freelancing, technical writing and open-source projects.</p>
            <Link href="mailto:mondayese8@gmail.com" className='w-24 text-center mt-6 md:mt-0 py-2 bg-[#fefefe] hover:bg-violet-red-600 hover:text-white font-semibold rounded-md text-[#111] text-sm '>Contact Me</Link>
        </div>
    </div>
  )
}

export default Contact