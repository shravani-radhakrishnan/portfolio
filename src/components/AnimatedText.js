import React from 'react';
import { motion } from "framer-motion";

const quoteVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const singleWordVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full font-bold tracking-tight ${className}`}
        variants={quoteVariants}
        initial="initial"
        animate="animate"
      >
        {text?.split(" ").map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWordVariants}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;