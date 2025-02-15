// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIFj9uJR_Go1gSJtxsPCXBsJAKiF-NsGI",
  authDomain: "news-portal-recap-95256.firebaseapp.com",
  projectId: "news-portal-recap-95256",
  storageBucket: "news-portal-recap-95256.firebasestorage.app",
  messagingSenderId: "298353523130",
  appId: "1:298353523130:web:7b9968f4de9b408bcb8583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const githubProvider = new GithubAuthProvider();
export default auth