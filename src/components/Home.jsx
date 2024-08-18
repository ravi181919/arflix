import React, { useEffect, useState } from "react";
import Sidebar from "./templates/Sidebar";
import Topnav from "./templates/Topnav";
import Header from "./templates/Header";
import axios from "../utils/axios";

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
    <div className="w-full h-full flex">
      <Sidebar />
      <div className="lg:w-[80%] md:w-[70%] relative">
        <Topnav />
        <Header banner={banner} />
      </div>
    </div>
  ) : <h1>Loading...</h1>
};

export default Home;
