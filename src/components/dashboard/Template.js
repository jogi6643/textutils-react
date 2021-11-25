const template = {
    userConfig: {
      tooltip: {
        pointFormat: "<b>{point.y} thousand megawatthours</b>"
      },
      plotOptions: {
        pie: {
          showInLegend: true,
          innerSize: "60%",
          dataLabels: {
            enabled: false,
            distance: -14,
            color: "white",
            style: {
              fontweight: "bold",
              fontsize: 100
            }
          }
        }
      }
    },
    yearFrom: "2001",
    yearTo: "2015",
    msg: "Select the range"
  };
  
  export default template;