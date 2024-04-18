import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(50); // Initial value set to 50

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-64 mx-auto bg-gray-800 bg-opacity-70 p-4 rounded-lg backdrop-filter backdrop-blur-sm">
      <div className="flex items-center mb-2">
        <span className="mr-2 font-semibold text-gray-300">Time Frame: (days)</span>
        <output className="text-gray-300">{value}</output>
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-gray-300">0</span>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-4 bg-gray-700 bg-opacity-50 rounded-full appearance-none focus:outline-none slider"
        />
        <span className="ml-2 text-gray-300">100</span>
      </div>
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            background-color: white;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            -webkit-appearance: none;
            appearance: none;
          }
          
          input[type="range"]::-moz-range-thumb {
            background-color: white;
            height: 16px;
            width: 16px;
            border-radius: 50%;
          }
          
          input[type="range"]::-ms-thumb {
            background-color: white;
            height: 16px;
            width: 16px;
            border-radius: 50%;
          }
          
          input[type="range"]:focus {
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

export default Slider;
