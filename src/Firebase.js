import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxzJ7YQSLp3POTrjmt7DBmiaHNsMUc0_U",
  authDomain: "blockcare-3e340.firebaseapp.com",
  databaseURL: "https://blockcare-3e340.firebaseio.com",
  projectId: "blockcare-3e340",
  storageBucket: "blockcare-3e340.appspot.com",
  messagingSenderId: "1033334096745",
  appId: "1:1033334096745:web:551e5721e448c09f"
};

// Initialize Firebase
let fire = firebase.initializeApp(firebaseConfig);

export default fire;