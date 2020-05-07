import React from 'react';
import Image  from '../Components-CSS/img/logo.svg';
import '../Components-CSS/Navbar.css';


const Navbar = ({dataItem}) => {

    return (
    <div className="container-fluid p-0 nav-cont">
        <nav className="navbar navbar-toggler black p-0 m-0 border-0 d-flex justify-content-center">
            <img className="navbar-brand logoSmall" src={Image} />
        </nav> 
    </div>

    );
}
 
export default Navbar;