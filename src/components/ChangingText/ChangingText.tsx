import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type ChangingTextProps = {
  words: string[];
};

export default function ChangingText({ words }: ChangingTextProps) {
  const [index, setIndex] = useState(0);
  const [textWidth, setTextWidth] = useState<number>(0);

  const firstH1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    if (firstH1Ref && firstH1Ref.current) {
      setTextWidth(firstH1Ref.current.offsetWidth);
    }
  }, [index]);

  return (
    <div
      className="changing-text"
      style={{
        marginLeft: `-${textWidth}px`
      }}
    >
      <motion.span
        className="changing-text__word"
        ref={firstH1Ref}
        key={index}
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {words[index]}
      </motion.span>
      <motion.span
        className="changing-text__word changing-text__word--yellow"
        animate={{ x: textWidth }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ marginLeft: `-${textWidth}px` }}
      >
        designer
      </motion.span>
    </div>
  );
}
