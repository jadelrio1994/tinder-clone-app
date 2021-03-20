import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkSfXm_aR7vCk4SjvRAFQqop6xvaQxqMM",
  authDomain: "tinder-clone-app-94f47.firebaseapp.com",
  projectId: "tinder-clone-app-94f47",
  storageBucket: "tinder-clone-app-94f47.appspot.com",
  messagingSenderId: "553884702097",
  appId: "1:553884702097:web:4fa8e8f310083a18ca7630",
  measurementId: "G-LZGWESRYPG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
