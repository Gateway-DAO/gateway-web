import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

// Collections
export const DAORef = collection(db, "daos");
export const POSTSRef = collection(db, "posts");
export const USERSRef = collection(db, "users");

// Documents
export const allDocs = getDocs(DAORef);
export const allPosts = getDocs(POSTSRef)
export const allUsers = getDocs(USERSRef)