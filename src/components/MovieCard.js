import { img_CDN_url } from "../utils/Links";

const MovieCard = ({ data }) => {
    
    const { poster_path } = data;

    if (!poster_path) {
        console.warn("No poster path provided for movie:", data);
        return null; 
    }

    const imageUrl = `${img_CDN_url}${poster_path}`;
    console.log("Image URL:", imageUrl);

    return (
        <div className="w-48 m-2">
            <img alt="card poster" src={imageUrl} />
        </div>
    );
};

export default MovieCard;
