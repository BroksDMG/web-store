import React from 'react'
import NavBar from '../navbar/NavBar'
function FavoritesList() {
  return (
    <div>
    <NavBar></NavBar>
    <div className="max-w-[1440px]  h-screen flex ">
      <div className='w-screen flex bg-black'>
        <div className=" bg-green-300 p-3 w-full">
          <button className="z-40 cursor-pointer text-3xl relative left-7 top-7">

          </button>
          
        </div>
        <div className=" bg-green-300 p-3">
        
        </div>
        <div className=" font-robo font-bold tracking-wider p-3 relative flex-grow flex flex-col justify-between bg-gray-100 h-full">

        </div>
      </div>
      </div>
    </div>
  )
}

export default FavoritesList