import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import comingsoon from "/comingsoon.jpg";
const Topnav = () => {
  const [searchText, setSearchText] = useState("");
  const [apiData, setApiData] = useState([]);
  const tmdbApiCall = async () => {
    try {
      const apiResponse = await axios.get(`/search/multi?query=${searchText}`);
      setApiData(apiResponse.data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    tmdbApiCall();
  }, [searchText]);
  return (
    <div className="w-full relative ">
      <div className=" max-w-screen-sm mx-auto my-1 px-2 md:px-0 overflow-hidden gap-2 flex flex-col items-center">
        <div className=" flex items-center justify-start   w-full h-12 rounded-md ">
          <IoSearch className="text-2xl ml-5 text-red-600 cursor-pointer" />
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            value={searchText}
            placeholder="Search..."
            className="bg-transparent outline-none  border-none px-5 w-full h-full mx-6"
          />
          {searchText.length > 0 && (
            <RxCross2
              onClick={() => setSearchText("")}
              className=" mr-5 bg-red-600 rounded-full w-[2.3vw] h-[2vw] p-1 cursor-pointer"
            />
          )}
        </div>
        <div className=" max-h-80 min-w-[45vw] rounded-sm overflow-auto absolute z-[1] top-full mt-1  bg-white/30 backdrop-blur-lg flex flex-col">
          {apiData.map((data, dataIndex) => (
            <Link
              key={dataIndex}
              className="flex gap-3 duration-200  items-center justify-start px-5 py-2 hover:rounded hover:bg-red-600 w-full"
            >
              <img
                className="w-28 h-16 object-fit rounded-sm shadow-sm shadow-black"
                src={
                  data.backdrop_path || data.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        data.backdrop_path || data.profile_path
                      } `
                    : comingsoon
                }
              />
              <span className="text-sm tracking-wide font-medium">
                {data.title ||
                  data.name ||
                  data.original_title ||
                  data.original_name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topnav;
