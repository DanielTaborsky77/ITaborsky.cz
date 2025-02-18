// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/…ies

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFTr5bxgUkAirITSC7ywFkfFdZRIrzjoQ",
  authDomain: "itaborsky.firebaseapp.com",
  projectId: "itaborsky",
  storageBucket: "itaborsky.firebasestorage.app",
  messagingSenderId: "363975444082",
  appId: "1:363975444082:web:1d3be0d0fc0124e6bde4eb",
  measurementId: "G-GWVPEVVBWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);