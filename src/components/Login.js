import React,{useState} from 'react'
import Header from "../components/Header"

const Login = () => {
    const [SigninForm, setSigninForm] = useState(true);
    const toggleSigninFrom=()=>{
        setSigninForm(!SigninForm);
    }
  return (
    <div>
        <Header/>
        <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" alt="bg-iamg" />
    </div>
    <form className="absolute rounded-lg bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-75  ">
        <h1 className="font-bold text-3xl py-4 m-4">{SigninForm? "Sign In" : "Sign Up"}</h1>
        {!SigninForm&&<input type="text" placeholder="Name" className="p-4 rounded-lg w-9/12 m-4 w-full bg-gray-700" />}
        <input type="text" placeholder="Email address" className="p-4 rounded-lg w-9/12 m-4 w-full bg-gray-700" />
        <input type="password" placeholder="password"className="p-4 rounded-lg w-9/12 m-4 w-full bg-gray-700" />
        <button className="m-4 p-4 bg-red-600 w-9/12 rounded-lg"  type="submit">{SigninForm? "Sign In" : "Sign Up"}</button>
        <p className="py-4 px-3 cursor-pointer" onClick={toggleSigninFrom}>{SigninForm? "New to Netflix? SignUp" : "Already have an Account? Login"} </p>
    </form>
    </div>
  )
}

export default Login
