
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import {addPopularMovies} from "../utils/MovieSlice"
import { useSelector } from 'react-redux';

const usePopularMovies = ()=>{
const dispatch = useDispatch();
const popularMovies = useSelector((store)=>store.movies.PopularMovies)
  const PopularMovies = async ()=>{
    const data =  await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS)
    const json = await data.json()
    // console.log(json);
    // console.log(json.results)
    dispatch(addPopularMovies(json.results))
  }
  useEffect(()=>{

    if(!popularMovies) PopularMovies();
  },[])
}

export default usePopularMovies;