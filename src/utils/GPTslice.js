import { createSlice } from "@reduxjs/toolkit";


const GPTslice = createSlice({
    name : 'GPT',
    initialState: {
        showGPTsearch: false,
        GPTmovieList: null,
        GPTmovieNames: null,
    },
    reducers: {
        toggleGPTsearch: (state) =>{
            state.showGPTsearch = !state.showGPTsearch;
        },
        addGPTmovieList: (state, action) =>{
            const { GPTmovieResults, GPTmovieList } = action.payload;
            state.GPTmovieList = GPTmovieList;
            state.GPTmovieNames = GPTmovieResults;
        }
    }
});

export const { toggleGPTsearch, addGPTmovieList } = GPTslice.actions;
export default GPTslice.reducer;
