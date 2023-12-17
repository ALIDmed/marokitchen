import React from "react";
import { useLocation } from "react-router-dom";
import recipesData from "../components/recipes.json";
import { Navbar, Footer } from "../components";
import { IoTime } from "react-icons/io5";
import { PiBowlFoodBold } from "react-icons/pi";

const Recipe = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("param");

  const recipe = recipesData.find((obj) => obj.title == paramValue);
  console.log(recipe);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start px-6 sm:px-16">
        <div className="xl:max-w-[1280px] w-full">
          <div>
            <div className="flex flex-col sm:flex-row">
              <div className="flex-1">
                <img src={recipe.image} className="w-[]" />
              </div>
              <div className="flex-1 flex flex-col justify-between text-white pl-20">
                <h2 className="text-3xl font-bold">{recipe.title}</h2>
                <ul className="flex">
                  <li className="flex items-center mr-2">
                    <PiBowlFoodBold />
                    <span className="text-sm ml-1">{recipe.serves}</span>
                  </li>
                  <li className="flex items-center">
                    <IoTime />
                    <span className="text-sm ml-1">{recipe.time}</span>
                  </li>
                </ul>
                <p>{recipe.description}</p>
                <h5>Nutrition per serving</h5>
                {Object.entries(recipe.nutritions).map(
                  ([key, value], index) => (
                    <div className="">
                      <div className="flex justify-between border-b pb-1">
                        <span>{key}</span>
                        <span>{value}</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="mt-14 text-white">
              <h2 className="text-3xl">Ingredients</h2>
              <ul>
                {recipe.ingredients.split("-").map((ingredient, index) => (
                  <li className="border-b">{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
