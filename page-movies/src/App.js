import React from "react";
import Navbar from "./Components-JS/Navbar";
// import MovieList from "./MovieList";
import {MovieProvider} from "./MovieContext";
import FetchData from "./Components-JS/FetchData";
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import "./App.css";

function App () {
  return(
    
    <MovieProvider value="Hello">
     <Router>
       <div className="App">

        <Navbar />
    
        <Switch>
            <Route path="/home"  component={Home} />
            <Route path="/fetchData" component={FetchData} />
        </Switch>
     </div>
     </Router>
    </MovieProvider>
    
  );
 }

export default App;
