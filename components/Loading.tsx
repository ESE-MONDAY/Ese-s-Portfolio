import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Preloader = ({ isVisible }: any) => {
  const containerVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2, delayChildren: 0.3, staggerChildren: 0.2 } },
    exit: { opacity: 0, y: -100, transition: { duration: 0.4, delay:0.2,  staggerChildren: 0.2, ease: 'easeInOut' } },
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeInOut' } },
  };
 
  return (
    <AnimatePresence mode='wait'>
      {isVisible && (
        <motion.div
          key='preloader'
          className='h-screen z-20 fixed top-0 w-screen flex justify-center flex-col items-center bg-[#111111] text-white'
          variants={containerVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        
        >
          <motion.h1 variants={childVariants} className='text-6xl font-roboto font-bold text-[#9b193f]'>
          <AnimatedText text="Ese Monday" />
          </motion.h1>
          <motion.p variants={childVariants} className='text-4xl font-roboto font-medium text-[#9b193f] mt-2'>
          <AnimatedText text="Frontend Engineer" />
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
