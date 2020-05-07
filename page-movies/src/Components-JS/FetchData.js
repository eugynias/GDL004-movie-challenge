import React, { useEffect, useState } from "react";
import CadsMovies from './CardsMovies';
import Navbar from './Navbar';
import fetchData from './GetMovie';

function Fetch({searchVal}) {
  const [searchName, setSearchName] = useState(searchVal);
  const [page,setPage] = useState(1) //con el botón agregaría mas paginas
  const [listMovie, setListMovie] = useState([]);
  const [disabledNext, setDisabledNext]= useState(false);
  const [disabledBack, setDisabledBack]= useState(false);
  
  useEffect(() => {
    getMovie();
  }, []);
  
  const getMovie = async () => {
    const result = await fetchData(searchName, page);
    setListMovie(result);
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
        

         <div className="row">  
        {listMovie.map(item =>(            
            <div className="col-sm-4" key={item.Title}>
                <CadsMovies  dataItem={item}/>
                <Navbar dataItem={item} />
            </div>  
         ))}
      </div>
   
   <div className="container mt-4">
      <button disabled={disabledBack} onClick={pageChange} className="serch-button" type="button">-</button> 
      <button disabled={disabledNext} onClick={pageChange} className="serch-button" type="button">+</button>
    </div>
    </div>
  );
}
export default Fetch
