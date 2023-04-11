import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "./ProductData";
import {FaShoppingBasket, FaHeart } from "react-icons/fa";


function ProductsDetails() {

    const { id } = useParams();
    const getProduct = () =>
    ProductData.find((product) => product.id.toString() === id);
    const product = getProduct();
  return (
    <div className="max-w-[1440px]  h-full">
      <div className="bg-white p-3">
        <img
          className="rounded-t-lg w-screen h-50"
          src={product.img}
          alt="product"
        />
      </div>
      <div className=" font-robo font-bold tracking-wider p-3 relative flex h-full flex-col justify-between bg-gray-100">
        <div className="w-full flex justify-end">
            <div className="bg-gray-200 rounded-md p-1 my-2">
                <FaHeart className="font-base text-blue-400  "/>
            </div>
        </div>
        <div className=" flex w-full justify-between items-end my-1">
          <div className=" text-xl w-32 flex items-end">{product.title}</div>
          <p className=" text-xl">
                {product.price}zł
          </p>
        </div>
        <div className="my-2 mb-4">
            <ul className="flex flex-gap gap-2 text-sm">
                <li className="min-w-max flex justify-center rounded-2xl border-2 p-1  border-gray-200 hover:bg-gray-200  ">Opis</li>
                <li className="min-w-max flex justify-center rounded-2xl border-2 p-1 border-gray-200 hover:bg-gray-200  ">Sposób użycia</li>
                <li className="min-w-max flex justify-center rounded-2xl border-2 p-1 border-gray-200 hover:bg-gray-200  ">Zastosowanie</li>
            </ul>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="text-[11px] text-gray-400 font-semibold ">
            {product.description}
          </div>
          <div className="flex text-lg">
            <button className="w-full rounded-2xl border-2 p-1 border-gray-200 hover:bg-gray-200 flex items-center justify-center mr-1">{<FaShoppingBasket className="mr-2 text-gray-400 text-lg"/>}Do Koszyka</button>
            <button className="w-full rounded-2xl border-2 p-1 border-gray-200 hover:bg-gray-200  ml-1">kup teraz</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProductsDetails;
