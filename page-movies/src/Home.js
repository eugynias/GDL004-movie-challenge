import React from "react";
import NavBar from './Components-JS/Navbar';
import Styles from './Components-CSS/Home.module.css'
import { Link } from 'react-router-dom'



function Home (){
    return(
        <div className={Styles.home}>
            <h1 className={Styles.title}>
                Who is the Best?
            </h1>
            <div className={Styles.avatars} >
                    <Link className={Styles.links  } to='/Superman'>
                    <img  className={Styles.avatarSuperMan  } alt='icons' src='https://image.flaticon.com/icons/png/512/1674/1674292.png'/>
                    </Link>
                
                    <Link to='/Batman'>
                        <img  className={Styles.avatarBatman} alt='icons' src='https://image.flaticon.com/icons/png/512/1674/1674291.png'/>
                    </Link>
            </div>
        </div>

    )
}
export default Home