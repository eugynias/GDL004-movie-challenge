import React from 'react';
import Image  from '../Components-CSS/img/logo.svg';
import '../Components-CSS/Navbar.css';  
import Search from './Search';
import { Link } from 'react-router-dom'

const Navbar = ({ setSearchName }) => {

    return (
     <div className="container-fluid p-0 nav-cont">

        <nav className="navbar navbar-toggler black p-0 m-0 border-0 d-flex justify-content-center">
            <Link to='/Home'>
                <img className="navbar-brand logoSmall" src={Image} />
            </Link>

            <Search setSearchName={setSearchName} />
            
            <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation" 
            
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Score Movies</a>
                    </li> 
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Recent Movies</a>
                    </li>
                </ul>

            </div>

        </nav> 
    </div>

    );
}
 
export default Navbar;