
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useFetchNowPlayingMovies = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    getMovieList();
  })

  const getMovieList = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-IN&page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }
}

export default useFetchNowPlayingMovies