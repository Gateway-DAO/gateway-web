// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAmGWfQprCGFg1SVnJ2vDo9grt6UvlGSLo",
  authDomain: "gateway-dao.firebaseapp.com",
  projectId: "gateway-dao",
  storageBucket: "gateway-dao.appspot.com",
  messagingSenderId: "236376430794",
  appId: "1:236376430794:web:d44b724e1e16f169ffbc33",
  measurementId: "G-7RHKRGL9KX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);

if (process.env.REACT_APP_NODE_ENV === "dev") {
  connectFirestoreEmulator(db, "localhost", 8080);
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFunctionsEmulator(functions, "localhost", 5001);
}