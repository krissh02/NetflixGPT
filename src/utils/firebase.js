// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7TBA96LJarbLeCDOfswqzH_McAMbt9vA",
  authDomain: "netflixgpt-75910.firebaseapp.com",
  projectId: "netflixgpt-75910",
  storageBucket: "netflixgpt-75910.appspot.com",
  messagingSenderId: "336115864936",
  appId: "1:336115864936:web:575e9870b9a0827ec772dd",
  measurementId: "G-DHV8CD00M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();