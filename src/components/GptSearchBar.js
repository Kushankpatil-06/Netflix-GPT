import React from 'react'
import lang from '../utils/langConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langkey = useSelector((store)=>store.config.lang)
  return (
    <div className="pt-[22%] flex justify-center">
      <form className=" bg-black w-1/2 grid grid-cols-12 ">
        <input className="p-4 m-4 rounded-lg col-span-9  " type="text" placeholder={lang[langkey].gptPlaceholder} />
        <button className="py-2 px-4 bg-red-700 col-span-3 m-4 rounded-lg text-white font-bold" type="submit">{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
