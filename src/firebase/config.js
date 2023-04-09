
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNUB38dWzbPcnNJ4Xwe69gPTnNgPeU0k4",
  authDomain: "react-coderhouse-entrega-final.firebaseapp.com",
  projectId: "react-coderhouse-entrega-final",
  storageBucket: "react-coderhouse-entrega-final.appspot.com",
  messagingSenderId: "109777262352",
  appId: "1:109777262352:web:a65bc9836d68d671c53795"
};

//Inicializacion de la app
export const FirebaseApp = initializeApp( firebaseConfig );

// Configuracion de la base de datos
export const FirebaseDB = getFirestore( FirebaseApp );

// Configuración de Storage
export const FirebaseStorage = getStorage(FirebaseApp);