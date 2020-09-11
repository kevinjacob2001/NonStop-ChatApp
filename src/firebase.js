import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAQ8TgrcydHOiO-DBkicLKZ1csqdbQew7c",
    authDomain: "non-stop-kevinjacob2001.firebaseapp.com",
    databaseURL: "https://non-stop-kevinjacob2001.firebaseio.com",
    projectId: "non-stop-kevinjacob2001",
    storageBucket: "non-stop-kevinjacob2001.appspot.com",
    messagingSenderId: "760671925254",
    appId: "1:760671925254:web:d51c00122fcf9dfda37f87",
    measurementId: "G-EHHCDNTQXT"
  });

  const db=firebaseApp.firestore();
  export {db};