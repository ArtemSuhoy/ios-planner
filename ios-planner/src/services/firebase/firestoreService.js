import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  query,
  getDoc,
  getDocs,
  orderBy,
  limit,
  where,
  deleteDoc,
} from "firebase/firestore"

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

initializeApp(firebaseConfig)

const db = getFirestore()

const createDocument = async (collectionPath, id, documentData) => {
  const ref = doc(db, collectionPath, id)
  const result = await setDoc(ref, documentData)
  return result
}

const updateDocument = async (collectionPath, id, documentData) => {
  const ref = doc(db, collectionPath, id)
  const result = await updateDoc(ref, documentData)
  return result
}

const getDocument = async (collectionPath, id) => {
  const ref = doc(db, collectionPath, id)
  const docSnapshot = await getDoc(ref)
  return docSnapshot.data()
}

const getTimestamp = () => serverTimestamp()

const getId = collectionPath => {
  const ref = doc(collection(db, collectionPath))
  return ref.id
}

const deleteDocument = async (collectionPath, id) => {
  const result = await deleteDoc(doc(db, collectionPath, id))
  return result
}

const queryDocuments = async (
  collectionPath,
  queries,
  orderByRule,
  limitRule
) => {
  const ref = collection(db, collectionPath)
  const queriesExtended = queries && queries.map(q => where(...q))
  orderByRule && queriesExtended.push(orderBy(...orderByRule))
  limitRule && queriesExtended.push(limit(limitRule))
  const q = queriesExtended ? query(ref, ...queriesExtended) : query(ref)
  const querySnapshot = await getDocs(q)
  let result = []
  querySnapshot.forEach(doc => {
    result.push(doc.data())
  })
  return result
}

const firestoreService = {
  createDocument,
  updateDocument,
  getDocument,
  queryDocuments,
  deleteDocument,
  getTimestamp,
  getId,
}

export default firestoreService
