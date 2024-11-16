import React from "react";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import profile from "../images/profile.png"
import { MdOutlineLightMode } from "react-icons/md";
import { BsFillGridFill } from "react-icons/bs";



const NavBar = () => {
    return (
        <>
        <div className="navBar flex items-center justify-between px-[100px] h-[80px] bg-[#1a0505]">
        <div className="logo">
            <img className="w-[100px] cursor-pointer" src={logo} alt=""/>
        </div>
        <div className="links flex items-center gap-2">
            <links>Home</links>
            <links>About</links>
            <links>Contacts</links>
            <links>Services</links>
            <img className="w-[40px] h-[40px] rounded-full object-cover cursor-pointer" src={profile} alt="Profile" />
        </div>
        </div>
        
        </>
    )
}

export default NavBar