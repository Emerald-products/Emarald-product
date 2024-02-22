import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function A({ dataValue }) {
  const getCurrentMonthData = () => {
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentMonthLabel = labels[currentMonthIndex];

    return {
      labels: [currentMonthLabel],
      datasets: [
        {
          label: "Dataset 1",
          data: [dataValue],
          backgroundColor: "rgba(163, 147, 191)",
        },
        {
          label: "Dataset 2",
          data: [dataValue],
          backgroundColor: "rgba(60, 28, 109)",
        },
      ],
    };
  };
  const [data, setData] = useState(getCurrentMonthData(dataValue));

  useEffect(() => {
    setData(getCurrentMonthData(dataValue));
  }, [dataValue]);

  return <Bar className="" options={options} data={data} />;
}
