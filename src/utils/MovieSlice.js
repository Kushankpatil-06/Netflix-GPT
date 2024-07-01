import { createSlice } from '@reduxjs/toolkit';
 const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        NowplayingMovies: null,
        trailerVideos:null,

    },
    reducers:{
        addtrailerVideos:(state,action) => {
            state.trailerVideos=action.payload;
        },
        addNowPlaying:(state,action)=>{
            state.NowplayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload

        },addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload
        }
    }

 })
 export  const {addNowPlaying,addtrailerVideos,addUpcomingMovies,addTopRatedMovies,addPopularMovies}=moviesSlice.actions;

 export default moviesSlice.reducer;