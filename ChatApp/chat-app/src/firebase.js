import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAE7EblPowvRuxcHTdHX7HGAWlVVVQX0zg",
  authDomain: "chat-app-a3584.firebaseapp.com",
  databaseURL: "https://chat-app-a3584.firebaseio.com",
  projectId: "chat-app-a3584",
  storageBucket: "chat-app-a3584.appspot.com",
  messagingSenderId: "518568469141",
  appId: "1:518568469141:web:7663c1e2a2686b2568719c",
  measurementId: "G-6XS4EL80EN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
