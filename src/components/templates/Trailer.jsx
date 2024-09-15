import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import { BiSolidTv } from "react-icons/bi";
import { CgArrowLongLeftC } from "react-icons/cg";
import { ImArrowUpRight2 } from "react-icons/im";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const palyTrailer = useSelector((state) => state[category].info.videos);
  return (
    <div className="absolute z-10 top-0 left-0 h-screen flex flex-col items-center justify-center w-screen bg-black/90">
      <div className="w-full  flex items-center relative top-0 left-0 px-5 ">
        <div className="flex items-center justify-center gap-2">
          <span
            className="mt-[2px]  text-red-600 hover:text-zinc-500 text-2xl duration-300"
            onClick={() => navigate(-1)}
          >
            <CgArrowLongLeftC />
          </span>
          <Link to={`/`}>
            <h1 className="flex text-lg font-bold items-center gap-2">
              <BiSolidTv className="text-red-600" />
              <span>ARFLIX</span>
            </h1>
          </Link>
        </div>
        <Topnav />
      </div>
      {palyTrailer ? (
        <div className="">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${palyTrailer.key}`}
            height={520}
            width={1024}
            controls
          />
        </div>
      ) : (
        <div className="w-full h-[85vh] flex flex-col items-center justify-center">
          <h1 className="font-bold leading-none tracking-wider text-6xl text-center text-red-500">
            404
          </h1>
          <p className="text-md mt-3 text-zinc-200">
            Sorry, trailer is not available !
          </p>
        </div>
      )}
    </div>
  );
};

export default Trailer;
