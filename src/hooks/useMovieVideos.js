import React from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import {addtrailerVideos} from "../utils/MovieSlice"

import { useDispatch } from 'react-redux';
const useMovieVideos = (movieId) => {
    
        const dispatch = useDispatch();
const getMovieVideo = async ()=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS)
    const data = await response.json()
    console.log(data);
    const filtereddata = data.results.filter((video)=>video.type=='Trailer');
    // console.log(filtereddata);
    const trailer = filtereddata.length?filtereddata[0]:data.results[0]
    console.log(trailer);
    dispatch(addtrailerVideos(trailer))
}
useEffect(()=>{
    getMovieVideo()
},[])

  return (
    <div>
      
    </div>
  )
}


export default useMovieVideos;
