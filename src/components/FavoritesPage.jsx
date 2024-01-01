import React, { useState, useEffect } from "react";
import { getFavoritesFromStorage, removeFromFavorites } from "./favoritesUtils";
import FavCard from "./FavCard";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(getFavoritesFromStorage());

  useEffect(() => {
    setFavorites(getFavoritesFromStorage());
  }, [favorites]);

  const handleRemoveFromFavorites = (recipeName) => {
    removeFromFavorites(recipeName);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.name !== recipeName)
    );
  };

  return (
    <div className="text-white">
      <section>
        {favorites.length === 0 ? (
          <h2 className="text-center h-[500px] mt-3 text-3xl font-poppins">
            No favorites yet
          </h2>
        ) : (
          <div className="mt-24">
            <h2 className="text-center text-4xl font-poppins font-semibold mb-10">
              My favorites
            </h2>

            <div className="grid gap-4 grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-4">
              {favorites.map((recipe, index) => (
                <FavCard
                  key={index}
                  name={recipe.name}
                  countryFlag={recipe.countryFlag}
                  description={recipe.description}
                  serves={recipe.serves}
                  category={recipe.Category}
                  handleRemoveFromFavorites={() =>
                    handleRemoveFromFavorites(recipe.name)
                  }
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default FavoritesPage;
