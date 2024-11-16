import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import logo from "../images/logo.png";
import image from "../images/authPageSide.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(""); // Define error state

  const submitForm = (e) => {
    e.preventDefault();
    // Example validation logic
    if (email === "" || pwd === "") {
      setError("Please fill out all fields.");
    } else {
      setError("");
      // Handle form submission logic here
      console.log("Form submitted:", { email, pwd });
    }
  };

  return (
    <>
      <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        {/* Left Section */}
        <div className="left w-[35%]">
          <img className="w-[200px]" src={logo} alt="Logo" />
          <form onSubmit={submitForm} className="w-full mt-[60px]">
            {/* Email Input */}
            <div className="inputBox mb-4">
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Password Input */}
            <div className="inputBox mb-4">
              <input
                required
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Signup Link */}
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>
            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm my-2">
                {error}
              </p>
            )}
            {/* Login Button */}
            <button
              type="submit"
              className="btnBlue w-full mt-[20px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
        {/* Right Section */}
        <div className="right w-[55%]">
          <img
            className="h-[100vh] w-full object-cover"
            src={image}
            alt="Side"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
