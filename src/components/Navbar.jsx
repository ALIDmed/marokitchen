import React from "react";
import { links } from "../../constants/index";
import { Logo, close, menu } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-4 justify-between items-center bg-black sm:px-24 px-6">
      <img src={Logo} alt="logo" className="w-[64px]" />
      <div className="flex flex-1 items-center justify-between w-full">
        <ul className="justify-evenly hidden sm:flex mx-auto">
          {links.map((link, index) => {
            return (
              <li
                className="hover:text-[#EFC75F] duration-300 ease-in-out px-6 text-white cursor-pointer"
                key={index}
              >
                <a href={link.hash}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center w-fit">
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gray-950 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {links.map((link, index) => {
              return (
                <li
                  className={`hover:text-[#EFC75F] duration-300 ease-in-out px-6 text-white ${
                    index == links.length - 1 ? "mb-0" : "mb-4"
                  }`}
                  key={index}
                >
                  <a href={link.hash}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
