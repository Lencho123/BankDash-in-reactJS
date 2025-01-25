import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function WeeklyActivityBar() {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Diposit",
        data: [480, 350, 320, 480, 160, 395, 400],
        backgroundColor: "blue",
        borderRadius: 20,
      },
      {
        label: "Withdraw",
        data: [240, 120, 270, 380, 250, 250, 340],
        backgroundColor: "lightgreen",
        borderRadius: 20,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,  // Show the title
        text: 'Weekly Activity',  // The text of the title
        font: {
          size: 20,  // Font size of the title
        },
        padding: {
          bottom: 20, // Space between title and chart
        },
      },
      tooltip: {
        enabled: true,
      }
    }
  };
  return <Bar data={data} options={options} />;
}

export default WeeklyActivityBar;
