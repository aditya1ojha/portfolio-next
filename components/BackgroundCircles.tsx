import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    animate={{
        scale: [1, 1.2, 1], // Keyframes for scale: start with 1, grow to 1.2, then return to 1
        opacity: [1, 0.8, 1], // Keyframes for opacity: start with 1, reduce to 0.8, then return to 1
        borderRadius: ['50%', '25%', '50%'], // Keyframes for borderRadius: start with 50%, change to 25%, then return to 50%
    }}
    transition={{
        duration: 10
    }}
    className='relative flex justify-center items-center'> 
        {/* <div className='rounded-lg absolute border border-[#9f86c0] h-[300px] w-[300px] mt-52 animate-ping'/> */}
        {/* <div className='rounded-full absolute border border-[#9f86c0] h-[500px] w-[500px] mt-52 animate-ping'/> */}
        {/* <div className='rounded-full absolute border border-[#9f86c0] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse'/> */}
        <div className='rounded-full absolute border border-[#9f86c0] h-[800px] w-[800px] mt-52 animate-pulse'/> {/* it's only absolutely positioned relative to the parent */}
        <div className='rounded-full absolute border border-[#9f86c0] h-[200px] w-[200px] mt-52 animate-ping'/> 
    </motion.div>
  )
}

export default BackgroundCircles