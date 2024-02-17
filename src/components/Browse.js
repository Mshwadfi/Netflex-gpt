// Browse.js
import Header from './Header';
import GPTsearch from './GPTsearch';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGPTsearch = useSelector(store => store.GPT.showGPTsearch)
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    
    <div>
      <Header />
      {
        showGPTsearch? (
          <GPTsearch />
        ) : (
          <>
           <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  
  )
};

export default Browse;
