import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const PriceOption = ({ option }) => {
  return (
    <div className="bg-indigo-200 m-3 rounded-md p-3">
      <div>
        <h3 className=""><span className="text-3xl font-bold text-gray-800">{option.price}</span><span className="text-2xl text-gray-600">/mon</span></h3>
        <p className="text-2xl my-4">{option.name}</p>
      </div>
      <div className="flex items-center">
        <CheckCircleIcon className="h-5 w-5 text-orange-400" />
        <p className="ml-[5px]">Awesome Feature</p>
      </div>
    </div>
  );
};

export default PriceOption;
