"use client"
import React, {useState} from 'react'




const Work = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () =>{
            setIsOpen(!isOpen)
    }
  return (
    <div id='triggerElement' className='my-40'>
         <div className=''>
                <p className='text-2xl mt-8 text-white  font-semibold text-left '>Resume</p>
                <div className='mt-12'>
                  <p className='text-lg   text-white/80  font-semibold text-left '>
                    Frontend Engineer at Profitall
                  </p>
                  <p className='text-md mt-2 text-white/60 text-left '>
                    March 2023 - Present
                  </p>
                  <p className='text-sm text-white/50 mt-2 text-justify'>Developed and maintained  commercial marketplace UIs for myMarketsq using Next.js and TypeScript, optimizing page load speed and SEO with SSR. Implemented responsive design principles, ensuring seamless functionality across devices, and collaborated with the design team to deliver pixel-perfect, visually appealing UIs with Tailwind CSS.</p>
                  <p className='text-sm text-white/50 mt-2 text-justify'> Implemented responsive design principles, ensuring seamless functionality across devices, and collaborated with the design team to deliver pixel-perfect, visually appealing UIs with Tailwind CSS.</p>
                  
                </div>
                <div className='mt-8'>
                  <p className='text-lg  text-white/80  font-semibold text-left '>
                    Intern at Nethermind
                  </p>
                  <p className='text-md mt-2 text-white/60 text-left '>
                    March 2022 - June 2022
                  </p>
                  <p className='text-sm text-white/50 mt-2 text-justify'> Contributed to the developement the Horus verification tool for Staknet, ensuring efficient smart contract verification in Cairo language.</p>
                  <p className='text-sm text-white/50 mt-1 text-justify '>
                  Participated in audits of Solidity and Cairo smart contracts, reducing rejection rates by 33%, contributing to enhanced security and performance, and shaping best practices for smart contract design and implementation.
                  </p>
                  
                </div>

               {!isOpen && <button onClick={handleClick} className='text-sm text-violet-red-400/50 font-semibold mt-2 text-justify'>See more</button> } 
                {isOpen && (
                    <>
                    <div className='mt-8'>
                  <p className='text-lg   text-white/80  font-semibold text-left '>
                    Systems Integration Engineer at Swifta Systems
                  </p>
                  <p className='text-md mt-2 text-white/60 text-left '>
                    June 2021 - March 2022
                  </p>
                  <p className='text-sm text-white/50 mt-2 text-justify'> Played a pivotal role as a Systems Integration Engineer in crafting detailed Business Requirements Documents (BRD) for payment processing on multiple USSD platforms, contributing to seamless payment workflows and strengthening stakeholder relationships. Achieved high-quality REST APIs through thorough testing and collaboration, ensuring compliance with business requirements.</p>
                  
                </div>
                <div className='mt-8'>
                  <p className='text-lg   text-white/80  font-semibold text-left '>
                    Frontend Engineer at QOS Integrated Services
                  </p>
                  <p className='text-md mt-2 text-white/60 text-left '>
                    March 2021 - October 2021
                  </p>
                  <p className='text-sm text-white/50 mt-2 text-justify'>Enhanced QOS&apos;s web app with React and TypeScript, ensuring client satisfaction, on-time releases, and improved performance. Developed a WordPress payment plugin library in-company payment system. Developed an onboarding guide, increasing third-party integration .</p>
                  
                </div>
                {isOpen && <button onClick={handleClick} className='text-sm text-violet-red-400/50 font-semibold mt-2 text-justify'>See less</button> } 
                    </>
                    
                )}
               
              

                </div>

    </div>
  )
}

export default Work