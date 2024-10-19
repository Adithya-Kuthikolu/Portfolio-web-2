import React from 'react'
import { GoStarFill } from "react-icons/go";

const Test = () => {
  return (
    <div className='h-screen'>
      <div className='w-full h-screen flex bg-[#F5FCFF] px-20 absoulte mt-28 pt-10 overflow-hidden font-[Roboto]'>
      <div className='w-full h-screen  pt-16'>
      <p className='text-[#282938] text-lg font- mb-5 '>Clients Feedback</p>
      <h1 className='text-5xl font-bold tracking-tight text-[#282938] leading-tight mb-10'>Customer testimonials</h1>
        <div className='flex items-center justify-between gap-8'>
          <div className='w-[40%] border-[1px] border-[#206B6A] h-[325px] p-8  rounded-lg hover:border-[rgb(94,59,238)]'>
            <div className='stars flex gap-1'>
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            </div>
            <div className='flex flex-col gap-6  mt-7'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
            <div className='flex gap-4 items-center'>
              <img  className="w-16"src="https://cdn.prod.website-files.com/62f375fa349867308a2e90dc/63030f0a42cbe2bf46efca08_Avatar%20Image.webp" alt="" />
              <div>
              <h1 className='font-medium'>Dianne Russell</h1> 
              <h1>Starbucks</h1>
              </div>
            </div>
            </div>
          </div>


          <div className='w-[40%] border-[1px] border-[#206B6A] h-[325px] p-8 rounded-lg hover:border-[rgb(94,59,238)]'>
            <div className='stars flex gap-1'>
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            </div>
            <div className='flex flex-col gap-6 mt-7'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
            <div className='flex gap-4 items-center'>
              <img  className="w-16"src="https://cdn.prod.website-files.com/62f375fa349867308a2e90dc/63030f0a2ea56e4e8a33fc6b_Avatar%20Image-1.webp" alt="" />
              <div>
              <h1 className='font-medium'>Kristin Watson</h1> 
              <h1>Louis Vuitton</h1>
              </div>
            </div>
            </div>
          </div>


          <div className='w-[40%] border-[1px] border-[#206B6A] h-[325px] p-8 rounded-lg hover:border-[rgb(94,59,238)]'>
            <div className='stars flex gap-1'>
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            <GoStarFill className='w-6 h-6 text-[#206B6A]' />
            </div>
            <div className='flex flex-col gap-6  mt-7'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
            <div className='flex gap-4 items-center'>
              <img  className="w-16"src="https://cdn.prod.website-files.com/62f375fa349867308a2e90dc/63030f0aa0f28475f0dcd479_Avatar%20Image-2.webp" alt="" />
              <div>
              <h1 className='font-medium'>Kathryn Murphy</h1> 
              <h1>McDonald's</h1>
              </div>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Test