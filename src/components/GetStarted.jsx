import React from "react";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-105 ease-in-out duration-500">
      <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
        <div className="flex flex-row items-start justify-center">
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Explore</span>
          </p>
          <img src={arrowUp} className="w-[23px] h-[23px] object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">More</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
