import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptSearchMovie:null,
        gptSearchName:null,
    },
    reducers:{
        toggleGptSearchView: (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptSearchMovie: (state,action) => {
            const {gptSearchName,gptSearchMovie} = action.payload;
            state.gptSearchMovie = gptSearchMovie;
            state.gptSearchName = gptSearchName;
        }
    }
})

export const {toggleGptSearchView,addGptSearchMovie} = gptSlice.actions;

export default gptSlice.reducer;