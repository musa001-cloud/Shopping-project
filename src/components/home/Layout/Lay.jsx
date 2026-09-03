import React from 'react';
import { useNavigate } from 'react-router-dom';
function Lay(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative border border-gray-400">
        <img
          className="w-full h-[500px] object-cover"
          src={props.src}
          alt={props.alt}
        />

        <button
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-blue-500 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer"
        >
          On Sale
        </button>
      </div>
    </div>
  );
}

export default Lay;