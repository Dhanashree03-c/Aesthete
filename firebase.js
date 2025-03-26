// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcFjsvUh4C_jgnQNFKYxyUoOipfEQ4v6c",
  authDomain: "aesthete-a15a1.firebaseapp.com",
  projectId: "aesthete-a15a1",
  storageBucket: "aesthete-a15a1.firebasestorage.app",
  messagingSenderId: "828472049889",
  appId: "1:828472049889:web:5e0917b1c59e489b70f7a0",
  measurementId: "G-47S4R3NGF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);