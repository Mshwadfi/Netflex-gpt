import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "Movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null,
        trailer: null,
    },
    reducers: {
        addnowPlayingMovies: (state , action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) =>{
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state,action) =>{
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state,action) =>{
            state.topRatedMovies = action.payload;
        },
        addTrailer: (state , action) =>{
            state.trailer = action.payload;
        }
    },
})


export const {addnowPlayingMovies,addTopRatedMovies , addUpcomingMovies,addTrailer , addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;