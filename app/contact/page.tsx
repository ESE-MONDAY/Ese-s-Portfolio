import React from 'react'
import Link from 'next/link'

const Contact  = () => {
  return (
    <div className='py-8 md:p-24 text-[#363636] ' id='contact'>
         <div className="heading">
             <h3 className='text-center text-[60px] sm:text-[120px] font-gallient'>Let&apos;s start <br/> a project</h3>
        </div>
        <div className='flex flex-col sm:flex-row gap-8'>
            <div className='sm:w-[60%]'> <p className='text-xl mt-4 text-justify' id='right-text'>I am open to <span className='font-bold'>building projects</span> and  <span className='font-bold'>Technical Wrting </span> opportunities. You can also pitch me your Open-Source Project</p></div>
            <div className='sm:w-[40%]'>
            
          
            <div>
                <h4>Contact</h4>
                <p>mondayese8@gmail.com</p>
                <p>UTC +1</p>
            </div>

            <div>
                <h4>Social Media</h4>
                <p>Twitter</p>
                <p>Linkedin</p>

            </div>
            </div>

        </div>
  
</div>
  )
}

export default Contact 