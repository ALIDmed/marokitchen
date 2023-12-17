import React, { useEffect } from "react";
import { Navbar, Hero, Stats, Cta, Testimonials, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

const App = () => {
  return (
    <Router>
      {/* <AppContext.Provider value={{ movieId, setMovieId }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      {/* </AppContext.Provider> */}
    </Router>
  );
};

export default App;
