"use client"
import Head from 'next/head'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
import Image from 'next/image'
import icon from "../public/icon.png"





export default function Home() {
  const animationVariants = {
    hidden: {
      y: 50, // Starting position below the element
      opacity: 0, // Element is initially invisible
    },
    visible: {
      y: 0, // Ending position at its normal position
      opacity: 1, // Element is fully visible
      transition: {
        duration: 0.5, // Adjust the duration as needed
      },
    },
  };
  
  
  return (
    <div className='h-screen flex justify-between flex-col bg-[#f8dbc8] '>
      <Head>
        <title>Ese Monday - Portfolio</title>
        <meta name="software developer" content="Ese Monday is a dynamic software developerbased in Lagos Nigeria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

      <main className='h-full max-w-[1440px] w-full mx-auto'>
        <div className='h-auto p-4 justify-between flex items-center flex-col mt-20'>
          {/* <div className=' rounded-full bg-red-400 text-white p-4'>Logo</div> */}
          <motion.h1 initial="hidden"
      animate="visible"
      variants={animationVariants} className='md:w-[300px]  mx-auto text-4xl md:text-5xl text-center font-merriweather font-bold mt-8'>Portfolio <br/> Coming Soon</motion.h1>
          <div className='max-w-[600px] mx-auto mt-12'>
          <p className='text-center  font-semibold'>Hello, I&apos;m Ese Monday, a software developer in Lagos, Nigeria. I am currently revamping my portfolio. Lately, I&apos;ve been immersed in open-source tech and privacy compliance, with a focus on user data protection and consent. I&apos;m also an avid reader who maintains a collection of knowledge in both published and unpublished notes, which you can explore <Link className='font-semibold underline text-[#ea4c89]' href="https://www.notion.so/esemonday/40d48ef6d29f4ff1af2241d4066fe0c8?v=ec4d5a36c67248918e395bee981e2a7a&p=3cf0bdc7281b4dca847041f35b7b421e&pm=s"> here</Link></p>

          <div className='text-black flex gap-4 mt-4 justify-center p-2'>
            <Link href="https://www.linkedin.com/in/ese-monday/" ><BsLinkedin size={16} /></Link> 
            <Link href="https://github.com/ESE-MONDAY"><BsGithub size={16} /></Link>
            <Link href="https://twitter.com/EseMonday1"><BsTwitter size={16}/></Link>
          </div>

           
            {/* <p>  My recent Projects:

- MarketSq: A digital marketplace for seamless purchase of goods and services
- Profital : An  e-commerce, e-payment, e-logistics, e-services, dedicated to create seamless experiences for vendors and freelancers.</p>

<p>Every feedback to improve both project is highly welcome</p>  */}
           

         
          </div>

          
        </div>
        
      </main>
      <footer className='w-full h-auto max-w-[1440px] mx-auto item-center flex justify-center p-4'>
        <h3 className='text-xs whitespace-nowrap sm:text-md'>  Designed & Developed with ❤️ by Ese Monday</h3>
      
      </footer>

      
    


    
    </div>
  )
}
