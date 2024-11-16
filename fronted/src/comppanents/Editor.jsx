import React, { useState } from "react";
import EditorNavBar from "../comppanents/EditorNavbar";
import Editor from "@monaco-editor/react";
import { AiOutlineExpand } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";

const Editior = () => {
  const [theme, setTheme] = useState("dark");
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // Add state for expansion

  const changeTheme = () => {
    if (isLightMode) {
      document.body.classList.remove("lightMode");
      setIsLightMode(false);
    } else {
      document.body.classList.add("lightMode");
      setIsLightMode(true);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      {/* Pass Theme and Toggle Function to EditorNavBar */}
      <EditorNavBar theme={theme} toggleTheme={toggleTheme} />
      {/* Content Area */}
      <div className="flex">
        <div className={`left ${isExpanded ? "w-full" : "w-1/2"}`}>
          <div className="flex items-center gap-2 w-full bg-[#280707] h-[50px] px-[40px]">
            <div className="tab p-[6px] bg-[#1E1E1E] px-[10px]">HTML</div>
            <div className="tab p-[6px] bg-[#1E1E1E] px-[10px]">CSS</div>
            <div className="tab p-[6px] bg-[#1E1E1E] px-[10px]">JavaScript</div>
            <div className="flex items-center gap-2">
              {/* Expand Button */}
              <i
                className="text-[20px] cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <AiOutlineExpand />
              </i>
              {/* Light/Dark Mode Button */}
              <i
                className="text-[20px] cursor-pointer"
                onClick={changeTheme}
              >
                <MdOutlineLightMode />
              </i>
            </div>
          </div>

          {/* Monaco Editor */}
          <Editor
            height="80vh"
            theme={isLightMode ? "vs-light" : "vs-dark"}
            defaultLanguage="javascript"
            defaultValue="// some comment"
          />
        </div>

        {/* Output Area */}
        <iframe
          id="output"
          className={`${
            isExpanded ? "hidden" : "w-1/2"
          } min-h-[100vh] bg-[#fff] text-black`}
        ></iframe>
      </div>
    </div>
  );
};

export default Editior;
