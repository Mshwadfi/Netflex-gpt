import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'; 
import MoviesReducer from './moviesSlice'
import GPTreducer from './GPTslice'
import languageReducer from './languageSlice'
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            Movies: MoviesReducer,
            GPT: GPTreducer,
            language: languageReducer,
        },
    }
)

export default appStore;