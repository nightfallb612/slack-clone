import firebase from "firebase";
 
const firebaseConfig = {
    apiKey: "AIzaSyBDtQdSbI9_-6yb18pOXLABzZQLrrff7QY",
    authDomain: "slack-clone-f1470.firebaseapp.com",
    projectId: "slack-clone-f1470",
    storageBucket: "slack-clone-f1470.appspot.com",
    messagingSenderId: "981594385064",
    appId: "1:981594385064:web:e3b12d3f175ef1a29ff09d",
    measurementId: "G-N9CNSVP7EH"
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 
  export { auth, provider };
  export default db;