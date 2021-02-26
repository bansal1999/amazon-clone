// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3PYaYHYtYrE2rFu_h1H6H5ghR5TiMSJ8",
    authDomain: "clone-69d96.firebaseapp.com",
    projectId: "clone-69d96",
    storageBucket: "clone-69d96.appspot.com",
    messagingSenderId: "73476938685",
    appId: "1:73476938685:web:bf55c563349316ec7590d4",
    measurementId: "G-K3JQJ04E3P"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth} ;