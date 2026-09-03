import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

import Img from "../../assets/shoes/Concerned.png";

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all the fields.",
      });
      return;
    }

    // Check email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // Success
    setStatus({
      type: "success",
      message: "Thank you! Your message has been sent successfully.",
    });

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };
 
 const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
    console.log(menu);
  };

  return ( 
     <div className="w-full min-h-screen bg-white">
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
              className="font-semibold pb-1 cursor-pointer"
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
              className="font-semibold  text-blue-700 border-b-2 border-blue-700 hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </span>

          </div>

          <div className="flex items-center gap-4">

            <button
              type="button"
              className="px-5 py-2 bg-blue-500 text-[15px] text-white rounded-[30px]
              hover:bg-blue-600 hover:scale-105 transition cursor-pointer"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </button>

            <button
              type="button"
              className="px-5 py-2 bg-green-500 text-[15px] text-white rounded-[30px]
              hover:bg-green-600 hover:scale-105 transition cursor-pointer"
              onClick={() => navigate("/auth/register")}
            >
              Get Started
            </button>

          </div>
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
              className="font-semibold cursor-pointer"
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
              className="font-semibold text-blue-700 hover:text-blue-600 cursor-pointer"
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
              onClick={() => {
                navigate("/auth/login");
                
              }}
            >
              Login
            </button>

            {/* GET STARTED */}
            <button
              type="button"
              className="px-6 py-2 bg-green-500 text-white rounded-[30px]
              hover:bg-green-600 hover:scale-105 transition cursor-pointer"
              onClick={() => {
                navigate("/auth/register");
                
              }}
            >
              Get Started
            </button>

          </div>
        </div>
      )}
    </nav>

      <section className="relative w-full">

        <img
          src={Img}
          alt="Contact VELNOX"
          className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[350px] object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            Contact Us
          </h1>

        </div>

      </section>

      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-16">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          <div className="flex flex-col justify-center">

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              We would love to hear from you.
            </h2>

            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-7">
              If you have any query or any type of suggestion, you can
              contact us here. We would love to hear from you.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="border border-gray-300 w-full outline-none rounded-md p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />

                </div>

                <div>

                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="border border-gray-300 w-full outline-none rounded-md p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />

                </div>

              </div>

              <div className="mt-5">

                <label
                  htmlFor="message"
                  className="block mb-2 font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="border border-gray-300 w-full outline-none rounded-md p-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                  rows="6"
                />

              </div>

              {status.message && (
                <div
                  className={`mt-4 p-3 rounded-md font-medium text-sm sm:text-base ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-red-100 text-red-700 border border-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="mt-5 w-full sm:w-auto px-6 py-3 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>

            </form>

          </div>

          <div className="flex flex-col justify-center lg:pl-8">

            {/* VISIT US */}
            <div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Visit Us
              </h2>

              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                850 S Los Angeles St
                <br />
                Los Angeles, CA 90014
                <br />
                USA
              </p>

            </div>

            <div className="mt-8 sm:mt-10">

              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Get In Touch
              </h2>

              <p className="text-gray-600 leading-7 text-sm sm:text-base">

                You can get in touch with us through the provided email.

                <br />

                Email:{" "}

                <a
                  href="mailto:contact@velnox.com"
                  className="text-blue-500 hover:underline break-all"
                >
                  contact@velnox.com
                </a>

              </p>

            </div>

            <div className="mt-8">

              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Call Us
              </h2>

              <a
                href="tel:+12135550147"
                className="text-blue-500 hover:underline text-sm sm:text-base"
              >
                +1 (213) 555-0147
              </a>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-14 md:py-16">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10">
            Why Shop With VELNOX?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

            <div className="shadow-lg rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition duration-300">

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Premium Quality
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Carefully selected clothing made with premium materials for
                comfort and durability.
              </p>

            </div>

            <div className="shadow-lg rounded-xl p-6 sm:p-8 text-center hover:shadow-2xl transition duration-300">

              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Receive your orders quickly with our trusted nationwide
                delivery service.
              </p>

            </div>

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

      <footer className="bg-black text-white py-10 sm:py-12 px-4">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-semibold">
            VELNOX
          </h2>

          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Modern Fashion • Premium Quality • Fast Delivery
          </p>

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

export default Contact;