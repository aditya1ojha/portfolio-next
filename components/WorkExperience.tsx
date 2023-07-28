import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
    experiences: Experience[]
}

function WorkExperience({experiences}: Props) {
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
    
        className='h-screen flex relative overflow-hidden snap-x snap-mandatory flex-col text-left md:flex-row w-full md:max-w-full md:px-10 justify-evenly mx-auto items-center z-0'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#be95c4] text-2xl mb-20'>
                Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll pl-1 md:px-16 snap-x snap-mandatory mt-[150px]  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#be95c4]/80'>
            {experiences.map(experiences => (
                <ExperienceCard key={experiences._id} experiences={experiences} />
            ))}
        </div>

        
    </motion.div>
  )
}

export default WorkExperience