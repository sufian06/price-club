import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOptions = [
    { id: 1, name: "Free", price: 0, features: [
        'Awesome Feature',
        'Extra Feature',
        'Unnecessary Feature',
        'Will never use Feature',
        'Hudai Feature',
        'Ajaira Feature',
    ] },
    { id: 2, name: "Medium", price: 9.99, features: [
        'Everything on Free',
        'Extra Feature',
        'Unnecessary Feature',
        'Will never use Feature',
        'Hudai Feature',
        'Ajaira Feature',
    ] },
    { id: 3, name: "Premium", price: 19.99, features: [
        'Everything on Medium',
        'Extra Feature',
        'Unnecessary Feature',
        'Will never use Feature',
        'Hudai Feature',
        'Ajaira Feature',
    ] },
    { id: 4, name: "Platinum", price: 159.9, features: [
        'Everything on Premium',
        'Extra Feature',
        'Unnecessary Feature',
        'Will never use Feature',
        'Some Features',
        'Some extra Features',
    ] },
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold bg-indigo-400 p-12 text-white">
        Best Deal of the Town
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-12">
        {pricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
