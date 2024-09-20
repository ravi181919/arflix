import React from "react";
import { Link } from "react-router-dom";
import comingsoon from "/comingsoon.jpg";
const Cards = ({ trending, title }) => {
  return (
    <div className="w-full relative flex flex-wrap gap-4 items-start justify-center bg-zinc-800">
      {trending.map((items, index) => (
        <Link
          to={`/arflix/${items.media_type || title}/details/${items.id}`}
          key={index}
          className="flex flex-wrap w-52 h-auto  py-4 overflow-hidden"
        >
          <div className="w-full min-h-[70%] rounded-sm overflow-hidden">
            {items.poster_path || items.backdrop_path || items.profile_path ? (
              <img
                className="w-full h-full object-cover "
                src={`https://image.tmdb.org/t/p/original/${
                  items.poster_path || items.backdrop_path || items.profile_path
                } `}
                alt=""
              />
            ) : (
              <img
                className="w-full h-full object-cover "
                src={comingsoon}
                alt=""
              />
            )}
          </div>
          <div className="flex flex-col  h-[30%]">
            <div className="flex">
              <h1 className="font-semibold text-red-500 text-xs py-2 whitespace-nowrap">
                {items.title ||
                  items.name ||
                  items.original_title ||
                  items.original_name}
              </h1>
              <h1 className="text-sm ml-[2px] font-medium mt-[5px] leading-none text-zinc-400">
                {items.adult ? `13+` : `18+`}
              </h1>
            </div>
            {items.overview && (
              <p className="text-zinc-300 w-full text-xs font-medium leading-[1.1]">
                {items.overview.slice(0, 37)}
                <span className=" opacity-75 ml-1">...more</span>
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
