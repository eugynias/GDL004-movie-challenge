import React from "react";

function CadsMovies({data}) {
    
    return (
      <div>
        <img  src={data.Poster}/>
        <p>{data.Title}</p>
      </div>
    )
  }
  
  export default CadsMovies;