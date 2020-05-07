import React,{useState,createContext, useEffect} from "react";

export const MovieContext = createContext();

export const MovieProvider = ({children}) =>{

    const [movies,setMovies] =useState({});
    const [searchName, setSearchName] = useState('Batman');
    const [page,setPage] = useState(1)

    useEffect(() => {
        (async () => {
            const [movieResult] = await Promise.all([fetch(`https://www.omdbapi.com/?apikey=745c4feb&s=${searchName}&page=${page}`)]);
            const data = await movieResult.json();
            console.log(data)
            setMovies(movieResult);
          })();
        }, []);

    return(
        <MovieContext.Provider value={[movies, setMovies,searchName,setSearchName,page,setPage]}>
            
            {children}
        </MovieContext.Provider>

    );
}