import React, { useEffect, useState } from "react";
import Sidebar from "./templates/Sidebar";
import Topnav from "./templates/Topnav";
import Header from "./templates/Header";
import axios from "../utils/axios";
import Trending from "./templates/Trending";
import Dropdown from "./templates/Dropdown";

const Home = () => {
  const [banner, setBanner] = useState(null);
  const [allTrending, setAllTrending] = useState(null);
  const [trendingOption, setTrendingOption] = useState("all");

  const bannerData = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomBannerData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setBanner(randomBannerData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const trending = async () => {
    try {
      const { data } = await axios.get(`/trending/${trendingOption}/day`);
      setAllTrending(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    trending();
    !banner && bannerData();
  }, [trendingOption]);

  return banner && allTrending ? (
    <div className="w-full h-full flex ">
      <div className="lg:w-[20%] md:w-[30%]  md:block hidden h-full">
        <Sidebar />
      </div>
      <div className="lg:w-[80%] overflow-scroll overflow-x-hidden  md:w-[70%] flex flex-col border-l-[1px] border-zinc-500">
        <Topnav />
        <div className="relative">
          <Header banner={banner} />
        </div>
        <div className="relative">
          <div className="w-full mt-5 px-10 overflow-scroll overflow-x-hidden flex justify-between">
            <h1 className="text-2xl font-medium text-red-500">Trending</h1>
            <Dropdown
              title="Filter"
              option={["tv", "movie", "all"]}
              trendingFunc={(e) => setTrendingOption(e.target.value)}
            />
          </div>
          <div className="w-full  flex  gap-4  overflow-x-scroll py-4 mb-5 px-5 ">
            {allTrending.map((trending, indexTrending) => (
              <Trending key={indexTrending} trend={trending} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
