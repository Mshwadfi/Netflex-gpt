import { useSelector } from "react-redux";
import MovieList from "./MovieList";



const GPTsearchRecommendations = () =>{
    const {GPTmovieList, GPTmovieNames} = useSelector(store  => store.GPT);
    // console.log(GPTmovieList.length)
    return GPTmovieNames && (
        <div className="p-4 m-4 text-white">
            {GPTmovieList.map((movies , index) =>(
                <MovieList key={GPTmovieNames[index]} title={GPTmovieNames[index]} movies={movies} />
            ))}
        </div>
    )
}

export default GPTsearchRecommendations;