    import { signOut } from "firebase/auth";
import {useSelector} from "react-redux";
import React,{useEffect} from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
 import {ToggleGptView} from "../utils/GptSlice.js"
import { useNavigate } from 'react-router-dom';
import appStore from '../utils/appStore';
import {useDispatch} from "react-redux";
import { addUser ,removeUser} from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import {changeLanguage} from "../utils/configSlice"

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  const dispatch = useDispatch()

  const handleChange =(e)=>{
    dispatch(changeLanguage(e.target.value));

  }
  const handleGptClick = ()=>{
  dispatch(ToggleGptView())
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
     const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
   navigate('/browse')

  } else {
    dispatch(removeUser());
    navigate('/')

  }
});




//this will be called when umount
return ()=> unsubscribe();
   }, []);



  const handleSignout=()=>{
signOut(auth)
.then(() => {
  // Sign-out successful.
  navigate('/');
}).catch((error) => {
  // An error happened.
  navigate('/error')
});
  }
  return (
    <div className="px-8 absolute py -2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="rounded-lg w-44 h-[80px] mt-4  " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1d4nRuOmQQy6SVwlKGOFzUkJw9QF2L_7g1kLQtIZZVvQ_6pVklAqEfGQ&s" alt="" />
      {user&&<div className="m-4 flex">
        {showGptSearch && <select className="p-2 bg-slate-700 text-white m-2 rounded-lg mt-6" onChange={handleChange}>
         {SUPPORTED_LANGUAGES.map(lang => <option key={lang.code} value={lang.code}>{lang.name} </option>)}


        </select>
        }
        <button className="bg-green-600 font-bold text-lg rounded-lg border-black py-2 px-4 mx-4 my-2 mt-6 "
        onClick={handleGptClick}> {showGptSearch?"Home Page": "GPT-Search"}</button>
        {/* <img className="w-[70px] h-[70px] mt-2 border-white rounded-full" src={user?.photoURL} alt="" /> */}
        <button onClick={handleSignout} className="bg-red-500 mt-6 text-lg rounded-lg border-black py-2 px-4 mx-4 my-2 ">Sign out</button>
      </div>}
    </div>
  )
}

export default Header
