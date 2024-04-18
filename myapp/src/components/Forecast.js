import * as React from "react";
import "../App.css";

function Forecast() {
  return (
    <div className="flex flex-col justify-center p-5 text-center rounded-xl bg-gray-400 bg-opacity-50 max-w-[340px]">
      <div className="flex flex-col justify-center px-8 py-5 text-base rounded-xl bg-slate-500">
        <div className="font-medium text-white text-opacity-90">
          <span>Heat Stress Index Forecast</span>
        </div>
        <div className="self-center mt-44 text-gray-100">legend table</div>
      </div>
      <div className="flex flex-col justify-center px-8 py-5 mt-3.5 text-base rounded-xl bg-slate-500">
        <div className="font-medium text-white text-opacity-90">
          <span>Fireweather Index Forecast</span>
        </div>
        <div className="self-center mt-44 text-gray-100">legend table</div>
      </div>
      <div className="flex flex-col justify-center py-6 mt-3.5 w-full rounded-xl bg-slate-500">
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
