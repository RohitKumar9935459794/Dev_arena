import React, { useState } from "react";
import NavBar from "../comppanents/NavBar";
import ListCard from "../comppanents/ListCard";
import GridCard from "../comppanents/GridCard";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Home = () => {
  const [isGridLayout, setIsGridLayout] = useState(true); // State for grid/list layout
  const [isDarkMode, setIsDarkMode] = useState(true); // State for light/dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Apply theme to the root element
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#141417] text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <NavBar />
      <div className="flex items-center justify-between px-[100px] my-[40px]">
        <h2 className="text-2xl">Hi, Creakers 😊👋!</h2>
        <div>
          <div
            className="inputBox flex items-center gap-2 p-3 rounded-lg shadow-md"
            style={{ background: isDarkMode ? "#141414" : "#f5f5f5" }}
          >
            <input
              type="text"
              placeholder="Search here..!"
              className={`flex-1 border rounded-lg p-2 ${
                isDarkMode
                  ? "bg-transparent border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500"
                  : "bg-gray-100 border-gray-300 text-black placeholder-gray-700 focus:ring-blue-500"
              }`}
            />
            <button className="btnBlue bg-blue-600 text-white rounded-lg px-4 py-2 text-[20px] hover:bg-blue-700 transition duration-300">
              +
            </button>
            <button
              onClick={() => setIsGridLayout(!isGridLayout)}
              className={`flex items-center gap-2 text-[20px] px-3 py-2 rounded-lg transition duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              <BsFillGridFill />
              {isGridLayout ? "List Layout" : "Grid Layout"}
            </button>
            <button
              onClick={toggleDarkMode}
              className={`flex items-center gap-2 text-[20px] px-3 py-2 rounded-lg transition duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>

      <div className="cards px-[100px]">
        {isGridLayout ? (
          <div className="grid grid-cols-4 gap-4">
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
          </div>
        ) : (
          <div className="list space-y-4">
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
