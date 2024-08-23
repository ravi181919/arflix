import React, { useEffect, useState } from "react";
import Topnav from "./templates/Topnav";
import { CgArrowLongLeftC } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Trendingnow = () => {
  
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  document.title = `| ARFLIX | Trending  |  ${category} |`.toLocaleUpperCase();
  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${pageCount}`
      );
      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPageCount(pageCount + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setPageCount(1);
      setTrending([]);
      getTrending();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category, duration]);
  return trending.length > 0 ? (
    <div className="flex flex-col gap-4  h-screen pb-5">
      <div className="flex w-full items-center px-5 justify-between ">
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
        <div className="w-fit rounded-md py-2 px-2 bg-red-500 text-white mr-2">
          <h3 className=" text-sm font-medium  whitespace-nowrap">
            Page <span className="text-xs">{pageCount}</span>
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Dropdown
            title="Category"
            option={["movie", "tv", "all"]}
            trendingFunc={(e) => setCategory(e.target.value)}
          />
          <Dropdown
            title="Duration"
            option={["day", "week"]}
            trendingFunc={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        loader={<h1>Loading....</h1>}
        next={getTrending}
        hasMore={hasMore}
      >
        <Cards trending={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <h1>Loding.....</h1>
  );
};

export default Trendingnow;
