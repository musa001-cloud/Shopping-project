import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { GoHome } from "react-icons/go"
import Products from "../../products/Product.json"

function Shop() {


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

  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const navigate = useNavigate()

  const categoryValue = category ? category.toLowerCase() : ''

  const FilterProduct = category
    ? Products.filter((product) =>
        product.category?.toLowerCase().includes(categoryValue)
      )
    : Products

  return (
    <div className="md:px-[100px] px-[50px] py-[20px]">

      <div className="flex justify-between items-center px-[50px] py-[20px]">

        <div
          onClick={() => navigate('/home')}
          className="text-[30px] active:text-gray-900
          hover:text-gray-600 cursor-pointer"
        >
          <GoHome />
        </div>

        <h1 className="text-[36px] text-center p-[10px]">
          {category || "All Products"}
        </h1>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

        {FilterProduct.map((item) => (

          <div
            key={item.id}
            className="flex flex-col bg-white hover:scale-105
            hover:shadow-xl h-[400px] group relative cursor-pointer
            overflow-hidden rounded-2xl shadow-lg transition-all duration-300"
          >

            <img
              className="w-full h-[280px] rounded-t-2xl object-cover"
              src={item.image}
              alt={item.name}
            />

            <div className="text-center pb-8 px-4 h-[130px]">

              <h2 className="text-[16px] font-semibold mb-2">
                {item.name}
              </h2>

              <div className="flex items-baseline justify-between w-full px-7">

                <p className="text-blue-600 text-xl font-semibold mb-4">
                  ₦{item.price}
                </p>

                <p>
                  {Number(item.rating) >= 10
                    ? "⭐⭐⭐⭐⭐"
                    : "⭐⭐⭐⭐"}
                </p>

              </div>

            </div>

           <div className="absolute inset-0 md:flex md:mt-0 mt-[350px] items-center justify-center md:bg-black/40
                 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
               <button
              type="button"
               onClick={() => {
                addToCart(item);
               }}
               className="md:px-5 mb-2 px-2 py-2 bg-blue-500 text-white rounded-md
              hover:bg-blue-600 cursor-pointer group-hover:opacity-100"
            >
               Add To Cart
            </button>
          </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Shop