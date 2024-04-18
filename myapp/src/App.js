import React from "react";
import "./App.css";
import USMap from "./components/USMap";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
const App = () => {
  return (
    <div>
    <Navbar/>
      <USMap/>
      <Slider/>
    </div>
  );
};

export default App;
