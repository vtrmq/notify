/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBJXzBD6kyOcjqkzkWutf68sviEQcMoDkc",
  authDomain: "notify-f618c.firebaseapp.com",
  projectId: "notify-f618c",
  storageBucket: "notify-f618c.appspot.com",
  messagingSenderId: "716100304991",
  appId: "1:716100304991:web:27a3f9e6d648d8bd6fdbea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJXzBD6kyOcjqkzkWutf68sviEQcMoDkc",
  authDomain: "notify-f618c.firebaseapp.com",
  projectId: "notify-f618c",
  storageBucket: "notify-f618c.appspot.com",
  messagingSenderId: "716100304991",
  appId: "1:716100304991:web:27a3f9e6d648d8bd6fdbea",
  measurementId: "G-FNT4N3CH7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
