import { close, Logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={Logo} className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold cursor-pointer text-[16px] hover:text-secondary duration-300 ease-in-out text-white ${
              index == navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <Link to={nav.id}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settoggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer hover:text-secondary duration-300 ease-in-out text-[16px] text-white ${
                  index == navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <Link to={nav.id}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
