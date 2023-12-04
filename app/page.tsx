"use client"
import Head from 'next/head'
import Link from 'next/link'
import {easeIn, easeInOut, motion, AnimatePresence} from 'framer-motion'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'
import icon from "../public/icon.png"
import { useEffect, useState } from 'react'
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
const mockArray = [
  {
    title: 'Selected projects',
    description: 'Here are a few of my projects giving an insight into how I think through product development',
    gridClass: 'p-1 col-span-2 row-span-2',
  },
  {
    title: '2',
    gridClass: 'bg-green-500 p-4 col-span-3 row-span-4 rounded-md',
  },
  {
    title: '3',
    gridClass: 'bg-red-500 p-4 row-span-3 col-span-2',
  },
  {
    title: '4',
    gridClass: 'bg-yellow-500 p-4 col-span-2 row-span-5',
  },
  {
    title: '5',
    gridClass: 'bg-purple-500 p-4 row-span-5',
  },
  {
    title: '6',
    gridClass: 'bg-indigo-500 p-4 row-span-4 col-span-2',
  },
  // Add more items as needed
];
const sampleArray = [
  { id: 1, title: 'Item 1', description: 'Description for Item 1' },
  { id: 2, title: 'Item 2', description: 'Description for Item 2' },
  { id: 3, title: 'Item 3', description: 'Description for Item 3' },
  { id: 4, title: 'Item 4', description: 'Description for Item 4' },
  { id: 5, title: 'Item 5', description: 'Description for Item 5' },
  { id: 6, title: 'Item 6', description: 'Description for Item 6' },
  // Add more items as needed
];












export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [selectedId, setSelectedId] = useState("")
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => Math.min(prev + 5, 100));
    }, 250);

    // Simulate initial loading - you can replace this with your actual loading logic
    setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
    }, 5000); // Set the time based on your loading requirements

    return () => clearInterval(interval);
  }, []);

  const parentVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2, // 200 milliseconds stagger duration
      },
    },
  };
  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  
  

  return (
    <>
    {loading ? (
      <Loading progress={loadingProgress} />

    ): (
      <div className='h-auto flex justify-between flex-col bg-violet-red-50 overflow-y-auto '>
      <Head>
        <title>Ese Monday - Portfolio</title>
        <meta name="software developer" content="Ese Monday is a dynamic software developerbased in Lagos Nigeria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-auto max-w-[1440px] w-full mx-auto grid grid-cols-5 gap-4'>
        <div className='col-span-5 md:col-span-2 h-full'>

          <div className='p-2 mt-40 md:px-16 items-center '>
            <h1 className='text-4xl font-roboto font-bold text-[#9b193f]'> Ese Monday</h1>
            <p className='text-2xl font-roboto font-medium text-[#9b193f] mt-2'>Frontend Engineer</p>

            <p className='mt-8 text-sm text-violet-red-600'>I am a Software Developer and Technical Writer with 3+ years of professional experience.
             Dedicated to building scalable mobile, web software, tools, and infrastructure.</p>

            <div className='text-violet-red-600 flex gap-4 mt-8'>
            <Link className='hover:text-[#ea4c89]' href="https://www.linkedin.com/in/ese-monday/" ><BsLinkedin size={16} /></Link> 
            <Link className='hover:text-[#ea4c89]' href="https://github.com/ESE-MONDAY"><BsGithub size={16} /></Link>
            <Link className='hover:text-[#ea4c89]' href="https://twitter.com/EseMonday1"><BsTwitter size={16}/></Link>
          </div>
          </div>
          
           </div>
        <div className=' col-span-5 md:col-span-3 h-full md:overflow-y-auto '>

          <div className='mt-40 md:px-16 p-2 '>
          <p className='text-sm md:text-lg text-violet-red-800 font-merriweather font-semibold text-left '>About Me</p>
            <p className='max-w-[500px] item-center text-sm text-violet-red-600 flex justify-center flex-col items-center'>
            In 2019, during my fourth year at university,I had the opportunity to undergo my Internship at a software development company. This played pivotal role for my journey into Frontend engineering and  ever since, I have been building applications for diverse ecosystems, including Blockchain and Fintech.
 
            </p>
            <p className='max-w-[500px] item-center text-sm text-violet-red-600 mt-1'> I am constantly immersed in learning, I document my insights and share them through articles, aiming to reach a wider audience. Explore some of my work <Link href="https://ese-monday.hashnode.dev/">here</Link></p>
            <p className='max-w-[500px] item-center text-sm text-violet-red-600 mt-1'>Apart from my coding pursuits, I am an avid gamer and I have two furry companions - Billy and Shepherd that reminds me to breathe and be human.</p>
            <div className='mt-8 max-w-[500px]'>
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
           

            </div>
            <div className='mt-8 max-w-[600px] w-full border-t-2 p-2 border-violet-red-700'>
              <div className='w-full'>
             
  
              <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full">
            
                <div className=" p-1 col-span-2 row-span-2">
                <p className='text-sm md:text-lg text-violet-red-800 font-merriweather font-semibold'>Selected projects</p>
                <p className='text-xs'>Here are a few of my projects giving an insight on how I think through product development</p>
                  </div>
                <div className="bg-green-500 p-4 col-span-3 row-span-4 rounded-md flex gap-2">
                  

                  
                  2</div>
                <div className="bg-red-500 p-4 row-span-3 col-span-2">3</div>
                <div className="bg-yellow-500 p-4 col-span-2 row-span-5">4</div>
                <div className="bg-purple-500 p-4 row-span-5">5</div>
                <div className="bg-indigo-500 p-4 row-span-4 col-span-2">6</div>
              </div>
              

              </div>

            </div>
            




            

            <div className='w-full mx-auto item-center flex justify-center p-4 mt-20'>
        <h3 className='text-xs text-[#ea4c89] whitespace-nowrap sm:text-md'>  Designed & Developed with ❤️ by Ese Monday</h3>
      
      </div>
          </div>


        </div>
    
    
      
      
       
      
    
        
      </main>
      
    
   
     

      
    


    
    </div>
    ) }


    </>
    
  )
}
