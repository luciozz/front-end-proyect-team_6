// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoP5_7mF3GytDffc2CVIJcAkx6Qh7gmrg",
  authDomain: "test-001-93e44.firebaseapp.com",
  projectId: "test-001-93e44",
  storageBucket: "test-001-93e44.appspot.com",
  messagingSenderId: "1084090557919",
  appId: "1:1084090557919:web:60414fe93bd3250776d06a"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export default firebase;