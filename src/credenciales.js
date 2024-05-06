import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

const appFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(appFirebase);
export const auth = getAuth(appFirebase);

export{
    auth,
    db,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
};

export default appFirebase;