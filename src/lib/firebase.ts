// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  "projectId": "marcopolo-media-optimizer",
  "appId": "1:1078894983113:web:149ac4797790b2249f9a18",
  "storageBucket": "marcopolo-media-optimizer.firebasestorage.app",
  "apiKey": "AIzaSyAI9XNu24gLdR4YRbL0BOfmD-0uzorgfh4",
  "authDomain": "marcopolo-media-optimizer.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "1078894983113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
