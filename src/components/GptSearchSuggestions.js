import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const GptSearchSuggestions = () => {
    const {gptSearchMovie,gptSearchName} = useSelector(store=> store.gpt);
    if(!gptSearchMovie) return; 
  return (
    <div className='p-4 my-4 w-9/12 md:w-1/2 bg-black bg-opacity-85 mx-auto rounded-lg'>
        <div className=''>
            <MovieList title={gptSearchName} movies={gptSearchMovie}/>
        </div>
    </div>
  )
}

export default GptSearchSuggestions