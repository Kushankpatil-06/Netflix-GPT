import React from 'react'
import Login from './Login';
import Browse from './Browse';
import {createBrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import { useEffect } from "react";
import {auth} from "../utils/firebase"
import {useDispatch} from "react-redux";
import {RouterProvider} from "react-router-dom"
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
const Body = () => {

   const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<Login/>
    },
    {
        path: "/browse",
        element:<Browse/> 
    }
   ])

   

  return (
    <div>
        <RouterProvider router={appRouter}/>
      
    </div>
  )
}

export default Body
