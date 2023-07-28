import React from 'react'
import { motion } from 'framer-motion'
import SkillsIndividual from './SkillsIndividual'
import { Skill } from '../typings';


type Props = {
    skills: Skill[];
}

function Skills({skills}: Props) {
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
        className='min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#be95c4] text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-[#be95c4] text-sm'>
            Hover over a skill for currect proficiency
        </h3>


        <div className='grid grid-cols-4 gap-5'>
            {skills.slice(0, skills.length/2).map(skills => (
                <SkillsIndividual 
                    key={skills._id}
                    skills={skills}
                />
            ))}
            {skills.slice(skills.length/2, skills.length).map(skills => (
                <SkillsIndividual 
                    key={skills._id}
                    skills={skills}
                    directionLeft
                />
            ))}
            
        </div>
        
        <div className="w-full absolute top-[30%] bg-[#5e548e]/10 left-0 h-[300px] skew-y-12" />

    </motion.div>
  )
}

export default Skills