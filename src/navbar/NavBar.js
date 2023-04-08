import React from "react";
import SearchBar from "./SearchBar";
import DropDownMenu from "./DropDownMenu";
import { FaShoppingBasket ,FaHeart} from "react-icons/fa";
function NavBar() {
  return (
    <div className="w-screen border flex flex-col items-center h-32 justify-around ">
      <div className="flex items-center justify-between w-full h-full">
        <div>
          <h1 className="mx-4">STORE</h1>
        </div>
        <div className="flex items-center">
          <FaHeart className="text-lg"/>
          <FaShoppingBasket className="text-gray-300 text-2xl sm:  mx-7" />
            <img
              className="w-6 mr-4"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="ProfileImage"
            />
        </div>
      </div>
      <div className=" w-full  border-b">
      </div>
      {/* <div className=" w-80 flex justify-around font-robo font-medium">
      <span className=" ">Home</span>
      <span>Products</span>
      <span>About us</span>
      <span>Contact</span>
    </div> */}
      <div className="flex items-center w-full justify-between border-y border-b-2 h-full">
        <DropDownMenu/>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}

export default NavBar;
