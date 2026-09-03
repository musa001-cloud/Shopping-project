import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import download from "../../assets/download.png";

function Topsect() {
  const navigate = useNavigate();
  const [search, setSearch] = useState()
  const handleSearch =() => {
    navigate(`/search?query=${encodeURIComponent(search)}`)
  }
  return (
    <section className="relative">
      <img
        src={download}
        alt="VELNOX Fashion Collection"
        className="w-full h-[70vh] md:h-[80vh] lg:h-[87vh] object-cover"
      />

      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-4xl">
          STYLIST PICKS BEAT THE HEAT
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 w-full max-w-xl">
          <div className="flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-3 w-full">
            <FaSearch className="text-white flex-shrink-0" />

            <input
              type="text"
              placeholder="Search products..."
              aria-label="Search products"
              className="bg-transparent text-white placeholder-white/80 ml-3 w-full outline-none"
              value={search}
              onChange={(e)=>setSearch(e.target.value) }
            />
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer whitespace-nowrap"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Topsect;