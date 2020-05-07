import React, { useState } from "react";
import Fetch from './FetchData';


function SearchInput() {
    const [search, setSearchName] = useState('');
    
    return(
        
        <form className="serch-form"
            onSubmit={ (e) => { 
                e.preventDefault();
                <Fetch/>

            }} 
        >        
        
            <input className="serch-bar" value={search} type="text" 
                onChange={((e)=>{         
                    setSearchName(e.target.value);
                })}/>
            <img width='21'alt='lupita'  src='https://image.flaticon.com/icons/svg/1086/1086933.svg'/>
        </form> 
        
        
    )
   
}

export default SearchInput