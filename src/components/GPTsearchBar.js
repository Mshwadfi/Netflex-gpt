import { useDispatch, useSelector } from "react-redux";
import languages from "../utils/languages";
import { useRef } from "react";
import openAi from '../utils/openAi'
import { addGPTmovieList } from "../utils/GPTslice";
import usFetchRecommendations from "../hooks/useFetchRecommendations";
const GPTsearchBar = () =>{
    const userLang = useSelector(store => store.language.language)
    const searchText = useRef(null);
    const dispatch = useDispatch();    
    const handleGPTsearch = async() =>{
        //GPT API call to get search results

        const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated array like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        

        const serachResult = await openAi.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          const results = serachResult.choices[0].message.content.split(',');
          const moviesArrayPromise = results.map(async(movie) => await usFetchRecommendations(movie));
          const moviesArray = await Promise.all(moviesArrayPromise);
          console.log(moviesArray);
          console.log(results)
          dispatch(
            addGPTmovieList({ GPTmovieResults: results, GPTmovieList: moviesArray })
        );
          
    }
    console.log(userLang)
    return(
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 gb-black grid grid-cols-12"
                onSubmit={(e) => e.preventDefault()}>
                <input type="text" ref={searchText}
                    className="p-4 m-4 col-span-9"
                    placeholder={languages[userLang].placeholder}
                />
                <button className="col-span-3 m-4 p-4 bg-red-500
                    text-white rounded-md font-bold"
                    onClick={handleGPTsearch}>
                        {languages[userLang].search}
                    </button>
            </form>
        </div>
    )
}

export default GPTsearchBar;