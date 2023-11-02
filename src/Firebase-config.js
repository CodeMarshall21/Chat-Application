// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU-odt5TfPsrpv4dvuInkEt4q0Rfcwp5A",
  authDomain: "chatapp-c3676.firebaseapp.com",
  projectId: "chatapp-c3676",
  storageBucket: "chatapp-c3676.appspot.com",
  messagingSenderId: "781968397775",
  appId: "1:781968397775:web:a3870e36453f63c19deeba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();