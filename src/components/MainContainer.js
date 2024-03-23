import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlaying);
    if(movies == null) return;


    const mainMovie = movies[15];
  return (
    <div className='pt-[25%] bg-black md:pt-0'>
        <VideoTitle title={mainMovie.title} overview = {mainMovie.overview}/>
        <VideoBackground id = {mainMovie.id}/>
    </div>
  )
}

export default MainContainer