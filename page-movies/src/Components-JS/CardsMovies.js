import React from "react";
import Styles from '../Components-CSS/CardMoviePoster.module.css'

function CadsMovies({data}) {

    const About=(()=>{
     
      console.log(data)
     
    })
    
    return (
      <div className={Styles.card}>
        <img  onClick = {About}  alt='poster' src={data.Poster}/>
        <p>{data.Title}</p>
      </div>
    )
  }
  
  export default CadsMovies;