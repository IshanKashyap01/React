// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBIDejEMTqkxws1m7s52vC_NJD1gz9jnWg',
  authDomain: 'busybuy-c7e1a.firebaseapp.com',
  projectId: 'busybuy-c7e1a',
  storageBucket: 'busybuy-c7e1a.firebasestorage.app',
  messagingSenderId: '69960959956',
  appId: '1:69960959956:web:674c8dda1435a545e1f841'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)