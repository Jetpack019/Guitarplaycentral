import React from 'react'
import CustomNavbar from '../components/navbar'
import About_hero from './about/About_hero'
import About_Mission from './about/About_Mission'
import About_Videos from './about/About_Videos'
import About_Customer from './about/About_Customer'
import About_Community from './about/About_Community'
import About_Testimonials from './about/About_Testimonials'
import About_FAQs from './about/About_FAQs'
import Footer from './Homepage/Footer'

function About() {
  return (
    <div>
         <CustomNavbar/> 
         <About_hero/>
         <About_Mission/>
         <About_Videos/>
         <About_Customer/>
         <About_Community/>
         <About_Testimonials/>
         <About_FAQs/>
         <Footer/>
    </div>
  )
}

export default About
