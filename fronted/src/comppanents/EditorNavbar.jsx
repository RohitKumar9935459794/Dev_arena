import React from "react";
import logo from "../images/logo.png";
import { FiDownload } from "react-icons/fi";

const EditorNavBar = ({ theme, toggleTheme }) => {
  return (
    <div
      className={`EditorNavBar flex items-center justify-between px-[100px] h-[80px] ${
        theme === "dark" ? "bg-[#1a0505] text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Logo Section */}
      <div className="logo">
        <img className="w-[100px] cursor-pointer" src={logo} alt="Logo" />
      </div>

      {/* File Information */}
      <div>
        <p className="text-[16px]">
          File / <span className={theme === "dark" ? "text-white/50" : "text-black/50"}>my first project</span>
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Download Button */}
        <button
          className={`p-[8px] rounded-[5px] text-[20px] cursor-pointer ${
            theme === "dark"
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-black hover:bg-gray-400"
          } transition duration-300`}
          title="Download"
        >
          <FiDownload />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-[8px] rounded-[5px] text-[14px] cursor-pointer ${
            theme === "dark"
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-black hover:bg-gray-400"
          } transition duration-300`}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default EditorNavBar;
