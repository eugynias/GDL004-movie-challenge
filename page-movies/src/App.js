import React, { useState, useEffect } from "react";
 import Navbar from "./Components-JS/Navbar";

import {MovieProvider} from "./MovieContext";
import FetchData from "./Components-JS/FetchData";
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import "./App.css";

function App () {

 const [searchName, setSearchName] = useState('Batman');
  const [page,setPage] = useState(1) //con el botón agregaría mas paginas
  const [listMovie, setListMovie] = useState([]);
  
  const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=745c4feb&s=${searchName}&page=${page}`
  
  useEffect(() => {
    const getMovie = async () => {
        const response = await fetch(MOVIE_API_URL);
        const data = await response.json();
        console.log(data);
        setListMovie(data.Search)
        //setListMovie([...listMovie, ...data.Search])//nos agrega a la misma lista
        // return data;  
      };
    getMovie();
  }, [searchName, page]);
  
  console.log(listMovie)
  
  return(
    <Router>
    <MovieProvider value="Hello">
     <div className="App">
        <Navbar setSearchName={setSearchName} />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home"  component={Home} />
            <Route 
                path="/fetchData"
                component={() => <FetchData
                    page={page}
                    setPage={setPage}
                    listMovie={listMovie}
                    />}
            />
            <Route 
                path="/Home"
                component={() => <Home
                    />}
            />
        </Switch>
     </div>
    </MovieProvider>
    </Router>
  );
 }

export default App;
