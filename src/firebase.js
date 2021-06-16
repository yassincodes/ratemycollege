import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBGAfAVRYMG61DAqyyzVLnnWBqN996N9qY",
  authDomain: "tana9ol.firebaseapp.com",
  projectId: "tana9ol",
  storageBucket: "tana9ol.appspot.com",
  messagingSenderId: "844295977305",
  appId: "1:844295977305:web:bc9b35c2160411c5807448"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;