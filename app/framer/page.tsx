"use client"
import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import AnimatedText from '../../components/AnimatedText'



const Framer  = () => {

  return (
    <div className='w-full h-full flex p-4 justify-center items-center flex-col'>

      <AnimatedText text="Hello" className='bg-red-500 text-white p-4' />

  
      
       </div>
  )
}

export default Framer 