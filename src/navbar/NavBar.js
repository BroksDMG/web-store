import React from "react";
import SearchBar from "./SearchBar";
import {FaShoppingBasket} from "react-icons/fa";
function NavBar() {
  return (
  <div className="w-screen border flex items-center h-20 justify-around" >
    <div className=" w-80 flex justify-around font-robo font-medium">
    <span className=" ">Home</span>
    <span>Products</span>
    <span>About us</span>
    <span>Contact</span>
    </div>
    <div className="flex items-center">
    <SearchBar></SearchBar>
    <FaShoppingBasket className=" m-7 text-gray-300 text-2xl"/>
    <a href="#">
    <img className="w-10" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="ProfileImage" />
    </a>
    </div>
  </div>);
}

export default NavBar;
