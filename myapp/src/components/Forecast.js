import * as React from "react";
import { useState } from "react";
import "../App.css";
import LineChart from "./LineChart"; // Import the LineChart component

function Forecast() {
  // Define the state object with options and series data for the LineChart
  const [chartData] = useState({
    options: {
      chart: {
        type: "line",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      },
    },
    series: [
      {
        name: "Heat Stress Index",
        data: [30, 50, 40, 60, 70],
      },
    ],
  });

  // Data for Fireweather Index
  const [fireweatherData] = useState({
    options: {
      chart: {
        type: "line",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      },
    },
    series: [
      {
        name: "Fireweather Index",
        data: [20, 35, 50, 45, 60], // example data, adjust as needed
      },
    ],
  });

  return (
    <div
      className="flex flex-col p-5 text-center rounded-xl bg-gray-400 bg-opacity-50 max-w-[340px] h-[660px]"
      style={{
        overflowY: "auto", // Allows vertical scrolling
        scrollbarWidth: "none", // Hides scrollbar in Firefox
      }}
    >
      {/* Custom CSS for hiding scrollbar in Chrome, Edge, and Safari */}
      <style>
        {`
          .Forecast::-webkit-scrollbar {
            width: 0; /* Hide scrollbar in other browsers */
          }
        `}
      </style>

      {/* Heat Stress Index Forecast section */}
      <div className="flex flex-col justify-center px-8 py-5 text-base rounded-xl bg-slate-500 mb-4">
        <div className="font-medium text-white text-opacity-90">
          <span>Heat Stress Index Forecast</span>
        </div>
        <div className="self-center mt-3 text-gray-100">
          {/* LineChart for Heat Stress Index */}
          <LineChart
            options={chartData.options}
            series={chartData.series}
            width="300"
          />
        </div>
        <div className="self-center mt-2 text-gray-100">legend table</div>
        {""}
      </div>

      {/* Fireweather Index Forecast section */}
      <div className="flex flex-col justify-center px-8 py-5 text-base rounded-xl bg-slate-500 mb-4">
        <div className="font-medium text-white text-opacity-90">
          <span>Fireweather Index Forecast</span>
        </div>
        <div className="self-center mt-3 text-gray-100">
          {/* LineChart for Fireweather Index */}
          <LineChart
            options={fireweatherData.options}
            series={fireweatherData.series}
            width="300"
          />
        </div>
        <div className="self-center mt-2 text-gray-100">legend table</div>
        {""}
      </div>

      {/* Alerts section */}
      <div className="flex flex-col justify-center py-6 rounded-xl bg-slate-500">
        <div className="flex justify-center gap-5 self-center">
          <div className="flex flex-col items-center justify-center">
            <div className="text-xs leading-4 text-white text-opacity-90">
              Heat Stress ALERT
            </div>
            <div className="flex justify-center items-center w-20 h-20 mt-3.5 text-4xl leading-10 text-gray-500 bg-white rounded-full border-red-600 border-solid border-[7px]">
              4
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-xs leading-4 text-white text-opacity-90">
              Fire Danger ALERT
            </div>
            <div className="flex justify-center items-center w-20 h-20 mt-3.5 text-4xl leading-10 text-gray-500 bg-white rounded-full border-red-600 border-solid border-[7px]">
              8
            </div>
          </div>
        </div>
        <div className="mt-4 text-xs font-light leading-4 text-white text-opacity-90">
          The alerts include: max HSI/FWI index, date and location.
        </div>
      </div>
    </div>
  );
}

export default Forecast;
