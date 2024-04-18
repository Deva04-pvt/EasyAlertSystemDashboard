import React, { useState } from 'react';

const Options = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-72 mx-auto bg-gray-800 bg-opacity-70 p-4 pt-2 rounded-lg backdrop-filter backdrop-blur-sm">
      <div className="flex items-center mb-2">
        {/* Empty div removed */}
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <input
            type="radio"
            id="option1"
            name="options"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
            className="mr-2 radio-input"
          />
          <label htmlFor="option1" className="text-gray-300">Hourly</label>
        </div>
        <div className="flex items-center mr-4">
          <input
            type="radio"
            id="option2"
            name="options"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
            className="mr-2 radio-input"
          />
          <label htmlFor="option2" className="text-gray-300">Daily</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="option3"
            name="options"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
            className="mr-2 radio-input"
          />
          <label htmlFor="option3" className="text-gray-300">Monthly</label>
        </div>
      </div>
      <style>
        {`
          input[type="radio"].radio-input:checked::before {
            content: "";
            display: block;
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: black;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          input[type="radio"].radio-input {
            position: relative;
            cursor: pointer;
            width: 16px;
            height: 16px;
            border-radius: 50%;  // Added border-radius
            margin-right: 0.5rem;
          }
        `}
      </style>
    </div>
  );
};

export default Options;
