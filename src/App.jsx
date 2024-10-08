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
import NotFound from "./components/templates/Notfound";

const App = () => {
  return (
    <div className="h-screen w-full bg-zinc-800 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arflix" element={<Home />} />
        <Route path="/trending" element={<Trendingnow />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tvshow" element={<Tvshow />} />
        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/person" element={<Person />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
