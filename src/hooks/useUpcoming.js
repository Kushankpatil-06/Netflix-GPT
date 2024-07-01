
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import {addNowPlaying,addUpcomingMovies} from "../utils/MovieSlice"
import { useSelector } from 'react-redux';

const useUpcoming = ()=>{
const dispatch = useDispatch();

const upcomingMovies = useSelector((store)=>store.movies.UpcomingMovies)

  const Upcoming = async ()=>{
    const data =  await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1',API_OPTIONS)
    const json = await data.json()
    // console.log(json);
    // console.log(json.results)
    dispatch(addUpcomingMovies(json.results))
  }
  useEffect(()=>{
    if(!upcomingMovies ) Upcoming();
  },[])
}

export default useUpcoming