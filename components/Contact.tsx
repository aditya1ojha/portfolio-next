import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

type Props = {}

function Contact({}: Props) {

    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()

      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        console.log(formData)

        window.location.href = `mailto:adityaojha.wr10@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
        
        
      }

      //handleSubmit is what the library has given us, onSubmit is our own handler

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-[#be95c4] text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-4'>
            <h4 className='text-lg md:text-2xl font-semibold text-center pt-12'>
                Have something to Discuss? {" "}
                <span className='decoration-[#be95c4]/50 underline'>Hit me Up!</span>
            </h4>

            <div className='space-y-2 py-8'>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#be95c4] h-7 w-7 animate-pulse'/>
                    <p className='text-lg'>adityaojha.wr10@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#be95c4] h-7 w-7 animate-pulse'/>
                    <p className='text-lg'>Assam, India</p>
                </div>

            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 mx-auto w-fit'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput w-40 md:w-full' type="text" /> {/*... means spread */}
                    <input {...register('email')} placeholder='Email' className='contactInput w-40 md:w-full' type="email" />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register('message')} placeholder='Message' className='contactInput'/>

                <button type='submit' className='bg-[#be95c4] hover:bg-[#be95c4]/50 py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>

        </div>
        
    </div>
  )
}

export default Contact