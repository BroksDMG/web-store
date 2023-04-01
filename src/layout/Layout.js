import React from 'react'
import NavBar from '../navbar/NavBar'
import ProductsContainer from '../products/ProductsContainer'
function Layout() {
  return (
    <div className='w-screen flex flex-col items-center '>
        <NavBar></NavBar>
      <div className='max-w-[1440px] shadow-xl'>
        <ProductsContainer/>
      </div>
    </div>
  )
}

export default Layout