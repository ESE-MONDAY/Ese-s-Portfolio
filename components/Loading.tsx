// components/Loading.tsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Loading = ({ progress }: { progress: number }) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
          opacity: 1,
          scale: 1,
          transition: { type: 'spring', damping: 15, stiffness: 150 },
        });
      }, [controls]);
  return (
    <div className="fixed top-0 left-0 w-full h-full  bg-gray-900">
        <div className='w-full flex gap-2 fixed bottom-0 py-8 '>

        <motion.div
        className=" "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ width: `${progress}%` }}
        exit={{ opacity: 0, scale: 0.5 }}
      >
      
        <div className="h-8 bg-[#fce7f1] mt-2">
          <motion.div
            className="h-full bg-[#ea4c89]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </motion.div>
      <div className="text-center text-white flex items-center">{progress}%</div>
        </div>
      
    </div>
  );
};

export default Loading;
