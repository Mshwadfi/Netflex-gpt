// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCkDARd3JMa0hQ0_boZe3yRnzhsqlXNrM",
  authDomain: "netflixgpt-2d9c9.firebaseapp.com",
  projectId: "netflixgpt-2d9c9",
  storageBucket: "netflixgpt-2d9c9.appspot.com",
  messagingSenderId: "447868579677",
  appId: "1:447868579677:web:4f51ae8eed5787f83e02b4",
  measurementId: "G-WQC4M0SBWQ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app;