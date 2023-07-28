import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings'
import { urlFor } from '@/sanity'

type Props = {
    pageInfo: PageInfo
}

function About({pageInfo}: Props) {
  return (
    <motion.div 
        initial={{
            opacity:0,
        }}
        whileInView={{ //alternative to animate
            opacity:1,
        }}
        transition={{
            duration:1.5,
        }}
        className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#be95c4] text-2xl'>
            About
        </h3>

        <motion.img
            initial={{
                x:-200,
                opacity:0,
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{
                opacity:1,
                x:0
            }}
            viewport={{
                once: true
            }}
            src={urlFor(pageInfo?.profilePic).url()}
            className='mb-[-20] mt-[200px] md:mt-0 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-80 xl:w-[400px] xl:h-[480px] rounded-full md:rounded-lg object-cover shadow-md shadow-[#be95c4] z-10'
        />

        <div className='space-y-10 px-0 md:px-10 z-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a{" "} <span className='underline decoration-[#be95c4]/50'>little</span>{" "} background
            </h4>
            <p className='text-sm'>
                {pageInfo?.backgroundInformation}
            </p>
        </div>

        <div className="w-full absolute top-[30%] bg-[#5e548e]/10 left-0 h-[300px] z-0" />

    </motion.div>
        
  )
}

export default About