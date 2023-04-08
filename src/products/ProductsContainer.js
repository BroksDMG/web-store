import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductData from './ProductData'
import ProductFilter from './ProductFilter'

function ProductsContainer() {
    const [products,setProducts]=useState(ProductData)
    console.log(products);
    const onFilterDataHandler=(filterData)=>setProducts(filterData);
    // console.log(products[2].description.slice(0,66));
  return (
    <div className='flex flex-col'>
        <h1>Happy shopping 🤗</h1>
        <div className='flex justify-between'>
        <h1>Kategorie</h1>
        <ProductFilter  onSaveFilterData={onFilterDataHandler}/>
        </div>
        <div className='flex flex-wrap justify-center'>
        {products.map((product,index)=><ProductCard items={product} key={index}></ProductCard>)}
        </div>
    </div>
  )
}

export default ProductsContainer