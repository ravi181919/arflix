import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {asyncLoadMovie} from '../store/actions/movieAction'
const Moviedetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(asyncLoadMovie(id))
  }, [])
  return <div>Moviedetails</div>;
};

export default Moviedetails;
