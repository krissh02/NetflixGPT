import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movies?.nowPlaying);
  const popularMovie = useSelector(store=> store.movies?.popularMovies)
  const topRatedMovie = useSelector(store=> store.movies?.topRatedMovies)
  const UpcomingMovie = useSelector(store=> store.movies?.upcomingMovies)

  if(movies == null ) return;
  return (
    <div className='bg-black px-12 pt-4'>
      <div className='-mt-[15%] md:-mt-80 relative z-20'>
        <MovieList title="Now Playing" movies = {movies}/>
        <MovieList title="Top Rated" movies = {topRatedMovie}/>
        <MovieList title="Upcoming" movies = {UpcomingMovie}/>
        <MovieList title="Popular" movies = {popularMovie}/>
      </div>
    </div>
  )
}

export default SecondaryContainer