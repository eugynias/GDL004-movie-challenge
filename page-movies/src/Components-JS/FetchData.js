import React, { useEffect, useState } from "react";


function App() {
  const [searchName, setSearchName] = useState('Batman');
  const [page,setPage] = useState(1) //con el botón agregaría mas paginas
  const [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    getMovie();
  }, []);
  
  

  const MOVIE_API_URL = `http://www.omdbapi.com/?apikey=745c4feb&s=${searchName}&page=${page}`
  

  const getMovie = async () => {
    const response = await fetch(MOVIE_API_URL);
    const data = await response.json();
    console.log(data);
    setListMovie(data.Search)
    //setListMovie([...listMovie, ...data.Search])//nos agrega a la misma lista
    return data;
  };

  const pageChange = (e) =>{
    console.log(typeof e.target.innerHTML);
    if ( e.target.innerHTML === '+'){ 
      // if (page > 30){

      // }     
      setPage(page + 1) 
      getMovie()
    } else if (e.target.innerHTML === '-') {
      setPage(page - 1) 
      getMovie()
    }
    
  } 
  

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
      <ul>
        {listMovie.map(item => <li> {item.Title}</li>)}
      </ul>
      <button disabled={true} onClick={pageChange} className="serch-button" type="button">-</button> 
      <button disableb={false} onClick={pageChange} className="serch-button" type="button">+</button>
    </div>
  );
}


export default App