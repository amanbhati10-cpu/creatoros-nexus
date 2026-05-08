// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxNX0C9wVxRkOi2shLhS8a-ZUcr0ydSJQ",
  authDomain: "creatoros-03.firebaseapp.com",
  projectId: "creatoros-03",
  storageBucket: "creatoros-03.firebasestorage.app",
  messagingSenderId: "729432968782",
  appId: "1:729432968782:web:771b9c5ef6f0638bc2fd1f",
  measurementId: "G-DTJ17E0WFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);