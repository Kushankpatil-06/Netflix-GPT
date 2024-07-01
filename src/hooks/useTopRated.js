
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import {addTopRatedMovies} from "../utils/MovieSlice"
import { useSelector } from 'react-redux';

const useTopRated = ()=>{
const dispatch = useDispatch();
const topRatedMovies = useSelector((store)=>store.movies.TopRatedMovies)

  const TopRated = async ()=>{
    const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
    const json = await data.json()
    // console.log(json);
    // console.log(json.results)
    dispatch(addTopRatedMovies(json.results))
  }
  useEffect(()=>{
    if(!topRatedMovies)TopRated();
  },[])
}

export default useTopRated