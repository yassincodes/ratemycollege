import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCe_3NHr52XG6GT0B_8west5JlUxQeAMOE",
    authDomain: "ratethefuck-90e42.firebaseapp.com",
    projectId: "ratethefuck-90e42",
    storageBucket: "ratethefuck-90e42.appspot.com",
    messagingSenderId: "1048866058597",
    appId: "1:1048866058597:web:c699b23c2422f92334b18c",
    measurementId: "G-XX3BC76L46"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;