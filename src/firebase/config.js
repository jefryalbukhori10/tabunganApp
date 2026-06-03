// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrk9Mo6ui-AKcaTm9VVHU2oSGOjYHVSpk",
  authDomain: "tabungan-8f632.firebaseapp.com",
  projectId: "tabungan-8f632",
  storageBucket: "tabungan-8f632.firebasestorage.app",
  messagingSenderId: "1042898096351",
  appId: "1:1042898096351:web:4402854f76b68c1bb0996a",
  measurementId: "G-DFXFRFD7SX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
