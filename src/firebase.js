import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDLbDkq8uwutFcIhwuZ7fFg3iWnJhkkf-4",
  authDomain: "ratethefuck-e8e9d.firebaseapp.com",
  projectId: "ratethefuck-e8e9d",
  storageBucket: "ratethefuck-e8e9d.appspot.com",
  messagingSenderId: "702523646271",
  appId: "1:702523646271:web:0780b2771fb422049ef38a",
  measurementId: "G-8K8DCND9GT"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;