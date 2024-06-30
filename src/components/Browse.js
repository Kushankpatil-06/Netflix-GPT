import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import reportWebVitals from '../reportWebVitals';
import  MainContainer  from "./MainContainer";
import  SecondaryContainer  from "./SecondaryContainer";

const Browse = () => {

  //fetch data from tmdv api and update the store //use another hook custom
  useNowPlayingMovies();

  return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>

    {/* Main container
     -- video BG
     -- Video title
    Secondary container 
      --Movie list * n rows
         rows * card * n */}
    </div>
  )
}

export default Browse
