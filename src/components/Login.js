import { useState, useRef } from "react";
import { Login_cover, loggedInUserIcon } from "../utils/Links";
import Header from "./Header";
import FormValidation from "../utils/Validate";
import { createUserWithEmailAndPassword,updateProfile ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () =>{

    const [signUp , setSignUp] = useState(false);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [message ,setMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handlevalidation = ()=>{
        //validation
       
         setMessage(FormValidation(email.current.value , password.current.value))
        if(message) return;

        if(signUp){
            //sign up logic


            createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: loggedInUserIcon
                  }).then(() => {
                    const {uid , email , displayName , photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid , email: email ,
                       displayName: displayName, photoURL: photoURL}))
                  }).catch((error) => {
                    setMessage(error.message )
                  });
                
                navigate('/browse');
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMessage(errorCode +", "+ errorMessage)
                
            });
        }else{
            signInWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
                navigate('/browse');
                
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setMessage("User Not Found!")
            });
        }
    }
    const toggleForm = ()=>{
        setSignUp(!signUp);
    }
    return(
        <div>
            <Header />
            <div className="absolute">
                <img src={Login_cover} alt="cover" />
            </div>
            <form className="absolute w-3/12 p-12 mx-auto right-0 left-0 my-36 text-white bg-black bg-opacity-85" onSubmit={(e) =>{e.preventDefault()}}>
                <h1 className="text-2xl p-4">Sign {signUp? "Up" : "In"}</h1>
                {signUp && (<input ref={name} type="text" placeholder="Username" className="p-4 m-4 w-full bg-slate-800 rounded-md" />)}
                <input ref={email} type="text" placeholder="Email address" className="p-4 m-4 w-full bg-slate-800 rounded-md" />
                <input ref={password} type="password" placeholder="Password" className="p-4 m-4 w-full bg-slate-800 rounded-md" />
                <p className="text-red-500 mx-4">{message}</p>
                <button className="p-4 m-4 bg-red-600 w-full rounded-md" onClick={handlevalidation}>Sign {signUp? "Up" : "In"}</button>
                <p className="p-2 m-2 cursor-pointer" onClick={toggleForm}>{signUp? "Already Have An Account? Sign In" : "New To Netflix? Sign Up Now."}</p>
            </form>
            
        </div>
    )
}

export default Login;