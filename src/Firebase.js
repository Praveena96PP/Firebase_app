// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS-gGfKB8H-FQn6NTJ0_MYDE-nqAa3yNw",
  authDomain: "react-firebase-63456.firebaseapp.com",
  projectId: "react-firebase-63456",
  storageBucket: "react-firebase-63456.appspot.com",
  messagingSenderId: "164756425944",
  appId: "1:164756425944:web:627b699c69eae747d81bad",
  measurementId: "G-H8EG225F82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);