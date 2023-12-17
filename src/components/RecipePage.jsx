import Form from "./Form";
import Country from "./Country";
import { useState, useEffect } from "react";
import recipesData from "./recipes.json";

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
    if (category && searchInput) {
      let filteredRecipes = recipes.filter((recipe) =>
        Object.values(recipe.title)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );

      category === "All"
        ? setFiltered(filteredRecipes)
        : setFiltered(
            (filteredRecipes = recipes.filter((a) => a.category === category))
          );

      return;
    }

    if (category) {
      let filteredRecipes;
      category === "All"
        ? (filteredRecipes = recipes)
        : (filteredRecipes = recipes.filter((a) => a.category === category));
      setFiltered(filteredRecipes);
      return;
    }

    if (searchInput) {
      const filteredRecipes = recipes.filter(
        (recipe) =>
          Object.values(recipe.title)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          Object.values(recipe.ingredients)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase())
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
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default RecipePage;
