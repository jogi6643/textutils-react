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
        </Switch>
      
      </div>
      </Router>
      </>
  );
}

export default App;
