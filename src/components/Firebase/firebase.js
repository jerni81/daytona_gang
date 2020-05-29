import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBS_Sq6wPNPx8iePIWcqjGdyX2uiZiAnko",
  authDomain: "daytona-gang.firebaseapp.com",
  databaseURL: "https://daytona-gang.firebaseio.com",
  projectId: "daytona-gang",
  storageBucket: "daytona-gang.appspot.com",
  messagingSenderId: "263582169379",
  appId: "1:263582169379:web:19d897dc6d07127ef8b496",
  measurementId: "G-TP9Y25LP53",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();

    const database = firebase.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
