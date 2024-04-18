import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold">Your Logo</div>
          <ul className="flex space-x-4">
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
