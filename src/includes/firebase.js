import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD3uzwlsiKgMTXX1x4L8GA_Cc9cSpMfNoo',
  authDomain: 'music-6dd60.firebaseapp.com',
  projectId: 'music-6dd60',
  storageBucket: 'music-6dd60.appspot.com',
  messagingSenderId: '806121809061',
  appId: '1:806121809061:web:8a571ad7b6b7713726594c',
  measurementId: 'G-BLNZZDC9B0'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const storage = firebase.storage()

const usersCollection = db.collection('users')

const songsCollection = db.collection('songs')

export { auth, db, usersCollection, storage, songsCollection }
