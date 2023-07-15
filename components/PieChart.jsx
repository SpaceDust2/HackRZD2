import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ title, data }) => {
  const options = {
    title: {
      display: true,
      text: title,
      fontSize: 20,
    },
  };

  return (
    <div className="w-1/2 h-96">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;