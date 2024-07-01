import React from 'react'

const Videotitle = ({title,overview}) => {
  return ( 
    <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1  className="font-bold text-2xl md:text-6xl ">{title}</h1>
      <p className="py-6 hidden md:inline-block text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white m-2 py-1 md:py-4 px-6 text-black rounded-lg text-xl hover:bg-opacity-30 transition-all">▶️ Play</button>
        <button  className="bg-gray-500 m-4 px-12 p-4 hidden md:inline-block text-white rounded-lg text-xl hover:bg-opacity-30 transition-all">❕More Info</button>

      </div>
    </div>
  )
}

export default Videotitle
