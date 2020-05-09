
import React, { useState } from "react";
import '../Components-CSS/FetchData.css';
import CadsMovies from './CardsMovies';
import Navbar from './Navbar'
function Fetch({ page, setPage, listMovie }) {
  
  const [disabledNext, setDisabledNext]= useState(false);
  const [disabledBack, setDisabledBack]= useState(false);


  const pageChange = (e) =>{
    if ( e.target.innerHTML === '+'){ 
      if(page <10){
        setPage(page + 1)
        setDisabledBack(false)
      }else{
        setDisabledNext(true)
      }
      
    } else if (e.target.innerHTML === '-'){
        if(page >= 1){
          setPage(page - 1)
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
  <div className="container paginations">
      <button disabled={disabledBack} onClick={pageChange} className="pagination pagination-left" type="button">-</button> 
      <button disabled={disabledNext} onClick={pageChange} className="pagination pagination-left" type="button">+</button>
    </div>
    </div>
  );
}
export default Fetch
