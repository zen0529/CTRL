// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs0qksDFQQ0jrgTimaVlMc_RMtzPw4_UU",
  authDomain: "ctrl-1dae6.firebaseapp.com",
  projectId: "ctrl-1dae6",
  storageBucket: "ctrl-1dae6.firebasestorage.app",
  messagingSenderId: "264505219335",
  appId: "1:264505219335:web:e815514d73b75bd9b34da2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);