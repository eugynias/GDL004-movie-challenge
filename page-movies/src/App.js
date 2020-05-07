import React from "react";
// import Nav from "./Nav";
// import MovieList from "./MovieList";
import {MovieProvider} from "./MovieContext";
import FetchData from "./Components-JS/FetchData";
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import "./App.css";

function App () {
  return(
    <Router>
    <MovieProvider value="Hello">
     <div className="App">
        {/* <Nav /> */}
        <Switch>
            <Route path="/home"  component={Home} />
            <Route path="/fetchData" component={FetchData} />
        </Switch>
     </div>
    </MovieProvider>
    </Router>
  );
 }

export default App;
