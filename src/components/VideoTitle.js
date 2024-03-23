import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='text-white pt-[20%] md:pt-[18%] px-14 md:px-20 absolute w-screen aspect-video bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold my-2 mb-6'>{title}</h1>
        <p className='text-md md:text-lg my-2 mb-4 w-6/12 md:w-1/4 hidden md:block'>{overview}</p>
        <div>
            <button className='bg-white text-black font-bold text-md md:text-xl p-2 md:p-4 px-8 md:px-14 my-2 mr-2 rounded-md'>Play</button>
            <button className='bg-gray-400 text-white font-bold text-md md:text-xl p-2 md:p-4 px-6 md:px-12 rounded-md opacity-60'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle