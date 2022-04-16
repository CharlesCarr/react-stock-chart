import React from "react";
// import { Line } from "react-chartjs-2";

const ChartDisplay = (props) => {

  let data = props.fullResults.dayResultsArr.map((data) => data.c);
  // Preparing data for necessary inputs to the chart.js display
  const chartData = {
    labels: ["Test1", "Test2", "Test3", "Test4", "Test5"],
    datasets: [
      {
        label: "Stock Price",
        data,
        backgroundColor: "rgba(83, 104, 120, 0.5)",
        borderColor: "rgba(83, 104, 120, 1.0)",
        fill: true,
        tension: 0.2,
      },
    ],
  };

  /*
  // Chart set up object
  let delayed;

  const options = {
    radius: 5,
    hitRadius: 30,
    hoverRadius: 10,
    responsive: true,
    // Commenting below out to not worry about for now w/type errors

    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
        //   delay = context.dataIndex * 300 + context.datasetIndex * 100;
          delay = context.dataIndex * 50 + context.datasetIndex * 50;
        }
        return delay;
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    },
  };
  */

  // Now have the correct data in here
  // Will want to pass this along to the chart data

  

  return (
    <div>
      {/* testing that the bug is coming from the line component */}
      {/* <Line data={chartData} options={options} /> */}
      {chartData.labels.map((label) => <p key={Math.random()*1000}>{label}</p>)}
    </div>
  )
};

export default ChartDisplay;