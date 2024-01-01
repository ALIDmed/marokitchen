import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { IoTime } from "react-icons/io5";
import { PiBowlFoodBold } from "react-icons/pi";
import { recipes as recipesData } from "../components/recipes";

const Recipe = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("param");

  const handleIngredient = (ingredients) => {
    let modifiedString = ingredients.replace(/\d+-\d+/g, (match) => {
      // Extract the last number from the matched pattern
      let numbers = match.split("-");
      return numbers[numbers.length - 1];
    });
    return modifiedString.split("-");
  };

  const recipe = recipesData.find((obj) => obj.title == paramValue);
  console.log(recipe);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="px-6 sm:px-16 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start px-6 sm:px-16 mt-32">
        <div className="absolute w-[60%] h-[60%] z-[0] -left-[50%] blue__gradient rounded-full" />
        <div className="xl:max-w-[1280px] w-full">
          <div className="text-white">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 mb-9 md:mb-0">
                <img
                  src={recipe.image}
                  className="w-[400px] mx-auto rounded-lg overflow-hidden"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between text-white pl-4 md:pl-0 md:space-y-0 space-y-5">
                <h2 className="text-4xl font-bold">{recipe.title}</h2>
                <ul className="flex flex-col space-y-2">
                  <li className="flex items-center mr-2">
                    <PiBowlFoodBold className="text-secondary" />
                    <span className="text-sm ml-2">{recipe.serves}</span>
                  </li>
                  <li className="flex items-center">
                    <IoTime className="text-secondary" />
                    <span className="text-sm ml-2">{recipe.time}</span>
                  </li>
                </ul>
                <p className="text-gray-300 text-lg">{recipe.description}</p>
                <h5 className="text-lg font-semibold">Nutrition per serving</h5>
                {Object.entries(recipe.nutritions).map(
                  ([key, value], index) => (
                    <div className="w-[400px]">
                      <div className="flex justify-between border-b pb-1 border-[#333]">
                        <span>{key}</span>
                        <span className="text-secondary font-semibold">
                          {value}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex mt-20 flex-col md:flex-row space-y-16 md:space-y-0">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-8 text-center md:text-start">
                  Ingredients
                </h2>
                <ul className="list-disc">
                  {handleIngredient(recipe.ingredients).map(
                    (ingredient, index) => (
                      <li className="ml-7">{ingredient}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-8 text-center md:text-start">
                  Method
                </h2>
                <p className=" text-gray-300">{recipe.method}</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
