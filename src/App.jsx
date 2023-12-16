import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Navbar, Hero } from "./components";
import { getRandomElement } from "./utils/index";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/all")
      .then((response) => {
        setRecipes(response.data);
      })
      .then(() => console.log(recipes));
  }, []);

  return (
    <div>
      <Navbar />
      <Hero {...getRandomElement(recipes)} />
    </div>
  );
};

export default App;
