import React from 'react'
import { useSelector } from 'react-redux'
import useMovieInfo from '../hooks/useMovieInfo';
import { MOVIE_LIST_IMG } from '../utils/constants';

const MovieInfoCard = ({id}) => {
    const movieInfo = useSelector(store=> store.movieDetails?.movieInfo);
    const movieClip = useSelector(store=> store.movieDetails?.clipId);
    useMovieInfo(id);
    if(!movieInfo) return;
    const {title,overview,release_date,vote_average,genres} = movieInfo;
    console.log(genres);
  return (
    <div className='flex'>
            <iframe className='max-w-[40%] max-h-[50%] aspect-[10/16] rounded-lg' 
            src={"https://www.youtube.com/embed/"+movieClip?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className='pl-14'>
                <h1 className='text-6xl font-bold text-white mb-10 mt-20 w-2/3'>{title}</h1>
                <p className='text-xl text-white font-bold inline pr-4'>{release_date}</p>
                <p className='text-xl text-white font-bold inline bg-red-600 rounded-lg p-2 px-4'>
                    Vote Avg - {vote_average}</p><br></br>
                {/* {
                    genres.map((g,index)=> {
                    <p className='text-xl text-white font-bold block pr-4 mt-2' key={g.index}>
                        {g[index].name}</p>
                    })
                } */}
                <p className='text-xl text-white mt-6 font-bold w-1/2'>{overview}</p>
        </div>
    </div>
  )
}

export default MovieInfoCard