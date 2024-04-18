import React from "react";
import Chart from "react-apexcharts";

const LineChart = ({ options, series }) => {
  return <Chart options={options} series={series} type="line" width="300" />;
};

export default LineChart;