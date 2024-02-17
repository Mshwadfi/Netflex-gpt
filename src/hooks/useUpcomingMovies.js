import { useEffect } from 'react';
import {options} from '../utils/Links'
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';
import { useSelector } from 'react-redux';
const useUpcomingMovies = () =>{

  const upcomingMovies = useSelector(store => store.Movies.upcomingMovies)
    const dispatch = useDispatch();

    
    const fetchuUpcomingMovies = async () =>{
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
          , options
          );
        const jsonData = await data.json();
        
        dispatch(addUpcomingMovies(jsonData.results))
    }
    
    

    useEffect( () =>{
      !upcomingMovies && fetchuUpcomingMovies();
    },[])
}

export default useUpcomingMovies;