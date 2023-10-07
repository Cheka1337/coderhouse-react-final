 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8IyBSPxPNztPQLPhOCZb3gt8kY5QXZcU",
  authDomain: "e-commerce-d4686.firebaseapp.com",
  projectId: "e-commerce-d4686",
  storageBucket: "e-commerce-d4686.appspot.com",
  messagingSenderId: "903910579014",
  appId: "1:903910579014:web:e5db06bbb7444f71192347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
