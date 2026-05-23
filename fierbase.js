// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA89UW5tN-pxPbmiC28uI_lZZDaFOVK7tg",
  authDomain: "arssen-fans-3ddf3.firebaseapp.com",
  projectId: "arssen-fans-3ddf3",
  storageBucket: "arssen-fans-3ddf3.firebasestorage.app",
  messagingSenderId: "851258480704",
  appId: "1:851258480704:web:cd74ddd4664293d05c27a5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
