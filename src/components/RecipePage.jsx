import Form from "./Form";
import Country from "./Country";
import { useState, useEffect } from "react";
import { addToFavorites } from "./favoritesUtils";
import { recipes as recipesData } from "./recipes";

function RecipePage() {
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const [recipes, setRecipes] = useState([]);

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
              category={recipe.Category}
              name={recipe.title}
              countryFlag={recipe.image}
              description={recipe.description}
              serves={recipe.serves}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default RecipePage;
