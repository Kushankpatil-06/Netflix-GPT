import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "../utils/MovieSlice"
import gptReducer from "../utils/GptSlice"
 import configReducer from "../utils/configSlice.js"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        config : configReducer,
    },
 })
export default appStore;