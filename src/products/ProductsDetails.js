import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from './ProductData'
function ProductsDetails() {
        const {id} = useParams()
        const getProduct=()=>ProductData.find(product=>product.id.toString()===id)
        const product =getProduct()
        
  return (
    <div className="min-w-[9rem] max-w-[144px] w rounded-lg  shadow-lg border cursor-pointer">
      <div className="bg-white p-3 rounded-xl">
        <img
          className="rounded-t-lg w-screen h-50"
          src={product.img}
          alt="product"
        />
      </div>
      <div className="h-32 font-robo font-bold tracking-wider p-3 relative flex flex-col justify-between rounded-b-lg bg-gray-100">
        <h1 className=" text-[12px] ">{product.title}</h1>
        <div className="text-center text-[11px] text-gray-400 font-semibold">
          {product.description}
        </div>
        <div className="flex justify-between relative">
          <div className="flex items-end  mt-5">
            <p className="text-gray-400 text-xs  line-through  ">{product.price}zł</p>
            <p className=" absolute left-7 bottom-2 text-blue-500 transform text-xs rotate-12 ">$15,00</p>
          </div>
          <div className="flex items-end">
            
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default ProductsDetails