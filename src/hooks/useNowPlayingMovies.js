import { useDispatch } from "react-redux";
import { options } from "../utils/Links";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const useNowPlayingMovies = () =>{
    const nowPlayingMovies = useSelector(store => store.Movies.nowPlayingMovies)
    const dispatch = useDispatch();
    const fetchNowPlayingMovies = async () => {
        
          const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
           options);
        
          const jsonData = await data.json();
          dispatch(addnowPlayingMovies(jsonData.results));
      
      };
      
    
    useEffect(() =>{
        !nowPlayingMovies && fetchNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;