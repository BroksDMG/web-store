import React from 'react'
import NavBar from '../navbar/NavBar'
function Layout() {
  return (
    <div className='w-screen flex justify-center '>
        <NavBar></NavBar>
      <div className='max-w-[1440px] shadow-xl'>
      </div>
    </div>
  )
}

export default Layout