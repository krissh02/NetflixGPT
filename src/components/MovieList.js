import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  if(movies == null) return;
  return (
    <div>
      <h1 className='text-3xl text-white my-4'>{title.toUpperCase()}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
          {
            movies?.map((movie) => <MovieCard  key={movie.id} movies = {movie?.poster_path}/>)
          }
        </div>
    </div>
  )
}

export default MovieList