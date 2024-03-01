/* eslint-disable react/prop-types */
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
      text: "Sales by month",
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

export default function A({ dataValues }) {
  const getCurrentMonthData = useCallback(() => {
    return {
      labels: dataValues.map((value) => value.id.split("-")[0]),
      datasets: [
        // {
        //   label: "Dataset 1",
        //   data: [dataValue],
        //   backgroundColor: "rgba(163, 147, 191)",
        // },
        {
          label: "Product Sales Per Month",
          data: dataValues.map((value) => value.amount),
          backgroundColor: "rgba(60, 28, 109)",
        },
      ],
    };
  }, [dataValues]);

  return <Bar className="" options={options} data={getCurrentMonthData()} />;
}
