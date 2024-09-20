import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trendingnow from "./components/Trendingnow";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshow from "./components/Tvshow";
import Person from "./components/Person";
import Moviedetails from "./components/Moviedetails";
import Tvdetails from "./components/Tvdetails";
import Persondetails from "./components/Persondetails";
import Trailer from "./components/templates/Trailer";

const App = () => {
  return (
    <div className="h-screen w-full bg-zinc-800 text-white">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/arflix/" element={<Home />} />
        <Route path="/arflix/trending" element={<Trendingnow />} />
        <Route path="/arflix/popular" element={<Popular />} />
        <Route path="/arflix/movie" element={<Movie />} />
        <Route path="/arflix/movie/details/:id" element={<Moviedetails />}>
          <Route path="/arflix/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/arflix/tvshow" element={<Tvshow />} />
        <Route path="/arflix/tv/details/:id" element={<Tvdetails />} >
        <Route path="/arflix/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/arflix/person" element={<Person />} />
        <Route path="/arflix/person/details/:id" element={<Persondetails />} />
      </Routes>
    </div>
  );
};

export default App;
