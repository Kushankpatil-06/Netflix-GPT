import React from 'react'
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';
import Videotitle from "../components/Videotitle";
import VideoBg from "../components/VideoBg"

const MainContainer = () => {
const movies = useSelector(store => store.movies?.NowplayingMovies)
if(!movies) return null;

const mainMovies = movies[0];
console.log(mainMovies);

const{original_title,overview,id}=mainMovies;


  return (
    <div>
      <Videotitle title={original_title} overview={overview}/>
      <VideoBg movieId={id}/>
    </div>
  )
}

export default MainContainer
