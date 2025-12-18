
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_XxmZRN6--l9wbrqppjYuJSQYnlO3cQE",
  authDomain: "prepwise-7d463.firebaseapp.com",
  projectId: "prepwise-7d463",
  storageBucket: "prepwise-7d463.firebasestorage.app",
  messagingSenderId: "550415995672",
  appId: "1:550415995672:web:b6dde1f11a73bc52aa846d",
  measurementId: "G-ND4Y4WK183"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
