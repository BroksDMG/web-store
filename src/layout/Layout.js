import React from 'react'
import NavBar from '../navbar/NavBar'
import ProductsContainer from '../products/ProductsContainer'
import { Link } from 'react-router-dom'
function Layout() {
  return (
    <Link to={"/"}>
    <div className='w-screen flex flex-col items-center '>
        <NavBar></NavBar>
      <div className='max-w-[1440px] shadow-xl'>
        <ProductsContainer/>
      </div>
    </div>
    </Link>
  )
}

export default Layout