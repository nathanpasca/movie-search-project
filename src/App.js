import { useEffect, useState } from 'react';
import './App.css';
import { Search, getMovie } from './api';

function App() {

  const [getPopular, setPopular] = useState([])

  
  useEffect( () => {
    getMovie().then((result) => {
      setPopular(result)
    })
  }, [])
  
  
  const PopularMovieList = () => {
    return getPopular.map((movie, i) => {
      return(
        <div key={i}>
          <div key={movie.title}></div>
          <div key={movie.poster_path}></div>
          <div key={movie.overview}></div>
          <div key={movie.release_date}></div>
          <div key={movie.vote_average}></div>
          <div className='Movie-wrapper'>
            <div className='Movie-title'>{movie.title}</div>
            <img className='Movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}></img>
            <div className='Movie-desc'>{movie.overview}</div>
            <div className='Movie-date'>{movie.release_date}</div>
            <div className='Movie-rate'>{movie.vote_average}</div>
          </div>
        </div>
      )
    })
  }
  
  const searchMovie = async (q) => {
    if (q.length > 3) {
      const query = await Search(q)
      setPopular(query.results)
    }
  }
  
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Movie Finder</h1>
        <input
            className='Movie-input'
            placeholder='Search Movie...'
            onChange={({ target }) => searchMovie(target.value)}
        />
        <div className='Movie-container'>
          <PopularMovieList/>
        </div>
      </header>
    </div>
  );
}

export default App;
