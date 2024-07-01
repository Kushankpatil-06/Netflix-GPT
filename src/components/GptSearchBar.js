import React,{useRef} from 'react'
import lang from '../utils/langConstant';
import { useSelector } from 'react-redux';
import { chatSession } from '../utils/GeminiAi';
import { API_OPTIONS } from '../utils/constant';
// import {useDispatch}
import {addgptMovies} from "../utils/GptSlice"
import { useDispatch } from 'react-redux';

const GptSearchBar = () => {
  const searchtext = useRef(null)
  const dispatch = useDispatch()

  const searchMovieTMDB = async (movie)=>{
     const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
     const json = await data.json();
     return json.results;
  }

  const handleSearchBarClick = async ()=>{
console.log(searchtext.current.value);
//Make api call to gpt and get results 
 const InputPrompt = "Act as a Movie Recommendation system And suggest suggest some movies including bollywood also for the query:"+searchtext.current.value+" Only give me name of five movies, comma separated Like the example, given ahead, Gadar sholay jawan fighter KGF ";
 const gptResults = await chatSession.sendMessage(InputPrompt);
 const gptMovies = (gptResults.response.candidates[0].content.parts[0].text.split(","));
//  console.log(gptMovies);
 console.log(gptResults.response.candidates[0].content.parts[0].text.split(","));


 //For each movie i will search the TMDB movies
 const gptdata = gptMovies.map(movie=>searchMovieTMDB(movie))
 //this gpt data will return a promise as its async process and it will take time to resolve the promise 
 //[Promise]

 const tmdbResults = await Promise.all(gptdata);
 console.log(tmdbResults);
 dispatch(addgptMovies({movieNames: gptMovies, movieResults:tmdbResults}))
//  dispatch(addgptMovies(tmdbResults))

  }

  const langkey = useSelector((store)=>store.config.lang)
  return (
    <div className="pt-[50%] md:p-[10%] flex justify-center">
      <form className=" bg-black w-full md:w-1/2 grid grid-cols-12 rounded-lg " onSubmit={(e)=>(e.preventDefault())}>
        <input ref={searchtext} className="p-4 m-4 rounded-lg col-span-9  " type="text" placeholder={lang[langkey].gptPlaceholder} />
        <button className="py-2 px-4 bg-red-700 col-span-3 m-4 rounded-lg text-white font-bold" 
        type="submit" onClick={handleSearchBarClick}>{lang[langkey].search} </button>
      </form>
    </div>
  )
}

export default GptSearchBar
