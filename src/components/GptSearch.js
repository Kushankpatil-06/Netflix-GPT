import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovie from './GptMovie';

const GptSearch = () => {
  return (
    <>
       < div className=" fixed  -z-20">
      <img className="h-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" alt="bg-iamg" />
    </div>
    <div className="">
      <GptSearchBar/>
      <GptMovie/> 
    </div>
      
    </>
  )
}

export default GptSearch
