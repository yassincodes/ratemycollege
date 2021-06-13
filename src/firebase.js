import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAReochBY_zafy_Qp_edWb8h4JAvDFkXt0",
  authDomain: "ratethefuck-v2.firebaseapp.com",
  projectId: "ratethefuck-v2",
  storageBucket: "ratethefuck-v2.appspot.com",
  messagingSenderId: "1038267520340",
  appId: "1:1038267520340:web:3790d8b632a302d98a64c1",
  measurementId: "G-T9VKX7XYFX"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;