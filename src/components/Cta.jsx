import React from "react";
import Button from "./Button";
import { zellij } from "../assets";

const Cta = () => (
  <section
    className="flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow"
    id="newsletter"
  >
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold xs:text-[38px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Subscribe to our newsletter
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[680px] mt-5">
        Explore Moroccan cuisine with authentic recipes, step-by-step guides,
        and a vibrant community bringing Morocco's flavors to you!
      </p>
    </div>

    <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
      <input
        type="email"
        className="py-4 px-6 rounded-[10px] mr-2 z-10"
        placeholder="enter your email"
      />
      <Button styles="z-10" />
    </div>
  </section>
);

export default Cta;
