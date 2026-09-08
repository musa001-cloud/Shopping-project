import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  // Get login status
  const isLoggedIn = localStorage.getItem("isloggedin") === "true";

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  // Navigate and close mobile menu
  const goTo = (path) => {
    navigate(path);
    setMenu(false);
  };

  // Logout
  const logout = () => {
    localStorage.setItem("isloggedin", "false");
    setMenu(false);
    navigate("/auth/login");
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 lg:px-24 py-4">

        {/* LOGO */}
        <h1
          className="text-[20px] md:text-3xl lg:text-4xl font-normal cursor-pointer"
          onClick={() => goTo("/home")}
        >
          VELNOX
        </h1>

        {/* DESKTOP NAVBAR */}
        <div className="hidden md:flex items-center justify-between w-[70%]">

<div className="flex items-center gap-8">

  <NavLink
    to="/home"
    className={({ isActive }) =>
      `relative py-2 text-[15px] font-semibold transition-all duration-300
       ${
         isActive
           ? "text-blue-600"
           : "text-gray-700 hover:text-blue-600"
       }
       group`
    }
  >
    {({ isActive }) => (
      <>
        <span className="relative z-10">
          Home
        </span>

        {/* Animated underline */}
        <span
          className={`
            absolute left-0 -bottom-1 h-[2px] bg-blue-600
            transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      </>
    )}
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `relative py-2 text-[15px] font-semibold transition-all duration-300
       ${
         isActive
           ? "text-blue-600"
           : "text-gray-700 hover:text-blue-600"
       }
       group`
    }
  >
    {({ isActive }) => (
      <>
        <span className="relative z-10">
          About
        </span>

        <span
          className={`
            absolute left-0 -bottom-1 h-[2px] bg-blue-600
            transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      </>
    )}
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `relative py-2 text-[15px] font-semibold transition-all duration-300
       ${
         isActive
           ? "text-blue-600"
           : "text-gray-700 hover:text-blue-600"
       }
       group`
    }
  >
    {({ isActive }) => (
      <>
        <span className="relative z-10">
          Contact Us
        </span>

        <span
          className={`
            absolute left-0 -bottom-1 h-[2px] bg-blue-600
            transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      </>
    )}
  </NavLink>

</div>

          {/* AUTH BUTTONS */}
          <div className="flex items-center gap-4">

            {!isLoggedIn ? (
              <>
                {/* LOGIN */}
                <button
                  type="button"
                  className="
                    px-5 py-2
                    bg-blue-500
                    text-[15px]
                    text-white
                    rounded-[30px]
                    hover:bg-blue-600
                    hover:scale-105
                    transition
                    cursor-pointer
                  "
                  onClick={() => goTo("/auth/login")}
                >
                  Login
                </button>

                {/* GET STARTED */}
                <button
                  type="button"
                  className="
                    px-5 py-2
                    bg-green-500
                    text-[15px]
                    text-white
                    rounded-[30px]
                    hover:bg-green-600
                    hover:scale-105
                    transition
                    cursor-pointer
                  "
                  onClick={() => goTo("/auth/register")}
                >
                  Get Started
                </button>
              </>
            ) : (
              /* LOGOUT */
              <button
                type="button"
                className="
                  px-5 py-2
                  bg-red-500
                  text-[15px]
                  text-white
                  rounded-[30px]
                  hover:bg-red-600
                  hover:scale-105
                  transition
                  cursor-pointer
                "
                onClick={logout}
              >
                Logout
              </button>
            )}

          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          {menu ? (
            <FaXmark
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {menu && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">

          <div className="flex flex-col items-center gap-6 py-6">

            {/* HOME */}
            <span
              className="font-semibold text-blue-700 cursor-pointer"
              onClick={() => goTo("/home")}
            >
              Home
            </span>

            {/* ABOUT */}
            <span
              className="font-semibold hover:text-blue-600 cursor-pointer"
              onClick={() => goTo("/about")}
            >
              About
            </span>

            {/* CONTACT */}
            <span
              className="font-semibold hover:text-blue-600 cursor-pointer"
              onClick={() => goTo("/contact")}
            >
              Contact Us
            </span>

            {/* MOBILE AUTH */}
            {!isLoggedIn ? (
              <>
                {/* LOGIN */}
                <button
                  type="button"
                  className="
                    px-6 py-2
                    bg-blue-500
                    text-white
                    rounded-[30px]
                    hover:bg-blue-600
                    hover:scale-105
                    transition
                    cursor-pointer
                  "
                  onClick={() => goTo("/auth/login")}
                >
                  Login
                </button>

                {/* GET STARTED */}
                <button
                  type="button"
                  className="
                    px-6 py-2
                    bg-green-500
                    text-white
                    rounded-[30px]
                    hover:bg-green-600
                    hover:scale-105
                    transition
                    cursor-pointer
                  "
                  onClick={() => goTo("/auth/register")}
                >
                  Get Started
                </button>
              </>
            ) : (
              /* MOBILE LOGOUT */
              <button
                type="button"
                className="
                  px-6 py-2
                  bg-red-500
                  text-white
                  rounded-[30px]
                  hover:bg-red-600
                  hover:scale-105
                  transition
                  cursor-pointer
                "
                onClick={logout}
              >
                Logout
              </button>
            )}

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

