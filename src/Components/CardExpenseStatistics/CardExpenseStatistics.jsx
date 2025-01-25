import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  elements, // Import ArcElement for Pie chart
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
function CardExpenseStatistics() {
  const data = {
    labels: ["DBL Bank", "ABM Bank", "BRC Bank", "MPC Bank"],
    datasets: [
      {
        data: [30, 25, 25, 20],
        backgroundColor: ["blue", "green", "yellow", "orange"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true, // Show the title
        text: "Card Expense Statistics", // The text of the title
        font: {
          size: 23, // Font size of the title
        },
        padding: {
          bottom: 20, // Space between title and chart
        },
      },
      legend: {
        position: "bottom", // Position the legend below the chart
      },
    },
    // elements: {
    //   arc: {
    //     cutout: "50%", // Adjusts the size of the hole in the middle of the doughnut
    //   },
    // },
  };

  return <Doughnut data={data} options={options} />;
}

export default CardExpenseStatistics;
