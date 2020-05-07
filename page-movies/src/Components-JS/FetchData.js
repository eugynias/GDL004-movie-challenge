import React, { useState } from "react";

import CadsMovies from './CardsMovies';

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
         <div className="row mt-5 pt-5">
        {listMovie.map(item => {
            return (            
                <div className="col-sm-4" key={item.imdbID}>
                    <CadsMovies  dataItem={item}/>
                </div>  
            )
         })}
      </div>
   
   <div className="container mt-4">
      <button disabled={disabledBack} onClick={pageChange} className="serch-button" type="button">-</button> 
      <button disabled={disabledNext} onClick={pageChange} className="serch-button" type="button">+</button>
    </div>
    </div>
  );
}
export default Fetch
