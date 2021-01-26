import firebase from "firebase/app";

// Importing different modules of firebase
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



firebase.initializeApp(firebaseConfig); // Initialized the firebase

// Firestore Database function
// **********************************************
const firestore = firebase.firestore();

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get(); // gets the information from firestore asyncronously

    // console.log("SnapShot:", snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date(); // new keyword is used for creating an object/class variable

        try {
            await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }) // Creates new object/data in database of firestore
        } catch (error) {
            console.log("error Creating User: ", error.message);
        }
    }

    return userRef;
}

// **********************************************

// Custom Email Auth



// Firebase Google Authentication
// **********************************************

export const auth = firebase.auth(); // Authentication

const provider = new firebase.auth.GoogleAuthProvider(); // Provides a google authentication class object from auth module from firebase
// Could also use auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: "select_account" }); // Propmts for google account verification
// prompt : select_account => prompts for account selection
// prompt: consent => Asks for consent of account usage

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// **********************************************