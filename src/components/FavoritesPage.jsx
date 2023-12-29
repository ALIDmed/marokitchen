import React, { useEffect, useState } from "react";
import Country from "./Country";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("react-marokitechen-app-favorites")) ||
      [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <Country
            key={index}
            name={favorite.title}
            category={favorite.category}
            countryFlag={favorite.image}
            description={favorite.description}
            serves={favorite.serves}
            addToFavorites={addToFavorites}
          />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
