import React from 'react';
import {animate, motion} from "framer-motion";
import {Roboto} from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    style: ['normal', 'italic'],
    weight:'400',
    display:'swap'
  })

const quote = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
        }
    }
}

const AnimatedText = ({text,className=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
        <motion.h1 className={`inline-block w-full text-black font-bold capitalize font-yant ${roboto.className} ${className}`} 
            variants={quote}
            initial="initial"
            animate="animate">
            {text?.split(" ").map((word,index)=>
                <span key={word+'-'+index} className='inline-block'>
                    {word}&nbsp;
                </span>
            )}
        </motion.h1>
    </div>
  )
}

export default AnimatedText