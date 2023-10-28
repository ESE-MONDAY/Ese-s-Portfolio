"use client"
import React from 'react';
import {motion, AnimatePresence} from 'framer-motion'



interface Props {
    text: string;
    el?: keyof JSX.IntrinsicElements;
    className?: string;
}

const defaultVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    viscible:{
        opacity: 1,
        y: 0
    }
}

const AnimatedText = ({ text, el: Wrapper = "p", className }: Props) => {
    return <Wrapper className={className}>
        <span className='sr-only'>{text}</span>
        <motion.span initial="hidden" animate="viscible" transition={{
            staggerChildren: 0.1
        }} aria-hidden>{ text && text.split("").map((char) =>(
            <motion.span variants={defaultVariants} key={char}>{char}</motion.span>
        ))}</motion.span>
        
        </Wrapper>;
};

export default AnimatedText;
