import React from "react";
import comingsoon from '/comingsoon.jpg'
const Trending = ({ trend }) => {
  
  return (
    
    <div className="min-w-56 rounded-md h-full overflow-hidden flex flex-col relative">
      <div className="absolute h-full w-full bg-gradient-to-b from-[rgba(0,0,0,.01)] to-[rgba(0,0,0,1)]"></div>
      {trend ? <>
        <div
       className="w-full ">
        {trend.poster_path || trend.backdrop_path ?  <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${trend.poster_path || trend.backdrop_path} `}
          alt=""
        /> :  <img
        className="w-full h-full object-cover"
        src={comingsoon}
        alt=""
      /> }
       
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
          {trend.overview && trend.overview.slice(0, 79)}
          <span className="text-red-500 opacity-95 ml-1">...more</span>
        </p>
      </div>
      </>: <>
      <h1 className="text-red-500 font-bold text-2xl text-center">Sorry, recommendations is not available !</h1>
      </>}
     
    </div>
  );
  
};

export default Trending;
