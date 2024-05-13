import { initializeApp } from "firebase/app";

// const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
const firebaseConfig = {
 
  apiKey: "AIzaSyCpcAxo8jdPSPcByOIKhTALlAytU_Ezi0E",
 
  authDomain: "cliente-servidor-77cf5.firebaseapp.com",
 
  projectId: "cliente-servidor-77cf5",
 
  storageBucket: "cliente-servidor-77cf5.appspot.com",
 
  messagingSenderId: "630285868506",
 
  appId: "1:630285868506:web:e20a48d15e53226304b4e3"
 
};

const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;