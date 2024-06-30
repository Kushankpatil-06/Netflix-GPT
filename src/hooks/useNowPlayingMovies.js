
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import {addNowPlaying} from "../utils/MovieSlice"

const useNowPlayingMovies = ()=>{
const dispatch = useDispatch();
  const Nowplaying = async ()=>{
    const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
    const json = await data.json()
    console.log(json.results)
    dispatch(addNowPlaying(json.results))
  }
  useEffect(()=>{
    Nowplaying();
  },[])
}

export default useNowPlayingMovies