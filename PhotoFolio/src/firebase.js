// create and initialize your own firebase here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjYt3JsmLGr05EEyomCSi7HGRUCTW4Q_E",
  authDomain: "example-f0c97.firebaseapp.com",
  databaseURL: "https://example-f0c97.firebaseio.com",
  projectId: "example-f0c97",
  storageBucket: "example-f0c97.firebasestorage.app",
  messagingSenderId: "1084100092444",
  appId: "1:1084100092444:web:ca3bc831f8d365f646b5d9",
  measurementId: "G-LHSEDK3HXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
//Export the reference to be used in other files
export const db = getFirestore(app);

/**const firebaseConfig = {
  apiKey: "*********************************",
  authDomain: "*******************************",
  projectId: "***********************",
  storageBucket: "******************************",
  messagingSenderId: "******************",
  appId: "************************"
}; */