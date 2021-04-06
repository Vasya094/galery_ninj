import  firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBXykbkTNX0TBUdVkv9SNWxVDl8yZctsXg",
  authDomain: "gram-fire.firebaseapp.com",
  projectId: "gram-fire",
  storageBucket: "gram-fire.appspot.com",
  messagingSenderId: "63650119797",
  appId: "1:63650119797:web:63eee139db693e147cf83c"
};
// Initialize Firebase
firebase.initializeApp( firebaseConfig );

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectStorage, projectFirestore,timestamp}