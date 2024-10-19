import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { CiBasketball } from "react-icons/ci";

const Portfolio = () => {
  return (
    <div className='h-screen mb-32'>
      <div className='w-full h-[80vh] px-20 pt-32'>
        <div className='flex justify-between items-center'>
        <div>
      <p className="text-base font-semibold text-[#1C1E53] mb-4">Recent Projects</p>
      <h1 className='text-5xl font-bold text-[#282938] mb-12 '>My Portfolio</h1>
        </div>
        <button className='h-12 inline-flex items-center gap-3 px-4 rounded-md bg-[#E62872] text-lg text-white hover:bg-white transition duration-300 hover:text-[#E62872] hover:border-[1px] border-[#E62872]'> <CiBasketball className='w-5 h-5 ' />Visit My Dribble</button>
        </div>
      <div className='w-full  h-[90vh] flex items-center gap-7 justify-between '>
          <div className='w-[475px] h-[525px]  rounded-xl overflow-hidden flex flex-col gap-3 shadow-xl'>
              <img className='h-[67%] object-cover' src="https://cdn.prod.website-files.com/630345fdf55aa7a68d06e94e/63034d85aa9085069346fe89_Image-p-500.png" alt="Project-1" />
              <h1 className='font-bold text-2xl px-6'>Ahuse</h1>
              <p className='font-medium text-[#1c1e53ce] text-base px-6 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit, perspiciatis facilis aliquam ut provident!</p>
              <span className='px-6 inline-flex gap-1 left-0 top-0  items-center pb-5 '>View in Dribble<GoArrowUpRight className=' w-5 h-5 transform transition translate-x-0 translate-y-0 duration-300 hover:translate-x-1 hover:-translate-y-1 hover:scale-125'/></span>
          </div>
          <div className='w-[475px] h-[525px]  rounded-xl overflow-hidden flex flex-col gap-3 shadow-xl'>
              <img className='h-[67%] object-cover' src="https://cdn.prod.website-files.com/630345fdf55aa7a68d06e94e/63034e00aa908502a547067d_Image-1-p-500.png" alt="Project-1" />
              <h1 className='font-bold text-2xl px-6'>App Dashboard</h1>
              <p className='font-medium text-[#1c1e53ce] text-base px-6 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit, perspiciatis facilis aliquam ut provident!</p>
              <span className='px-6 inline-flex gap-1 left-0 top-0  items-center pb-5 '>View in Dribble<GoArrowUpRight className=' w-5 h-5 transform transition translate-x-0 translate-y-0 duration-300 hover:translate-x-1 hover:-translate-y-1 hover:scale-125'/></span>
          </div>
          <div className='w-[475px] h-[525px]  rounded-xl overflow-hidden flex flex-col gap-3 shadow-xl'>
              <img className='h-[67%] object-cover' src="https://cdn.prod.website-files.com/630345fdf55aa7a68d06e94e/63034e690fed0a1d79f77e66_Image-2-p-500.png" alt="Project-1" />
              <h1 className='font-bold text-2xl px-6'>Easy Rent</h1>
              <p className='font-medium text-[#1c1e53ce] text-base px-6 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit, perspiciatis facilis aliquam ut provident!</p>
              <span className='px-6 inline-flex gap-1 left-0 top-0  items-center pb-5 '>View in Dribble<GoArrowUpRight className=' w-5 h-5 transform transition translate-x-0 translate-y-0 duration-300 hover:translate-x-1 hover:-translate-y-1 hover:scale-125'/></span>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Portfolio