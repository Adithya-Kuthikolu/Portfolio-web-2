import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Services from './Components/Services'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Test from './Components/Test'
import Footer from './Components/Footer'



const App = () => {
  return (
    <div className='font-[Open_Sans] '>
      <Navbar/>
      <div id='home'>
        <Home/>
      </div>
      <div id='Services'>
        <Services/>
      </div>
      <div id='About'>
        <About/>
      </div>
      <div id='Portfolio'>
        <Portfolio/>
      </div>
      <div id='Test'>
        <Test/>
      </div>
      <Footer/>
      </div>
  )
}

export default App