// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyB5zxANIkoTjgiKgyDAgcyDov5t26E9BIo",
    authDomain: "tutor-2781b.firebaseapp.com",
    projectId: "tutor-2781b",
    storageBucket: "tutor-2781b.firebasestorage.app",
    messagingSenderId: "677674610251",
    appId: "1:677674610251:web:bfa06df9517eb5238267ce",
    measurementId: "G-Z35T3YQRK7"
  };

// Initialize Firebase
try {
  var  app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
}
// const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
