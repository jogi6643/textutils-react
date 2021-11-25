import React from 'react'
import Chart from "./Chart";
function Dashboard(props) {
    return (
        <>
        <div className="row">
            {props.charts &&
                props.charts.map(chart => {
                    return (
                        <div className="col-xs-12 col-sm-6 mb-2">
                            <Chart data={chart.serie} userConfig={props.userConfig} titleName={chart.title} />
                        </div>
                    );
                })}
        </div>
        </>
    )
}

export default Dashboard
