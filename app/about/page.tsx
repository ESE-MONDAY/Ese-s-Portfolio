import React from 'react';
import Image from 'next/image';
import photo from '../../public/photo.jpg'
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, } from 'react-icons/fa6';
import Work from '../../components/Work';
import '../../styles/globals.css';

const AboutMe = () => {
  return (
    <div className='text-[#363636] py-10 px-4 md:p-24  '>
        <div className="heading ">
             <h1 className='text-center text-[60px] sm:text-[180px] font-gallient'>A little bit <br/> about me</h1>
            
        </div>
        <div className='sm:flex justify-between'>
            <div className='sm:w-[50%] h-[400px]'>
                <Image src={photo} alt='Ese Monday - Frontend Engineer, Technical Writer, and FOSS Advocate'  style={{objectFit: "contain", height: "100%"}} />
            </div>
            <div className='basis-1/2 sm:px-16 flex justify-between flex-col'>
        <div className='max-w-[400px] overflow-hidden' >
             <p className='text-2xl mt-4 text-justify' id='right-text'>I go beyond creating <span className='font-bold'>visually appealing interfaces;</span>  I prioritize <span className='font-bold'>accessibility</span>,  <span className='font-bold'>SEO</span>, and <span className='font-bold'>performance optimization.</span> </p>
              <p id='right-text' className='text-base mt-4 text-justify'>In 2019, during my fourth year at university,I had the opportunity to undergo my Internship at a software development company.
              </p>
              <p id='right-text' className='text-base mt-4 text-justify'> This played pivotal role for my journey into Frontend engineering and ever since, I have been building applications for a diverse ecosystems, including Blockchain and Fintech ecosystems.</p>
              <p id='right-text' className='text-base mt-4 text-justify'>
                I am constantly immersed in learning, I document my insights and share them through articles, aiming to reach a wider audience. Explore my blog <Link href="https://ese-monday.hashnode.dev/" target='_blank' className='text-violet-red-400/80 font-seminbold underline'>
                here
                </Link></p>
              <p className='text-base  mt-4 text-justify'>Apart from my coding pursuits, I am an avid gamer and I have two furry companions - Billy and Shepherd. They remind me to breathe and reconnect with my surrounding.</p>
              <div className='flex gap-4 mt-4 '>
                <Link href="https://twitter.com/EseMonday1" target='_blank'>
                <FaTwitter size={20}  />
                </Link>
                <Link href="https://www.linkedin.com/in/ese-monday/" target='_blank'>
                  <FaLinkedin size={20}/>
                </Link>
                <Link href="https://github.com/ESE-MONDAY" target='_blank'>
                  <FaGithub size={20} />
                </Link>
                
                
                
                </div>

                </div>

        </div>
        </div>
        <Work />
    </div>
  )
}

export default AboutMe;