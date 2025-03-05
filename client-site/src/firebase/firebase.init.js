// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9b2m_P1Ijq_GnJ_GV6-rf3NHHscDpIn8",
  authDomain: "e-bazar-4001a.firebaseapp.com",
  projectId: "e-bazar-4001a",
  storageBucket: "e-bazar-4001a.firebasestorage.app",
  messagingSenderId: "406149559377",
  appId: "1:406149559377:web:fac34c5ecad88f856e7470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)