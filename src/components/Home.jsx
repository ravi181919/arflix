import React, { useEffect, useState } from "react";
import Sidebar from "./templates/Sidebar";
import Topnav from "./templates/Topnav";
import Header from "./templates/Header";
import axios from "../utils/axios";
import Trending from "./templates/Trending";

const Home = () => {
  const [banner, setBanner] = useState(null);
  const bannerData = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      let randomBannerData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setBanner(randomBannerData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    !banner && bannerData();
  }, []);

  return banner ? (
    <div className="w-full h-full flex ">
      <div className="lg:w-[20%] md:w-[30%]  md:block hidden h-full">

      <Sidebar />
      </div>
      <div className="lg:w-[80%] overflow-scroll overflow-x-hidden  md:w-[70%] flex flex-col border-l-[1px] border-zinc-500">
        <div className="relative">
          <Topnav />
        </div>
        <div className="relative">
          <Header banner={banner} />
        </div>
        <div className="relative">
          <Trending />
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
