import React from 'react'
import MovieCard from "../components/MovieCard"

const MovieList = ({title, movies}) => {
    
    // console.log(movies);
    return (
        <div className="px-4 ">
                <h1 className=" text-lg md:text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-auto ">
                <div className="flex">
                    {Array.isArray(movies) && movies.length > 0 ? (
                        movies.map((movie) => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        ))
                    ) : (
                        <p>No movies available</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList;
