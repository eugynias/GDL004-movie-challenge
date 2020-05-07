const fetchData = async (searchValue, page) => {
    const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=745c4feb&s=${searchValue}&page=${page}`;
    const response = await fetch(MOVIE_API_URL)
                            .then((response) => response.json(), (reject) => console.log('the API fail to retrieve the data'))
                            .catch((err) => console.log(`there is the error: '${err}`))
    return response.Search;
};

  export default fetchData;