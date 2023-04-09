import React, { useState } from 'react'
import ProductCard from './ProductCard'
import ProductData from './ProductData'
import ProductFilter from './ProductFilter'
import { Link } from 'react-router-dom'
function ProductsContainer() {
    const [products,setProducts]=useState(ProductData)
    const onFilterDataHandler=(filterData)=>setProducts(filterData);
  return (
    <div className='flex flex-col'>
        <h1>Happy shopping 🤗</h1>
        <div className='flex justify-between'>
        <h1>Kategorie</h1>
        <ProductFilter  onSaveFilterData={onFilterDataHandler}/>
        </div>
        <div className='flex flex-wrap justify-center'>
            {products.map((product)=>{
                return(
                    <div key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <ProductCard items={product}  ></ProductCard>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProductsContainer