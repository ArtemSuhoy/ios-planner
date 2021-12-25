// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaer_nFLmogZF0JQ6dyEMaiKx-e7_xVMI",
  authDomain: "ios-planner-8eac3.firebaseapp.com",
  projectId: "ios-planner-8eac3",
  storageBucket: "ios-planner-8eac3.appspot.com",
  messagingSenderId: "196295363136",
  appId: "1:196295363136:web:cb3627ac95fc4570f0ada5",
  measurementId: "G-X3H5CVZN84",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
