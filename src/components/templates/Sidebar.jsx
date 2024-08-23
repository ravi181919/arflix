import React from "react";
import { BiSolidTv } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { PiShootingStarFill } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FiTv } from "react-icons/fi";
import { RiInformation2Fill, RiTeamFill } from "react-icons/ri";
import { HiPhone } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-full h-full ">
      <div className="p-8 h-full w-full">
        <h1 className="flex text-lg font-bold items-center gap-2">
          <BiSolidTv className="text-red-600" />
          <span>ARFLIX</span>
        </h1>

        <hr className="border-none h-[1px] bg-red-600 w-full " />

        <nav className="flex flex-col gap-3 mt-6 ">
          <Link to={'/trending'} className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md">
           <FaFire /> Trending
          </Link>
          <Link
          to={'/popular'}
           className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md">
           <PiShootingStarFill /> Popular
          </Link>
          <Link
          to={'/movie'}
           className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md">
           <BiSolidCameraMovie /> Movies
          </Link>
          <Link 
          to={'./tvshow'}
          className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md">
           <FiTv /> Tv Show
          </Link>
          <Link to={'./person'} className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md">
           <RiTeamFill /> Stars
          </Link>
        </nav>

        <hr className="border-none h-[1.5px] bg-red-700 w-full mt-5" />

        <nav className="flex flex-col mt-5">
          <h1 className="text-lg font-bold leading-none mb-5">
            OTT Information
          </h1>
          <Link className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md">
           <HiPhone /> Contact Us
          </Link>
          <Link className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md">
           <RiInformation2Fill /> More Info
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
