import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type ChangingTextProps = {
  words: string[];
};

export default function ChangingText({ words }: ChangingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={index}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
  );
}
