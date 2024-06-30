import React from 'react'

import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';
import useMovieVideos from '../hooks/useMovieVideos';

const VideoBg = ({movieId}) => {
    useMovieVideos(movieId);
    const trailerVideos = useSelector(store => store.movies?.trailerVideos)
  return (
    <div className="w">
      <iframe className="w-full aspect-video" 
      src={"https://www.youtube.com/embed/"+trailerVideos?.key+ "?&autoplay=1&mute=1"}
      title="YouTube video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
></iframe>
    </div>
  )
} 

export default VideoBg
