'use client';

import { motion, useInView } from 'motion/react';
import { useRef, ReactNode } from 'react';

export default function BlurReveal({
  children,
  className = '',
  duration = 0.8,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
      animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
      transition={{ duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
