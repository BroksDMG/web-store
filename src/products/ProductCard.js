import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
function ProductCard(props) {
    console.log(props.data[1]);
  return (
    <div className=" w-56 rounded-lg bg-gray-100 shadow-lg m-3 border">
      <div>
        <img
          className="rounded-t-lg"
          src="https://dabexbydgoszcz.pl/wp-content/uploads/2022/04/septa-green-1l.webp"
          alt="product"
        />
      </div>
      <div className=" font-robo font-bold tracking-wider p-3 relative">
        <h1 className="text-sm ">Nike Dunk Force</h1>
        <div className="text-center text-xs text-gray-400 font-semibold">
          Odnawia, nabszcza i chroni plastiki
        </div>
        <div className="flex justify-between relative">
          <div className="flex items-end  mt-5">
            <p className="text-gray-400 text-sm  line-through  ">$20,00</p>
            <p className=" absolute left-7 bottom-2 text-red-400 transform rotate-12 ">$15,00</p>
          </div>
          <div className="flex items-end">
            <button className="flex items-center text-white border rounded text-[10px] font-lato p-1 bg-blue-500">
               Add
              <FaShoppingBasket className="text-gray-200 ml-1 text-base " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
