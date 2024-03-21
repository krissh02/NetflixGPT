import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='text-white pt-[18%] px-20 absolute w-screen aspect-video bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold my-2'>{title}</h1>
        <p className='text-lg my-2 mb-4 w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black font-bold text-xl p-4 px-14 my-2 mr-2 rounded-md'>Play</button>
            <button className='bg-gray-400 text-white font-bold text-xl p-4 px-12 rounded-md opacity-60'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle