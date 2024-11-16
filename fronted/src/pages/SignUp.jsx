import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import logo from "../images/logo.png";
import image from "../images/authPageSide.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(""); // Define error state

  const submitForm = (e) => {
    e.preventDefault();
    // Example validation logic
    if (!username || !name || !email || !pwd) {
      setError("All fields are required!");
    } else {
      setError("");
      // Handle form submission
      console.log("Form submitted:", { username, name, email, pwd });
    }
  };

  return (
    <>
      <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        {/* Left Section */}
        <div className="left w-[35%]">
          <img className="w-[200px]" src={logo} alt="Logo" />
          <form onSubmit={submitForm} className="w-full mt-[60px]">
            {/* Username Input */}
            <div className="inputBox mb-4">
              <input
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Username"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Name Input */}
            <div className="inputBox mb-4">
              <input
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
            {/* Login Link */}
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm my-2">
                {error}
              </p>
            )}
            {/* Sign Up Button */}
            <button
              type="submit"
              className="btnBlue w-full mt-[20px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign Up
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

export default SignUp;
