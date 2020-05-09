import React from 'react';
import Image  from '../Components-CSS/img/logo.svg';
import '../Components-CSS/Navbar.css';  
import Search from './Search';
import { Link } from 'react-router-dom'

const Navbar = ({ setSearchName }) => {

    return (
    <div className="container-fluid p-0 nav-cont">

        <nav className="navbar navbar-toggler black p-0 m-0 border-0 d-flex justify-content-around flex-wrap fixed-top">
            <Link to='/Home'>
                <img className="logoSmall" src={Image} />
            </Link>
            <Search setSearchName={setSearchName} />
        </nav> 
    </div>

    );
}
 
export default Navbar;