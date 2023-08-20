import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCsbvNI2VjgBkY8PmW44mnKDyKMuBqGaaY",
  authDomain: "coderhouse-snekers.firebaseapp.com",
  projectId: "coderhouse-snekers",
  storageBucket: "coderhouse-snekers.appspot.com",
  messagingSenderId: "997822372070",
  appId: "1:997822372070:web:5c9e05a01c9d36c6ef0327",
  measurementId: "G-NZX3T0SW3Q"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
