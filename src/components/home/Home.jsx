
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Products from "../products/Product.json"

import Navbar from "./Layout/Navbar";
import Topsect from "./Topsect";
import Category from "./Category";

function Home() {
  const added = localStorage.getItem("cart");
  console.log("added", added);
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
  const navigate = useNavigate();
 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const topRating = Products.filter(product=> product.rating>=9)
console.log(topRating);

return (
  <div className="bg-gray-50 min-h-screen">
      <Navbar/>
      <Topsect />

      <Category/>
      <section
        id="products"
        className="px-6 bg-gray-300 lg:px-24 py-14 scroll-mt-24"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Top Sellers
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Browse our top-selling products
        </p>
        <br />
       <Swiper
        spaceBetween={20}
        navigation
        className="h-[500px]"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        
        {topRating.map((item) => (
          <SwiperSlide key={item.id ?? item.name}>
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
             onClick={() => {
              addToCart(item);
              navigate("/cart");
             }}
             className="md:px-5 mb-2 px-2 py-2 bg-blue-500 text-white rounded-md
            hover:bg-blue-600 cursor-pointer group-hover:opacity-100"
          >
             Add To Cart
          </button>
        </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
 
         
      </section>
     
      <section className="bg-white py-16 px-6 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Shop With VELNOX?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Premium Quality */}
          <div className="shadow-lg rounded-xl p-8  transition">
            <h3 className="text-2xl font-semibold mb-3">
              Premium Quality
            </h3>

            <p className="text-gray-600">
              Carefully selected clothing made with premium materials for
              comfort and durability.
            </p>
          </div>

          {/* Fast Delivery */}
          <div className="shadow-lg rounded-xl p-8  transition">
            <h3 className="text-2xl font-semibold mb-3">
              Fast Delivery
            </h3>

            <p className="text-gray-600">
              Receive your orders quickly with our trusted nationwide
              delivery service.
            </p>
          </div>

          {/* Secure Payments */}
          <div className="shadow-lg rounded-xl p-8  transition">
            <h3 className="text-2xl font-semibold mb-3">
              Secure Payments
            </h3>

            <p className="text-gray-600">
              Shop confidently with safe and secure payment options.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-10 text-center">
        <h2 className="text-3xl font-semibold">
          VELNOX
        </h2>

        <p className="mt-3 text-gray-400">
          Modern Fashion • Premium Quality • Fast Delivery
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <span
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/home")}
          >
            Home
          </span>

          <span
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/about")}
          >
            About
          </span>

          <span
            className="cursor-pointer hover:text-blue-400"
            onClick={() => navigate("/contact")}
          >
            Contact
          </span>
        </div>

        <p className="mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} VELNOX. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;




