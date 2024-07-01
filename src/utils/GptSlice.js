import { createSlice } from '@reduxjs/toolkit';

const GptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch : (false),
        movieNames:null,
        movieResults:null
    },
    reducers: {
        ToggleGptView: (state, action) => {
            state.showGptSearch =  !state.showGptSearch
            },
        addgptMovies:(state,action)=>{
            const{movieNames,movieResults}=action.payload;
            state.movieNames = movieNames;
            state.movieResults=movieResults;
        },
},
}
)
export const {ToggleGptView,addgptMovies}=GptSlice.actions;

export default GptSlice.reducer