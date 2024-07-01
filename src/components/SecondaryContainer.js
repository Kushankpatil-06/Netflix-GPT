import React from 'react'
import MovieList from "../components/MovieList"
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <div className="bg-black  -mt-40 relative z-20" >
      <div className="bg-black pl-12">kjbkjfhsbk
      <MovieList title={"Now Playing"} movies={movies.NowplayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      <MovieList title={"TopRated"} movies={movies.TopRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.PopularMovies}/>
      {/* <MovieList title={"Upcoming Movies"} movies={movies.NowplayingMovies}/> */}
      </div>
    </div>
  )
} 

export default SecondaryContainer;
