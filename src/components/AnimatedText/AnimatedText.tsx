import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  once?: boolean;
  style?: React.CSSProperties;
};

export default function AnimatedText({
  text,
  el: Wrapper = 'span',
  className,
  delay = 0,
  once = false,
  style
}: AnimatedTextProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.8, once });

  const defaultAnimations = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        ease: 'easeOut',
        delayChildren: delay
      }
    }
  };

  return (
    <Wrapper className={className} style={style}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={defaultAnimations}
        aria-hidden
      >
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={defaultAnimations}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
