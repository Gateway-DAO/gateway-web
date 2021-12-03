// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { initializeAuth, browserLocalPersistence, connectAuthEmulator } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getStorage, connectStorageEmulator } from "@firebase/storage"

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
export const auth = initializeAuth(app, { persistence: browserLocalPersistence });
export const functions = getFunctions(app);
export const storage = getStorage(app);

if (process.env.REACT_APP_NODE_ENV === "dev") {
  connectFirestoreEmulator(db, "localhost", 8025);
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFunctionsEmulator(functions, "localhost", 5001);
  connectStorageEmulator(storage, "localhost", 9199);
}