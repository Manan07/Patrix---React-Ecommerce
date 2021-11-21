import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDCpMyL0M3tw8PAd1JnRAZLu2JnvML6gmU",
  authDomain: "crwn-clothing-1e6f5.firebaseapp.com",
  projectId: "crwn-clothing-1e6f5",
  storageBucket: "crwn-clothing-1e6f5.appspot.com",
  messagingSenderId: "178242894788",
  appId: "1:178242894788:web:268c931780d1daf7620291",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
