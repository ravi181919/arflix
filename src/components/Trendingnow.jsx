import React, { useEffect, useState } from "react";
import Topnav from "./templates/Topnav";
import { CgArrowLongLeftC } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
const Trendingnow = () => {
  const navigate = useNavigate();
  const [Categry, setCategry] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${Categry}/${duration}`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getTrending();
  }, [Categry, duration]);
  return trending ? (
    <div className="flex flex-col gap-4 overflow-hidden overflow-y-auto h-screen pb-5">
      <div className="flex w-full items-center px-5 justify-between">
        <div className="flex items-center justify-center gap-2">
          <span
            className="mt-[2px]  text-red-500 hover:text-zinc-500 text-2xl duration-200"
            onClick={() => navigate(-1)}
          >
            <CgArrowLongLeftC />
          </span>
          <h1 className="text-lg font-medium text-zinc-400 ">Trending</h1>
        </div>
        <Topnav />
        <div className="flex items-center gap-4">
          <Dropdown
            title="Categry"
            option={["movie", "tv", "all"]}
            trendingFunc={(e) => setCategry(e.target.value)}
          />
          <Dropdown
            title="Duration"
            option={["day", "week"]}
            trendingFunc={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <Cards trending={trending} />
    </div>
  ) : (
    <h1>Loding.....</h1>
  );
};

export default Trendingnow;
