import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAOO_g8YQov6oD1kQK3mYqPDRmP3fqUzIo",
  authDomain: "ratethefuck-v3.firebaseapp.com",
  projectId: "ratethefuck-v3",
  storageBucket: "ratethefuck-v3.appspot.com",
  messagingSenderId: "800825409905",
  appId: "1:800825409905:web:2ef0cc8565a02d195e36d0",
  measurementId: "G-H0ZKXX4NV1"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;