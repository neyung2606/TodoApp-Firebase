import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA-WCbkN7kY5Q2kCRh9mS4HlNmrlx0VF9k",
  authDomain: "todoapp-1d1b8.firebaseapp.com",
  projectId: "todoapp-1d1b8",
  storageBucket: "todoapp-1d1b8.appspot.com",
  messagingSenderId: "450111915774",
  appId: "1:450111915774:web:c69d1ad86d0266d9c607af",
  measurementId: "G-24SZKGK735",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const db = firebase.firestore();
