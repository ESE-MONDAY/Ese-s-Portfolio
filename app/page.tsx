"use client"
import Head from 'next/head'
import Link from 'next/link'
import {easeIn, easeInOut, motion, AnimatePresence} from 'framer-motion'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'
import icon from "../public/icon.png"
import { useEffect, useState } from 'react'
import Preloader from '../components/Loading'
import MockupImage from '../public/MockupImage.png'
import { FaHashnode } from "react-icons/fa6";
import Loading from '../components/Loading'
import Marquee from "react-fast-marquee";
import BentoGrid from '../components/Post'



const WorkHistory = [
  {
    startDate: "March 2023",
    endDate: "Present",
    companyName: "Profitall",
    jobTitle: "Frontend Engineer",
    jobDescription: "I build and maintain the frontend of the company's web application. I also work with the design team to ensure the UI is pixel perfect and user friendly.",
    location: "Remote",
    technologies: ["Typescript",  "Nextjs", "Tailwindcss", "CI/CD"]
  },
  {
    startDate: "March 2022",
    endDate: "June 2022",
    companyName: "Nethermind",
    jobTitle: "Blockchain Research Intern",
    jobDescription: "I worked with the team to build a blockchain explorer for the company's blockchain. I also worked on the company's website and blog.",
    location: "Remote",
    technologies: ["Solidity", "Javascript", "Reactjs", "Cairo"]
  },
  {
    startDate: "Oct. 2021",
    endDate: "March 2022",
    companyName: "Swifta Systems & Services",
    jobTitle: "System Integration Engineer",
    jobDescription: "I worked with the team to build a blockchain explorer for the company's blockchain. I also worked on the company's website and blog.",
    location: "Remote",
    technologies: ["Draw.io", "Balsamiq", "System Design"]
  },
  {
    startDate: "July 2021",
    endDate: "Oct. 2021",
    companyName: "QOS Integrated Center",
    jobTitle: "Frontend Engineer(Internship)",
    jobDescription: "I worked with the team to build a blockchain explorer for the company's blockchain. I also worked on the company's website and blog.",
    location: "Remote",
    technologies: ["Javascript",  "Reactjs", "Tailwindcss"]
  },
  {
    startDate: "Nov. 2020",
    endDate: "March 2021",
    companyName: "Swifta Systems & Services",
    jobTitle: "Frontend Engineer(Internship)",
    jobDescription: "I worked with the team to build a blockchain explorer for the company's blockchain. I also worked on the company's website and blog.",
    location: "Remote",
    technologies: ["Javascript",  "Reactjs", "Tailwindcss"]
  }

]


const Technologies = [
  "NEXTJS",
  "REACTJS",
  "TYPESCRIPT",
  "TAILWINDCSS",
  "JAVASCRIPT",
  "SOLIDITY",
  "CAIRO",
  "HTML",
  "CSS",
  "GIT",
  "GITHUB",
]




