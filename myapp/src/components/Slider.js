import React from 'react';

function Slider() {
  return (
    <div className="py-8 px-4">
      <label className="block text-gray-700">Slider</label>
      <input type="range" min="0" max="100" className="w-full" />
    </div>
  );
}

export default Slider;
