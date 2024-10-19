import React from 'react'

const Services = () => {
  return (
    <div className='w-full h-[80vh] px-20 pt-32'>
      <p className="text-base font-semibold text-[#1C1E53] mb-6">My Skills</p>
      <h1 className='text-5xl font-bold text-[#282938] mb-24'>My Expertise</h1>
      <div className='flex w-full h-[300px] justify-between gap-3 '>


        <div className='shadow-none hover:shadow-card transition-shadow duration-75 delay-0 ease-linear
        w-[300px] flex flex-col gap-4 card-1  bg-[#F5FCFF] rounded-lg p-6'>
          <img  className="w-16 p-2 bg-white" src="https://cdn.prod.website-files.com/62f375fa349867308a2e90dc/63030ef9fa748227f3a97612_product-chain%201.webp" alt="" />
          <h1 className='text-xl font-bold'>Statergy & Direction</h1>
          <p className='text-lg font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
        </div>


        <div className='shadow-none hover:shadow-card transition-shadow duration-75 delay-0 ease-linear
        w-[300px] flex flex-col gap-4 card-1  bg-[#F5FCFF] rounded-lg p-6'>
          <img  className=" w-16 p-2 bg-white" src="https://cdn.prod.website-files.com/62f375fa349867308a2e90dc/63030ef9dac694ad05cefefa_tag%201.webp" alt="" />
          <h1 className='text-xl font-bold'>Branding & Logo</h1>
          <p className='text-lg font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique </p>
        </div>


        <div className='shadow-none hover:shadow-card transition-shadow duration-75 delay-0 ease-linear w-[300px] flex flex-col gap-4 card-1  bg-[#F5FCFF] rounded-lg p-6'>
          <img  className=" w-16 p-2 bg-white" src="https://cdn.prod.website-files.com/62f375fa349867308a2e90dc/63030ef9f4c9142f427f5bc3_feather-pen%201.webp" alt="" />
          <h1 className='text-xl font-bold'>UI & UX Design</h1>
          <p className='text-lg font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique </p>
        </div>


        <div className='shadow-none hover:shadow-card transition-shadow duration-75 delay-0 ease-linear w-[300px] flex flex-col gap-4 card-1  bg-[#F5FCFF] rounded-lg p-6'>
          <img  className=" w-16 p-2 bg-white" src="https://cdn.prod.website-files.com/62f375fa349867308a2e90dc/63030ef9c32fa75cf1215a5e_feather-pen%201-1.webp" alt="" />
          <h1 className='text-xl font-bold'>Webflow Development</h1>
          <p className='text-lg font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique </p>
        </div>
      </div>


    </div>

  )
}

export default Services
          