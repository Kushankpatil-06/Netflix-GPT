import { createSlice } from '@reduxjs/toolkit';
 const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        NowplayingMovies: null,
        trailerVideos:null,

    },
    reducers:{
        addNowPlaying:(state,action)=>{
            state.NowplayingMovies=action.payload
        },
        addtrailerVideos:(state,action) => {
            state.trailerVideos=action.payload;
        },
    }

 })
 export  const {addNowPlaying,addtrailerVideos}=moviesSlice.actions;

 export default moviesSlice.reducer;