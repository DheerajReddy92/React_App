// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG6ibab8Fx1i6I1w6LiWbjJ_54qYps5AA",
  authDomain: "react-app-92.firebaseapp.com",
  projectId: "react-app-92",
  storageBucket: "react-app-92.appspot.com",
  messagingSenderId: "212553147821",
  appId: "1:212553147821:web:845433b0fa6bb59f11ad24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider() 