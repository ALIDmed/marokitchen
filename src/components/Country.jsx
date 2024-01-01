import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";
import { addToFavorites } from "./favoritesUtils";
import Heart from "react-animated-heart";
import { toast } from "sonner";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Country({ countryFlag, name, description, serves, category, key }) {
  const [isClick, setClick] = useState(false);
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const [isAlreadyInFavorites, setIsAlreadyInFavorites] = useState(false);

  const handleAddToFavorites = (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    setClick(!isClick);
    const addedSuccessfully = addToFavorites({
      name,
      countryFlag,
      description,
      serves,
    });

    if (addedSuccessfully) {
      setIsAddedToFavorites(true);
      setTimeout(() => {
        setIsAddedToFavorites(false);
      }, 2000); // Reset the message after 2 seconds
    } else {
      setIsAlreadyInFavorites(true);
      setTimeout(() => {
        setIsAlreadyInFavorites(false);
      }, 2000); // Reset the message after 2 seconds
    }

    // Show an alert based on the result
    if (addedSuccessfully) {
      toast.success("Added to Favorites!");
    } else {
      toast.warning("Already in Favorites!");
    }
  };

  return (
    <Link
      to={`/recipe?param=${name}`}
      className="rounded-lg overflow-hidden group relative border border-[#333] transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
    >
      <motion.div
        initial="initial"
        variants={fadeInAnimationVariants}
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={key}
      >
        <div className="w-full">
          <img
            src={countryFlag}
            alt=""
            className="h-[330px] w-full object-cover"
          />
        </div>
        <div className="px-2 py-4 flex justify-between flex-col space-y-3">
          <span className="font-light text-secondary">{category}</span>
          <h3 className="font-semibold text-xl">{name}</h3>
          {/* <Heart onClick={handleAddToFavorites}>Add to Favorites /> */}
        </div>
        <button className="scale-0 group-hover:scale-100 transition absolute -top-[15px] -right-[15px] rounded-full">
          <Heart isClick={isClick} onClick={handleAddToFavorites} />
        </button>
      </motion.div>
    </Link>
  );
}

export default Country;
