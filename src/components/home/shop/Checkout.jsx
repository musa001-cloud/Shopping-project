import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Layout/Navbar";

function Checkout() {
  const navigate = useNavigate();

  // =========================
  // GET CART
  // =========================
  const [cartArray] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // =========================
  // FORM DATA
  // =========================
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  const [paymentMethod, setPaymentMethod] =
    useState("card");

  // =========================
  // HANDLE INPUT
  // =========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // TOTAL
  // =========================
  const total = cartArray.reduce(
    (sum, item) =>
      sum +
      Number(item.price || 0) *
        Number(item.quantity || 1),
    0
  );

  // =========================
  // TOTAL ITEMS
  // =========================
  const totalItems = cartArray.reduce(
    (sum, item) =>
      sum + Number(item.quantity || 1),
    0
  );

  // =========================
  // PLACE ORDER
  // =========================
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartArray.length === 0) {
      alert("Your cart is empty.");
      navigate("/cart");
      return;
    }

    const order = {
      id: Date.now(),
      customer: formData,
      items: cartArray,
      total,
      paymentMethod,
      date: new Date().toLocaleString("en-NG"),
      status: "Order Placed",
    };

    // Get previous orders
    const oldOrders =
      JSON.parse(
        localStorage.getItem("orderHistory")
      ) || [];

    // Save new order
    localStorage.setItem(
      "orderHistory",
      JSON.stringify([
        order,
        ...oldOrders,
      ])
    );

    // Clear cart
    localStorage.removeItem("cart");

    // Update navbar cart count
    window.dispatchEvent(
      new Event("cartUpdated")
    );

    alert("Order placed successfully! 🎉");

    navigate("/history");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTAINER */}
      <main className="w-full px-3 py-5 sm:px-5 sm:py-8 md:px-8 lg:px-10">

        <div className="mx-auto w-full max-w-7xl">

          {/* PAGE GRID */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8">

            {/* =================================
                LEFT SIDE - CHECKOUT FORM
            ================================= */}
            <section className="min-w-0 lg:col-span-2">

              <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">

                {/* HEADER */}
                <div className="mb-7 sm:mb-8">

                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Checkout
                  </h1>

                  <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                    Complete your information to
                    place your order.
                  </p>

                </div>

                <form
                  onSubmit={handlePlaceOrder}
                  className="w-full"
                >

                  {/* =================================
                      CONTACT INFORMATION
                  ================================= */}
                  <div className="mb-8">

                    <h2 className="mb-5 text-lg font-bold text-gray-800 sm:text-xl">
                      Contact Information
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                      {/* FIRST NAME */}
                      <div className="min-w-0">

                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          First Name
                        </label>

                        <input
                          type="text"
                          name="firstName"
                          placeholder="Enter first name"
                          value={
                            formData.firstName
                          }
                          onChange={handleChange}
                          required
                          className="box-border w-full min-w-0 rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:px-4 sm:text-base"
                        />

                      </div>

                      {/* LAST NAME */}
                      <div className="min-w-0">

                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          Last Name
                        </label>

                        <input
                          type="text"
                          name="lastName"
                          placeholder="Enter last name"
                          value={
                            formData.lastName
                          }
                          onChange={handleChange}
                          required
                          className="box-border w-full min-w-0 rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:px-4 sm:text-base"
                        />

                      </div>

                      {/* EMAIL */}
                      <div className="min-w-0">

                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          Email
                        </label>

                        <input
                          type="email"
                          name="email"
                          placeholder="example@gmail.com"
                          value={
                            formData.email
                          }
                          onChange={handleChange}
                          required
                          className="box-border w-full min-w-0 rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:px-4 sm:text-base"
                        />

                      </div>

                      {/* PHONE */}
                      <div className="min-w-0">

                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          placeholder="08012345678"
                          value={
                            formData.phone
                          }
                          onChange={handleChange}
                          required
                          className="box-border w-full min-w-0 rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:px-4 sm:text-base"
                        />

                      </div>

                    </div>
                  </div>

                  {/* =================================
                      DELIVERY ADDRESS
                  ================================= */}
                  <div className="mb-8">

                    <h2 className="mb-5 text-lg font-bold text-gray-800 sm:text-xl">
                      Delivery Address
                    </h2>

                    {/* ADDRESS */}
                    <div className="mb-4">

                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Address
                      </label>

                      <input
                        type="text"
                        name="address"
                        placeholder="Enter your delivery address"
                        value={
                          formData.address
                        }
                        onChange={handleChange}
                        required
                        className="box-border w-full min-w-0 rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:px-4 sm:text-base"
                      />

                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                      {/* CITY */}
                      <div>

                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          City
                        </label>

                        <input
                          type="text"
                          name="city"
                          placeholder="Lagos"
                          value={
                            formData.city
                          }
                          onChange={handleChange}
                          required
                          className="box-border w-full min-w-0 rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:px-4 sm:text-base"
                        />

                      </div>

                      {/* STATE */}
                      <div>

                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                          State
                        </label>

                        <input
                          type="text"
                          name="state"
                          placeholder="Lagos State"
                          value={
                            formData.state
                          }
                          onChange={handleChange}
                          required
                          className="box-border w-full min-w-0 rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:px-4 sm:text-base"
                        />

                      </div>

                    </div>
                  </div>

                  {/* =================================
                      PAYMENT METHOD
                  ================================= */}
                  <div className="mb-8">

                    <h2 className="mb-5 text-lg font-bold text-gray-800 sm:text-xl">
                      Payment Method
                    </h2>

                    <div className="space-y-3">

                      {/* CARD */}
                      <label
                        className={`flex cursor-pointer items-start gap-3 rounded-lg border-2 p-3 transition sm:gap-4 sm:p-4 ${
                          paymentMethod ===
                          "card"
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >

                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          checked={
                            paymentMethod ===
                            "card"
                          }
                          onChange={(e) =>
                            setPaymentMethod(
                              e.target.value
                            )
                          }
                          className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                        />

                        <div className="min-w-0">

                          <p className="text-sm font-semibold text-gray-800 sm:text-base">
                            💳 Card Payment
                          </p>

                          <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                            Pay securely with your
                            debit or credit card
                          </p>

                        </div>

                      </label>

                      {/* CASH */}
                      <label
                        className={`flex cursor-pointer items-start gap-3 rounded-lg border-2 p-3 transition sm:gap-4 sm:p-4 ${
                          paymentMethod ===
                          "cash"
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >

                        <input
                          type="radio"
                          name="payment"
                          value="cash"
                          checked={
                            paymentMethod ===
                            "cash"
                          }
                          onChange={(e) =>
                            setPaymentMethod(
                              e.target.value
                            )
                          }
                          className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                        />

                        <div className="min-w-0">

                          <p className="text-sm font-semibold text-gray-800 sm:text-base">
                            💵 Cash on Delivery
                          </p>

                          <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                            Pay when your order
                            arrives
                          </p>

                        </div>

                      </label>

                    </div>
                  </div>

                  {/* =================================
                      BUTTONS
                  ================================= */}
                  <div className="space-y-3">

                    <button
                      type="submit"
                      className="w-full rounded-lg bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99] sm:py-4 sm:text-base"
                    >
                      Place Order — ₦
                      {total.toLocaleString(
                        "en-NG",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        navigate("/cart")
                      }
                      className="w-full rounded-lg border-2 border-blue-600 bg-white px-4 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white sm:py-3.5 sm:text-base"
                    >
                      ← Back to Cart
                    </button>

                  </div>

                </form>
              </div>
            </section>

            {/* =================================
                RIGHT SIDE - ORDER SUMMARY
            ================================= */}
            <aside className="min-w-0 lg:sticky lg:top-24 lg:h-fit">

              <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">

                {/* TITLE */}
                <h2 className="border-b border-gray-200 pb-4 text-xl font-bold text-gray-900 sm:text-2xl">
                  Order Summary
                </h2>

                {/* TOTAL ITEMS */}
                <div className="flex items-center justify-between border-b border-gray-100 py-4 text-sm sm:text-base">

                  <span className="text-gray-600">
                    Total Items
                  </span>

                  <strong className="text-gray-900">
                    {totalItems}
                  </strong>

                </div>

                {/* UNIQUE PRODUCTS */}
                <div className="flex items-center justify-between border-b border-gray-100 py-4 text-sm sm:text-base">

                  <span className="text-gray-600">
                    Unique Products
                  </span>

                  <strong className="text-gray-900">
                    {cartArray.length}
                  </strong>

                </div>

                {/* PRODUCTS */}
                <div className="py-2">

                  {cartArray.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 border-b border-gray-100 py-4 last:border-b-0"
                      >

                        {/* IMAGE */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-14 w-14 shrink-0 rounded-lg border border-gray-200 object-cover sm:h-16 sm:w-16"
                        />

                        {/* PRODUCT INFO */}
                        <div className="min-w-0 flex-1">

                          <h3 className="truncate text-sm font-semibold text-gray-800">
                            {item.name}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                            Qty:{" "}
                            {item.quantity ||
                              1}
                          </p>

                        </div>

                        {/* PRICE */}
                        <strong className="shrink-0 text-right text-xs text-gray-800 sm:text-sm">

                          ₦
                          {(
                            Number(
                              item.price ||
                                0
                            ) *
                            Number(
                              item.quantity ||
                                1
                            )
                          ).toLocaleString(
                            "en-NG",
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}

                        </strong>

                      </div>
                    )
                  )}

                </div>

                {/* TOTAL */}
                <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-5">

                  <span className="text-lg font-bold text-gray-900 sm:text-xl">
                    Total
                  </span>

                  <span className="text-lg font-bold text-blue-600 sm:text-xl">

                    ₦
                    {total.toLocaleString(
                      "en-NG",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }
                    )}

                  </span>

                </div>

              </div>
            </aside>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;