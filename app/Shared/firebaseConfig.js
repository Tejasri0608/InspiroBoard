// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOcwMeZR2KkKc6TyZIpi49gpmYBAvq9-A",
  authDomain: "inspiroboard.firebaseapp.com",
  projectId: "inspiroboard",
  storageBucket: "inspiroboard.appspot.com",
  messagingSenderId: "377557597748",
  appId: "1:377557597748:web:1e83939dd0e2aabd705461",
  measurementId: "G-LZKC65825S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;