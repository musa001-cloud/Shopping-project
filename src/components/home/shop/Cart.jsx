import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'

function Cart() {
  const [cartArray, setCartArray] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )

  const increase = (id) => {
    const updatedCart = cartArray.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )

    setCartArray(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const decrease = (id) => {
    const updatedCart = cartArray.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1
              ? item.quantity - 1
              : 1
          }
        : item
    )

    setCartArray(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  // Calculate total
  const total = cartArray
    .reduce(
      (sum, item) =>
        sum + parseFloat(item.price) * item.quantity,
      0
    )
    .toFixed(2)

  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">

        {/* CART PRODUCTS */}
        <div className="lg:col-span-2">

          <div className="grid grid-cols-4 gap-4 font-semibold text-[18px] text-center">
            <h1>Product</h1>
            <h1>Name</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
          </div>

          <hr className="my-4 text-gray-400" />

          {cartArray.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty.
            </p>
          ) : (
            cartArray.map((item) => (

              <div key={item.id}>

                <div className="grid grid-cols-4 gap-4 items-center text-center">

                  {/* IMAGE */}
                  <div>
                    <img
                      className="w-[120px] h-[120px] object-cover rounded-md mx-auto"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  {/* NAME */}
                  <div className="text-[18px] font-semibold">
                    <p>{item.name}</p>
                  </div>

                  {/* PRICE */}
                  <div>
                    <p className="text-blue-500 font-semibold">
                      ₦{item.price}
                    </p>
                  </div>

                  {/* QUANTITY */}
                  <div className="flex justify-center items-center">

                    <button
                      type="button"
                      onClick={() => decrease(item.id)}
                      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                      -
                    </button>

                    <span className="mx-3 border border-gray-300 py-2 px-4 rounded-md">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increase(item.id)}
                      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                      +
                    </button>

                  </div>

                </div>

                <hr className="my-6 text-gray-300" />

              </div>
            ))
          )}

        </div>

        {/* ORDER SUMMARY */}
        <div className="flex justify-center lg:sticky lg:top-27 h-fit">

          <div className="rounded-md shadow-xl py-6 px-8 w-full max-w-[400px] h-fit">

            <h1 className="font-semibold text-2xl">
              Order Summary
            </h1>

            <div className="flex text-[16px] mt-6 font-semibold justify-between items-center">
              <p>Items</p>

              <p>
                {cartArray.reduce(
                  (sum, item) => sum + item.quantity,
                  0
                )}
              </p>
            </div>

            <div className="flex text-[16px] mt-3 font-semibold justify-between items-center">
              <p>Products</p>

              <p>
                {cartArray.length}
              </p>
            </div>

            <hr className="text-gray-400 mt-4" />

            <div className="flex text-[20px] mt-4 font-semibold justify-between items-center">
              <p>Total</p>

              <p className="text-blue-500">
                ₦{total}
              </p>
            </div>

            <button
              type="button"
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
