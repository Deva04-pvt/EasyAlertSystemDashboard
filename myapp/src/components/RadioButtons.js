import React from 'react';

function RadioButtons({ options, selectedOption, onChange }) {
  return (
    <div className="py-4 px-4">
      <label className="block text-gray-700">Select Option:</label>
      <div className="mt-2">
        {options.map((option) => (
          <label key={option} className="inline-flex items-center mr-4">
            <input
              type="radio"
              className="form-radio"
              value={option}
              checked={selectedOption === option}
              onChange={onChange}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RadioButtons;
