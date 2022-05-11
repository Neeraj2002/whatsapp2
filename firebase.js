import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAeHV3JDk3-LJrSeYnnnVp-Gxv6zXIbsbY",
    authDomain: "whatsapp2-986f0.firebaseapp.com",
    projectId: "whatsapp2-986f0",
    storageBucket: "whatsapp2-986f0.appspot.com",
    messagingSenderId: "80734892107",
    appId: "1:80734892107:web:f1926ae62367472a4eddce"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{db, auth, provider};