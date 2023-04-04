import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {Slider,styled} from "@mui/material";

const CustomSlider = styled(Slider)({
    width: '100%',
    height: '20px',
    '& .MuiSlider-track': {
      borderRadius: '999px',
    },
    
    '& .MuiSlider-thumb': {
        width: "17px",
        height: "17px",
        "--tw-bg-opacity": "1",
        backgroundColor: "rgb(59 130 246 / var(--tw-bg-opacity))",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        pointerEvents: "auto",
        "-webkit-appearance": "none",
      '&:focus, &:hover': {
        boxShadow: 'inherit',
      },
    },
  });

function ProductFilter() {
const [clicked, setClicked] = useState(false);
const[ranges, setRanges]=useState([3060,7000]);
const handleFilterClick = () => {
    setClicked(!clicked);
  };
    const handleRangeInput=(e,data)=>setRanges(data)
    const handleRangeMinInputField=(e)=>setRanges([e.target.value,ranges[1]])
    const handleRangeMaxInputField=(e)=>setRanges([ranges[0],e.target.value]);
    
  return (
    <div className="mx-2 flex ">
      <button
        onClick={handleFilterClick}
        className=" min-w-min cursor-pointer rounded-lg bg-gray-100 p-1 px-3 text-blue-500"
      >
        Filtr
      </button>

      <div
        className={`w-screen h-screen ease-in duration-300  z-50 fixed top-0 right-20 bg-white ${
          clicked ? "translate-x-20 " : "-translate-x-full duration-0"
        }`}
      >
        <button
          onClick={handleFilterClick}
          className={`ease-in duration-300 text-4xl text-gray-300`}
        >
          <FaTimes />
        </button>
        <div className="flex flex-col  items-start cursor-pointer ">
            <div className="w-full hover:bg-gray-300 px-4">
                <button className="border-b w-full h-14 flex items-center justify-start rounded-sm p-2 hover:border-none  hover:font-bold  ">Najniższa Cena</button>
            </div>
            <div className="w-full hover:bg-gray-300 px-4">
            <button className="border-b w-full h-14 flex items-center justify-start rounded-sm p-2 hover:border-none  hover:font-bold  ">Najwyższa Cena</button>
            </div>
            <div className="w-full hover:bg-gray-300 px-4">
            <button className="border-b w-full h-14 flex items-center justify-start rounded-sm p-2 hover:border-none  hover:font-bold  ">Największy rabat</button>
            </div>
            <div className="px-6 w-full">
                <div className="mt-4">
                    <h1 className="font-semibold text-xl">Przedział cenowy</h1>
                    {/* <p className=" text-sm">Użyj suwaka lub wpisz minimalną i maksymalną cenę</p> */}
                </div>
                <div className="flex my-3">
                    <div className="flex items-center">
                        <p>Min</p>
                        <input type="Number" value={ranges[0]} onChange={handleRangeMinInputField}
                        className="border rounded-lg px-2 w-20 ml-2 " />
                    </div>
                    <div className="mx-2">-</div>
                    <div className="flex items-center">
                        <p>Max</p>
                        <input type="Number" value={ranges[1]}  onChange={handleRangeMaxInputField}
                        className="border rounded-lg px-2 w-20 mx-2" />
                    </div>
                </div>
                <div className="w-full">
                    <CustomSlider 
                    max={10000}
                    value={ranges}
                    onChange={handleRangeInput}
                    />
                </div>
                {/* <div className="flex justify-center w-72 h-2 bg-[#ddd] relative rounded-lg">
                    <div className=" h-2 left-1/4 right-1/4 absolute rounded-lg bg-blue-500"></div>
                </div>
                <div className=" p-3 relative">
                    <input onChange={handleRangeInput} type="range"  max={1000} value={30}
                    className=" thun appearance-none non h-2 bg-transparent rounded-lg pointer-events-auto absolute left-0 -top-[8px] thumb "/>
                     <input type="range" min='0' max='10000' value='7500'
                    className=""/> 
                </div> */}
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
