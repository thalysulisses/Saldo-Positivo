import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAY_s8A5zFLGDw2_et6vQwvRnXZ4F3vINc",
  authDomain: "saldo-positivo-4b99e.firebaseapp.com",
  projectId: "saldo-positivo-4b99e",
  storageBucket: "saldo-positivo-4b99e.firebasestorage.app",
  messagingSenderId: "790391439934",
  appId: "1:790391439934:web:f422bb8366a9d43c28c76f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);