import React from "react";


const Trending = ({trend}) => {
  return (
      <div className="min-w-48 h-full rounded-md overflow-hidden   bg-zinc-700">
        <div className="w-full h-32">
          <img
          className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${trend.backdrop_path} `}
            alt=""
          />
        </div>
        <div className="flex flex-col py-2 px-2 ">
         <div className="flex gap-1">
         <h1 className="font-semibold text-xs py-2 whitespace-nowrap">
            {trend.title ||
              trend.name ||
              trend.original_title ||
              trend.original_name}
          </h1>
          <h1 className="text-md font-medium mt-2 leading-none text-red-500">
            {trend.adult === false ? `13+` : `18+`}
          </h1>
         </div>
          <p className="text-zinc-300 w-[70%] text-xs font-medium leading-[1.1]">
            {trend.overview.slice(0, 24)}
            <span className="text-red-500 opacity-95 ml-1">...more</span>
          </p>
        </div>
      </div>
  );
};

export default Trending;
