'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  texts,
  className = '',
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isInView || started) return;
    const init = () => {
      setStarted(true);
    };
    init();
  }, [isInView, started]);

  useEffect(() => {
    if (!started) return;

    const currentText = texts[currentIndex];

    if (!isDeleting) {
      // Печатаем
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typeSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [
    started,
    displayedText,
    isDeleting,
    currentIndex,
    texts,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
  ]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="ml-0.5 inline-block h-[1em] w-0.5 bg-accent-primary align-middle"
      />
    </span>
  );
}
