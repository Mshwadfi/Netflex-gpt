import { useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer";
const VideoBackground = ({movieID}) =>{
    
    const trailerClip = useSelector(store => store.Movies?.trailer);
    
    useGetTrailer(movieID);

    return (
        <div className="w-screen">
            <iframe className="w-screen aspect-video"
             src={
                "https://www.youtube.com/embed/" +
                trailerClip?.key +
                "?&autoplay=1&mute=1"
              }title="YouTube video player"
             allow="accelerometer;
               autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share"
                 ></iframe>
        </div>
    )
}

export default VideoBackground;