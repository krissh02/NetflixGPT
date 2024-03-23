import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';

const MovieList = ({title,movies}) => {
  if(movies == null) return;
  return (
    <div>
      <h1 className='text-lg md:text-3xl text-white my-4 hover:text-lime-500'>{title.toUpperCase()}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
          {
            movies?.map((movie) => <Link to={'/moviedetails/'+movie.id}><MovieCard  key={movie.id} movies = {movie?.poster_path}/></Link>)
          }
        </div>
    </div>
  )
}

export default MovieList