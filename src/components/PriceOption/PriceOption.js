import React from "react";
import Feature from "./Feature/Feature";

const PriceOption = ({ option }) => {
  const { features } = option;
  return (
    <div className="bg-indigo-200 m-3 rounded-md p-3">
      <div>
        <h3 className="">
          <span className="text-5xl font-bold text-gray-800">
            {option.price}
          </span>
          <span className="text-4xl text-gray-600">/mon</span>
        </h3>
        <p className="text-3xl my-4">{option.name}</p>
      </div>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="bg-orange-500 hover:bg-orange-400 w-full rounded-md py-2 font-bold text-white mt-4 text-xl">Buy Now</button>
    </div>
  );
};

export default PriceOption;
