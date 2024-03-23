import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name:"movieDetails",
    initialState:{
        movieInfo:null,
        clipId:null,
    },
    reducers:{
        addMovieDetails: (state,action) => {
            state.movieInfo = action.payload;
        },
        addMovieClip: (state,action) => {
            state.clipId = action.payload;
        }
    }
})

export const {addMovieDetails,addMovieClip} = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;