import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Topsect from "../Topsect"
import Layout from '../Layout/Layout'
import { GoHome } from "react-icons/go";
import Products from "../../products/Product.json"
function Shop() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const navigate = useNavigate()
  const FilterProduct = Products.filter((product) => {
    const categoryValue = category.toLowerCase()
    console.log(categoryValue)
    return product.category?.toLowerCase().includes(categoryValue)
  })
console.log(FilterProduct);
console.log(Products)


  return (
    <div className='md:px-[100px] px-[50px] py-[20px]'>
      <div className='flex justify-between items-center px-[50px] py-[20px]'>
       <div onClick={()=> navigate('/home')} className='text-[30px] active:text-gray-900 hover:text-gray-600 cursor-pointer'>
          <GoHome />
      </div>
      
    <h1 className='text-[36px] text-center p-[10px]'>{category}</h1>
     </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
     {FilterProduct.map((item) => (
            <div className="flex flex-col bg-white  hover:scale-105
     hover:shadow-xl h-[400px] group relative cursor-pointer overflow-hidden
      rounded-xl bg-black shadow-lg transition-all duration-300 
     overflow-hidden rounded-2xl">
              <img className="w-full h-[280px] rounded-t-2xl object-cover" src={item.image} alt={item.name} />
              <div className="text-center  pb-8  px-4 h-[130px]">
              <h2 className="text-[16px] font-semibold mb-2">{item.name}</h2>
              <div className="flex items-baseline justify-between w-full px-7">
              <p className="text-blue-600 text-xl font-semibold mb-4">₦{item.price}</p>
              <p>{item.rating >= 10 ? "⭐⭐⭐⭐⭐" : "⭐⭐⭐⭐"}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40
               opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <button
          type="button"
          onClick={()=> navigate("/cart")}
          className="md:px-5 mb-2 px-2 py-2 bg-blue-500 text-white rounded-md
           hover:bg-blue-600 cursor-pointer group-hover:opacity-100"
        >
          Add To Cart
        </button>
        </div>
              </div>
            </div>
        ))}
</div>
    </div>
  )
}

export default Shop


