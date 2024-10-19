import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen flex bg-[#F1F5F9] px-20 absoulte mt-24 pt-32 overflow-hidden'>
      <div className='w-1/2 h-screen '>
      <p className='text-[#282938] text-lg font-semibold mb-5 '>Hey, I am John</p>
      <h1 className='text-6xl font-bold tracking-tight text-[#282938] leading-tight mb-5'>I create <span className='text-[#5E3BEE]'>product  design  </span>and brand  experience</h1>
      <p className='text-xl font-normal text-[#1C1E53] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br /> varius  enim in eros elementum tristique</p>
      <button className='px-7 py-4 bg-[rgb(94,59,238)] rounded-md text-white'>Get in Touch</button>
      </div>
      <div className='w-1/2 h-screen '>
      <img  className='object-cover transform hover:scale-105 transition-transform duration-100 ease-linear' src="https://assets-global.website-files.com/62f375fa349867308a2e90dc/63030ec6b0ee91d6920711d1_Header%20Image-p-800.webp" alt="" />
      </div>
    </div>
  )
}

export default Home