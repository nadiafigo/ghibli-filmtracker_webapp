// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBMWj_7CjLgoiBzqaoqCugI8JFP1xk-BUY",
  authDomain: "ghibli-webapp.firebaseapp.com",
  projectId: "ghibli-webapp",
  storageBucket: "ghibli-webapp.appspot.com",
  messagingSenderId: "555389541360",
  appId: "1:555389541360:web:8c7b3acb7da22f005d1b35",
  measurementId: "G-Q1YCEX8LZL"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById("login").addEventListener('click', function(){

    const email1 = document.getElementById("login-email").value
    const password1 = document.getElementById("login-password").value

    console.log(email1, password1)

    signInWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("logged in")
            
            window.location.href = "../html/home.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
            alert("Wrong email or password, try again")
        });

})