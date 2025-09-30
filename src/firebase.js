// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase (substitua pelos dados do seu projeto)
const firebaseConfig = {
  apiKey: "AIzaSyAjIXmodlnx-uPOYsfC72tDDlPuM7KbHhY",
  authDomain: "desenvolvimento-web-ed3be.firebaseapp.com",
  projectId: "desenvolvimento-web-ed3be",
  storageBucket: "desenvolvimento-web-ed3be.firebasestorage.app",
  messagingSenderId: "40490367355",
  appId: "1:40490367355:web:9564bcdd344d9e19c3e5de",
  measurementId: "G-421V0TL3TX"
}; 

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Configure o Firebase Authentication e Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
