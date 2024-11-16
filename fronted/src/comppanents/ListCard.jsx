import React from "react";
import img from "../images/code.png";
import deleteImg from "../images/delete.png";

const ListCard = () => {
  return (
    <div className="listCard w-full p-5 bg-[#1a0505] cursor-pointer rounded-lg hover:bg-[#202020] shadow-md transition duration-300">
      <div className="flex items-center gap-4">
        {/* Project Thumbnail */}
        <img className="w-[80px] rounded-md" src={img} alt="Project" />

        {/* Project Details */}
        <div className="flex-1">
          <h3 className="text-[20px] text-white font-semibold">My First Project</h3>
          <p className="text-[gray] text-[14px]">Created in 9 Mon 2024</p>
        </div>

        {/* Delete Button */}
        <div>
          <img
            className="w-[30px] cursor-pointer hover:scale-110 transition-transform"
            src={deleteImg}
            alt="Delete"
          />
        </div>
      </div>
    </div>
  );
};

export default ListCard;
