import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {Slider,styled} from "@mui/material";
import ProductData from "./ProductData";

const CustomSlider = styled(Slider)({
    width: '100%',
    height: '4px',
    "--tw-bg-opacity": "1",
    color:"rgb(209 213 219)",
    '& .MuiSlider-track': {
      borderRadius: '0.5rem',
      "--tw-bg-opacity": "1",
      backgroundColor:"rgb(59 130 246)",
      height:'4px',
      border:"rgb(59 130 246)",
    },
    
    '& .MuiSlider-thumb': {
        width: "20px",
        height: "20px",
        "--tw-bg-opacity": "1",
        backgroundColor: "white",
        borderRadius: "50%",
        border: "1px solid rgb(59 130 246)",
        cursor: "pointer",
        pointerEvents: "auto",
        "-webkit-appearance": "none",
      '&:focus, &:hover,&:active': {
        boxShadow: 'inherit',
        backgroundColor:'rgb(59 130 246)'
      },
    },
  });

function ProductFilter(props) {
    const [clicked, setClicked] = useState(false);
    const[ranges, setRanges]=useState([3060,7000]);
    const [cards,setCards]=useState(ProductData)
    const handleFilterClick = () => {
        setClicked(!clicked);
    };
    const handleRangeInput=(e,data)=>setRanges(data)
    const handleRangeMinInputField=(e)=>setRanges([e.target.value,ranges[1]])
    const handleRangeMaxInputField=(e)=>setRanges([ranges[0],e.target.value]);
    const filterHandler= (filterType)=>{
        let filterData =[...cards]
        switch (filterType) {
            case 'lowestPrice':
                filterData.sort((a,b)=>a.price-b.price)
                break;
            case 'biggestPrice':
                    filterData.sort((a,b)=>b.price-a.price)
                    break;  
            // case 'BiggestDiscount':
            //         filterData.sort((a,b)=>a.price+b.price)
            //         break;         
            default:
                filterData=ProductData
                break;
            }
        setCards(filterData)
        props.onSaveFilterData(cards)

        ///TODO: slider fliter/////
    }   

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
        
        <div className="flex flex-col  items-start cursor-pointer">
            <div className="w-full flex justify-end mt-5">
                <button
                onClick={handleFilterClick}
                className={`ease-in duration-300 text-4xl text-gray-300 px-4  flex items-end`}
                >
                <FaTimes />
                </button>
            </div>
            <div className="w-full hover:bg-gray-300 px-4">
                <button onClick={()=>filterHandler('lowestPrice')}
                className="border-b w-full h-14 flex items-center justify-start rounded-sm p-2 hover:border-none  hover:font-bold  ">Najniższa Cena</button>
            </div>
            <div className="w-full hover:bg-gray-300 px-4">
            <button onClick={()=>filterHandler('biggestPrice')}
            className="border-b w-full h-14 flex items-center justify-start rounded-sm p-2 hover:border-none  hover:font-bold  ">Najwyższa Cena</button>
            </div>
            <div className="w-full hover:bg-gray-300 px-4">
            <button className="border-b w-full h-14 flex items-center justify-start rounded-sm p-2 hover:border-none  hover:font-bold  ">Największy rabat</button>
            </div>
            <div className="px-6 w-full">
                <div className="mt-4">
                    <span className=" text-base">Przedział cenowy</span>
                    {/* <p className=" text-sm">Użyj suwaka lub wpisz minimalną i maksymalną cenę</p> */}
                </div>
                <div className="flex my-3 justify-center">
                    <div className="flex items-center">
                        <p>Od</p>
                        <input type="Number" value={ranges[0]} onChange={handleRangeMinInputField}
                        className="border rounded-lg px-2 w-20 ml-2 " />
                        <p>zł</p>
                    </div>
                    <div className="mx-2">-</div>
                    <div className="flex items-center">
                        <p>Do</p>
                        <input type="Number" value={ranges[1]}  onChange={handleRangeMaxInputField}
                        className="border rounded-lg px-1 w-[70px] ml-2" />
                        <p>zł</p>
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
