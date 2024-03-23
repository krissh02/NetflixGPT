
import { useSelector } from 'react-redux';
import useMovieTrailor from '../hooks/useMovieTrailor';

const VideoBackground = ({id}) => {
    const trailerId = useSelector(store=> store.movies?.trailerVideo);
    console.log(trailerId);
    console.log(trailerId?.key);
    useMovieTrailor(id);

  return (
    <div className='w-screen'>
        <iframe className='w-screen aspect-video' 
        src={"https://www.youtube.com/embed/" + trailerId?.key + "?&autoplay=1&mute=1&loop=1" } title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground