import React,{useState,useRef} from 'react'
import Header from "../components/Header"
import { checkValidatedata } from '../utils/validate';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import {useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";

import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  updateProfile } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
    const [SigninForm, setSigninForm] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
  const dispatch = useDispatch();

    const [errormessage,seterrormessage]=useState(null);

    const toggleSigninFrom=()=>{
        setSigninForm(!SigninForm);
    }

    const handleClick=()=>{

       const mess =  checkValidatedata(email.current.value,password.current.value)
       seterrormessage(mess);
       console.log(mess);
       if(mess) return ;
    if (!SigninForm) {

// const auth = getAuth();
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/143101646?v=4"
}).then(() => {
  // Profile updated!
  const {uid,email,displayName,photoURL} = auth.currentUser;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
  navigate("/browse")
  // ...
}).catch((error) => {
  // An error occurred
  seterrormessage(error.message)
  // ...
});
    navigate('/')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+'-'+errorMessage)
    // ..
  });
       }


    else{

// const auth = getAuth();
     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/browse')

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+'-'+errorMessage)

  });


       }
         
    }
  return (
    <div>
        <Header/>
        <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" alt="bg-iamg" />
    </div>
    <form onSubmit={(e)=>e.preventDefault( )} className="absolute rounded-lg bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-75  ">
        <h1 className="font-bold text-3xl py-4 m-4">{SigninForm? "Sign In" : "Sign Up"}</h1>
        {!SigninForm&&<input type="text" ref={name} placeholder="Name" className="p-4 rounded-lg w-7/12 m-4 w-full bg-gray-700" />}
        <input ref={email} type="text" placeholder="Email address" className="p-4 rounded-lg w-7/12 m-4 w-full bg-gray-700" />
        <input ref={password } type="password" placeholder="password"className="p-4 rounded-lg w-7/12 m-4 w-full bg-gray-700" />
        <p className="font-bold text-red-700 p-2 m-4 text-lg ">{errormessage}!!!</p>
        <button className="m-4 p-4 bg-red-600 w-9/12 rounded-lg" onClick={handleClick}  type="submit">{SigninForm? "Sign In" : "Sign Up"}</button>
        <p className="py-4 px-3 cursor-pointer" onClick={toggleSigninFrom}>{SigninForm? "New to Netflix? SignUp" : "Already have an Account? Login"} </p>
    </form>
    </div>
  )
}

export default Login
