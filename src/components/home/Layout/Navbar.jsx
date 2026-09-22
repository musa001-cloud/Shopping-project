import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Function to calculate total cart item count from localStorage
  const updateCartBadge = () => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = storedCart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(count);
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    // Initial fetch on component mount
    updateCartBadge();

    // Listen for custom cart update events
    window.addEventListener("cartUpdated", updateCartBadge);
    window.addEventListener("storage", updateCartBadge);

    return () => {
      window.removeEventListener("cartUpdated", updateCartBadge);
      window.removeEventListener("storage", updateCartBadge);
    };
  }, []);

  const isLoggedIn = localStorage.getItem("isloggedin") === "true";

  const toggleMenu = () => setMenu((prev) => !prev);

  const goTo = (path) => {
    navigate(path);
    setMenu(false);
  };

  const logout = () => {
    localStorage.setItem("isloggedin", "false");
    setMenu(false);
    navigate("/auth/login");
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-6 lg:px-24 py-4">
        <h1
          className="text-[20px] md:text-3xl lg:text-4xl font-normal cursor-pointer"
          onClick={() => goTo("/home")}
        >
          VELNOX
        </h1>

        <div className="hidden md:flex items-center justify-between w-[70%]">
          <div className="flex items-center gap-8">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `relative py-2 text-[15px] font-semibold transition-all duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                } group`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">Home</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative py-2 text-[15px] font-semibold transition-all duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                } group`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">About</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative py-2 text-[15px] font-semibold transition-all duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                } group`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">Contact Us</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <button
                  type="button"
                  className="px-5 py-2 bg-blue-500 text-[15px] text-white rounded-[30px] hover:bg-blue-600 hover:scale-105 transition cursor-pointer"
                  onClick={() => goTo("/auth/login")}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="px-5 py-2 bg-green-500 text-[15px] text-white rounded-[30px] hover:bg-green-600 hover:scale-105 transition cursor-pointer"
                  onClick={() => goTo("/auth/register")}
                >
                  Get Started
                </button>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center text-xl gap-2 cursor-pointer hover:text-blue-600 transition"
                  onClick={() => goTo("/cart")}
                >
                  <FiShoppingCart />
                  <p className="text-sm font-semibold">({cartCount})</p>
                </div>
                <button
                  type="button"
                  className="px-5 py-2 bg-red-500 text-[15px] text-white rounded-[30px] hover:bg-red-600 hover:scale-105 transition cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden">
          {menu ? (
            <FaXmark className="text-2xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {menu && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t">
          <div className="flex flex-col items-center gap-6 py-6">
            <span
              className="font-semibold text-gray-700 hover:text-blue-600 cursor-pointer"
              onClick={() => goTo("/home")}
            >
              Home
            </span>
            <span
              className="font-semibold text-gray-700 hover:text-blue-600 cursor-pointer"
              onClick={() => goTo("/about")}
            >
              About
            </span>
            <span
              className="font-semibold text-gray-700 hover:text-blue-600 cursor-pointer"
              onClick={() => goTo("/contact")}
            >
              Contact Us
            </span>

            {!isLoggedIn ? (
              <>
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-500 text-white rounded-[30px] hover:bg-blue-600 hover:scale-105 transition cursor-pointer"
                  onClick={() => goTo("/auth/login")}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="px-6 py-2 bg-green-500 text-white rounded-[30px] hover:bg-green-600 hover:scale-105 transition cursor-pointer"
                  onClick={() => goTo("/auth/register")}
                >
                  Get Started
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div
                  className="flex items-center text-xl gap-2 cursor-pointer hover:text-blue-600 transition"
                  onClick={() => goTo("/cart")}
                >
                  <FiShoppingCart />
                  <p className="text-sm font-semibold">({cartCount})</p>
                </div>
                <button
                  type="button"
                  className="px-6 py-2 bg-red-500 text-white rounded-[30px] hover:bg-red-600 hover:scale-105 transition cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;