import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABVjZNgvVAWe-kwTnWLRI6bhHoE0Ib9mw",
  authDomain: "ecommerce-5d2e6.firebaseapp.com",
  projectId: "ecommerce-5d2e6",
  storageBucket: "ecommerce-5d2e6.appspot.com",
  messagingSenderId: "398375025942",
  appId: "1:398375025942:web:60fb4eb61aa3207d31e437"
};

const app = initializeApp(firebaseConfig);
export const useFirebase = process.env.REACT_APP_NOT_USE_FIREBASE==="true"? false : true
export const db = getFirestore(app);