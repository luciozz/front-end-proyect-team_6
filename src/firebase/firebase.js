// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ECOh22vpjiJqrElrE30Xn9h3E4-e6Eg",
  authDomain: "front-end-proyect-team-6.firebaseapp.com",
  projectId: "front-end-proyect-team-6",
  storageBucket: "front-end-proyect-team-6.appspot.com",
  messagingSenderId: "96616893593",
  appId: "1:96616893593:web:5655d3531fdc7bc19cbc08",
  measurementId: "G-843XT95PMP"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


export default firebase