import React, {useState} from 'react';

import Image  from '../Components-CSS/img/logo.svg';
import Search from './Search';

const Navbar = ({ setSearchName }) => {

    return (
    <div className="container">

        <nav className="navbar navbar-toggler navbar-light bg-warning bg-warning px-0 fixed-top">
            <img className="navbar-brand logoSmall" src={Image} />

            <Search setSearchName={setSearchName} />
            
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