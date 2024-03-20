
import Header from './Header'
import useFetchNowPlayingMovies from "../hooks/useFetchNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Browse = () => {
  useFetchNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse