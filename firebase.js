// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase";
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCANsY5aHglCk9CQV-5lACxpPDfBSDpX0A",
  authDomain: "signal-f1bbd.firebaseapp.com",
  projectId: "signal-f1bbd",
  storageBucket: "signal-f1bbd.appspot.com",
  messagingSenderId: "545884334871",
  appId: "1:545884334871:web:1900000d343cdcddcb2552",
  measurementId: "G-RYNLQ2YN7S",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
