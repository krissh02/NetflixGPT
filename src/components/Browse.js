
import Header from './Header'
import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);
  useFetchNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {
        showGptSearch ? 
        <GptSearch /> : 
        <>
          <MainContainer /> 
          <SecondaryContainer />
        </>
      }
    </div>
  )
}

export default Browse