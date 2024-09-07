// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3rJgG3rjEI4CP8rsONLjMrFALmOZnyzI",
    authDomain: "torneoscracken-1aa74.firebaseapp.com",
    projectId: "torneoscracken-1aa74",
    storageBucket: "torneoscracken-1aa74.appspot.com",
    messagingSenderId: "91724917223",
    appId: "1:91724917223:web:8640ca4926e7bdc83a7542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);