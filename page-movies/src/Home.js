import React from "react";
import Styles from './Components-CSS/Home.module.css'
import { Link } from 'react-router-dom';



function Home (){
    return(

        <div className={Styles.home}>

            <h1 className={Styles.title}>
                Who is the Best?
            </h1>
            <div className={Styles.avatars} >

                <div>
                    <Link to='/FetchData'>
                    <img  className={Styles.avatarSuperMan} alt='icons' src='https://image.flaticon.com/icons/png/512/1674/1674292.png'/>
                    </Link>
                </div>

                <div>
                    <Link to='/FetchData'>

                        <img  className={Styles.avatarBatman} alt='icons' src='https://image.flaticon.com/icons/png/512/1674/1674291.png'/>
                    </Link>
            </div>
       
            </div>

        </div>
    )
}
export default Home