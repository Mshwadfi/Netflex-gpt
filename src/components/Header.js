import { Logo_url, User_icon, supportedLangs } from "../utils/Links";
import {signOut} from 'firebase/auth'
import {auth} from '../utils/FireBase'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { toggleGPTsearch } from "../utils/GPTslice";
import { changeLanguage } from "../utils/languageSlice";
import languages from "../utils/languages";

const Header = () =>{

    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    let language = useSelector(store => store.language);
    const showSelect = useSelector(store => store.GPT.showGPTsearch)
    const handleSearch = () =>{
      dispatch(toggleGPTsearch())
    }
    
    const handleLanguageSelection = (e) =>{
      dispatch(changeLanguage(e.target.value))
     
    }
    const handleSignOut = () =>{     
        signOut(auth).then(() => {      
            navigate('/');
        }).catch((error) => {
        // An error happened.
        });

    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid , email , displayName , photoURL} = user;
            dispatch(addUser({uid: uid , email: email ,
               displayName: displayName, photoURL: photoURL}))
               navigate('/browse');
          } else {
            dispatch(removeUser());
            navigate('/');
          }
        });

        return () => unsubscribe();
        
      },[])
    return(
        <div className="absolute w-screen  px-8 z-20 py-2 bg-gradient-to-b from-black flex justify-between">
            <img src={Logo_url} alt="logo" className="w-44" />
            
           {(user && <div className="flex p-2">
           { showSelect && <select className="p-2 m-2 bg-slate-500 text-white"
            onChange={handleLanguageSelection}>
              {
                supportedLangs.map((lang) =>(
                  <option key={lang.id} value={lang.id}>
                    {lang.name}
                  </option>
                ))
              }
            </select>}
           <button className="py-2 px-4 mx-4 my-2 bg-red-600 rounded-md text-white" 
           onClick={handleSearch}>
            { !showSelect? (languages[language.language].GPTSearch) 
            : (languages[language.language].home)
            }
            </button>
                <img alt="userIcon" className="w-12 h-12 rounded-full"
                src={User_icon} />
                <button className="font-bold text-white mx-2" 
                onClick={handleSignOut}>
                  { !showSelect? (languages[language.language].signOut) 
                  : (languages[language.language].signOut)
                  }
                  </button>
            </div>)}
        </div>
    )
}

export default Header;