import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
      <MotionLink
        href='/'
        className="w-11 h-11 bg-gradient-to-tr from-accent-purple via-indigo-500 to-accent-cyan text-white flex items-center justify-center rounded-2xl text-lg font-bold tracking-wider shadow-lg shadow-accent-purple/25 border border-white/20"
        whileHover={{
          scale: 1.08,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        SR
      </MotionLink>
    </div>
  );
};

export default Logo;