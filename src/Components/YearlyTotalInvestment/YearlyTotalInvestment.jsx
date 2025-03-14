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
  scales,
  layouts,
} from "chart.js";
import { callback, toPadding } from "chart.js/helpers";
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

const YearlyTotalInvestment = () => {
  const data = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "yearly total",
        data: [5000, 24000, 17500, 39000, 21000, 30000],
        borderColor: "orange",
        backgroundColor: "white",
        tension: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Yearly Total Investment",
      },
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return "$" + value; //Add dolar sign to value
          },
        },
        grid: {
          borderDash: [5, 5], //Dotted grid lines
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    layout: {
      padding: 5,
    },
  };
  return <Line data={data} options={options} />;
};

export default YearlyTotalInvestment;
