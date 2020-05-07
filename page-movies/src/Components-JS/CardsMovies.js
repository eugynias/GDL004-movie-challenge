import React, {useState,useContext} from "react";
import Styles from '../Components-CSS/CardMoviePoster.module.css';
import {MovieContext} from "../MovieContext";


function CadsMovies({dataItem}) {
    
 //const titleMovie = dataItem.Title;
const [movies,setMovies] =useContext(MovieContext);
const [titleMovie, settitleMovie] = useState(dataItem.Title)
const [newFetch, setNewFetch] = useState('')

/* 'https://www.omdbapi.com/?apikey=745c4feb&t=Friends&season=5' */

// const MOVIE_API_URL2 = `https://www.omdbapi.com/?apikey=745c4feb&t=${titleMovie}`

//   const getMovie2 = async () => {
//     const response = await fetch(MOVIE_API_URL2);
//     const data = await response.json();
//     console.log(data);
//     setNewFetch(data);
//   };

 // getMovie2();

/*   const getData = () => {
   return new Promise ((resolve, reject) => {
        reject error
        resolve getMovie2();  
    })
    }
 
    getData().then .catch */
/* const objPropsFe = {
   score: newFetch.imdbRatingn,
    age: newFetch.Rated,
    time: runtem
} */
    
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card shadow-lg mb-5 bg-white rounded"  style={{width: '18rem'}}>
                <img src={movies.Poster} style={{height: '22rem'}} alt="poster" />
                {/* <div className="card-body" style={{height: '5rem'}} className={Styles.cardTitle}> */}
                    {/* <p className="card-text bg-white py-3 px-4">{movies.Title}</p> */}
                    <p className="card-text bg-white py-3 px-4">{movies.imdbRatingn}</p>
                {/* </div> */}
                </div>
            </div>
    );

  }
  
  export default CadsMovies;