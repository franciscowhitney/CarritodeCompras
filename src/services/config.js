import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ecommerce-265ce.firebaseapp.com",
  projectId: "ecommerce-265ce",
  storageBucket: "ecommerce-265ce.appspot.com",
  messagingSenderId: "898025054403",
  appId: "1:898025054403:web:9515876c2a829e2ee04276"
};

const app = initializeApp(firebaseConfig);
export const useFirebase = process.env.REACT_APP_NOT_USE_FIREBASE==="true"? false : true
export const db = getFirestore(app);