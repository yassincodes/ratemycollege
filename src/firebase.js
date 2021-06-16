import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfuyTGOPQbK5amcxyq_mM95EUimdWc9p8",
  authDomain: "ratethefuck-40ab6.firebaseapp.com",
  projectId: "ratethefuck-40ab6",
  storageBucket: "ratethefuck-40ab6.appspot.com",
  messagingSenderId: "191934700092",
  appId: "1:191934700092:web:092caf57499cd1a8b44139",
  measurementId: "G-D0PZSQ3967"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;