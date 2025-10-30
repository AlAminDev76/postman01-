// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCggKn5JOeFCfQcmVNeXKkO1WjiAEn4gcs",
  authDomain: "postman-a6a2d.firebaseapp.com",
  projectId: "postman-a6a2d",
  storageBucket: "postman-a6a2d.firebasestorage.app",
  messagingSenderId: "202966398983",
  appId: "1:202966398983:web:4eae37c714f8f980ef92a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig