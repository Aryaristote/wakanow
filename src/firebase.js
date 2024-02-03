import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC70wnLIZPzrQ4s4ecaAc3aDTglIOGp1V8",
    authDomain: "wakanow-bab98.firebaseapp.com",
    projectId: "wakanow-bab98",
    storageBucket: "wakanow-bab98.appspot.com",
    messagingSenderId: "55084871052",
    appId: "1:55084871052:web:37ec72b8e63c1fe5e53aa9",
    measurementId: "G-QWEGZV7F7C"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
