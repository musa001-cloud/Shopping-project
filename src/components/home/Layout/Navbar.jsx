import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => !prev);
    console.log(menu);
  };
  const isloggedIn = localStorage.getItem("isloggedin");
  console.log("isloggedIn", isloggedIn);

  return (
    <nav className="sticky relative top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 lg:px-24 py-4">

        {/* LOGO */}
        <h1
          className="text-[20px] md:text-3xl lg:text-4xl font-normal cursor-pointer"
          onClick={() => navigate("/home")}
        >
          VELNOX
        </h1>

        <div className="hidden md:flex items-center justify-between w-[70%]">

          <div className="flex items-center gap-5 lg:gap-8">

            <span
              className="font-semibold text-blue-700 border-b-2 border-blue-700 pb-1 cursor-pointer"
              onClick={() => navigate("/home")}
            >
              Home
            </span>

            <span
              className="font-semibold hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About
            </span>

            <span
              className="font-semibold hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </span>

          </div>

          <div className={`flex items-center gap-4 ${!isloggedIn ? 'flex' : 'hidden'}`}>

            <button
              type="button"
              className="px-5 py-2 bg-blue-500 text-[15px] text-white rounded-[30px]
              hover:bg-blue-600 hover:scale-105 transition cursor-pointer"
              onClick={()=> navigate("/auth/login")}
            >
              Login
            </button>

            <button
              type="button"
              className="px-5 py-2 bg-green-500 text-[15px] text-white rounded-[30px]
              hover:bg-green-600 hover:scale-105 transition cursor-pointer"
              onClick={()=> navigate("/auth/register")}
            >
              Get Started
            </button>

          </div>
           <button
              type="button"
              className={`px-5 py-2 bg-green-500 text-[15px] text-white rounded-[30px]
              hover:bg-green-600 hover:scale-105 transition cursor-pointer ${isloggedIn ? 'hidden' : 'flex'}`}
              onClick={()=> {
                localStorage.setItem("isloggedin", false);
                navigate("/auth/login");
              }}
            >
              Logout
            </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden block">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {menu && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">

          <div className="flex flex-col items-center gap-6 py-6">

            <span
              className="font-semibold text-blue-700 cursor-pointer"
              onClick={() => {
                navigate("/home");
                
              }}
            >
              Home
            </span>

            <span
              className="font-semibold hover:text-blue-600 cursor-pointer"
              onClick={() => {
                navigate("/about");
                
              }}
            >
              About
            </span>

            {/* CONTACT */}
            <span
              className="font-semibold hover:text-blue-600 cursor-pointer"
              onClick={() => {
                navigate("/contact");
                
              }}
            >
              Contact Us
            </span>

            {/* LOGIN */}
            <button
              type="button"
              className="px-6 py-2 bg-blue-500 text-white rounded-[30px]
              hover:bg-blue-600 hover:scale-105 transition cursor-pointer"
              onClick={()=> {navigate("/auth/login");}}
            >
              Login
            </button>

            {/* GET STARTED */}
            <button
              type="button"
              className="px-6 py-2 bg-green-500 text-white rounded-[30px]
              hover:bg-green-600 hover:scale-105 transition cursor-pointer"
              onClick={()=> {navigate("/auth/register");}}
                
            >
              Get Started
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;