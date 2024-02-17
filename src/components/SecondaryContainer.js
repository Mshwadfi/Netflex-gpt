import { useSelector } from "react-redux";
import MoviList from "./MovieList";
import languages from "../utils/languages";


const SecondaryContainer = () =>{

    const movies = useSelector(store => store.Movies);
    const userLanguage = useSelector(store => store.language.language);
    const displayedLanguage = languages[userLanguage].moviesCategoryName;
    console.log(displayedLanguage , "fdds")
    return (<div className="bg-black">

        <div className="-mt-80 relative z-10 pl-8 pr-10">
            <MoviList title={displayedLanguage[0]} movies={movies.nowPlayingMovies}/>
            <MoviList title={displayedLanguage[1]} movies={movies.popularMovies}/>
            <MoviList title={displayedLanguage[2]} movies={movies.upcomingMovies}/>
            <MoviList title={displayedLanguage[3]} movies={movies.topRatedMovies}/>
        </div>

        {/* moviw list1 */}
            {/* -movie card */}
        {/* moviw list2 */}
        {/* moviw list3 */}
    </div>
    )
}

export default SecondaryContainer;