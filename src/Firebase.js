// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA17HMkIVZBaLBa8nTZv-4AuxpcbckaYo0",
  authDomain: "team-13-momin.firebaseapp.com",
  projectId: "team-13-momin",
  storageBucket: "team-13-momin.appspot.com",
  messagingSenderId: "343217002540",
  appId: "1:343217002540:web:dbc4d2ff129962bc4fd989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;