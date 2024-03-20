import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const VideoBackground = ({id}) => {
    const dispatch = useDispatch();
    const trailerId = useSelector(store=> store.movies?.trailerVideo);

    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/1011985/videos?', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        const filterData = json.results.filter(video => video?.type == "Trailer");
        console.log(filterData);
        const trailerVideo = filterData[0];
        dispatch(addTrailerVideo(trailerVideo));
    }

    useEffect(() => {
        getMovieVideo();
    },[]);
  return (
    <div>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerId?.key} title="YouTube video player" allow="accelerometer; autoplay; encrypted-media; gyroscope; web-share"></iframe>
    </div>
  )
}

export default VideoBackground