// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";


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


document.getElementById("sign-up").addEventListener('click', function(){
    const email = document.getElementById("user-email").value  
    const password = document.getElementById("password").value 
    const confirmPassword = document.getElementById("confirm-password").value 

    console.log(email, password)

    if(password.length <= 5) {
        alert("The password must have 6 characters")
        return
    }

    if(confirmPassword != password) {
        alert("Verify your confirmation password")
        return
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            console.log("created", user)
            window.location.href = "../html/login.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            console.log(errorCode + errorMessage);
        });

})