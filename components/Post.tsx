import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GridItem {
  id: number;
  title: string;
  description?: string;
  color: string;
  colSpan: number;
  rowSpan: number;
}

const dataArray: GridItem[] = [
  {
    id: 1,
    title: 'Selected projects',
    description: 'Here are a few of my projects giving an insight on how I think through product development',
    color: 'transparent',
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: 2,
    title: '2',
    color: 'bg-green-500',
    colSpan: 3,
    rowSpan: 4,
  },
  {
    id: 3,
    title: '3',
    color: 'bg-red-500',
    colSpan: 2,
    rowSpan: 3,
  },
  {
    id: 4,
    title: '4',
    color: 'bg-yellow-500',
    colSpan: 2,
    rowSpan: 5,
  },
  {
    id: 5,
    title: '5',
    color: 'bg-purple-500',
    colSpan: 1,
    rowSpan: 5,
  },
  {
    id: 6,
    title: '6',
    color: 'bg-indigo-500',
    colSpan: 2,
    rowSpan: 4,
  },
];

const BentoGrid: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);

  const handleClick = (item: GridItem) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full">
      {dataArray.map((item) => (
        <motion.div
          key={item.id}
          className={`p-1 col-span-${item.colSpan} row-span-${item.rowSpan} ${item.color} rounded-md flex gap-2`}
          whileHover={{ scale: 1.1 }}
          onClick={() => handleClick(item)}
        >
          {item.title === 'Selected projects' ? (
            <>
              <p className='text-sm md:text-lg text-violet-red-800 font-merriweather font-semibold'>{item.title}</p>
              <p className='text-xs'>{item.description}</p>
            </>
          ) : (
            item.title
          )}
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key={selectedItem.id}
            className={`overlay ${selectedItem.color} p-4 col-span-${selectedItem.colSpan} row-span-${selectedItem.rowSpan} rounded-md`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <div>
              <h2>{selectedItem.title}</h2>
              {selectedItem.description && <p>{selectedItem.description}</p>}
              <button onClick={handleClose}>Cancel</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BentoGrid;
