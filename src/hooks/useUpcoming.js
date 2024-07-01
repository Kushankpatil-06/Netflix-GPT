
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import {addNowPlaying,addUpcomingMovies} from "../utils/MovieSlice"

const useUpcoming = ()=>{
const dispatch = useDispatch();
  const Upcoming = async ()=>{
    const data =  await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1',API_OPTIONS)
    const json = await data.json()
    // console.log(json);
    // console.log(json.results)
    dispatch(addUpcomingMovies(json.results))
  }
  useEffect(()=>{
    Upcoming();
  },[])
}

export default useUpcoming