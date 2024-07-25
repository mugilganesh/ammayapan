// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKcgP3X7orqbwNINh8GdsCAgPzthBLC-4",
  authDomain: "ammayapan-7a98e.firebaseapp.com",
  projectId: "ammayapan-7a98e",
  storageBucket: "ammayapan-7a98e.appspot.com",
  messagingSenderId: "127501600744",
  appId: "1:127501600744:web:ae067b4ba94e5d583c865d",
  measurementId: "G-L8HH53Z5G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);