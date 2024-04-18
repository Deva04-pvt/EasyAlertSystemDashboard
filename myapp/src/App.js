import React from "react";
import "./App.css";
import USMap from "./components/USMap";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Options from "./components/Options";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="z-20">
        <Navbar />
      </div>

      {/* Container for USMap, Options, and Slider */}
      <div className="flex-1 relative">
        {/* USMap component */}
        <div className="w-full h-full absolute top-0 z-0">
          <USMap />
        </div>

        {/* Options and Slider overlapping the map */}
        {/* Options container */}
        <div className="absolute top-16 left-0 right-0 z-10 flex justify-center">
          <div className="mb-4">
            <Options />
          </div>
        </div>

        {/* Slider container */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default App;
