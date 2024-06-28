// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADDs2teEwBm--j8hmapztbyHCQgp8KVyI",
  authDomain: "netflix-gpt-b9721.firebaseapp.com",
  projectId: "netflix-gpt-b9721",
  storageBucket: "netflix-gpt-b9721.appspot.com",
  messagingSenderId: "375452646831",
  appId: "1:375452646831:web:8348f212b87c6caa40835a",
  measurementId: "G-W862DFKYMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();