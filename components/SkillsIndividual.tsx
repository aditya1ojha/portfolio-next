import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '@/sanity';


type Props = {
    skills: Skill
    directionLeft?: boolean;
};

function SkillsIndividual({ skills, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer z-10'>
        <motion.img
            initial={{
                x: directionLeft ? -100 : 100,
            }}
            transition={{
                duration:1,
            }}
            whileInView={{
                opacity:1,
                x:0
            }}
            src={urlFor(skills?.image).url()}
            alt=''
            className='rounded-full border border-gray-500 object-fill w-12 h-12 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
    
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 xl:w-20 xl:h-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='md:text-xl font-bold text-black opacity-100'>{skills.progress}%</p>
            </div>
        </div>

    </div>
  )
}

export default SkillsIndividual