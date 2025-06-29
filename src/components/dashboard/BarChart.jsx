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

const BarChart = ({ activeTab }) => {
  const departmentData = {
    Tasks: {
      labels: [
        "IT Services",
        "Human Resources",
        "Sales Division",
        "R&D",
        "IT Services",
        "Human Resources",
        "Sales Division",
        "R&D",
      ],
      datasets: [
        {
          label: "Overdue Tasks",
          data: [90, 31, 45, 79, 10, 5, 10, 5],
          backgroundColor: "#99CFB5",
          hoverBackgroundColor: "#008745",
          stack: "Stack 0",
          borderRadius: 0,
        },
        {
          label: "Assigned Tasks",
          data: [10, 5, 10, 5, 90, 31, 45, 79],
          backgroundColor: "#FFDD9D",
          hoverBackgroundColor: "#D9A541",
          stack: "Stack 0",
          borderRadius: {
            topLeft: 5,
            topRight: 5,
            bottomLeft: 0,
            bottomRight: 0,
          },
        },
      ],
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index",
        position: "nearest",
        external: null,
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.raw}% (${context.raw})`,
        },
        backgroundColor: "#646464",
        titleFont: { size: 12 },
        bodyFont: { size: 12 },
        padding: 8,
        caretSize: 0,
        displayColors: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        barThickness: 40,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            size: 10,
          },
          callback: function (value) {
            return value + "%";
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-[260px]">
      <div style={{ height: "212px" }}>
        <div className="flex gap-[12px] justify-end pt-[4px] pr-[4px]">
          <div className="flex gap-[4px] items-center">
            <div className="h-[12px] w-[12px] bg-[#99CFB5] rounded-sm"></div>
            <div className="text-[#979797] text-xs">Tasks</div>
          </div>
          <div className="flex gap-[4px] items-center">
            <div className="h-[12px] w-[12px] bg-[#FFDD9D] rounded-sm"></div>
            <div className="text-[#979797] text-xs">Overdue Tasks</div>
          </div>
        </div>
        <Bar data={departmentData[activeTab]} options={options} />
        <div className="text-[#979797] text-xs text-center">Departments</div>
      </div>
    </div>
  );
};

export default BarChart;