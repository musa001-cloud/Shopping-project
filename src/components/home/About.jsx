import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

import img from "../../assets/ggg.png";
import Lay from "./Layout/Lay.jsx";
import Founder from "./Layout/founder.jsx";

import man from "../../assets/icons/Wade.png";
import woman from "../../assets/Profile/cool arm.png";
import Navbar from "./Layout/Navbar";

import founder1 from "../../assets/Founders/Abdullah Olaitan.jfif";
import founder2 from "../../assets/Founders/David.jfif";
import founder3 from "../../assets/Founders/John Brown.jfif";
import founder4 from "../../assets/Founders/Micheal Adeoye.jfif";

function About() {
  const navigate = useNavigate();
   const [menu, setMenu] = useState(false);
  
    const toggleMenu = () => {
      setMenu((prev) => !prev);
      console.log(menu);
    };
  
    return (
<div className="w-full min-h-screen bg-white">
     <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative w-full">

        <img
          src={img}
          alt="About VELNOX"
          className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[350px] object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            About VELNOX
          </h1>
        </div>

      </section>

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">

          <Lay
            src={man}
            alt="Men Collection"
          />

          <Lay
            src={woman}
            alt="Women Collection"
          />

        </div>

      </section>

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-14">

        <div className="max-w-7xl mx-auto">

          <h1 className="mb-8 sm:mb-10 text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Meet Our Founders
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            <Founder
              src={founder1}
              alt="Founder 1"
              name="Abdullah Olaitan"
              position="Chief Executive Officer (CEO)"
            />

            <Founder
              src={founder2}
              alt="Founder 2"
              name="David Smith"
              position="Chief Technology Officer (CTO)"
            />

            <Founder
              src={founder3}
              alt="Founder 3"
              name="John Brown"
              position="Chief Financial Officer (CFO)"
            />

            <Founder
              src={founder4}
              alt="Founder 4"
              name="Micheal Adeoye"
              position="Chief Marketing Officer (CMO)"
            />

          </div>
        </div>

      </section>

      {/* ================= WHY SHOP WITH VELNOX ================= */}
      <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-14 md:py-16">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10">
            Why Shop With VELNOX?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

            {/* PREMIUM QUALITY */}
            <div className="shadow-lg rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition duration-300">

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Premium Quality
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Carefully selected clothing made with premium materials for
                comfort and durability.
              </p>

            </div>

            {/* FAST DELIVERY */}
            <div className="shadow-lg rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition duration-300">

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Receive your orders quickly with our trusted nationwide
                delivery service.
              </p>

            </div>

            {/* SECURE PAYMENTS */}
            <div className="shadow-lg rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition duration-300">

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Secure Payments
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Shop confidently with safe and secure payment options.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white py-10 sm:py-12 px-4">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-semibold">
            VELNOX
          </h2>

          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Modern Fashion • Premium Quality • Fast Delivery
          </p>

          {/* FOOTER LINKS */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mt-6">

            <span
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => navigate("/home")}
            >
              Home
            </span>

            <span
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => navigate("/about")}
            >
              About
            </span>

            <span
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => navigate("/contact")}
            >
              Contact
            </span>

          </div>

          <p className="mt-6 text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} VELNOX. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default About;