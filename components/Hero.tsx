import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from "next/link"
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'


type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
        `Hi, I am ${pageInfo?.name}`,
        "I Love Building Websites",
        "And I Love Training ML Models",
    ],
    loop: true,
    delaySpeed: 2000
  })


  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover shadow-lg shadow-[#be95c4]'
        src= {urlFor(pageInfo?.heroImage).url()}
        alt=''
        />
        <div className='z-20'>
            <h2 className='test-sm uppercase text-[#be95c4] pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#be95c4'/>
            </h1>

        <div className='mt-8'>
            <Link href='#about'>
                <button className='heroButton'>About</button>
            </Link>
            <Link href='#experience'>
                <button className='heroButton'>Experience</button>
            </Link>
            <Link href='#skills'>
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#projects'>
                <button className='heroButton'>Projects</button>
            </Link>
        </div>
        </div> 
    </div>
  )
}

export default Hero