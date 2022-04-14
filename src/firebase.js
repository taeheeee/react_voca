// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2QKe0JVNlGohYsd2c1NOwhB4zl8y_r3U",
  authDomain: "react-dictionary-9732f.firebaseapp.com",
  projectId: "react-dictionary-9732f",
  storageBucket: "react-dictionary-9732f.appspot.com",
  messagingSenderId: "763117048368",
  appId: "1:763117048368:web:73bf8ff50c6a06936893f5",
  measurementId: "G-MW9VL2JL09"
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const db = getFirestore();

export {db};
