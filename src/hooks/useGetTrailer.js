import { useEffect } from 'react';
import {options} from '../utils/Links'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer } from '../utils/moviesSlice';

const useGetTrailer = (id) =>{
    const dispatch = useDispatch();

    const currentTrailer = useSelector(store => store.Movies.trailer)
    const fetchTrailer = async () =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
              id +
              "/videos?language=en-US",
            options
          );
        const jsonData = await data.json();
        if (!jsonData.results || jsonData.results.length === 0) return;
        console.log(jsonData.results)
        const videoClips = jsonData?.results.filter((movie) => 
        movie.type === "Trailer");
        const trailer = videoClips? videoClips[0] : jsonData.results[0];
        dispatch(addTrailer(trailer))
    }
    
    

    useEffect( () =>{
     !currentTrailer && fetchTrailer();
    },[])
}

export default useGetTrailer;