import Navbar from "./components/Navbar";
import TexthtmlForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Graph from "./components/Graph";
import Graph1 from "./components/Graph1";
import Graph2 from "./components/Graph2";
import NewDashboard from "./components/dashboard/NewDashboard"
import User from "./components/contextApi/User";
import Handle from "./components/contextApi/Handle";
import Companies from "./components/company/Companies";
import CreateCompany from "./components/company/CreateCompany";
import EditCompany from "./components/company/EditCompany";
function App() {
 const [mode, setMode] = useState('dark');
 const [alert, setAlert] = useState(null);
 const showAlert = (message,type)=>{
   setAlert({
     msg:message,
     type:type
   });
 }
 const toggleMode=()=>{
   if(mode==='light')
   {
    setMode('dark');
    showAlert("Dark Mode has been enabled!","success");
   }
   else
   {
    setMode('light');
    showAlert("Light Mode has been enabled!","success");
   }
  
 }
  return (
    <>
    <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/">
          <TexthtmlForm heading="Enter The Text to Analysize"/>
          </Route>
          <Route extact path="/about">
            <About />
          </Route>
          <Route extact path="/graph">
            <Graph />
          </Route>
          <Route extact path="/graph1">
            <Graph1 />
          </Route>
         
          {/* <Route extact path="/graph2">
            <Graph2 />
          </Route> */}
          <Route extact path="/dashboard">
            <NewDashboard />
          </Route>
          <Route extact path="/users">
            <Handle />
          </Route>
          <Route extact path="/company">
            <Companies />
          </Route>
          <Route extact path="/createcompany">
            <CreateCompany />
          </Route>
          <Route extact path="/editcompany/:id">
            <EditCompany />
          </Route>
         
        </Switch>
      
      </div>
      </Router>
      </>
  );
}

export default App;
