import React from "react";
import { Navbar, Footer, RecipePage } from "../components";

const Recipes = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start px-6 sm:px-16">
        <div className="absolute w-[60%] h-[60%] z-[0] -right-[50%] blue__gradient rounded-full" />
        <div className="absolute w-[60%] h-[60%] z-[0] -left-[50%] top-[80%] blue__gradient rounded-full" />
        <div className="xl:max-w-[1280px] w-full">
          <RecipePage />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
