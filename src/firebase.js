import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNkqkitb_cuKjNMZyamwTZ2GnxKq2fJHo",
  authDomain: "facebook-messenger-clone-947c4.firebaseapp.com",
  projectId: "facebook-messenger-clone-947c4",
  storageBucket: "facebook-messenger-clone-947c4.appspot.com",
  messagingSenderId: "750186665878",
  appId: "1:750186665878:web:3961b1b16da8d90fe4afb7",
  measurementId: "G-FXJ5P3F0G7"
});

  const db = firebaseApp.firestore();

export default db;