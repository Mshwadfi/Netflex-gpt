import { useDispatch } from "react-redux"
import { options } from "../utils/Links";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice"
import { useSelector } from "react-redux";
const usePopularMovies = () =>{
    const popularMovies = useSelector(store => store.Movies.popularMovies)

    const dispatch = useDispatch();

    const fetchPopularMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1'
        , options);
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData.results))
    }

    useEffect(()=>{
        !popularMovies && fetchPopularMovies();
    },[])
}

export default usePopularMovies;