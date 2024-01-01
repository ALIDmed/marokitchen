import { useEffect, createContext } from "react";
import { Navbar, Hero, Stats, Cta, Testimonials, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/Favorites";
import { Toaster } from "sonner";

export const AppContext = createContext();

const App = () => {
  return (
    <Router>
      {/* <AppContext.Provider value={{ movieId, setMovieId }}> */}
      <Toaster expand={true} richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {/* </AppContext.Provider> */}
    </Router>
  );
};

export default App;
