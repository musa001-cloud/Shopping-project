

import React from "react";
import { useNavigate } from "react-router-dom";

function Layout({ image, title, price, rating }) {

  return (
    <div
    className="flex flex-col bg-white rounded-lg shadow-md hover:scale-105
     hover:shadow-xl h-[400px] transition-all duration-300 
     overflow-hidden">

      {/* Product Image */}
      <div>
        <img
          className="w-full h-[250px] object-cover"
          src={image}
          alt={title}
        />
      </div>

      {/* Product Details */}
      <div className="text-center h-[200px] p-5">

        <h2 className=" font-semibold mb-2">
          {title}
        </h2>
<div className="flex w-[70px] items-center justify-between">
        <p className="text-blue-600 text-xl font-semibold mb-4">
          ₦{price}
        </p>
        <div className="flex">
        <p>Rate:</p>
        <p>{rating}</p>
          </div>
        </div>
        <button
          type="button"
          className="md-px-5 px-2  py-2 bg-blue-500 text-white rounded-md
           hover:bg-blue-600 transition cursor-pointer"
        >
          Add To Cart
        </button>

      </div>
    </div>
  );
}

export default Layout;