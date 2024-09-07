import React from 'react'
import { useEffect, useState } from "react";
import Topnav from "./templates/Topnav";
import { CgArrowLongLeftC } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
const Person = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [people, setPeople] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [hasMore, setHasMore] = useState(true);
  
    document.title = `| ARFLIX | person | ${category} |`.toLocaleUpperCase();
  
    const getPeople = async () => {
      try {
        const { data } = await axios.get(`/person/${category}?page=${pageCount}`);
        if (data.results.length > 0) {
          setPeople((prevState) => [...prevState, ...data.results]);
          setPageCount(pageCount + 1);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
    const refreshHandler = () => {
      if (people.length === 0) {
        getPeople();
      } else {
        setPageCount(1);
        setPeople([]);
        getPeople();
      }
    };
    useEffect(() => {
      refreshHandler();
    }, [category]);
    return people.length > 0 ? (
      <div className="flex flex-col gap-4 h-screen pb-5">
        <div className="flex w-full items-center px-5 justify-between ">
          <div className="flex items-center justify-center gap-2">
            <span
              className="mt-[2px]  text-red-500 hover:text-zinc-500 text-2xl duration-200"
              onClick={() => navigate(-1)}
            >
              <CgArrowLongLeftC />
            </span>
            <h1 className="text-lg font-medium text-zinc-400 ">Stars</h1>
          </div>
  
          <Topnav />
          <div className="w-fit rounded-md py-2 px-2 bg-red-500 text-white mr-2">
            <h3 className=" text-sm font-medium  whitespace-nowrap">
              Page <span className="text-xs">{pageCount}</span>
            </h3>
          </div>
        </div>
  
        <InfiniteScroll
          dataLength={people.length}
          loader={<h1>Loading....</h1>}
          next={getPeople}
          hasMore={hasMore}
        >
          <Cards trending={people} title='person' />
        </InfiniteScroll>
      </div>
    ) : (
      <h1>Loding.....</h1>
    );
}

export default Person
