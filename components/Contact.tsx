import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='' id='contact'>
        <h3 className='text-2xl mt-8  font-semibold '>Contact Me</h3>
        <div className=' max-w-[400px] overflow-hidden '>
        <p className='text-2xl mt-4 text-justify' id='right-text'>I go beyond creating <span className='font-bold'>visually appealing interfaces;</span>  I prioritize <span className='font-bold'>accessibility</span>,  <span className='font-bold'>SEO</span>, and <span className='font-bold'>performance optimization.</span> </p>
            <p className=' text-xl '>I&apos;m open to freelancing, technical writing and open-source projects.</p>
            <Link href="mailto:mondayese8@gmail.com" className='w-24 text-center mt-6 md:mt-0 py-2  hover:bg-violet-red-600 hover:text-white font-semibold rounded-md  text-sm '>Contact Me</Link>
        </div>
    </div>
  )
}

export default Contact