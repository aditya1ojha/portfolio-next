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
        scale: [], //the array helps to keyframe through the animation, with each element being given equal amount of divided time from the total duration
        opacity: [],
        borderRadius: []
    }}
    transition={{
        duration:10
    }}
    className='relative flex justify-center items-center'> 
        {/* <div className='rounded-lg absolute border border-[#9f86c0] h-[200px] w-[200px] mt-52 animate-ping'/> it's only absolutely positioned relative to the parent */}
        {/* <div className='rounded-lg absolute border border-[#9f86c0] h-[300px] w-[300px] mt-52 animate-ping'/> */}
        {/* <div className='rounded-full absolute border border-[#9f86c0] h-[500px] w-[500px] mt-52 animate-ping'/> */}
        {/* <div className='rounded-full absolute border border-[#9f86c0] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse'/> */}
        <div className='rounded-full absolute border border-[#9f86c0] h-[800px] w-[800px] mt-52 animmate-pulse'/>
    </motion.div>
  )
}

export default BackgroundCircles