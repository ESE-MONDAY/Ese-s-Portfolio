import React from 'react'
import Link from 'next/link'

const Aboutme = () => {
  return (
    <div className='my-40'>
        <div className=''>
                <p className='text-2xl mt-8 text-white  font-semibold text-left '>About Me </p>
              <p className='text-xl text-white/80 mt-12 text-justify'>In 2019, during my fourth year at university,I had the opportunity to undergo my Internship at a software development company.
              </p>
              <p className='text-xl text-white/80 mt-4 text-justify'> This played pivotal role for my journey into Frontend engineering and ever since, I have been building applications for a diverse ecosystems, including Blockchain and Fintech ecosystems.</p>
              <p className='text-xl text-white/80 mt-4 text-justify'>
              
                As a frontend engineer, I go beyond creating visually appealing interfaces; I prioritize accessibility, SEO, and performance optimization, leveraging developer-friendly tools to enhance the user experience.

                I am constantly immersed in learning, I document my insights and share them through articles, aiming to reach a wider audience. Explore some of my work <Link href="https://ese-monday.hashnode.dev/" target='_blank' className='text-violet-red-400/80 font-seminbold underline'>
                here
                </Link></p>
              <p className='text-xl text-white/80 mt-4 text-justify'>Apart from my coding pursuits, I am an avid gamer and I have two furry companions - Billy and Shepherd. They remind me to breathe and reconnect with my surrounding.</p>

                </div>
    </div>
  )
}

export default Aboutme