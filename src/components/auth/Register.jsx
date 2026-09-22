import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (form) => {
    console.log(form);

    axios
      .post(
        "https://shop-backend-1-lrvx.onrender.com/api/auth/signup",
        form
      )
      .then((res) => {
        console.log(res.data);
        setMessage("Account created successfully");

        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setMessage("Sign-up failed, sorry please try again");
      });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-6 sm:px-6 md:px-8">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-[26px] font-semibold">
            Welcome To VELNOX
          </h1>

          {message && (
            <p className="mt-2 text-xs text-gray-500">
              {message}
            </p>
          )}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm sm:text-[17px] font-semibold mb-1"
            >
              Username
            </label>

            <input
              id="username"
              {...register("name", {
                required: "Username is required",
              })}
              type="text"
              className="w-full p-2.5 sm:p-3 outline-none focus:ring-2 focus:ring-green-500 border-2 border-gray-300 rounded-md text-sm sm:text-base"
            />

            {errors.name && (
              <p className="mt-1 text-red-500 text-[10px] sm:text-xs">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-[17px] font-semibold mb-1"
            >
              Email
            </label>

            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="w-full p-2.5 sm:p-3 outline-none focus:ring-2 focus:ring-green-500 border-2 border-gray-300 rounded-md text-sm sm:text-base"
            />

            {errors.email && (
              <p className="mt-1 text-red-500 text-[10px] sm:text-xs">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm sm:text-[17px] font-semibold mb-1"
            >
              Password
            </label>

            <input
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type="password"
              className="w-full p-2.5 sm:p-3 outline-none focus:ring-2 focus:ring-green-500 border-2 border-gray-300 rounded-md text-sm sm:text-base"
            />

            {errors.password && (
              <p className="mt-1 text-red-500 text-[10px] sm:text-xs">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm sm:text-[17px] font-semibold mb-1"
            >
              Confirm Password
            </label>

            <input
              id="confirm-password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type="password"
              className="w-full p-2.5 sm:p-3 outline-none focus:ring-2 focus:ring-green-500 border-2 border-gray-300 rounded-md text-sm sm:text-base"
            />

            {errors.confirmPassword && (
              <p className="mt-1 text-red-500 text-[10px] sm:text-xs">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 sm:py-3 rounded-md bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-medium transition duration-200"
          >
            Sign-up
          </button>
        </form>

        {/* Navigation */}
        <div className="mt-6 text-center space-y-4">
          <p className="text-sm sm:text-base">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/auth/login")}
              className="text-sm text-blue-500 hover:underline cursor-pointer"
            >
              Login
            </button>
          </p>

          <button
            type="button"
            onClick={() => navigate("/home")}
            className="text-sm sm:text-base text-blue-500 hover:underline cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;