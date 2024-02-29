import { useState, useEffect, useCallback } from "react";
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

// eslint-disable-next-line react/prop-types
export default function A({ dataValues }) {
  const getCurrentMonthData = useCallback(() => {
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth() + 1;

    const getLabelTillCurrentMonth = () => {
      return labels.slice(0, currentMonthIndex);
    };

    return {
      labels: getLabelTillCurrentMonth(),
      datasets: [
        // {
        //   label: "Dataset 1",
        //   data: [dataValue],
        //   backgroundColor: "rgba(163, 147, 191)",
        // },
        {
          label: "Dataset 2",
          data: dataValues,
          backgroundColor: "rgba(60, 28, 109)",
        },
      ],
    };
  }, [dataValues]);
  const [data, setData] = useState(getCurrentMonthData());

  useEffect(() => {
    setData(getCurrentMonthData());
  }, [getCurrentMonthData]);

  return <Bar className="" options={options} data={data} />;
}
