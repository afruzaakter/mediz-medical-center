
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBecgq1waIq9WcG3g8OfVNCQIhgnkFAAlw",
  authDomain: "mediz-medical-center.firebaseapp.com",
  projectId: "mediz-medical-center",
  storageBucket: "mediz-medical-center.appspot.com",
  messagingSenderId: "541672252165",
  appId: "1:541672252165:web:1f223fb18b308e0db2cd6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;