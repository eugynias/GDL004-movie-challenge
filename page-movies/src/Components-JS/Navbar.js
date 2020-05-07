import React, {useState} from 'react';

import Image  from '../Components-CSS/img/logo.svg';
import '../Components-CSS/Navbar.css'


const Navbar = ({dataItem}) => {

const showScore = () => {

}
    return (
    <div className="container">

        <nav className="navbar navbar-toggler navbar-light bg-warning bg-warning px-0 fixed-top">
            <img className="navbar-brand logoSmall" src={Image} />


            <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation" 
            onClick={console.log('hola')} 
            >
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#" onClick={showScore}>Score Movies</a>
                    </li> 
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Recent Movies</a>
                    </li>
                </ul>

               {/*  <form className="serch-form"
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
                    Search
                    </button>
             </form> */}

            </div>
        </nav> 
    </div>

    );
}
 
export default Navbar;