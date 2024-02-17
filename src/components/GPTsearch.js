import GPTsearchBar from "./GPTsearchBar";
import GPTsearchRecommendations from "./GPTmovieRecommendations";
import { BG_URL } from "../utils/Links";
const GPTsearch = () =>{
    return (
        <>
          <div className="fixed -z-10">
            <img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />
          </div>
          <div className="">
            <GPTsearchBar />
            <GPTsearchRecommendations />
          </div>
        </>
      );
    };

export default GPTsearch;