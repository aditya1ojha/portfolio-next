import React from "react";
import { motion } from 'framer-motion'
import { Project } from "../typings";
import { urlFor } from "@/sanity";
import { SocialIcon } from "react-social-icons";

type Props = {
  projects: Project[];
}

function Projects({projects}: Props) {

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
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#be95c4] text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#be95c4]/80">

        {projects.map((project, i) => (
          <div 
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 pt-40 md:p-44 h-screen"
            >
            <motion.img
                initial={{
                    y:-200,
                    opacity:0,
                }}    
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity:1,
                    y:0,
                }}
                viewport={{
                    once:true,
                }}
                src={urlFor(project?.image).url()}
                alt=""
                className="w-28 md:w-48 xl:w-64 shadow-md shadow-[#be95c4]"
            />

            <div className="space-y-10 px-0 md:px-10 mx-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#be95c4]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                  {project?.title}
              </h4>

              {/* <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-8 w-8"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=''
                  />
                ))}
              </div> */}

              <div className="h-8 w-8">
                <SocialIcon
                  key = {project?.linkToBuild}
                  url = {project?.linkToBuild}
                  fgColor='#be95c4'
                  bgColor='transparent'
                />

              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>

            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#5e548e]/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
