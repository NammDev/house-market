import { getFileStore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC9oGVAaEaV51f91gEZ94XK7KkM5JR7hi4',
  authDomain: 'house-marketplace-react-46a7d.firebaseapp.com',
  projectId: 'house-marketplace-react-46a7d',
  storageBucket: 'house-marketplace-react-46a7d.appspot.com',
  messagingSenderId: '772597926101',
  appId: '1:772597926101:web:c72751fd2ddf6bd2ab7a5c',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFileStore()
