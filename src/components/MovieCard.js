import React from 'react'
import { MOVIE_LIST_IMG } from '../utils/constants'

const MovieCard = ({movies}) => {
  return (
    <div className='mr-4'>
      <img alt='movie card' src={MOVIE_LIST_IMG+movies} className='max-w-40 rounded-md'></img>
    </div>
  )
}

export default MovieCard