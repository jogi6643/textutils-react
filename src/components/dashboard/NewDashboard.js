import React, { useState ,useEffect} from "react";
import template from "./Template";
import Selection from "./Selection"
import dataProcessing, {
    fossilFuelData,
    hydroElectricData,
    renewableEnergyData,
    biomassData
  } from "./dataProcessing";
import Dashboard from "./Dashboard";

function NewDashboard(props) {
    
    //On change year concept with hooks javascript functon 
    const [yearFrom,setYearFrom] = useState('2001');
    const [yearTo , setYearTo]  = useState('2015');
    const [charts , setnewsData]  = useState([]);
    const handleChangeYear=e=>{
        handleChangeSelect();
        if(e.target.name==='yearFrom')
        {
            setYearFrom(e.target.value);
        }
        else
        {
            setYearTo(e.target.value);
        }
    }
   
   const handleChangeSelect = e => {
       console.log('handleChangeSelect');
       console.log(yearFrom +"=="+ yearTo);
        let msg = dataProcessing(yearFrom,yearTo);
        copyDataSeries({ msg: msg });
      }

    const handleSubmit =e=>{
        console.log('here');
        let msg = dataProcessing(yearFrom,yearTo);
         copyDataSeries({ msg: msg });
         e.preventDefault();
    }

    // Birth object 
    const copyDataSeries = (obj = {}) => {
       
        setnewsData({
              ...obj,
          charts : [
            { serie: fossilFuelData, title: "Fossil Fuel" },
            { serie: hydroElectricData, title: "Hydroelectric Energy" },
            { serie: renewableEnergyData, title: "Biomass" },
            { serie: biomassData, title: "Renewable Energy" }
          ]
        }
        );
    
      };

     useEffect(() => {  
      dataProcessing(yearFrom, yearTo, template.msg);
       copyDataSeries();
     },[yearFrom,yearTo,template.msg]);
    

    // End javascript function
  return (
    <>
      <div className="container bg-light">
        <h1 className="text-center mt-5">
          Net energy generation in the United States
        </h1>
        <p className="text-center">
          Source:&nbsp;
          <a href="https://www.eia.gov">
            U.S. Energy Information Administration
          </a>{" "}
        </p>
      </div>
      <div className="container  mb-5 pb-3 bg-light">
          <div className={"text-center mb-0 pt-3 bold " +(template.msg !== "Select the range" ? "text-danger" : "")}>
            <strong>{template.msg}</strong>
          </div>
          <Selection yearFrom={yearFrom}  yearTo={yearTo} onChangeYear={handleChangeYear} onSubmit={handleSubmit}/>
          <Dashboard  userConfig={template.userConfig} charts={charts.charts}/>
        </div>
    </>
  );
}

export default NewDashboard;
