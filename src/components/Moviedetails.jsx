import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncLoadMovie, removemovie } from "../store/actions/movieAction";
import Topnav from "./templates/Topnav";
import { BiSolidTv } from "react-icons/bi";
import { CgArrowLongLeftC } from "react-icons/cg";
import { FaStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { ImArrowUpRight2 } from "react-icons/im";
import Trending from "./templates/Trending";
import Loading from "./Loading";

const Moviedetails = () => {
  const [currentSection, setCurrentSection] = useState("overview");
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  // Function to render content based on the current section
  const renderContent = () => {
    switch (currentSection) {
      case "overview":
        return <p>This is the Overview content.</p>;
      case "details":
        return <p>This is the Details content.</p>;
      case "tailors":
        return <p>This is the Tailors content.</p>;
      case "likes":
        return <p>This is the Likes content.</p>;
      default:
        return <p>Please select a section.</p>;
    }
  };

  document.title = `| arflix | moviedetails`;

  return info ? (
    <div
      className="w-full h-screen overflow-hidden relative text-zinc-300"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5), rgba(0,0,0,.7)), url(${`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path} `})`,
        backgroundPosition: "50% 10%",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-sm"></div>

      {/** part 1. navigation part */}
      <div className="w-full flex items-center relative top-0 left-0 px-5 ">
        <div className="flex items-center justify-center gap-2">
          <span
            className="mt-[2px]  text-red-600 hover:text-zinc-500 text-2xl duration-300"
            onClick={() => navigate(-1)}
          >
            <CgArrowLongLeftC />
          </span>
          <h1 className="flex text-lg font-bold items-center gap-2">
            <BiSolidTv className="text-red-600" />
            <span>ARFLIX</span>
          </h1>
        </div>
        <Topnav />
        <div className="flex items-center justify-between gap-5">
          <Link
            to={`https://www.imdb.com/title/${info.detail.imdb_id}`}
            className="flex gap-[1px] items-center"
          >
            <h1 className=" text-xs font-medium text-yellow-500">Imdb</h1>
            <span className="text-red-600 ml-1 font-extrabold">
              <ImArrowUpRight2 size={10} />
            </span>
          </Link>
          <Link
            to={info.detail.homepage}
            className="flex gap-[1px] items-center"
          >
            <h1 className=" text-xs font-medium text-yellow-500">Home</h1>
            <span className="text-red-600 ml-1 font-extrabold">
              <ImArrowUpRight2 size={10} />
            </span>
          </Link>
        </div>
      </div>

      {/** part 2. show movie details */}
      <div className="w-full h-[90%] relative px-12 flex gap-10 items-center">
        {/** part 1. showing image of movie banner or poster */}
        <div className="w-[35%] h-full flex items-center py-2">
          <div className="w-full h-full  relative overflow-hidden rounded-md">
            <div
              style={{
                background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3), rgba(0,0,0,.4))`,
                backgroundPosition: "50% 10%",
                backgroundSize: "cover",
              }}
              className="h-full w-full absolute top-0 left-0 z-[5]"
            >
              <Link
                to={`${pathname}/trailer`}
                className="w-full h-full absolute  flex items-center p-5  justify-center"
              >
                <div className="flex gap-1 items-center px-4 py-2 rounded-md bg-white/80  w-fit">
                  <FaPlay className="text-red-500" />
                  <h2 className="text-xs font-bold text-black">Play Trailer</h2>
                </div>
              </Link>
            </div>
            <img
              className="w-full h-full object-cover rounded-md saturate-150"
              src={`https://image.tmdb.org/t/p/original/${
                info.detail.poster_path || info.detail.backdrop_path
              } `}
              alt=""
            />
          </div>
        </div>

        {/** part 2. showing all details of movies */}
        <div className="w-[65%] flex items-start h-full flex-col">
          <div className="flex w-full justify-between">
            <h1 className="font-semibold text-zinc-200 text-4xl leading-none py-2 whitespace-nowrap">
              {info.detail.title ||
                info.detail.name ||
                info.detail.original_title ||
                info.detail.original_name}
            </h1>
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-zinc-200 text-2xl leading-none py-2 whitespace-nowrap">
                {Math.round(info.detail.vote_average * 10) / 10}
              </h1>
              <span
                className={`text-2xl ${
                  Math.round(info.detail.vote_average * 10) / 10 >= 5
                    ? "text-yellow-400"
                    : "text-red-600"
                }`}
              >
                <FaStar />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-1 mt-1">
            <h3 className="text-xs font-medium leading-none border-r-[0.19vw] border-yellow-400 pr-2 text-yellow-400">
              {info.detail.release_date}
            </h3>
            <h3 className="text-xs font-medium leading-none border-r-[0.13vw] border-yellow-400 pr-2 text-yellow-400">
              {info.detail.runtime} <span className="text-red-400">min</span>
            </h3>
            <h3 className="text-xs font-medium leading-none  text-yellow-400">
              {info.detail.adult === false ? (
                <span>
                  16<sup>+</sup>
                </span>
              ) : (
                <span>
                  18<sup>+</sup>
                </span>
              )}
            </h3>
            <div className="flex flex-row gap-2 border-l-2 border-yellow-500 px-2">
              {info.detail.genres.map((el) => {
                return (
                  <h2
                    key={el.id}
                    className="text-xs font-medium leading-none text-yellow-500"
                  >
                    {el.name},
                  </h2>
                );
              })}
            </div>
          </div>

          {/** part 3. showing overview  */}
          <div className="flex justify-between w-full mt-1 flex-col ">
            <h1 className="font-medium w-fit text-xl py-1 px-2 border-b-2 border-red-500">
              {" "}
              Overview
            </h1>
            <div className=" mt-2 w-full px-10">
              <p className="text-xs leading-4 font-medium w-[80%]">
                {info.detail.overview}
              </p>
            </div>
          </div>

          {/** part 4. Available no */}
          <div className=" w-full  ">
            <h1 className="font-medium w-fit text-xl py-1 px-2 border-b-2 border-red-500">
              {" "}
              Available
            </h1>
            {info.watchproviders ? (
              <div className=" w-full flex items-center justify-center px-6">
                {info.watchproviders &&
                  info.watchproviders.flatrate &&
                  info.watchproviders.flatrate.map((w, i) => (
                    <div
                      key={i}
                      className="w-full flex gap-1 items-center flex-col justify-center mt-4"
                    >
                      <img
                        className="w-10 rounded-full"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path} `}
                      />
                      <h2 className="text-xs font-medium whitespace-nowrap w-fit text-zinc-200">
                        On Platforms
                      </h2>
                    </div>
                  ))}
                {info.watchproviders &&
                  info.watchproviders.buy &&
                  info.watchproviders.buy.map((w, i) => (
                    <div
                      key={i}
                      className="w-full flex gap-1 items-center flex-col justify-center mt-4 "
                    >
                      <img
                        className="w-10 rounded-full"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path} `}
                      />
                      <h2 className="text-xs whitespace-nowrap font-medium text-yellow-500">
                        To Buy
                      </h2>
                    </div>
                  ))}
                {info.watchproviders &&
                  info.watchproviders.rent &&
                  info.watchproviders.rent.map((w, i) => (
                    <div
                      key={i}
                      className="w-full flex gap-1 items-center flex-col justify-center mt-4"
                    >
                      <img
                        className="w-10 rounded-full"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path} `}
                      />
                      <h2 className="text-xs whitespace-nowrap font-bold text-red-500">
                        On Rent
                      </h2>
                    </div>
                  ))}
              </div>
            ) : (
              <h1 className="font-medium text-md text-red-500 py-1 px-2 text-center w-full ">
                {" "}
                Providers Not Available
              </h1>
            )}
          </div>

          {/** part 5. Related recommendation  */}
          <h1 className="font-medium w-fit text-xl py-1 px-2 border-b-2 border-red-500">
            {" "}
            Recommendations
          </h1>
          <div className="w-full max-h-60  flex  gap-4  overflow-x-scroll overflow-y-hidden py-4 mb-2 mt-1 outline-none">
            {info.recommendations.length > 0
              ? info.recommendations.map((data, index) => (
                  <Link
                    key={index}
                    to={`/${data.media_type}/details/${data.id}`}
                  >
                    <Trending trend={data} />
                  </Link>
                ))
              : info.similar.map((data, index) => (
                  <Link
                    key={index}
                    to={`/${data.media_type}/details/${data.id}`}
                  >
                    <Trending trend={data} />
                  </Link>
                ))}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
