import React from 'react'
import {IMG_CDN_URL} from "../utils/constant"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-[200px] pr-4">
      <img src={IMG_CDN_URL+posterPath} alt="Movie Name" />
    </div>
  )
}

export default MovieCard
