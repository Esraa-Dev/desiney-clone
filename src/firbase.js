import { initializeApp } from "firebase/app";
import "firebase/firestore";
// import firebase from "firebase/app";

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCBBQW0hZYfiqj6-PT4Xdq0B_2NozaJfYU",
  authDomain: "disneyplus-clone-d541c.firebaseapp.com",
  projectId: "disneyplus-clone-d541c",
  storageBucket: "disneyplus-clone-d541c.appspot.com",
  messagingSenderId: "435913034025",
  appId: "1:435913034025:web:60c0409e52a66f6a450f38",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

var db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
