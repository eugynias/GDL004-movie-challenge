import React from "react";
 import Navbar from "./Components-JS/Navbar";
// import MovieList from "./MovieList";
import {MovieProvider} from "./MovieContext";
import FetchData from "./Components-JS/FetchData";
import Batman from './Components-JS/Batman'
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import "./App.css";

function App () {
  return(
    <Router>
    <MovieProvider value="Hello">
     <div className="App">
        <Navbar />
        <Switch>
            <Route path="/Home"  component={Home} />
            <Route path="/Superman" component={() => <FetchData searchVal={'superman'}/>}/>
            <Route path="/Batman" component={() => <FetchData searchVal={'batman'}/>} />
        </Switch>
     </div>
    </MovieProvider>
    </Router>
  );
 }

export default App;
