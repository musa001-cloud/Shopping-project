import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Products from '../products/Product.json'
import Layout from './Layout/Layout'
import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import Nav from '../home/Layout/Navbar'
function SearchResult() {

    const addToCart = (product) => {
  const cartArray = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cartArray.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cartArray.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cartArray));

  console.log(cartArray);
};

   //The params
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get('query') || ''
  const searchValue = query.toLowerCase()
  //filtering 
  const FilterProducts = Products.filter((product) => {
    return product.category?.toLowerCase().includes(searchValue)||
     product.name?.toLowerCase().includes(searchValue)||
     product.price?.toString().includes(searchValue)
  }) 
  console.log(FilterProducts)

  const [search, setSearch] = useState()
    const handleSearch =() => {
      navigate(`/search?query=${encodeURIComponent(search)}`)
    }
  return (
    <div>
     <Nav />         
     <div className="flex flex-col md:flex-row md:gap-8 
     items-center md:justify-center rounded-[30px] pb-[30px] sm:flex-row gap-3 mt-8 w-full">
                <div className="flex items-center bg-gray-800 border 
                border-white/30 rounded-full px-5 py-3 w-auto">
                  <FaSearch className="text-white flex-shrink-0" />
      
                  <input
                    type="text"
                    placeholder="Search products..."
                    aria-label="Search products"
                    className="bg-transparent text-white placeholder-white/80 ml-3 w-auto block outline-none"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value) }
                  />
                </div>
      
                <button
                  type="button"
                  onClick={handleSearch}
                  className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer whitespace-nowrap border-3 shadow-2xl border-gray-800"
                >
                  Search
                </button>
              </div>
      {
       FilterProducts.length===0?(
       <div className='grid bg-gray-200 py-[300px] md:justify-center text-center text-[40px] pb-[30px]'>
        <div className='text-gray-400 flex items-center justify-center'>
          <FaSearch/>
        </div>
       <p className='text-gray-500'>
        Sorry There Is No Result For "{searchValue}"</p>
        </div>
       ):(
       <div className='bg-gray-300 md:px-[100px] px-[50px] py-[20px]'>
        <div className='text-center  md:text-[36px] text-[20px] pb-[30px]'>Your Search Result For "{searchValue}"</div> 
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
      {FilterProducts.map((item) => (
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
          onClick={()=> {
            addToCart(item);
            navigate(`/cart`);
          }}
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
        </div>)
      }
    </div>
  )
}

export default SearchResult


