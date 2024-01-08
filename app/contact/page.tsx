"use client"
import React, {useState} from 'react';




const Contact  = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: any) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    alert('Please fill out all required fields.');
    return;
  }

  try {
    const response = await fetch("api/send", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: formData.subject,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Thank you for your interest ${formData.name}! We will get back to you soon!`);
    } else {
      alert('Something went wrong, please try again later');
    }
  } catch (err) {
    console.error('Error submitting form:', err);
    alert('An error occurred, please try again later');
  }
};



  return (
    <div className='py-8 md:p-24 text-[#363636] ' id='contact'>
         <div className="heading">
             <h3 className='text-center text-[60px] sm:text-[120px] font-gallient'>Let&apos;s start <br/> a project</h3>
        </div>
        <div className='mt-16 sm:flex w-full  justify-around'>
            <div className=' px-4 max-w-[600px]'>
               <p className='text-base mt-4 text-justify' id='right-text'>I am open to <span className='font-bold'>building projects</span> and  <span className='font-bold'>Technical Wrting </span> opportunities. You can also pitch me your Open-Source Project</p>
               
               <form onSubmit={handleSubmit} className='flex flex-col mt-8 '>
              <label htmlFor="name" className='font-bold font-merriweather'>What&apos;s your name?</label>
              <input 
              type="text" 
              name="name" 
              id="name"   
              value={formData.name}
              required
            onChange={handleChange} 
            className='bg-transparent outline-none p-2 border-[1px] mt-1 border-b-[#363636]'/>

              <label htmlFor="email" className='mt-4 font-merriweather font-bold'>What&apos;s your email</label>
              <input 
              type="email"
              name="email" 
              id="email" 
              required
              value={formData.email}
              onChange={handleChange}
              className='bg-transparent outline-none p-2 mt-1 border-[1px] border-b-[#363636]' />

              <label htmlFor="subject" className='mt-4 font-merriweather font-bold'>What service are you looking for?</label>
              <input 
              type="text" 
              name="subject" 
              id="subject" 
              required
              value={formData.subject}
              onChange={handleChange}
              className='bg-transparent outline-none p-2  mt-1 border-[1px] border-b-[#363636]' />

              <label htmlFor="message" className='mt-4 font-bold font-merriweather'>Tell me more about the project</label>
              <textarea 
              name="message"
              id='message'
              required
              value={formData.message}
              onChange={handleChange} 
              className='bg-transparent outline-none p-4 mt-1 border-[1px] border-b-[#363636]'></textarea>
              <input
                  
                  type="button"
                  value="Submit"
                  onClick={handleSubmit}
                  className='transition-all text-[#363636] border-[#363636] border-[1px] hover:text-[#fff] mt-4 p-4 rounded-md w-[50%] bg-transparent hover:bg-[#363636] ease-in-out duration-300'
                />
            </form>
               
               </div>
           
        
           
            

        </div>
  
</div>
  )
}

export default Contact 