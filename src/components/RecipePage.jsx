import Form from "./Form";
import Country from "./Country";
import { useState, useEffect } from "react";
import recipesData from "./recipes.json";

function RecipePage() {
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (recipe) => {
    const isAlreadyInFavorites = favorites.some(
      (fav) => fav.name === recipe.name
    );
    console.log("isAlreadyInFavorites: " + isAlreadyInFavorites);

    const storedFavorites =
      JSON.parse(localStorage.getItem("react-marokitechen-app-favorites")) ||
      [];
    const isAlreadyInLocalStorage = storedFavorites.some(
      (fav) => fav.name === recipe.name
    );
    console.log("isAlreadyInLocalStorage: " + isAlreadyInLocalStorage);

    if (!isAlreadyInFavorites) {
      setFavorites((prevFavorites) => {
        const newFavorites = [...prevFavorites, recipe];
        saveToLocalStorage(newFavorites);
        return newFavorites;
      });
    }
  };

  useEffect(() => {
    const getData = async () => {
      setRecipes(recipesData);
      setFiltered(recipesData);
    };
    getData();
  }, []);

  const searchCategories = (searchValue) => {
    setSearchInput(searchValue);
  };

  const handleListClick = (category) => {
    setCategory(category);
  };
  useEffect(() => {
    console.log(category);
    if (category && searchInput) {
      const filteredRecipes = recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          (recipe.ingredients &&
            recipe.ingredients
              .toLowerCase()
              .includes(searchInput.toLowerCase()))
      );
      category === "All"
        ? setFiltered(filteredRecipes)
        : setFiltered(filteredRecipes.filter((a) => a.Category === category));
      return;
    }

    if (category) {
      category === "All"
        ? setFiltered(recipes)
        : setFiltered(recipes.filter((a) => a.Category === category));
      return;
    }

    if (searchInput) {
      const filteredRecipes = recipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          (recipe.ingredients &&
            recipe.ingredients
              .toLowerCase()
              .includes(searchInput.toLowerCase()))
      );
      setFiltered(filteredRecipes);
    }
  }, [category, searchInput, recipes]);

  return (
    <div className="text-white">
      <Form
        searchInput={searchInput}
        searchCategories={searchCategories}
        handleListClick={handleListClick}
      />
      <section>
        <div className="grid gap-4 grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {filtered.map((recipe, index) => (
            <Country
              key={index}
              name={recipe.title}
              category={recipe.category}
              countryFlag={recipe.image}
              description={recipe.description}
              serves={recipe.serves}
              addToFavorites={addToFavorites}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default RecipePage;
