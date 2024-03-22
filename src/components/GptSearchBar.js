import React, { useRef } from 'react'
import { lang } from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import { addGptSearchMovie } from '../utils/gptSlice';


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const changeLan = useSelector(store=> store.config.lang);
    const searchInput = useRef(null);

    const handleGptSearchClick = async () => {
        const data  = await fetch('https://api.themoviedb.org/3/search/movie?query='+searchInput.current.value+'&include_adult=false&language=en-IN&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addGptSearchMovie({gptSearchName:searchInput.current.value,gptSearchMovie:json.results}));
        
    }
  return (
    <div className='pt-36 flex justify-center'>
        <form className='w-1/2 bg-black p-4 grid grid-cols-12 rounded-md' onSubmit={(e) => e.preventDefault()}>
            <input type='text' placeholder={lang[changeLan].gptSearchPlaceholder} className='col-span-9 p-2 rounded-md py-4 text-lg font-bold' ref={searchInput}></input>
            <button className='col-span-3 bg-red-600 text-white p-2 px-8 rounded-md ml-4 text-lg font-bold' onClick={handleGptSearchClick}>{lang[changeLan].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar