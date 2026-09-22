import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://shop-backend-1-lrvx.onrender.com/api/auth/login", {
        password: data.password,
        email: data.email,
      })
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("isloggedin", "true");

        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-6 sm:px-6 md:px-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-[26px] font-semibold">
            Welcome Back
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed">
            Welcome Back To VELNOX!
            <br />
            We are Happy to Meet You Back Again.
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-5"
        >
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
              placeholder="Enter your email"
              className="w-full p-2.5 sm:p-3 outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-300 rounded-md text-sm sm:text-base"
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
              placeholder="Enter your password"
              className="w-full p-2.5 sm:p-3 outline-none focus:ring-2 focus:ring-blue-500 border-2 border-gray-300 rounded-md text-sm sm:text-base"
            />

            {errors.password && (
              <p className="mt-1 text-red-500 text-[10px] sm:text-xs">
                {errors.password.message}
              </p>
            )}

            {/* Forgot Password */}
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => navigate("/auth/forgot-password")}
                className="text-xs sm:text-sm text-blue-500 hover:underline cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2.5 sm:py-3 rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-medium transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Sign Up */}
        <div className="mt-6 text-center">
          <p className="text-sm sm:text-base">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/auth/register")}
              className="text-sm text-blue-500 hover:underline cursor-pointer"
            >
              Sign-up
            </button>
          </p>
        </div>

        {/* Back Home */}
        <div className="mt-5 text-center">
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

export default Login;