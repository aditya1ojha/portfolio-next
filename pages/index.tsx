import type { GetServerSideProps } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

import Link from 'next/link'

import { Experience, PageInfo, Project, Skill, Social } from '../typings';

import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchSkills } from '../utils/fetchSkills';


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => { //destructuring
  return (
    <div className='bg-[#231942] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#be95c4]/80'> {/* The parent should be snap-y and snap-mandatory and the child should be snap-center */}
      <Head>
        <title>Aditya Ojha - Portfolio</title>
      </Head>

      {/* Header */}
      <Header socials = {socials}/>

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo = {pageInfo}/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences = {experiences}/>
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills = {skills}/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects = {projects}/>
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact/>
      </section>

      {/* Footer */}
      
        <footer className='sticky bottom-5 w-full'>
          <div className='flex items-center justify-center'>
          <Link href='#hero'>
            <img
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            src='https://lh3.googleusercontent.com/pw/AIL4fc-7wvKxaqMkcKTLL_wmkZOc2Q_7kLZjfriAZIbrOS1-44g4g0MFm6IhRa5ZbfB55Ch8Mhu1EZPMnw9PoBdIyKJcJ5mcrg2TP-d8Y7CXUhlyRg3rB9mGfwGk5W7wBiXo0i5sZ7p3LimDz8ecK-FOJL5J=w858-h938-s-no' alt=''/>
                  </Link>

          </div>
        </footer>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props> = async () => {

  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  }
}



