"use client"
import React, {useState} from 'react'




const Work = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () =>{
            setIsOpen(!isOpen)
    }
  return (
    <div id='triggerElement' className='mt-16 md:m-20 lg:m-40 flex flex-col lg:flex-row sm;px-16 justify-between'>
      <div className='basis-1/3 flex sm:flex-col sm:gap-0 gap-3'>
        <h2 className='text-3xl sm:text-6xl sm:mt-8  font-gallient  font-semibold text-start lg:ml-40 '>Resume</h2>
        <h2 className='text-3xl sm:text-6xl sm:mt-4  font-gallient  font-semibold text-start lg:ml-48  '>Experience</h2>
        </div>
         <div className='lg:basis-1/2 w-full'>
     
                <div className='mt-4 sm:mt-12'>
                  <h3 className='text-lg  font-semibold text-left '>
                    Frontend Engineer at Profitall
                  </h3>
                  <h4 className='text-md mt-2  text-left '>
                    March 2023 - Present
                  </h4>
                  <ul className='list-disc list-outside  '>
                    <li className=' text-lg mt-2 text-justify pl-1'> Developed and maintained  commercial marketplace UIs for myMarketsq using Next.js and TypeScript, optimizing page load speed and SEO with SSR. Implemented responsive design principles, ensuring seamless functionality across devices, and collaborated with the design team to deliver pixel-perfect, visually appealing UIs with Tailwind CSS.</li>
                    <li className='text-lg mt-2 text-justify pl-1'>
                     Implemented responsive design principles, ensuring seamless functionality across devices, and collaborated with the design team to deliver pixel-perfect, visually appealing UIs with Tailwind CSS.
                    </li>
                  </ul>
                 
                
                  
                </div>
                <div className='mt-8'>
                  <h3 className='text-lg  font-semibold text-left '>
                    Intern at Nethermind
                  </h3>
                  <h4 className='text-md mt-2 text-left '>
                    March 2022 - June 2022
                  </h4>
                  <ul className='list-disc list-outside  '>
                    <li className='text-lg mt-2 text-justify pl-1'>
                    Contributed to the developement the Horus verification tool for Staknet, ensuring efficient smart contract verification in Cairo language.
                    </li>
                    <li className='text-lg mt-2 text-justify pl-1'>
                    Participated in audits of Solidity and Cairo smart contracts, reducing rejection rates by 33%, contributing to enhanced security and performance, and shaping best practices for smart contract design and implementation.

                    </li>

                  </ul> 
                </div>

               {!isOpen && <button onClick={handleClick} className='text-sm text-violet-red-400/50 font-semibold mt-2 text-justify'>See more</button> } 
                {isOpen && (
                    <>
                    <div className='mt-8'>
                  <h3 className='text-lg    font-semibold text-left '>
                    Systems Integration Engineer at Swifta Systems
                  </h3>
                  <h4 className='text-md mt-2 text-left '>
                    June 2021 - March 2022
                  </h4>
                  <ul className='list-disc list-outside '>
                    <li className='text-lg mt-2 text-justify pl-1'>
                    Played a pivotal role as a Systems Integration Engineer in crafting detailed Business Requirements Documents (BRD) for payment processing on multiple USSD platforms, contributing to seamless payment workflows and strengthening stakeholder relationships. Achieved high-quality REST APIs through thorough testing and collaboration, ensuring compliance with business requirements.
                    </li>
                    <li></li>

                  </ul>
                  
                </div>
                <div className='mt-8'>
                  <h3 className='text-lg font-semibold text-left '>
                    Frontend Engineer at QOS Integrated Services
                  </h3>
                  <h4 className='text-md mt-2  text-left '>
                    March 2021 - October 2021
                  </h4>
                  <ul className='list-disc list-outside  '>
                    <li className='text-lg mt-2 text-justify pl-1'>
                    Enhanced QOS&apos;s web app with React and TypeScript, ensuring client satisfaction, on-time releases, and improved performance. Developed a WordPress payment plugin library in-company payment system. Developed an onboarding guide, increasing third-party integration .
                    </li>
                  </ul>
                  
                </div>
                {isOpen && <button onClick={handleClick} className='text-sm text-violet-red-400/50 font-semibold mt-2 text-justify'>See less</button> } 
                    </>
                    
                )}
               
              

                </div>

    </div>
  )
}

export default Work