"use client"
import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import Image from 'next/image';
import applewatch from '../../public/applewatch.png';
import beatsbydre from '../../public/beatsbydre.png';
import apple from '../../public/apple.png';
import airpod from '../../public/airpod.png';
import ipad from '../../public/ipad.png';


const products = [
  { id: 1, name: "Apple Watch Ultra", description: "The latest iPhone model", price: 799.99, image: applewatch },
  { id: 2, name: "Beats by Dr Dre", description: "Thin and light laptop", price: 999.99, image: beatsbydre },
  { id: 3, name: "iPad Pro", description: "Powerful tablet for professionals", price: 799.99, image: ipad },
  { id: 4, name: "Apple Watch Series 7", description: "Smartwatch with advanced features", price: 399.99, Image: beatsbydre},
  { id: 5, name: "AirPods Pro", description: "Premium noise-canceling earbuds", price: 249.99 , Image: ipad },
];





const Framer  = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const product = products[currentProductIndex];

  const nextProduct = () => {
    if (currentProductIndex < products.length - 1) {
      setCurrentProductIndex(currentProductIndex + 1);
    }
  };

  const previousProduct = () => {
    if (currentProductIndex > 0) {
      setCurrentProductIndex(currentProductIndex - 1);
    }
  };
  const isPreviousDisabled = currentProductIndex === 0;
  const isNextDisabled = currentProductIndex === products.length - 1;
  const exitVariants = {
    hidden: { opacity: 0, x: -300 }, 
  };
 



  return (
    <div className='w-full h-auto grid grid-cols-5'>
     <div className='md:h-full h-[40vh] bg-pink-100 col-span-5 md:col-span-2 flex justify-center items-center overflow-hidden'>
     <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{  opacity: 0, x: -100 , scale: 0.5}}
                animate={{  opacity: 1, x: 0, scale: 1.5 }}
                exit={{ opacity: 0, x: 200, scale: 0.5 }} // Specify the exit animation
                variants={exitVariants} 
                transition={{ duration: 0.3 , delay:0.2}}
                className='h-[100px] w-[100px] md:h-[200px] md:w-[200px] p-4'
              >
                {product.image && <Image src={product.image} alt='product Image' />}
              </motion.div>
            </AnimatePresence>
      
     </div>
     <div className='h-screen bg-gray-100 col-span-5 md:col-span-3 px-12'>
        <div className='mt-12'>
          <div className='flex justify-between w-full'>
          <button className='mt-12 font-light text-gray-500 text-sm ' onClick={nextProduct} disabled={isNextDisabled}>Next</button>
          <button className='mt-12 flex md:hidden font-light text-gray-700 text-sm' onClick={previousProduct}   disabled={isPreviousDisabled} >Prev</button>
          </div>
          
           
            <p className='mt-8 font-light font-inter text-xs text-gray-500'>New Arrival Series</p>
            <div className='overflow-hidden'>
            <motion.p   key={product.id} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.2, duration: 0.7}} exit={{  y: -40 }}  className='text-2xl md:text-4xl font-semibold mt-4 tracking-tight'>{product.name}</motion.p>
            </div>
       
            <p className='mt-6 text-sm  font-merriweather'>Get this product with our monthly subscription plan <br /> and recieve cash back on every purchase</p>
            <AnimatePresence mode='wait'>
            <motion.p   key={product.id} initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.2, duration: 0.7}} className=' text-lg md:text-2xl font-medium mt-6'>$ {product.price}</motion.p>
            </AnimatePresence>
            
            <div className='mt-6 px-12'>
              <button className='px-6 py-2 rounded-md bg-black text-white font-merriweather font-medium'>Add to Cart</button>
            </div>
            <button className='mt-12 hidden md:flex font-light text-gray-700 text-sm' onClick={previousProduct}   disabled={isPreviousDisabled} >Prev</button>
          </div>

          <p className='mt-12 font-light font-inter text-sm text-gray-500 px-8'><span className='underline'>Subscribe</span> to our newsletter for daily updates</p>
      </div> 
     


  
      
       </div>
  )
}

export default Framer 