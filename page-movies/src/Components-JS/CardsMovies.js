import React from "react";
import Styles from '../Components-CSS/CardMoviePoster.module.css';

function CadsMovies({data}) {
    
    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card shadow-lg mb-5 bg-white rounded"  style={{width: '18rem'}}>
                <img src={data.Poster} style={{height: '22rem'}} alt="poster" />
                <div className="card-body" style={{height: '5rem'}}className={Styles.cardTitle}>
                    <p className="card-text bg-white py-3 px-4">{data.Title}</p>
                </div>
                </div>
            </div>
    );
  }
  
  export default CadsMovies;