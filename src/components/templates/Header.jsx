import React, { useState } from "react";
import { Link } from "react-router-dom";
import ISO6391 from "iso-639-1";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
const Header = ({ banner }) => {
  const [addToPlaylist, setAddToPlaylist] = useState(false);
  function getLanguageName(code) {
    return ISO6391.getName(code) || "Unknown Language";
  }
  const movieLanguage = getLanguageName(banner.original_language);

  return (
    <div className=" w-full">
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,.7)), url(${`https://image.tmdb.org/t/p/original/${banner.backdrop_path} `})`,
          backgroundPosition: "50% 10%",
          backgroundSize: "cover",
        }}
        className="h-[60vh] max-w-screen-lg xl:max-w-full rounded-sm mx-auto "
      >
        <div className="h-full w-[60%] text-zinc-200 p-10  flex items-start justify-end flex-col">
          <div className="flex gap-1">
            <h1 className="font-semibold text-4xl py-2">
              {banner.title ||
                banner.name ||
                banner.original_title ||
                banner.original_name}
            </h1>
            <h1 className="text-md font-medium mt-2 leading-none text-red-500">
              {banner.adult === false ? `13+` : `18+`}
            </h1>
          </div>
          <p className="text-zinc-300 w-[70%] text-xs font-medium leading-[1.1]">
            {banner.overview.slice(0, 179)}
            <Link
              to={`${banner.media_type}/details/${banner.id}`}
              className="text-red-500 opacity-95 ml-1"
            >
              ...more
            </Link>
          </p>
          <div className="flex gap-1 items-center justify-center mt-4">
            <h2 className="font-medium text-xs text-yellow-500">
              {banner.first_air_date || "comming soon"} |
            </h2>
            <h2 className="font-medium text-xs text-yellow-500">
              {banner.media_type} |
            </h2>
            <h2 className="font-medium text-xs text-yellow-500">
              {movieLanguage}
            </h2>
          </div>
          <div className="flex gap-6 mt-4">
            <Link
              to={`/${banner.media_type}/details/${banner.id}/trailer`}
              className="bg-red-600 hover:saturate-150 text-white rounded-md py-2 px-5 font-medium"
            >
              Play Tailor
            </Link>
            <button
              onClick={() => setAddToPlaylist((prev) => !prev)}
              className="font-medium flex gap-1 items-center justify-center rounded-md border-none py-2 px-4"
            >
              {addToPlaylist === false ? (
                <MdOutlineAddCircle className="mt-[2px] text-red-500 font-extrabold" />
              ) : (
                <FaCircleCheck className="text-yellow-500 mt-[2px] " />
              )}
              {addToPlaylist === false ? (
                <span>Add to playlist</span>
              ) : (
                <span>Added</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
