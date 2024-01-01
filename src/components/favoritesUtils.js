// favoritesUtils.js
export const getFavoritesFromStorage = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  };
  
  export const updateFavoritesInStorage = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  

// Function to add a recipe to favorites
export const addToFavorites = (recipe) => {
  const favorites = getFavoritesFromStorage();
  const isAlreadyInFavorites = favorites.some((fav) => fav.name === recipe.name);

  if (!isAlreadyInFavorites) {
    favorites.push(recipe);
    updateFavoritesInStorage(favorites);
    return true; // Recipe added successfully
  }

  return false; // Recipe is already in favorites
};

// Function to remove a recipe from favorites
export const removeFromFavorites = (recipeName) => {
  let favorites = getFavoritesFromStorage();
  favorites = favorites.filter((fav) => fav.name !== recipeName);
  updateFavoritesInStorage(favorites);
};
  // Function to remove favorites from local storage
export const clearFavorites = () => {
  localStorage.removeItem('favorites');
};
  