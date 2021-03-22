import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBqQRS8GaaRalAqeY3_-BLptJKi6GPMeig",
  authDomain: "abdirahman-react.firebaseapp.com",
  projectId: "abdirahman-react",
  storageBucket: "abdirahman-react.appspot.com",
  messagingSenderId: "302817357703",
  appId: "1:302817357703:web:c5fdb45101a831a6d36d22",
  measurementId: "G-RTLCMTBJJH"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
