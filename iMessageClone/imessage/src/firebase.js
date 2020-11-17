import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDe9fE8BJ2He9KX4b4q58DuLtHfQH5_G0",
  authDomain: "imessageclone-55f15.firebaseapp.com",
  databaseURL: "https://imessageclone-55f15.firebaseio.com",
  projectId: "imessageclone-55f15",
  storageBucket: "imessageclone-55f15.appspot.com",
  messagingSenderId: "934345623011",
  appId: "1:934345623011:web:10488582ea484f02754cd6",
  measurementId: "G-9M15SYGFZZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
