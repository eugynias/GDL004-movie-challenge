import React from "react";
import NavBar from './Components-JS/Navbar';
import Styles from './Components-CSS/Home.module.css'

function Home (){
    return(
        <div>
            <NavBar/>
            <h1 className={Styles.title}>
                How is the Best?
            </h1>
            <div className={Styles.avatars} >
                <div>
                    <img className={Styles.avatarSuperMan} alt='icons' src='https://image.flaticon.com/icons/png/512/1674/1674292.png'/>
                </div>
                <div>
                    <img  className={Styles.avatarBatman} alt='icons' src='https://image.flaticon.com/icons/png/512/1674/1674291.png'/>
                </div>
            </div>
        </div>

    )
}
export default Home