import React, { useEffect } from 'react'
import { API_OPTIONS, MOVIE_LIST_IMG } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addMovieDetails } from '../utils/movieDetailsSlice';
import MovieInfoCard from './MovieInfoCard';
import { useParams } from 'react-router-dom';
import Header from './Header';

const MovieDetails = () => {
    const dispatch = useDispatch();
    const showGptSearch = useSelector(store=> store.gpt.showGptSearch);
    const movieInfo = useSelector(store=> store.movieDetails?.movieInfo);
    const {movieId} = useParams();
    console.log(movieId);

    const handleMovieDetails = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'?language=en-IN', API_OPTIONS);
        const json = await data.json();
        dispatch(addMovieDetails(json)); 
    }
    useEffect(()=> {
        handleMovieDetails();
    },[])
  return (
    <div className='bg-gradient-to-r from-black'>
        <div className='w-full h-full border border-red-600 absolute -z-10'>
            <img src={MOVIE_LIST_IMG+movieInfo?.poster_path} className='w-screen h-screen border object-cover object-top'></img>
        </div>
        <div className='w-screen h-screen flex justify-evenly items-center pl-20'>
            <MovieInfoCard id={movieId}/>
        </div>
    </div>
  )
}

export default MovieDetails