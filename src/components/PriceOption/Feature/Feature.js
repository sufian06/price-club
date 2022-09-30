import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div className="flex items-center">
        <CheckCircleIcon className="h-5 w-5 text-orange-400" />
        <p className="ml-2">{feature}</p>
      </div>
    );
};

export default Feature;