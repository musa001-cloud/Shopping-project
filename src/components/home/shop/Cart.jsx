import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'
import Products from '../../products/Product.json'
import { useParams } from 'react-router-dom'
import Home from '../../home/Home'
function Cart() {
  const [count, setCount] = useState(1)

  const { id } = useParams()

  const pick = Products.map(
    (product) => product.id === Number(id)
  )

  const increase = () => {
    setCount(prev => prev + 1)
  }

  const decrease = () => {
    setCount(prev => (prev > 1 ? prev - 1 : 1))
  }

  const total = pick ? pick.price * count : 0


  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">

        <div className="lg:col-span-2">

          <div className="grid grid-cols-4 gap-4 font-semibold text-[18px] text-center">
            <h1>Product</h1>
            <h1>Name</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
          </div>

          <hr className="my-4 text-gray-400" />

          <div className="grid grid-cols-4 gap-4 items-center text-center">

            <div>
              <img
                className="w-[120px] h-[120px] object-cover rounded-md mx-auto"
                src={pick.image}
                alt={pick.name}
              />
            </div>

            {/* Name */}
            <div>
              <p>{pick.name}</p>
            </div>

            {/* Price */}
            <div>
              <p className="text-blue-500 font-semibold">
                ${pick.price}
              </p>
            </div>

            <div className="flex justify-center items-center">

              <button
                type="button"
                onClick={decrease}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                -
              </button>

              <span className="mx-3 border border-gray-300 py-2 px-4 rounded-md">
                {count}
              </span>

              <button
                type="button"
                onClick={increase}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                +
              </button>

            </div>
          </div>

          <hr className="my-6 text-gray-300" />

        </div>

        <div className="flex justify-center">

          <div className="rounded-md shadow-md py-6 px-8 w-full max-w-[400px] h-fit">

            <h1 className="font-semibold text-2xl">
              Order Summary
            </h1>

            <div className="flex text-[16px] mt-6 font-semibold justify-between items-center">
              <p>Price</p>
              <p>${pick.price}</p>
            </div>

            {/* Quantity */}
            <div className="flex text-[16px] mt-3 font-semibold justify-between items-center">
              <p>Quantity</p>
              <p>{count}</p>
            </div>

            <hr className="text-gray-400 mt-4" />

            <div className="flex text-[20px] mt-4 font-semibold justify-between items-center">
              <p>Total</p>

              <p className="text-blue-500">
                ${total}
              </p>
            </div>

            <button
              className="px-8 py-3 rounded-md
              justify-center bg-blue-500 w-full text-white
              items-center mt-8 hover:bg-blue-600
              hover:scale-105 transition cursor-pointer"
            >
              Proceed To Checkout
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Cart