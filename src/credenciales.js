// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigJSON = JSON.parse(process.env.FIREBASE_CONFIG_JSON);
const firebaseConfig = {
  apiKey: firebaseConfigJSON.apiKey,
  authDomain: firebaseConfigJSON.authDomain,
  projectId: firebaseConfigJSON.projectId,
  storageBucket: firebaseConfigJSON.storageBucket,
  messagingSenderId: firebaseConfigJSON.messagingSenderId,
  appId: firebaseConfigJSON.appId
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;