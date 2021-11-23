import React from 'react'
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import Highcharts1 from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';

function Graph() {
    const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            data: [1, 6, 9, 3, 1, 7]
          }
        ]
      };

      const options1 = {
        title: {
          text: 'My stock chart'
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
          }
        ]
      };
      const options3 = {
        chart: {
        //   type: 'column'
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
          text: 'Browser market shares. January, 2018'
      },
      subtitle: {
          text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
          title: {
              text: 'Total percent market share'
          }
      
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          series: {
              pointPadding: 0.4,
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y:.1f}%'
              }
          }
      },
      
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
      
      series: [
          {
              name: "Browsers",
              colorByPoint: true,
              data: [
                  {
                      name: "Chrome",
                      y: 62.74,
                  },
                  {
                      name: "Firefox",
                      y: 10.57,
                  },
                  {
                      name: "Internet Explorer",
                      y: 7.23,
                  },
                  {
                      name: "Safari",
                      y: 5.58,
                  },
                  {
                      name: "Edge",
                      y: 4.02,
                  },
                  {
                      name: "Opera",
                      y: 1.92,
                  },
                  {
                      name: "Other",
                      y: 7.62,
                  }
              ]
          }
      ],
      };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
            <HighchartsReact highcharts={Highcharts1} constructorType={'stockChart'} options={options1} />
            <HighchartsReact highcharts={Highcharts}  options={options3} />
        </div>
    )
}

export default Graph
