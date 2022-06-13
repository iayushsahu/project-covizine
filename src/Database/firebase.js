import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJPLzH2YKpi4PK5aYmuSNHL3pUOh_nHCg",
  authDomain: "covizine-8294d.firebaseapp.com",
  projectId: "covizine-8294d",
  storageBucket: "covizine-8294d.appspot.com",
  messagingSenderId: "945113592118",
  appId: "1:945113592118:web:52a956b23c8fc7ccb70397",
});

var db = firebaseApp.firestore();

export { db };