export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation
    const timeout = setTimeout(() => {
      setShowPreloader(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);


 
  return (
    <>
   
    <Preloader isVisible={showPreloader} />


    <motion.div className='h-auto flex justify-between flex-col bg-[#111111] overflow-y-auto '>
    <Head>
      <title>Ese Monday - Portfolio</title>
      <meta name="software developer" content="Ese Monday is a dynamic software developerbased in Lagos Nigeria" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='h-auto max-w-[1440px] w-full mx-auto grid grid-cols-4 gap-4'>
      <div className='col-span-5 md:col-span-2  flex justify-center md:h-screen'>

        <div className='p-2 mt-40 md:px-16 items-center text-white max-w-[600px]  '>
          <h1 className='text-4xl md:text-6xl font-roboto font-bold '> Ese Monday</h1>
          <p className='text-xl md:text-3xl font-roboto font-medium mt-2'>Frontend Engineer</p>


          <p className='mt-2 text-md text-white/80'>I am a Software Developer and Technical Writer with 3+ years of professional experience.
           Dedicated to building scalable mobile, web software, tools, and infrastructure.</p>
           <div className='w-full border-red-500 flex gap-1 mt-2'>
            <p className='px-2 py-1 rounded-full text-xs border-[1px] bg-gray-500/20 border-violet-500/50 text-white/60'>Frontend Development</p>
            <p  className='px-2 py-1 rounded-full text-xs border-[1px] bg-gray-500/20 border-violet-500/50 text-white/60'>Technical Writing</p>
            <p  className='px-2 py-1 rounded-full text-xs  border-[1px] bg-gray-500/20 border-violet-500/50 text-white/60'>FOSS Advocate</p>

           </div>

          {/* <div className='text-white/70 flex items-center gap-4 mt-8'>
            <p>Connect with me:</p>
          <Link className='hover:text-[#ea4c89]' href="https://www.linkedin.com/in/ese-monday/" ><BsLinkedin size={16} /></Link> 
          <Link className='hover:text-[#ea4c89]' href="https://github.com/ESE-MONDAY"><BsGithub size={16} /></Link>
          <Link className='hover:text-[#ea4c89]' href="https://twitter.com/EseMonday1"><BsTwitter size={16}/></Link>
        </div> */}
        </div>
        
         </div>
      <div className=' col-span-5 md:col-span-2 md:h-screen overflow-y-auto '>

        <div className='mt-20 md:px-16 p-2 '>
        <div className="grid grid-cols-5 grid-rows-5 gap-4 max-w-[800px]  mx-auto">
          
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
                {/* <iframe
              title="My Embedded Content"
                className='w-full rounded-lg '
              height="300"
              src="https://www.profitall.co.uk/"
              
              allowFullScreen
            ></iframe> */}
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
        <p className='text-md md:text-xl text-white font-roboto  font-semibold text-left mt-20 '>About Me</p>
          <p className='max-w-[500px] item-center text-sm text-white/80 font-roboto mt-4  flex justify-center flex-col items-center'>
          In 2019, during my fourth year at university,I had the opportunity to undergo my Internship at a software development company. This played pivotal role for my journey into Frontend engineering and  ever since, I have been building applications for a diverse ecosystems, including Blockchain and Fintech ecosystems.

          </p>
          <p className='max-w-[500px] item-center text-sm text-white/80 font-roboto  mt-1'> I am constantly immersed in learning, I document my insights and share them through articles, aiming to reach a wider audience. Explore some of my work <Link href="https://ese-monday.hashnode.dev/">here</Link></p>
          <p className='max-w-[500px] item-center text-sm text-white/80 font-roboto  mt-1'>Apart from my coding pursuits, I am an avid gamer and I have two furry companions - Billy and Shepherd. They remind me to breathe and reconnect with my surrounding.</p>

          <p className='text-md md:text-xl text-white font-roboto  font-semibold text-left mt-20 '>Skills</p>
          <div className='max-w-[500px] item-center text-sm text-white/80 font-roboto mt-4  flex justify-center flex-col items-center'>
            <div className='border-[1px] bg-gray-500/20 border-violet-500/50 max-w-[500px]  rounded-md p-2'>
              <Marquee gradient={false} speed={50} pauseOnHover={true}>
                <div className='flex  overflow-hidden w-full border-white/50 border-b-[1px] mb-1 p-2 '>
                    <span  className='text-white/80 ml-2' >TYPESCRIPT</span>
                    <span  className='text-white/80 ml-2' >JAVASCRIPT</span>
                   <span  className='text-white/80 ml-2' >NEXTJS</span>
                   <span  className='text-white/80 ml-2' >REACTJS</span>
                    <span  className='text-white/80 ml-2' >TAILWINDCSS</span>
                    <span  className='text-white/80 ml-2' >SOLIDITY</span>
                    <span  className='text-white/80 ml-2' >REDUX TOOLKIT</span>
                    <span  className='text-white/80 ml-2' >HTML</span>
                    <span  className='text-white/80 ml-2' >CSS</span>
                    <span  className='text-white/80 ml-2' >GIT</span>
                    <span  className='text-white/80 ml-2' >GITHUB</span>
                    <span  className='text-white/80 ml-2' >CI/CD</span>
                    <span  className='text-white/80 ml-2' >DOCKER</span>
                    <span  className='text-white/80 ml-2' >JEST & ENZYME</span>
                    <span  className='text-white/80 ml-2' >CYPRESS</span>
                
                </div>
              </Marquee>
              <Marquee gradient={false} speed={50} pauseOnHover={true}>
                <div className='flex  overflow-hidden w-full  border-white/50 border-b-[1px] mb-1 p-2 '>
                    <span  className='text-white/80 ml-2' >ADOBE ILLUSTRATOR</span>
                    <span  className='text-white/80 ml-2' >FIGMA</span>
                   <span  className='text-white/80 ml-2' >DRAW.IO</span>
                   <span  className='text-white/80 ml-2' >REACT NATIVE</span>
                   <span  className='text-white/80 ml-2' >APPWRITE</span>
                   <span  className='text-white/80 ml-2' >SUPABASE</span>
                    
                
                </div>
              </Marquee>
              <Marquee gradient={false} speed={50} pauseOnHover={true}>
                <div className='flex  overflow-hidden w-full   mb-1 p-2 '>
                    <span  className='text-white/80 ml-2' >SEO</span>
                    <span  className='text-white/80 ml-2' >PERFORMANCE OPTIMIZATION</span>
                   <span  className='text-white/80 ml-2' >ANALYTICS</span>
                   <span  className='text-white/80 ml-2' >REACT NATIVE</span>
                    
                
                </div>
              </Marquee>
        


            </div>
       
         

          </div>
          
        


          {/* <div className='mt-8 max-w-[500px]'>
            {
              WorkHistory.map((work, index) => (
                <div key={index} className='p-2 w-full hover:bg-violet-red-200 grid grid-cols-4 items-center gap-4 mt-4'>
                    <p className='text-sm col-span-4 md:col-span-1  whitespace-wrap text-violet-red-800 font-semibold '> {work.startDate}  - {work.endDate}</p>
                    <div className='col-span-4 mt-2 md:mt-0 md:col-span-3'>
                      <h3 className='text-violet-red-800 font-bold text-sm '>{work.jobTitle} . {work.companyName}</h3>
                      <p className='text-sm mt-1 text-violet-red-600'>{work.location}</p>
                      <p className='text-xs flex gap-2 mt-1'>
                        {
                          work.technologies.map((tech, index) => (
                            <span className='text-violet-red-800 bg-violet-red-200 p-1 rounded-md' key={index}>{tech}</span>
                          ))
                        }
                       </p>
                      </div>

                </div>
              ))
            }
            <Link href="https://drive.google.com/file/d/1KXyO2yW4dWd7PzD4---K48xkFEAYqSph/view?usp=sharing" className='mt-4 text-sm text-violet-red-800 p-2 flex gap-1 hover:gap-1.5  '> <span className='hover:underline'>View  Resume</span> <span>➡️</span></Link>
         

          </div> */}
        
          




          

          <div className='w-full mx-auto item-center flex justify-center p-4 mt-20'>
      <h3 className='text-xs text-white/80 whitespace-nowrap sm:text-md'>  Designed & Developed with ❤️ by Ese Monday</h3>
    
    </div>
        </div>


      </div>
      
    </main>
    
  
 
   

    
  


  
  </motion.div>


    </>
    
  )
}
