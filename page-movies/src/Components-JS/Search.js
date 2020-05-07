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
                placeholder='Search'
                className="serch-bar mt-5" type="text" 
                onChange={((e)=>{         
                    setSearchMovie(e.target.value)
                })}
            />
            <img width='21'alt='lupita'  src='https://image.flaticon.com/icons/svg/1086/1086933.svg'/>
        </form>

     );
}
 
export default Search;