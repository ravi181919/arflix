import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncLoadperson, removeperson } from "../store/actions/personAction";
import Topnav from "./templates/Topnav";
import { BiSolidTv } from "react-icons/bi";
import { CgArrowLongLeftC } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Trending from "./templates/Trending";
import { LiaImdb } from "react-icons/lia";
import Loading from "./Loading";
import Dropdown from "./templates/Dropdown";
import { LuLogIn } from "react-icons/lu";
import nopicture from "/nopicture.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const Persondetails = () => {
  const [category, setCategory] = useState("movie");
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    dispatch(asyncLoadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id, category]);

  document.title = `| arflix | persondetails`;

  return isAuthenticated ? (
    info ? (
      <div
        className="w-full h-screen  overflow-y-scroll relative text-zinc-300"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5), rgba(0,0,0,.7))`,
          backgroundPosition: "50% 10%",
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
            <Link to={`/`}>
              <h1 className="flex text-lg font-bold items-center gap-2">
                <BiSolidTv className="text-red-600" />
                <span>ARFLIX</span>
              </h1>
            </Link>
          </div>
          <Topnav />
          <div className="flex items-center justify-between gap-5">
            {info.externalId.facebook && (
              <Link
                to={`https://www.facebook.com/${info.externalId.facebook}`}
                className="flex gap-[1px] items-center"
              >
                <h1 className=" text-xs font-medium text-yellow-500">
                  Facebook
                </h1>
                <span className="text-red-600 ml-1 mt-[2px] font-extrabold">
                  <FaFacebookSquare size={15} />
                </span>
              </Link>
            )}

            {info.externalId.instagram_id && (
              <Link
                to={`https://www.instagram.com/${info.externalId.instagram_id}`}
                className="flex gap-[1px] items-center"
              >
                <h1 className=" text-xs font-medium text-yellow-500">
                  Instagram
                </h1>
                <span className="text-red-600 ml-1 mt-[2px] font-extrabold">
                  <FaInstagram size={15} />
                </span>
              </Link>
            )}

            {info.externalId.twitter_id && (
              <Link
                to={`https://www.twitter.com/${info.externalId.twitter_id}`}
                className="flex gap-[1px] items-center"
              >
                <h1 className=" text-xs font-medium text-yellow-500">
                  Twitter
                </h1>
                <span className="text-red-600 ml-1 mt-[2px] font-extrabold">
                  <BsTwitterX size={15} />
                </span>
              </Link>
            )}

            {info.externalId.imdb_id && (
              <Link
                to={`https://www.imdb.com/name/${info.externalId.imdb_id}`}
                className="flex gap-[1px] items-center"
              >
                <h1 className=" text-xs font-medium text-yellow-500">Imdb</h1>
                <span className="text-red-600  ml-1 mt-[2px] font-extrabold">
                  <LiaImdb size={20} />
                </span>
              </Link>
            )}
          </div>
        </div>

        {/** part 2. profile picture */}
        <div className="w-full h-[90%] relative px-12 flex gap-10 items-center">
          <div className="w-[30%] h-full flex items-center bg-white rounded-md overflow-hidden">
            <div className="w-full h-full relative overflow-hidden ">
              <div
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3), rgba(0,0,0,.4))`,
                  backgroundPosition: "50% 10%",
                  backgroundSize: "cover",
                }}
                className="h-full w-full absolute top-0 left-0 z-[5]"
              ></div>
              {info.detail.profile_path ? (
                <img
                  className="w-fit h-full object-cover brightness-110 saturate-150 contrast-100"
                  src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path} `}
                  alt=""
                />
              ) : (
                <img
                  className="w-fit h-full object-cover brightness-110 saturate-150 contrast-100"
                  src={nopicture}
                  alt=""
                />
              )}
            </div>
          </div>

          {/** part 3. Name and popularity */}
          <div className="w-[65%] flex items-start h-full flex-col">
            <div className="flex w-full justify-between">
              <div className="flex items-end gap-1">
                <h1 className="font-black tracking-wide text-zinc-300 text-4xl leading-none  whitespace-nowrap">
                  {info.detail.title ||
                    info.detail.name ||
                    info.detail.original_title ||
                    info.detail.original_name}
                </h1>
                <h2 className="text-xs font-medium">{`(${info.detail.known_for_department})`}</h2>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="font-semibold text-zinc-200 text-2xl leading-none py-2 whitespace-nowrap">
                  {Math.round(info.detail.popularity * 10) / 10}
                </h1>

                <span
                  className={`text-2xl ${
                    Math.round(info.detail.popularity * 10) / 10 >= 50
                      ? "text-yellow-400"
                      : "text-red-600"
                  }`}
                >
                  {Math.round(info.detail.popularity * 10) / 10 >= 50 ? (
                    <span className="font-medium text-xs">{`( Most Popular )`}</span>
                  ) : (
                    <span className="font-medium text-xs">{`( Popular )`}</span>
                  )}
                </span>
              </div>
            </div>

            <h1 className="font-medium text-yellow-500 text-xs mt-2 leading-none  whitespace-nowrap">
              {info.detail.place_of_birth}
            </h1>

            {/** part 4. overview */}
            <div className="flex justify-between w-full mt-1 flex-col ">
              <h1 className="font-medium w-fit text-xl py-1 px-2 border-b-2 border-red-500">
                {" "}
                Overview
              </h1>
              <div className=" mt-2 w-full px-10">
                <p className="text-xs leading-4 font-medium w-[95%]">
                  {info.detail.biography}
                </p>
              </div>

              {/** part 5. Nickname */}
              <h1 className="font-medium w-fit mt-2 text-xl py-1 px-2 border-b-2 border-red-500">
                {" "}
                Nicknames
              </h1>
              <div className=" mt-2 w-full px-10">
                <p className="text-xs leading-4 font-medium text-yellow-500 w-[95%]">
                  {info.detail.also_known_as.join(", ")}
                </p>
              </div>

              {/** part 6. acting  */}
              <div className="flex w-full items-center justify-between">
                <div className="">
                  <h1 className="font-medium w-fit mt-2 text-xl py-1 px-2 border-b-2 border-red-500">
                    Acting In
                  </h1>
                </div>
                <div className="">
                  <Dropdown
                    title={"category"}
                    trendingFunc={(e) => setCategory(e.target.value)}
                    option={["tv", "movie"]}
                  />
                </div>
              </div>
              <div className="w-full h-44 flex  gap-4 py-5 overflow-x-scroll  px-5 outline-none">
                {info[`${category + "Credits"}`].cast.map(
                  (trending, indexTrending) => (
                    <Link
                      key={indexTrending}
                      to={`/${category}/details/${trending.id}`}
                    >
                      <Trending trend={trending} />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-12">
          <h1 className="font-medium w-fit mt-2 text-xl py-1 px-2 border-b-2 border-red-500">
            Known For
          </h1>
          <div className="w-full h-auto overflow-x-scroll flex gap-10 py-5 px-10 outline-none">
            {info.combinedCredits.cast.map((trending, index) => (
              <div key={index} className="min-w-52 h-44">
                <Link to={`/${trending.media_type}/details/${trending.id}`}>
                  <Trending trend={trending} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    ) : (
      <Loading />
    )
  ) : (
    <div className="bg-zinc-800 h-screen w-full flex items-center justify-center">
      <button
        onClick={() => loginWithRedirect()}
        className="flex items-center gap-2 duration-300 text-xl leading-none  font-medium hover:bg-red-600 hover:text-white text-zinc-400 p-4 rounded-md"
      >
        <LuLogIn /> <h1>Login</h1>
      </button>
    </div>
  );
};

export default Persondetails;
