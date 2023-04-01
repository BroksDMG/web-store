import React from 'react'
import { FaSearch } from "react-icons/fa";
function SearchBar() {
  return (
    <div className='flex items-center relative'>
      <FaSearch className='text-gray-300 absolute left-3'/>
    <input type='text' placeholder='Enter your search product' className='w-[17rem] bg-gray-100  rounded-2xl h-9 flex items-center hover:border-none pl-9'/>
    
    </div>
  )
}

export default SearchBar