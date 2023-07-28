import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'


type Props = {
    experiences: Experience
}

function ExperienceCard({experiences}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[320px] md:w-[600px] snap-center bg-[#5e548e] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y:-100,
                opacity:0,
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity:1,
                y:0
            }}
            viewport={{
                once:true,
            }}
            className='w-16 h-16  xl:w-[150px] xl:h-[150px] rounded-full object-cover object-center'
            src={urlFor(experiences?.companyImage).url()}
            alt=''
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-xl
        sm:text-4xl font-light pb-2'>{experiences.jobTitle}</h4>
            <p className='font-bold break-words md:text-2xl mt-1'>{experiences.company}</p>
            <div className='flex space-x-2 my-2'>
            {experiences.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            className="h-10 w-10 rounded-full"
                            src={urlFor(technology.image).url()}
                        />
                    ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
            {new Date(experiences.dateStarted).toDateString()} -{" "}
                    {experiences.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experiences.dateEnded).toDateString()}
            </p>
            
            <ul className='list-disc space-y-4 ml-5 h-24 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-[#be95c4]/80'>  {/* space is used for controlling the space between child elements */}
                {experiences.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard