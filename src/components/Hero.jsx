import React from "react";
import { MdFoodBank } from "react-icons/md";
import GetStarted from "./GetStarted";
import { PiBowlFoodBold } from "react-icons/pi";

export const Hero = (props) => {
  console.log(props);
  return (
    <div className="flex md:flex-row flex-col sm:py-16 py-6" id="hero">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6 mr-4">
        {/* tag */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <MdFoodBank className="w-[30px] h-[30px] text-secondary" />
          <p className=" ml-2 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
            <span className="text-gradient">Recipe of the day</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[32px] text-white">
            {props.title}
          </h1>
        </div>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5">
          {props.description}
        </p>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 mt-5">
          <PiBowlFoodBold className="w-[30px] h-[30px] text-secondary" />
          <p className=" ml-2 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
            <span className="text-white">{props.serves}</span>
          </p>
        </div>
        <div className="self-center hidden ss:flex md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative min-w-[460px] xl:px-0 sm:px-16 px-6">
        <img
          src={props.image}
          alt=""
          className="w-[100%] max-h-[700px] relative z-[5] object-cover rounded-lg"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className="ss:hidden flex justify-center items-center">
        <GetStarted />
      </div>
    </div>
  );
};

export default Hero;
