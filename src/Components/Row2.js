import React from "react";
import PropTypes from "prop-types";
import { chart } from "./data";
import { Line } from "react-chartjs-2";

const Row2 = (props) => {
  const data = {
    labels: [chart[0].x, chart[1].x, chart[2].x, chart[3].x],
    datasets: [
      {
        label: "Order Amount",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [chart[0].y, chart[1].y, chart[2].y, chart[3].y],
      },
    ],
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

Row2.propTypes = {};

export default Row2;
