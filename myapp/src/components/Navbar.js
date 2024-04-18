import React from 'react';
import { UserCircleIcon } from '@heroicons/react/outline'; // Using outline version

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg">Early Alert System Dashboard</span>
        </div>
        <div>
          <UserCircleIcon className="w-8 h-8 text-gray-700" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
