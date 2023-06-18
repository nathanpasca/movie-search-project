import axios from "axios"

//DEFINE THE API KEY AND BASE URL
const apiKey = process.env.REACT_APP_APIKEY
const baseURL = process.env.REACT_APP_BASEURL

//USING ASYNC AND AXIOS TO FETCH THE DATA
export const getMovie = async() => {
   const movie = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`);

   //RETURN THE RESULT OF movie
   return movie.data.results
}

//FETCH THE MOVIE QUERY
export const Search = async (q) => {
    const searchMovie = await axios.get(`${baseURL}/search/movie?query=${q}&api_key=${apiKey}`)
    return searchMovie.data
}

