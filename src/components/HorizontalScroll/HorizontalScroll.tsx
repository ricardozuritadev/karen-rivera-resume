import { useRef, useState, useCallback, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';

import { useScrollPercentage } from 'react-scroll-percentage';

type SmoothScrollProps = {
  title: string;
  children: React.ReactNode;
};

export default function SmoothScroll({ title, children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const ghostRef = useRef<HTMLDivElement | null>(null);

  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const scrollPerc = useMotionValue(0);

  useEffect(() => {
    scrollRef.current && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    ghostRef.current && resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const [containerRef, percentage] = useScrollPercentage({
    threshold: 0.1
  });

  useEffect(() => {
    scrollPerc.set(percentage);
  }, [scrollPerc, percentage]);

  const transform = useTransform(
    scrollPerc,
    [0.2, 1],
    [0, -scrollRange * 3.5 + viewportW]
  );
  const physics = { damping: 8, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <div ref={containerRef}>
      <div className="scroll-container">
        <h2 className="scroll-container__title">{title}</h2>
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
        >
          <div className="thumbnails">{children}</div>
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </div>
  );
}
