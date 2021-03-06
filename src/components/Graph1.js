import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {CategoryScale} from 'chart.js';
const Graph1 = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);


  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios.get("http://dummy.restapiexample.com/api/v1/employees")
    //   .get("https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=4756b0b52ab6fde26fa05b6a3aa1a723")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "level of thiccness",
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
      
    <div className="App">
      <h1>Dyanmic Graph</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Graph1;
