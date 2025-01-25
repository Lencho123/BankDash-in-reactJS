import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler, // Enables area fill
  Title,
  Tooltip,
  Legend
);

const BalanceHistoryLine = () => {
  const data = {
    labels: ["Jan", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance history",
        data: [100, 315, 480, 780, 220, 580, 230],
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Balance History",
      },
      legend:{
        display:false,
      }
    },
  };
  return <Line data={data} options={options} />;
};

export default BalanceHistoryLine;
