import { options } from "../utils/Links";




 
  const usFetchRecommendations = async (movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        options
      );
      const json = await data.json();
  
      return json.results;
  };

  

export default usFetchRecommendations;
