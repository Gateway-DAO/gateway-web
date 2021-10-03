import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

// Collections
export const DAORef = collection(db, "daos");

// Documents
export const allDocs = getDocs(DAORef);