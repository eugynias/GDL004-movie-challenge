import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    getMovie();
  }, []);

  const MOVIE_API_URL = "http://www.omdbapi.com/?apikey=745c4feb&s='harry'"
  
  const getMovie = async () => {
    const response = await fetch(MOVIE_API_URL);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App mt">
      <h1>Hello React</h1>
      <form className="serch-form">
        <input className="serch-bar" type="text" />
        <button className="serch-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}


export default App