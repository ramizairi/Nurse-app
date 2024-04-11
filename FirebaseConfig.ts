import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsYv01ACL2_Ntfpjb1GQJKTdMVMmKx-no",
  authDomain: "nurse-app-pfe.firebaseapp.com",
  projectId: "nurse-app-pfe",
  storageBucket: "nurse-app-pfe.appspot.com",
  messagingSenderId: "307453655802",
  appId: "1:307453655802:web:9c682d95e44578c42f6743"
};
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);