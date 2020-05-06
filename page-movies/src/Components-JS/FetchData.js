import React, { useEffect, useState } from "react";
import CadsMovies from './CardsMovies'




function Fetch() {
  const [searchName, setSearchName] = useState('Batman');
  const [page,setPage] = useState(1) //con el botón agregaría mas paginas
  const [listMovie, setListMovie] = useState([]);
  const [disabledNext, setDisabledNext]= useState(false);
  const [disabledBack, setDisabledBack]= useState(false);
  

  useEffect(() => {
    getMovie();
  }, []);
  
  console.log(listMovie)


  const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=745c4feb&s=${searchName}&page=${page}`

  
  const getMovie = async () => {
    const response = await fetch(MOVIE_API_URL);
    const data = await response.json();
    console.log(data);
    setListMovie(data.Search)
    //setListMovie([...listMovie, ...data.Search])//nos agrega a la misma lista
    return data;  
  };
  
  const pageChange = (e) =>{
    if ( e.target.innerHTML === '+'){ 
      if(page <10){
        setPage(page + 1) 
        getMovie()
        setDisabledBack(false)
      }else{
        setDisabledNext(true)
      }
      
    } else if (e.target.innerHTML === '-'){
        if(page >= 1){
          setPage(page - 1) 
          getMovie()
          setDisabledNext(false)
        }else{
          setDisabledBack(true)
          setPage(1) 
        }
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

         <div className="row">  
        {listMovie.map(item =>(            
            <div className="col-sm-4" key={item.Title}>
                <CadsMovies  data={item}/>
            </div>  
         ))}
      </div>
   
      <button disabled={disabledBack} onClick={pageChange} className="serch-button" type="button">-</button> 
      <button disabled={disabledNext} onClick={pageChange} className="serch-button" type="button">+</button>

    </div>
  );
}


export default Fetch