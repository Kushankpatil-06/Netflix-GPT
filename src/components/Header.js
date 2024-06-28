    import { signOut } from "firebase/auth";
import {useSelector} from "react-redux";
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import appStore from '../utils/appStore';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user)
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
        <img className="w-[70px] h-[70px] mt-2 border-white rounded-full" src={user?.photoURL} alt="" />
        <button onClick={handleSignout} className="bg-red-500 font-bold rounded-full text-lg p-2">Sign out</button>
      </div>}
    </div>
  )
}

export default Header
