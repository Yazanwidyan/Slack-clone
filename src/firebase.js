import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD97WxaC9hSkIppcKwtrqm4dELIwj7-G5E",
  authDomain: "slack-clone-29ebc.firebaseapp.com",
  databaseURL: "https://slack-clone-29ebc.firebaseio.com",
  projectId: "slack-clone-29ebc",
  storageBucket: "slack-clone-29ebc.appspot.com",
  messagingSenderId: "1074922176685",
  appId: "1:1074922176685:web:a66cc018108761bc128624",
  measurementId: "G-6L6Q87K6P9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
