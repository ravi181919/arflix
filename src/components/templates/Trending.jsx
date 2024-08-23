import React from "react";

const Trending = ({ trend }) => {
  return (
    <div className="min-w-56 rounded-md overflow-hidden flex flex-col relative">
      <div className="absolute h-full w-full bg-gradient-to-b from-[rgba(0,0,0,.01)] to-[rgba(0,0,0,1)]"></div>
      <div
       className="w-full ">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${trend.poster_path || trend.backdrop_path} `}
          alt=""
        />
      </div>
      <div className="flex flex-col py-2 px-2 w-full  absolute justify-end h-full mb-2">
        <div className="flex">
          <h1 className="font-semibold text-xs py-2 whitespace-nowrap">
            {trend.title ||
              trend.name ||
              trend.original_title ||
              trend.original_name}
          </h1>
          <h1 className="text-md ml-[2px] font-medium mt-1 leading-none text-red-500">
            {trend.adult === false ? `13+` : `18+`}
          </h1>
        </div>
        <p className="text-zinc-300 w-full text-xs font-medium leading-[1.1]">
          {trend.overview.slice(0, 79)}
          <span className="text-red-500 opacity-95 ml-1">...more</span>
        </p>
      </div>
    </div>
  );
};

export default Trending;
