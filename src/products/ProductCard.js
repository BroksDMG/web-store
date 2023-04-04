import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
function ProductCard(props) {
  return (
    <div className="min-w-[9rem] max-w-[] w rounded-lg  shadow-lg m-2 border">
      <div className="bg-white p-3 rounded-xl">
        <img
          className="rounded-t-lg w-screen h-50"
          src={props.items.img}
          alt="product"
        />
      </div>
      <div className="h-32 font-robo font-bold tracking-wider p-3 relative flex flex-col justify-between rounded-b-lg bg-gray-100">
        <h1 className="text-sm ">{props.items.title}</h1>
        <div className="text-center text-xs text-gray-400 font-semibold">
          {props.items.description}
        </div>
        <div className="flex justify-between relative">
          <div className="flex items-end  mt-5">
            <p className="text-gray-400 text-sm  line-through  ">{props.items.price}zł</p>
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
