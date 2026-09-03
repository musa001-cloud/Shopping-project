import React from "react";
import FirstLayout from "./Layout/FirstLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Products from "../products/Product.json"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Category images
import unsplash from "../../assets/image/Over.jfif";
import unsplash2 from "../../assets/img/download (1).jfif";
import unsplash3 from "../../assets/img/bing.jfif";
import unsplash4 from "../../assets/img/Crocs.jfif";
import unsplash5 from "../../assets/img/download (2).jfif";
import unsplash6 from "../../assets/img/download (3).jfif";
import unsplash7 from "../../assets/img/download.jfif";
import unsplash8 from "../../assets/img/pan.jfif";

function Category() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      image: unsplash,
      category: "T-shirt",
    },
    {
      id: 2,
      image: unsplash2,
      category: "Shoes",
    },
    {
      id: 3,
      image: unsplash3,
      category: "Baggy Leg Cuts",
    },
    {
      id: 4,
      image: unsplash4,
      category: "Crocs",
    },
    {
      id: 5,
      image: unsplash5,
      category: "Gucci",
    },
    {
      id: 6,
      image: unsplash6,
      category: "Valentino",
    },
    {
      id: 7,
      image: unsplash7,
      category: "Baggy",
    },
    {
      id: 8,
      image: unsplash8,
      category: "Cargo",
    },
  ];

console.log(Products)
  // Send the selected category through the URL
  const handleCategory = (category) => {
    console.log(category)
        console.log(categories);
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <section
      id="products"
      className="px-6 bg-gray-200 lg:px-24 py-14 scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Discover New Arrivals
      </h2>

      <p className="text-center text-gray-500 mt-2 mb-8">
        Recently added clothes!
      </p>

      <Swiper
        spaceBetween={20}
        navigation
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
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <FirstLayout
              image={item.image}
              title={item.category}
              onClick={()=> handleCategory(item.category)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Category;