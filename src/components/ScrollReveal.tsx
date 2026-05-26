'use client';

import { motion, useInView } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  once?: boolean; 
}

const animations = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: -60 },
  right: { x: 60 },
};

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-100px', 
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...animations[direction],
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], 
      }}
    >
      {children}
    </motion.div>
  );
}
