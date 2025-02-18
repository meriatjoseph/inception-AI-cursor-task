// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB5Pc6V8UXPUSfMORns9Jt6uSvD577J1o",
  authDomain: "inception-ai.firebaseapp.com",
  projectId: "inception-ai",
  storageBucket: "inception-ai.firebasestorage.app",
  messagingSenderId: "844893899801",
  appId: "1:844893899801:web:8ae463349abc5a4b7c2e88",
  measurementId: "G-S8F83J92FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
