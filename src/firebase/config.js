import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtWnrO3jeVnid7QMdy9GGoE995AdnpLoo",
  authDomain: "photo-gallery-81903.firebaseapp.com",
  projectId: "photo-gallery-81903",
  storageBucket: "photo-gallery-81903.appspot.com",
  messagingSenderId: "563942929699",
  appId: "1:563942929699:web:1060014a5ebd91b510c896"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };