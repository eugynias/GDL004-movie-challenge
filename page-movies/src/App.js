import React from "react";

 import Navbar from "./Components-JS/Navbar";

import FetchData from "./Components-JS/FetchData";
import Batman from './Components-JS/Batman'
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import "./App.css";

function App () {
  return(
    
    

     <Router>
       <div className="App">

        <Navbar />
        <Switch>
            <Route path="/Home"  component={Home} />
            <Route path="/Superman" component={FetchData} />
            <Route path="/Batman" component={Batman} />
        </Switch>
     </div>
     </Router>
    
    
  );
 }

export default App;
