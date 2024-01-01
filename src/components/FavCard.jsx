import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";
import { addToFavorites, removeFromFavorites } from "./favoritesUtils";
import Heart from "react-animated-heart";
import { toast } from "sonner";

function FavCard({ countryFlag, name, description, serves, category }) {
  const [isClick, setClick] = useState(false);

  const handleRemoveFromFavorites = (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    removeFromFavorites(name);
    toast.success("Removed from Favorites!");
  };

  return (
    <Link
      to={`/recipe?param=${name}`}
      className="rounded-lg overflow-hidden group relative border border-[#333] transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
    >
      <div className="w-full">
        <img
          src={countryFlag}
          alt=""
          className="h-[330px] w-full object-cover"
        />
      </div>
      <div className="px-2 py-4 flex justify-between flex-col space-y-3">
        <span className=" text-secondary text-xs">{serves}</span>
        <h3 className="font-semibold text-xl">{name}</h3>
      </div>

      <button className="scale-0 group-hover:scale-100 transition absolute -top-[15px] -right-[15px] rounded-full">
        <Heart isClick={isClick} onClick={handleRemoveFromFavorites} />
      </button>
    </Link>
  );
}

export default FavCard;
