import React from "react";
import { Navbar, Hero, Stats, Cta, Testimonials, Footer } from "../components";
import { getRandomElement } from "../utils/index";
import { useState, useEffect } from "react";
import axios from "axios";
import { recipes } from "../components/recipes";
const Home = () => {
  useEffect(() => {
    console.log(recipes);
  }, []);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Hero {...getRandomElement(recipes)} />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start px-6 sm:px-16">
        <div className="xl:max-w-[1280px] w-full">
          <Stats />
          <Cta />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
