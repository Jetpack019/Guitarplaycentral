import React from 'react'
import CustomNavbar from '../components/navbar'
import Home_hero from './Homepage/Home_hero'
import Home_Intro from './Homepage/Home_Intro'
import Home_Music from './Homepage/Home_Music'
import Home_Guitars from './Homepage/Home_Guitars'
import Home_Tune from './Homepage/Home_Tune'
import Home_Playground from './Homepage/Home_Playground'
import Footer from './Homepage/Footer'
import Home_Deals from './Homepage/Home_Deals'
import Home_Join from './Homepage/Home_Join'

function Homepage() {
  return (
    <div>
          <CustomNavbar/> 
          <Home_hero/>
          <Home_Intro/>
          <Home_Music/>
          <Home_Guitars/>
          <Home_Tune/>
          <Home_Playground/>
          <Home_Deals/>
          <Home_Join/>
          <Footer/>
    </div>
  )
}

export default Homepage
