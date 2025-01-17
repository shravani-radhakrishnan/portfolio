import React from 'react';
import Link from 'next/link';
import {motion} from "framer-motion";
 const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/' className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full text-2xl font-bold" whileHover={{backgroundColor:['#121212','#7b7b7b','#f8f8f8','#222222'],transition:{duration:1,repeat:Infinity},color:'black'}} >
        SR
        </MotionLink>
    </div>
  )
}

export default Logo