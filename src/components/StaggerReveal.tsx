
'use client';

import { motion, useInView, Variants } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childClassName?: string;
}

export default function StaggerReveal({
  children,
  className = '',
  staggerDelay = 0.1,
  childClassName = '',
}: StaggerRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              className={childClassName}
              variants={childVariants}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
