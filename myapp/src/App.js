import React from "react";
import "./App.css";
import USMap from "./components/USMap";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Options from "./components/Options"
const App = () => {
  return (
    <div>
    <Navbar/>
    <Options/>
      <USMap/>
      <Slider/>
    </div>
  );
};

export default App;
