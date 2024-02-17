import { useEffect } from 'react';
import {options} from '../utils/Links'
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/moviesSlice';
import { useSelector } from 'react-redux';
const useTopRatedMovies = () =>{

  const topRatedMovies = useSelector(store => store.Movies.topRatedMovies)

    const dispatch = useDispatch();

    
    const fetchuTopRatedMovies = async () =>{
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
          , options
          );
        const jsonData = await data.json();
        
        dispatch(addTopRatedMovies(jsonData.results))
    }
    
    

    useEffect( () =>{
      !topRatedMovies && fetchuTopRatedMovies();
    },[])
}

export default useTopRatedMovies;