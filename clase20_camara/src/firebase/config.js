import app from "firebase/app";
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOvlnSoe2xzCGCLwxebgEbEhDWEmBskDg",
  authDomain: "licpro3cm02arep.firebaseapp.com",
  projectId: "licpro3cm02arep",
  storageBucket: "licpro3cm02arep.appspot.com",
  messagingSenderId: "456134278594",
  appId: "1:456134278594:web:0b2105ac7fd50a7e20ea5b"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();