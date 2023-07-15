import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ title, data }) => {
  const options = {
    title: {
      display: true,
      text: title,
      fontSize: 20,
    },
  };

  return (
    <div className="w-1/2 h-96">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;