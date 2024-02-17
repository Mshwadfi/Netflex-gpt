import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store => store.Movies?.nowPlayingMovies);
    
    if (!movies) return <div>Loading...</div>;
    
    
    const idx = Math.trunc(Math.random() * 20);
    const mainMovie = movies[idx];
    if (!mainMovie || !mainMovie.id) return;
    const {id} = mainMovie;
    
    return (
        <div>
            
            <VideoTitle data={mainMovie}/>
            <VideoBackground movieID={id}/>
        </div>
    );
};

export default MainContainer;
