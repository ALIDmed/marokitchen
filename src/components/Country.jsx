// import flag from '../assets/img/1280px-Flag_of_Germany.svg.png'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdFoodBank } from "react-icons/md";

function Country({
  countryFlag,
  name,
  population,
  region,
  capital,
  description,
  serves,
}) {
  return (
    <Link
      to={`name/${name}`}
      className="bg-slate-800 rounded-lg overflow-hidden"
    >
      <div className="country-image">
        <img src={countryFlag} alt="" />
      </div>
      <div className="px-2 py-4 flex justify-between flex-col">
        <h3 className="font-semibold text-xl">{name}</h3>
        <p className="text-ellipsis overflow-hidden whitespace-nowrap my-2">
          {description}
        </p>
        <div className="items-center flex gap-2">
          <MdFoodBank className="w-[30px] h-[30px]" />
          {serves}
        </div>
      </div>
    </Link>
  );
}

export default Country;
