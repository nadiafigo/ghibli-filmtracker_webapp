// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMWj_7CjLgoiBzqaoqCugI8JFP1xk-BUY",
  authDomain: "ghibli-webapp.firebaseapp.com",
  projectId: "ghibli-webapp",
  storageBucket: "ghibli-webapp.appspot.com",
  messagingSenderId: "555389541360",
  appId: "1:555389541360:web:8c7b3acb7da22f005d1b35",
  measurementId: "G-Q1YCEX8LZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveCheckedFilm = (checkmarkID, checkmarkStatus) => {
   addDoc(collection(db, 'checkedFilms'), { checkmarkID, checkmarkStatus })
}

export const getCheckedFilms = () => getDocs(collection( db, 'checkedFilms'))