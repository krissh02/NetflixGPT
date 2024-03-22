import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestions from './GptSearchSuggestions'
import { LOGIN_BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-20'>
            <img src={LOGIN_BG_IMG}/>
        </div>
        <GptSearchBar />
        <GptSearchSuggestions />
    </div>
  )
}

export default GptSearch