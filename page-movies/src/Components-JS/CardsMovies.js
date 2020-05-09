import React, {useState,useContext} from "react";
import Styles from '../Components-CSS/CardMoviePoster.module.css';



function CadsMovies({dataItem}) {
    

 //const titleMovie = dataItem.Title;
<<<<<<< HEAD

const [titleMovie, settitleMovie] = useState(dataItem.Title)
=======
const [titleMovie] = useState(dataItem.Title)

>>>>>>> ce7f0b7baa63881b8ecdcc4c07af3302994a5cf5
const [newFetch, setNewFetch] = useState('')



const MOVIE_API_URL2 = `https://www.omdbapi.com/?apikey=745c4feb&t=${titleMovie}`

  const getMovie2 = async () => {
    const response = await fetch(MOVIE_API_URL2);
    const data = await response.json();
    setNewFetch(data);
    return data
  };

<<<<<<< HEAD
 getMovie2();

  
    
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card shadow-lg mb-5 bg-white rounded"  style={{width: '18rem'}}>
=======
    
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card shadow-lg mb-5 bg-white"  style={{width: '18rem'}}>
>>>>>>> ce7f0b7baa63881b8ecdcc4c07af3302994a5cf5
                <img src={dataItem.Poster} style={{height: '22rem'}} alt="poster" />
                <div className="card-body" style={{height: '5rem'}} className={Styles.cardTitle}>
                    <p className="card-text bg-white py-3 px-4">{dataItem.Title}</p>
                </div>
                </div>
            </div>
    );

  }
  
  export default CadsMovies;