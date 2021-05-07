import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const  firebaseConfig = {
    apiKey: "AIzaSyDquR29Wkn-8v_SS5AXic2Smgzvsokb1xs",
    authDomain: "react-firebasemp.firebaseapp.com",
    projectId: "react-firebasemp",
    storageBucket: "react-firebasemp.appspot.com",
    messagingSenderId: "417271931906",
    appId: "1:417271931906:web:a473592d9da937e3eb331b"
  };
  
firebase.initializeApp(firebaseConfig);
// base de datos
const db = firebase.firestore();

// para hacer autenticacion con google 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}