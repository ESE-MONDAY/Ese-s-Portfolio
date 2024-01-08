// components/CustomCursor.js
import { on } from 'events';
import { useEffect, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
 useEffect(()=> {
    const cursor = document.querySelector('#custom-cursor');
    const links = document.querySelectorAll('p');
   const cursorText = document.querySelector('.custor-text');
    const onMouseMove = (e:any) => {
        const {clientX, clientY} = e;
        gsap.set(cursor, {x: clientX, y: clientY});


    }
    const onMouseEnterLink=(e: any) =>{
        const link = e.target;
        if(link.classList.contains('view')){
            gsap.set(cursor, {scale: 4, duration: 0.5})
            
        }else{
            gsap.set(cursor, {scale: 4, duration: 0.5})
        }


    }

    const onMouseLeaveLink=(e: any) =>{
        gsap.set(cursor, {scale: 1, duration: 0.5},)
    }

   document.addEventListener('mousemove', onMouseMove);
   links.forEach(link => {
        link.addEventListener('mouseenter', onMouseEnterLink)
        link.addEventListener('mouseleave', onMouseLeaveLink)
   })
 },[])



  return (
   <div id='custom-cursor' className='custom-cursor'>
  

   </div>
  );
};

export default CustomCursor;
