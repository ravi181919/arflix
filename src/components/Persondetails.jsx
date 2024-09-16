import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncLoadperson, removeperson } from "../store/actions/personAction";
import Topnav from "./templates/Topnav";
import { BiSolidTv } from "react-icons/bi";
import { CgArrowLongLeftC } from "react-icons/cg";
import { FaStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { ImArrowUpRight2 } from "react-icons/im";
import Trending from "./templates/Trending";
import Loading from "./Loading";

const Persondetails = () => {
  const [currentSection, setCurrentSection] = useState("overview");
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(asyncLoadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  console.log(info);
  
  document.title = `| arflix | persondetails`;
  return info ?  (
    <div>
      Persondetail
    </div>
  ) : <Loading />
}

export default Persondetails
