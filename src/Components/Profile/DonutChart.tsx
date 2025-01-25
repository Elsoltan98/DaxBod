import { FC } from "react";
import Chart from "react-apexcharts";
interface DonutChartProps {
  darkMode?: boolean;
}

const DonutChart: FC<DonutChartProps> = ({ darkMode }) => {
  const options = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut" as const,
        height: 350,
      },
      labels: ["Desktop", "Tablet", "Mobile"],
      colors: ["#FF5733", "#33FF57", "#3357FF"],
      legend: {
        position: "bottom" as const,
        labels: {
          colors: darkMode ? "#dddddd" : "#000000",
        },
      },
      dataLabels: {
        style: {
          colors: ["#dddddd"],
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="py-6 bg-white rounded-lg p-5 flex dark:bg-gray-600 items-center justify-center">
      <Chart
        options={options.options}
        series={options.series}
        type="donut"
        height={325}
      />
    </div>
  );
};

export default DonutChart;
