import React from "react";

export const Hero = (props) => {
  console.log(props);
  return (
    <div className="w-full bg-[#EFC75F] p-4">
      <div className="bg-white flex sm:flex-row flex-col rounded-lg overflow-hidden py-12 px-4 max-w-[1000px] mx-auto">
        <div className="flex-1">
          <span className="text-[12px] bg-[#023047] text-white py-1 px-2 rounded-lg">
            Recipe of the day
          </span>
          <h3 className="font-bold text-5xl my-6">{props.title}</h3>
          <p className="text-gray-900 mb-6">{props.description}</p>
          <span className="text-[12px] bg-[#023047] text-white py-1 px-2 rounded-lg ">
            {props.serves}
          </span>
          <div className="mt-6 bg-[#023047] text-white py-1 px-2 rounded-lg max-w-[200px] text-center">
            Explore more recipes
          </div>
        </div>
        <div className="flex-1 rounded-full overflow-hidden object-contain">
          <div className="rounded-full">
            <img src={props.image} alt="" className="w-full max-w-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
