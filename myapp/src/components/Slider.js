import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(50); // Initial value set to 50

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-64 mx-auto bg-gray-300 bg-opacity-50 p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <span className="mr-2 font-semibold">Time Frame: (days)</span>
        <output className="text-gray-700">{value}</output>
      </div>
      <div className="flex items-center">
        <span className="mr-2">0</span>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-4 bg-gray-200 rounded-full appearance-none focus:outline-none"
        />
        <span className="ml-2">100</span>
      </div>
    </div>
  );
};

export default Slider;
