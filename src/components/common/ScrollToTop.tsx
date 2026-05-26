// components/ScrollToTop.tsx
'use client';

import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

export default function ScrollToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-dark-border bg-dark-surface shadow-lg backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0,
        borderColor: 'var(--dark-border)', // Явно указываем цвет рамки
      }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: 1.1,
        borderColor: 'var(--accent-primary)',
      }}
      whileTap={{ scale: 0.9 }}
      aria-label="Прокрутить наверх"
    >
      {/* Круговой прогресс */}
      <svg className="absolute inset-0 h-full w-full -rotate-90">
        <motion.circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="125.6"
          strokeDashoffset={125.6}
          className="text-accent-primary"
          style={{
            pathLength: scrollYProgress,
          }}
        />
      </svg>

      <motion.span
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.span>
    </motion.button>
  );
}
