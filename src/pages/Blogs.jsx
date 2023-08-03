import React from 'react'
import CustomNavbar from '../components/navbar'
import Blog_content from './blogs/Blog_content'
import Blog_hero from './blogs/Blog_hero'

function Blogs() {
  return (
    <div>
          <CustomNavbar/> 
          <Blog_hero/>
          <Blog_content/>
    </div>
  )
}

export default Blogs
