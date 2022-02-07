import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "khaja-s-todo.firebaseapp.com",
    projectId: "khaja-s-todo",
    storageBucket: "khaja-s-todo.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESS_ID,
    appId: process.env.REACT_APP_APP_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db =  firebaseApp.firestore();

export { db };