import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Import ArcElement for Pie chart
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const x = 4;
function ExpenseStaticsPie() {
  const data = {
    labels: ["Transfer", "Service", "Others", "Shopping"],
    datasets: [
      {
        data: [30, 15, 35, 20],
        backgroundColor: ["blue", "green", "yellow", "orange"],
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,  // Show the title
        text: 'Expense Statics',  // The text of the title
        font: {
          size: 20,  // Font size of the title
        },
        padding: {
          bottom: 20, // Space between title and chart
        },
      }
    }
  };

  return <Pie data={data} options={options} />;
}
// 
export default ExpenseStaticsPie;
