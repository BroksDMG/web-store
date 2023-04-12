import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "./ProductData";
import NavBar from '../navbar/NavBar'
import {
  FaShoppingBasket,
  FaHeart,
  FaCaretRight,
  FaCaretLeft,
} from "react-icons/fa";
import { useState } from "react";

function ProductsDetails() {
  const [inputValue, setInputValue] = useState(1);
 
  const { id } = useParams();
  const getProduct = () =>
    ProductData.find((product) => product.id.toString() === id);
  const product = getProduct();
  const [btnActive, setBtnActive] = useState(product.description);
  const onChangeHandler = (e) => {
    if (e.target.value <= 99) setInputValue(e.target.value);
  };
  const onClickLeftHandler = () => {
    if (inputValue >= 2) {
      setInputValue(inputValue - 1);
    }
  };
  const onClickRightHandler = () => {
    if (inputValue <= 98) setInputValue(inputValue + 1);
  };
  const price = () => {
    const num = product.price * inputValue;
    return num.toFixed(2);
  };
  const onClickBtnsHandler = (e) => {
    switch (e) {
      case "opis":
        setBtnActive(product.description);
        break;
      case "sposob":
        setBtnActive(product.howToUse);
        break;
      case "zastosowanie":
        setBtnActive(product.application);
        break;
      default:
        break;
    }
  };
  return (
    <div>
    <NavBar></NavBar>
    <div className="max-w-[1440px]  h-screen flex flex-col">
      <div className="bg-white p-3">
        <img
          className="rounded-t-lg w-screen h-50"
          src={product.img}
          alt="product"
        />
      </div>
      <div className=" font-robo font-bold tracking-wider p-3 relative flex-grow flex flex-col justify-between bg-gray-100 h-full">
        <div className="w-full flex justify-end">
          <div className="bg-gray-200 rounded-md p-1 my-2">
            <FaHeart className="font-base text-2xl text-blue-400  " />
          </div>
        </div>
        <div className=" flex w-full justify-between items-end my-1">
          <div className=" text-xl w-32 flex items-end ">{product.title}</div>
          <p className=" text-xl">{price()}zł</p>
        </div>
        <div className="flex w-full justify-end items-center z-10">
          <span>Ilość</span>
          <div className="h-8 rounded-lg w-20 ml-2 bg-transparent border-y-2 flex justify-center items-center">
            <button
              onClick={onClickLeftHandler}
              className="bg-gray-200 w-full h-full rounded-l-lg   focus:outline-none active:outline-none"
            >
              <FaCaretLeft className="text-gray-400" />
            </button>
            <input
              type="Number"
              min={1}
              max={99}
              pattern="[1-9]{1,2}"
              value={inputValue}
              onChange={onChangeHandler}
              className="h-8  w-12 bg-transparent border-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
              onClick={onClickRightHandler}
              className="bg-gray-200 w-full h-full rounded-r-lg   focus:outline-none active:outline-none"
            >
              <FaCaretRight className="text-gray-400" />
            </button>
          </div>
        </div>

        <div className="my-2 mb-4">
          <ul className="flex flex-gap gap-2 text-sm overflow-hidden">
            <li
              onClick={() => onClickBtnsHandler("opis")}
              className="min-w-max flex justify-center rounded-2xl border-2 p-1 border-gray-200 hover:bg-gray-200  "
            >
              Opis
            </li>
            <li
              onClick={() => onClickBtnsHandler("sposob")}
              className="min-w-max flex justify-center rounded-2xl border-2 p-1 border-gray-200 hover:bg-gray-200  "
            >
              Sposób użycia
            </li>
            <li
              onClick={() => onClickBtnsHandler("zastosowanie")}
              className="min-w-max flex justify-center rounded-2xl border-2 p-1 border-gray-200 hover:bg-gray-200  "
            >
              Zastosowanie
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="text-[11px] text-gray-400 font-semibold  my-2">
            {btnActive}
          </div>
          <div className="flex text-lg overflow-hidden">
            <button className="w-full rounded-2xl border-2 p-1 border-gray-200 hover:bg-gray-200 flex items-center justify-center mr-1">
              {<FaShoppingBasket className="mr-2 text-gray-400 text-lg" />}Do
              Koszyka
            </button>
            <button className="w-full rounded-2xl border-2 p-1 border-gray-200 hover:bg-gray-200  ml-1">
              kup teraz
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductsDetails;
