import React from "react";
import { Navbar, Footer, FavoritesPage } from "../components";
export const Favorites = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start px-6 sm:px-16">
        <div className="xl:max-w-[1280px] w-full">
          <FavoritesPage />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Favorites;
