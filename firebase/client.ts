import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC-kgf4SsQ9mgGPkIPyyPe4Xj83De1hd58",
  authDomain: "aiviewed.firebaseapp.com",
  projectId: "aiviewed",
  storageBucket: "aiviewed.firebasestorage.app",
  messagingSenderId: "77222708354",
  appId: "1:77222708354:web:542a8ce244fb0a8443a09b"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)