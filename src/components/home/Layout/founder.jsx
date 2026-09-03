import React from "react";

function Founder({ src, alt, name, position }) {
  return (
    <div className="overflow-hidden text-center transition duration-300 bg-white rounded-xl shadow-md hover:shadow-xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-[330px] object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">{name}</h2>

        <p className="mt-2 text-gray-500">
          {position}
        </p>
      </div>
    </div>
  );
}

export default Founder;