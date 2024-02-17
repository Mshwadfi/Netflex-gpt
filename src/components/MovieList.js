import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
   

    // Check if movies is null or undefined
    if (!movies) {
        return <div>Loading...</div>;
    }

    return (
       <div className="p-2">
        <h1 className="font-bold mx-2 p-2 text-xl text-white">{title}</h1>
        <div className="no-scrollbar flex overflow-x-scroll">
            <div className="flex">
                {movies?.map((movie) => (
                    
                    <MovieCard key={movie.id} data={movie} />
                ))}
            </div>
        </div>
       </div>
    );
}

export default MovieList;
