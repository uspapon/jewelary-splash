// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR9HUDR2IHQzoumwc6bpx34bI-ir1T8HY",
  authDomain: "jewelry-splash.firebaseapp.com",
  projectId: "jewelry-splash",
  storageBucket: "jewelry-splash.appspot.com",
  messagingSenderId: "608497083089",
  appId: "1:608497083089:web:df212025cf06becac6dbf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;