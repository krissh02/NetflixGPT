import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-72 px-10 w-4/12'>
        <h1 className='text-3xl font-bold my-2'>{title}</h1>
        <p className='text-lg my-2 mb-4'>{overview}</p>
        <div>
            <button className='bg-gray-400 text-white text-lg p-4 px-12 my-2 mr-2 rounded-md opacity-60'>▶️ Play</button>
            <button className='bg-gray-400 text-white text-lg p-4 px-12 rounded-md opacity-60'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle