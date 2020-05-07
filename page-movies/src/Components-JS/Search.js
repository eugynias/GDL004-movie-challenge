import React, { useState } from 'react';
import '../Components-CSS/Search.css'

const Search = ({ setSearchName }) => {
    const [searchMovie, setSearchMovie] = useState('');

    return ( 

        <form
            className="serch-form"
            onSubmit={ (e) => { 
                e.preventDefault()
                if (searchMovie === '') {
                    return
                } else {
                    setSearchName(searchMovie);
                }
            }}    
        >        
            <input
                placeholder='Search'
                className="serch-bar mt-5" type="text" 
                onChange={((e)=>{         
                    setSearchMovie(e.target.value)
                })}
            />
        </form>

     );
}
 
export default Search;