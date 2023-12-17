import React from "react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { categories } from "../constants/index";

function Form({ searchCategories, searchInput, handleListClick }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [category, setCategory] = useState("Filter by Category");

  function handleToggleOpen() {
    setDropdownOpen((open) => !open);
  }

  function handleCategoryClick(category) {
    handleListClick(category);
    setCategory(category);
    setDropdownOpen(false);
  }

  return (
    <form autoCapitalize="off " className="w-full">
      <div className="sm:py-16 py-6 flex justify-between items-center flex-col md:flex-row">
        <div className="flex items-center h-[50px]">
          <div className="flex w-11 items-center justify-center rounded-tl-lg rounded-bl-lg bg-[#1a1a1a] h-full">
            <IoSearch className="w-[24px] h-[24px] text-black" />
          </div>
          <input
            type="text"
            placeholder="Search for a Recipe"
            value={searchInput}
            onChange={(event) => searchCategories(event.target.value)}
            className="ss:w-[370px] min-w-[150px] w-[250px] h-full pl-2 outline-0 text-black text-xl pr-4 rounded-tr-lg rounded-br-lg text-ellipsis overflow-hidden bg-[#1a1a1a]"
          />
        </div>
        <div className="h-[50px] relative w-[414px] cursor-pointer">
          <div
            onClick={handleToggleOpen}
            className="bg-white text-black md:mt-0 mt-4 h-full outline-0 text-xl pr-4 rounded-lg text-ellipsis overflow-hidden flex items-center px-3"
          >
            <h3 className="filter-select-box-title-text">{category}</h3>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <ul
            className={`bg-white text-black flex items-start flex-col rounded-lg absolute top-14 w-full px-4 py-2  ${
              isDropdownOpen ? "flex" : "hidden"
            }`}
          >
            {categories.map((category) => (
              <li
                className="text-gray-500 hover:text-black cursor-pointer font-normal hover:font-medium"
                onClick={() => handleCategoryClick(category.key)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
}

export default Form;
