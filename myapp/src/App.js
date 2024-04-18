import React from "react";
import "./App.css";
import USMap from "./components/USMap";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import RadioButtons from "./components/RadioButtons";
const App = () => {
  return (
    <div>
    <Navbar/>
    <RadioButtons/>
      <USMap/>
      <Slider/>
    </div>
  );
};

export default App;
