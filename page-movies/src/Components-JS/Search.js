import React, { useState } from 'react';

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
                className="serch-bar mt-5" type="text" 
                onChange={((e)=>{         
                    setSearchMovie(e.target.value)
                })}
            />
            <button className="serch-button" type="submit">
            Search
            </button>
        </form>

     );
}
 
export default Search;