import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import {useDispatch} from 'react-redux';

const useMovieTrailor = (id) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?', API_OPTIONS);
        const json = await data.json()
        const filterData = json.results.filter(video => video?.type == "Trailer");
        const trailerVideo = filterData[0];
        dispatch(addTrailerVideo(trailerVideo));
    }

    useEffect(() => {
        getMovieVideo();
    },[]);
}

export default useMovieTrailor