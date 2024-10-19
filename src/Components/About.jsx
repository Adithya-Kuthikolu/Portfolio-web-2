import React from 'react'

const About = () => {
  return (
    <div>
      <div className='w-full h-screen flex bg-[#F1F5F9] px-20 absoulte mt-24 pt-32 overflow-hidden'>
      <div className='w-1/2 h-screen pl-10 '>
      <img className='object-cover transform hover:scale-105 transition-transform duration-100 ease-linear' src="https://assets-global.website-files.com/62f375fa349867308a2e90dc/63070b693f1e5efe3cd77c9e_About%20Me-p-500.png" alt="" />
      </div>
      <div className='w-1/2 h-screen pl-10 pt-16'>
      <p className='text-[#282938] text-lg font-semibold mb-5 '>About</p>
      <h1 className='text-5xl font-bold tracking-tight text-[#282938] leading-tight mb-5'>About Me</h1>
      <p className='text-lg font-medium text-[#1c1e53ce] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
      <p className='text-lg font-medium text-[#1c1e53ce] mb-8'>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
      </div>
    </div>
    </div>
  )
}

export default About