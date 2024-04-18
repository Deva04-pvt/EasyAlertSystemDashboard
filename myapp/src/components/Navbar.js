import React from 'react';
import { UserCircleIcon } from '@heroicons/react/outline'; // Using outline version

const Navbar = () => {
  const handleUserIconClick = () => {
    // Add your click event handling logic here
    console.log('User icon clicked');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg">Your Website Name</span>
        </div>
        <div>
          <button onClick={handleUserIconClick}>
            <UserCircleIcon className="w-8 h-8 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
