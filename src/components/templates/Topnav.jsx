import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const Topnav = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  return (
    <div className="max-w-screen-sm mx-auto my-2 overflow-hidden gap-1 flex flex-col relative">
      <div className=" flex items-center justify-start  bg-zinc-500 w-full h-12 rounded-md ">
        <IoSearch className="text-2xl ml-5 text-red-600 cursor-pointer"/>
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
            className=" text-[2vw] mr-5 text-red-600 cursor-pointer"
          />
        )}
      </div>
      <div className="max-h-80 w-full rounded-md overflow-auto bg-zinc-500 flex flex-col">
        <Link className="flex gap-3 duration-200  items-center justify-start p-5 hover:bg-red-600 w-full">
          <img src="#" alt="" />
          <span className="text-sm tracking-wide font-medium">hello</span>
        </Link>

        <Link className="flex gap-3 duration-200  items-center justify-start p-5 hover:bg-red-600 w-full">
          <img src="#" alt="" />
          <span className="text-sm tracking-wide font-medium">hello</span>
        </Link>

        <Link className="flex gap-3 duration-200  items-center justify-start p-5 hover:bg-red-600 w-full">
          <img src="#" alt="" />
          <span className="text-sm tracking-wide font-medium">hello</span>
        </Link>
      </div>
    </div>
  );
};

export default Topnav;
