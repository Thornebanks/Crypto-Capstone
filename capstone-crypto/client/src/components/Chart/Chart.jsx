import "./Chart.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const key = process.env.REACT_APP_API_KEY;
function Graph(props) {
  const [historicalData, setHistoricalData] = useState();
  useEffect(() => {
    setHistoricalData({
      labels: ["1 day change", "7 day change", "30 day change"],
      datasets: [
        {
          label: "Price",
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
          data: [
            props.coin.price,
            props.coin["1d"].volume,
            [props.coin["7d"].volume],
            [props.coin["30d"].volume],
          ],
        },
      ],
    });
  }, []);
  if (!historicalData) {
    return <h2>Loading</h2>;
  } else {
    return (
      <div>
        <Line data={historicalData} />
      </div>
    );
  }
}
export default Graph;
