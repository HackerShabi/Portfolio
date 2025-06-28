// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp0VQvgbWtDjgA1APV_oFCge2_KH0HKxA",
  authDomain: "portfolio-4bc9a.firebaseapp.com",
  projectId: "portfolio-4bc9a",
  storageBucket: "portfolio-4bc9a.firebasestorage.app",
  messagingSenderId: "570218354876",
  appId: "1:570218354876:web:919ea8ac57c4f6ab3918b9",
  measurementId: "G-7E9LK8ZMNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize analytics conditionally
let analytics = null;
const initAnalytics = async () => {
  if (await isSupported()) {
    analytics = getAnalytics(app);
  }
};
initAnalytics();

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };