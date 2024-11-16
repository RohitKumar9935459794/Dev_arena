import React from "react";
import codeImg from "../images/code.png"
import deleteImg from "../images/delete.png"

const GridCard = () => {
    return(
        <>
        <div className="gridCrad bg-[#1a0505] w-[270px] h-[180px] p-[10px] crusor-pionter hover:bg-[#202020] rounded-lg swadow-lg shadow-black/50">
        <img className="w-[80px]" src={codeImg} alt=""/>
        <h3 className="text-[20px] w-[90%] line-clamp-1"> my first project</h3>
        <p className="text-[14px] text-[gray]">created in 9 mon 2023</p>
        <img className="w-[20px] cursor-pointer "src={deleteImg} alt=""/>
        </div>
        </>
    )
}

export default GridCard