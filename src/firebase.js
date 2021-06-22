import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDtOnxTuxBgT4Iqo3CbKt5irzWBSd6ur8o",
  authDomain: "ratethefuck-dd0be.firebaseapp.com",
  projectId: "ratethefuck-dd0be",
  databaseURL:"https://ratethefuck-dd0be-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "ratethefuck-dd0be.appspot.com",
  messagingSenderId: "1097798218486",
  appId: "1:1097798218486:web:02d1c0d05b60c55c1af2d7",
  measurementId: "G-CJW8M25JHY"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;