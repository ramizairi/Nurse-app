import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
export const FIREBASE_AUTH = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);