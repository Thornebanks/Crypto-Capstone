import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
// import faker from "faker";
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

function Graph({ coin }) {
  const [historicalData, setHistoricalData] = useState();

  useEffect(() => {
    console.log();
    axios
      .get(
        `https://api.nomics.com/v1/market-cap/history?key=${key}&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z`
      )
      .then((response) => {
        const marketCap = []
        const timeStamp = []
        for (let i=0; i < response.data.length; i++) {
          marketCap.push(response.data[i].market_cap)
          timeStamp.push(response.data[i].timestamp)
        }
        console.log(response.data);
        console.log(marketCap);
        console.log(timeStamp);

        setHistoricalData({labels: timeStamp,
        datasets: [
          {
            label: "My First dataset",
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
            data: marketCap
          }
        ]
      });
      })
      .catch((error) => console.log(error));
  }, []);

  if (!historicalData) {
    return <h2>Loading</h2>;
  } else {
  return (
    <div>
      <Line 
      data = {historicalData}
      
      />
    </div>
   )
  }
}
export default Graph;

// historicalData.map((coin) => {
//   let date = new Date(coin[0]);
//     let time = 
//       date.getHours() > 12
//         ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
//         return days === 1 ? time : date.toDateString()
// }),

// datasets: [
//   {data: historicalData.map((coin) => coin[1]),
//   label: `Price ( Past ${days} Days)`,
//   borderColor: "#000"
// }
// ]