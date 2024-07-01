import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRated from "../hooks/useTopRated"
import useUpcoming from "../hooks/useUpcoming"
import TopRatedMovies from '../hooks/useTopRated';
import usePopularMovies from "../hooks/usePopularMovies"
import reportWebVitals from '../reportWebVitals';
import  MainContainer  from "./MainContainer";
import  SecondaryContainer  from "./SecondaryContainer";
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
const Browse = () => {
const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  //fetch data from tmdv api and update the store //use another hook custom
  useNowPlayingMovies();
  useUpcoming();
  useTopRated();
  usePopularMovies();

  return (
    <div>
    <Header/>
    {
      showGptSearch ? (<GptSearch/>) :
      <>(<MainContainer/>  <SecondaryContainer/>)</>
    }

    </div>
  )
}

export default Browse
