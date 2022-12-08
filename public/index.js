// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD28ME1-LwNvoixl_u8-ws-v0NHTwhLBpc",
  authDomain: "sahay-home.firebaseapp.com",
  projectId: "sahay-home",
  storageBucket: "sahay-home.appspot.com",
  messagingSenderId: "72147360459",
  appId: "1:72147360459:web:4698fa81b56bf43e66594e",
  measurementId: "G-234B5478Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
