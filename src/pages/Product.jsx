import React from 'react'
import CustomNavbar from '../components/navbar'
import ProductFilter from './Products/product_filter'
import Footer from './Homepage/Footer'

function Products() {
  return (
    <div>
          <CustomNavbar/> 
          <ProductFilter/>
          <Footer/>
    </div>
  )
}

export default Products
