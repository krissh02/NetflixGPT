import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import {useDispatch} from 'react-redux';
import { addMovieClip } from '../utils/movieDetailsSlice';

const useMovieInfo = (id) => {
    const dispatch = useDispatch();
    const getMovieInfo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-IN', API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter(video => video?.type == "Clip");
        const trailerVideo = filterData[0];
        dispatch(addMovieClip(trailerVideo));
    }

    useEffect(() => {
        getMovieInfo();
    },[]);
}

export default useMovieInfo