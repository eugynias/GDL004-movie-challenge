import React, { useEffect, useState } from "react";


function App() {
  const [searchName, setSearchName] = useState('Batman')
  useEffect(() => {
    getMovie();
  }, []);
  
  

  const MOVIE_API_URL = `http://www.omdbapi.com/?apikey=745c4feb&s=${searchName}`
  

  const getMovie = async () => {
    const response = await fetch(MOVIE_API_URL);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <form className="serch-form"
      onSubmit={ (e) => { 
        e.preventDefault()
        getMovie()
      }}    
      >        
        <input className="serch-bar" type="text" 
          onChange={((e)=>{         
          setSearchName(e.target.value)
        })}/>
        <button className="serch-button" type="submit">
          Serch
        </button>
      </form>
    </div>
  );
}


export default App