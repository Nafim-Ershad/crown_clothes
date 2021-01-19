import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBCfagMWoAeZEFZnpcS7LM_6XxyYBQVNfA",
    authDomain: "crwndb-8c6d9.firebaseapp.com",
    projectId: "crwndb-8c6d9",
    storageBucket: "crwndb-8c6d9.appspot.com",
    messagingSenderId: "705883689813",
    appId: "1:705883689813:web:24ae8f88003a98e99a95dc",
    measurementId: "G-7GKP7YKJ79"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // Authentication
export const firestore = firebase.firestore(); // Database

const provider = new firebase.auth.GoogleAuthProvider(); // Provides a google authentication class from auth module from firebase
// Could also use auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: "select_account" }); // Propmts for google account verification

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;