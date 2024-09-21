import React from "react";
import { BiSolidTv } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { PiShootingStarFill } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FiTv } from "react-icons/fi";
import {  RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";


const Sidebar = () => {
  const { isAuthenticated, logout, user,  loginWithRedirect} =
    useAuth0();

  return (
    <div className="w-full h-full ">
      <div className="p-8 h-full w-full">
        <Link to={`/`}>
          <h1 className="flex text-lg font-bold items-center gap-2">
            <BiSolidTv className="text-red-600" />
            <span>ARFLIX</span>
          </h1>
        </Link>

        <hr className="border-none h-[1px] bg-red-600 w-full " />

        <nav className="flex flex-col gap-3 mt-6 ">
          <Link
            to={"/trending"}
            className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md"
          >
            <FaFire /> Trending
          </Link>
          <Link
            to={"/popular"}
            className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md"
          >
            <PiShootingStarFill /> Popular
          </Link>
          <Link
            to={"/movie"}
            className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md"
          >
            <BiSolidCameraMovie /> Movies
          </Link>
          <Link
            to={"/tvshow"}
            className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md"
          >
            <FiTv /> Tv Show
          </Link>
          <Link
            to={"/person"}
            className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md"
          >
            <RiTeamFill /> Stars
          </Link>
        </nav>

        <hr className="border-none h-[1.5px] bg-red-700 w-full mt-5" />

        <nav className="flex flex-col mt-5">
          <h1 className="text-lg font-bold leading-none mb-5">
            OTT Information
          </h1>
          <div className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium  text-zinc-400 p-4 rounded-md">
            {isAuthenticated && (
              <>
                <div className="h-5 w-5  flex items-center justify-center rounded-full overflow-hidden bg bg-zinc-500">
                  {user ? (
                    <img src={user.picture} className="h-full w-full object-cover" />
                  ) : (
                    <FaUser className="text-xs object-cover" />
                  )}
                </div>
                <h1 className="text-sm leading-none font-medium">{user.name}</h1>
              </> 
            )}
          </div> 
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin} })
              }
              className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md"
            >
              <LuLogOut /> <h1>Log Out</h1>
            </button>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="flex items-center gap-2 duration-300 text-sm leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md"
            >
              <LuLogIn /> <h1>Log in</h1>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
