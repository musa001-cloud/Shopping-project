
import React from "react";

function FirstLayout({ onClick, image, title }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col bg-white rounded-lg shadow-md hover:scale-105 
      hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      {/* Product Image */}
      <div className="w-full">
        <img
          className="w-full h-[300px] object-cover"
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>

      {/* Product Title */}
      <div className="text-center p-5">
        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default FirstLayout;

