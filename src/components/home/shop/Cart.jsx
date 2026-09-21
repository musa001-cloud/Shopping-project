import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'
import { RiDeleteBin6Line } from "react-icons/ri";

function Cart() {
  const [cartArray, setCartArray] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const updateCartState = (updatedCart) => {
    setCartArray(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increase = (id) => {
    const updatedCart = cartArray.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartState(updatedCart);
  };

  const decrease = (id) => {
    const updatedCart = cartArray.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    updateCartState(updatedCart);
  };

  const deleteItem = (id) => {
    const updatedCart = cartArray.filter((item) => item.id !== id);
    updateCartState(updatedCart);
  };

  // Calculate total price safely
  const total = cartArray
    .reduce((sum, item) => {
      const price = parseFloat(item.price) || 0;
      return sum + price * item.quantity;
    }, 0)
    .toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 sm:p-8">
        {/* CART PRODUCTS */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          {/* DESKTOP HEADER */}
          <div className="hidden sm:grid sm:grid-cols-4 gap-4 font-semibold text-lg text-gray-700 text-center pb-4 border-b">
            <span>Product</span>
            <span>Name</span>
            <span>Price</span>
            <span>Quantity</span>
          </div>

          {cartArray.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Your cart is currently empty.</p>
            </div>
          ) : (
            cartArray.map((item) => (
              <div key={item.id} className="border-b last:border-b-0 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center text-center">
                  {/* IMAGE */}
                  <div>
                    <img
                      className="w-24 h-24 object-cover rounded-md mx-auto shadow-sm"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  {/* NAME */}
                  <div className="text-lg font-semibold text-gray-800">
                    <p>{item.name}</p>
                  </div>

                  {/* PRICE */}
                  <div>
                    <p className="text-blue-600 font-bold text-lg">
                      ₦{Number(item.price).toLocaleString('en-NG')}
                    </p>
                  </div>

                  {/* QUANTITY & DELETE */}
                  <div className="flex justify-center items-center gap-2">
                    <button
                      type="button"
                      onClick={() => decrease(item.id)}
                      className="bg-gray-200 text-gray-700 w-8 h-8 rounded-md hover:bg-blue-500 hover:text-white transition font-bold"
                    >
                      -
                    </button>

                    <span className="w-10 text-center font-medium border border-gray-300 py-1 rounded-md">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increase(item.id)}
                      className="bg-gray-200 text-gray-700 w-8 h-8 rounded-md hover:bg-blue-500 hover:text-white transition font-bold"
                    >
                      +
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteItem(item.id)}
                      className="ml-3 text-red-500 hover:text-red-700 text-xl transition cursor-pointer p-1"
                      title="Remove item"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ORDER SUMMARY */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-lg shadow-sm p-6 w-full border border-gray-100">
            <h2 className="font-bold text-2xl text-gray-800 border-b pb-4">
              Order Summary
            </h2>

            <div className="flex text-base mt-6 font-semibold justify-between items-center text-gray-600">
              <p>Total Items</p>
              <p className="text-gray-900">
                {cartArray.reduce((sum, item) => sum + item.quantity, 0)}
              </p>
            </div>

            <div className="flex text-base mt-3 font-semibold justify-between items-center text-gray-600">
              <p>Unique Products</p>
              <p className="text-gray-900">{cartArray.length}</p>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="flex text-xl font-bold justify-between items-center text-gray-900">
              <p>Total</p>
              <p className="text-blue-600">₦{total}</p>
            </div>

            <button
              type="button"
              disabled={cartArray.length === 0}
              className={`w-full py-3 rounded-md font-semibold text-white mt-8 transition ${
                cartArray.length === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] cursor-pointer'
              }`}
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