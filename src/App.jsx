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

const App = () => {
  return (
    <div className="h-screen w-full bg-zinc-800 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trendingnow />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} />
        <Route path="/tvshow" element={<Tvshow />} />
        <Route path="/tvshow/details/:id" element={<Tvdetails />} />
        <Route path="/person" element={<Person />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
      </Routes>
    </div>
  );
};

export default App;
