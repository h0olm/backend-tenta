import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=2c0ba07be9914192e15c8e0188df0835&language=en-US&page=1'
      );
      setMovies(result.data.results);
    };
    fetchData();
  }, []);

  return (

    <div className="top-movies" style={{ overflowX: 'scroll', overflowY: 'hidden' }}>
      {movies.map((movie) => (
        <div key={movie.id} className="ratedCard">
        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} className="ratedImg"/>
        <h1 className='ratedTitle'>{movie.title}</h1>
            <h1 className='ratedRating'>{movie.vote_average}</h1>
        </div>
      ))}
      
    </div>
  );
};

export default TopMovies;
