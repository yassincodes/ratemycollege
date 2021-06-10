import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBPg7ngKrvsvzXCbbg9vLd0-QVBoi0pouY",
  authDomain: "ratethefuck.firebaseapp.com",
  projectId: "ratethefuck",
  storageBucket: "ratethefuck.appspot.com",
  messagingSenderId: "1002335066207",
  appId: "1:1002335066207:web:75bf95f0a806b43f37a3ea",
  measurementId: "G-1RSPWTP933"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;