// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz2j8xK8YjUBq7ULERYHYIeI0SE9ZGUEA",
  authDomain: "kpoppies-ab81d.firebaseapp.com",
  projectId: "kpoppies-ab81d",
  storageBucket: "kpoppies-ab81d.appspot.com",
  messagingSenderId: "1010446863029",
  appId: "1:1010446863029:web:3918fa0804769cd7fb0cfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// BASE DE DATOS
export const db = getFirestore(app);