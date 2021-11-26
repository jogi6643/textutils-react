import React ,{ Component } from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


function Chart(props) {
    let state = {
        chartData: {
          chart: {
            type: "column",
            marginBottom: 100
          },
          title: {
            text: props.titleName
          },
          subtitle: {
            text:
              (
                props.data.reduce(
                  (accumulator, obj) => accumulator + obj.y,
                  0
                ) / 1000000
              ).toFixed(2) + " Twh",
            floating: true,
            style: {
              fontSize: 14,
              fontWeight: "bold",
              color: "#000000"
            },
            y: 170
          },
          series: [
            {
              data: props.data
            }
          ],
          ...props.userConfig
        }
      };
    return (
        <>
            <HighchartsReact
            highcharts={Highcharts}
            options={state.chartData}
            />
        </>
    )
}

export default Chart
