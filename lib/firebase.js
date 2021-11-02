import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD-cDqXPYCNuF57b3k0oLv2ncCwB0a1SW4",
  authDomain: "nextfire-8dbf7.firebaseapp.com",
  projectId: "nextfire-8dbf7",
  storageBucket: "nextfire-8dbf7.appspot.com",
  messagingSenderId: "839086325599",
  appId: "1:839086325599:web:457709695d27a4831000ea",
  measurementId: "G-YRVJ1PYWEY",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
