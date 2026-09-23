import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GoHome } from "react-icons/go";
import Products from "../../products/Product.json";

function Shop() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  const addToCart = (product) => {
    try {
      const cartArray =
        JSON.parse(localStorage.getItem("cart")) || [];

      const existingProduct = cartArray.some(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingProduct) {
        updatedCart = cartArray.filter(
          (item) => item.id !== product.id
        );
      } else {
        updatedCart = [
          ...cartArray,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      setCart(updatedCart);

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      console.log("Updated Cart:", updatedCart);
    } catch (error) {
      console.error("Cart error:", error);
    }
  };

  const isInCart = (productId) => {
    return cart.some(
      (item) => item.id === productId
    );
  };

  useEffect(() => {
    const updateCart = () => {
      try {
        const storedCart =
          JSON.parse(localStorage.getItem("cart")) || [];

        setCart(storedCart);
      } catch {
        setCart([]);
      }
    };

    window.addEventListener(
      "cartUpdated",
      updateCart
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCart
      );
    };
  }, []);

  const categoryValue = category
    ? category.toLowerCase()
    : "";

  const FilterProduct = category
    ? Products.filter((product) =>
        product.category
          ?.toLowerCase()
          .includes(categoryValue)
      )
    : Products;

  return (
    <div className="md:px-[100px] px-[50px] py-[20px]">

      <div className="flex justify-between items-center px-[50px] py-[20px]">

        {/* HOME BUTTON */}
        <div
          onClick={() => navigate("/home")}
          className="
            text-[30px]
            active:text-gray-900
            hover:text-gray-600
            cursor-pointer
          "
        >
          <GoHome />
        </div>

        <h1 className="text-[36px] text-center p-[10px]">
          {category || "All Products"}
        </h1>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

        {FilterProduct.map((item) => {

          const productInCart = isInCart(item.id);

          return (
            <div
              key={item.id}
              className="
                flex flex-col
                bg-white
                hover:scale-105
                hover:shadow-xl
                h-[400px]
                group
                relative
                cursor-pointer
                overflow-hidden
                rounded-2xl
                shadow-lg
                transition-all
                duration-300
              "
            >

              <img
                className="
                  w-full
                  h-[280px]
                  rounded-t-2xl
                  object-cover
                "
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

              <div
                className="
                  absolute
                  inset-0
                  md:flex
                  md:mt-0
                  mt-[350px]
                  items-center
                  justify-center
                  md:bg-black/40
                  md:opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              >

                <button
                  type="button"
                  onClick={() => addToCart(item)}
                  className={`
                    md:px-5
                    mb-2
                    px-2
                    py-2
                    text-white
                    rounded-md
                    cursor-pointer
                    transition-all
                    duration-300
                    ${
                      productInCart
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    }
                  `}
                >
                  {productInCart
                    ? "Remove From Cart"
                    : "Add To Cart"}
                </button>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Shop;
